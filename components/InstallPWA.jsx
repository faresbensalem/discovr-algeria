"use client";

import { useState, useEffect } from "react";
import { IoDownload } from "react-icons/io5";

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // Écouter l'événement beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      // Empêcher Chrome 67 et versions antérieures d'afficher automatiquement la boîte de dialogue
      e.preventDefault();
      // Stocker l'événement pour qu'il puisse être déclenché plus tard
      setDeferredPrompt(e);
      // Afficher le bouton d'installation
      setShowInstallButton(true);
    };

    // Écouter l'événement appinstalled
    const handleAppInstalled = () => {
      console.log("PWA was installed");
      setShowInstallButton(false);
      setDeferredPrompt(null);
    };

    // Vérifier si l'app est déjà installée
    const checkIfInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches || 
          window.navigator.standalone === true) {
        setShowInstallButton(false);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    
    // Vérifier au chargement
    checkIfInstalled();

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // En mode développement, afficher un message informatif
      if (process.env.NODE_ENV === 'development') {
        alert('En mode développement : Le bouton d\'installation PWA fonctionne !\n\nEn production, ce bouton permettra d\'installer l\'application.');
      }
      return;
    }

    // Afficher la boîte de dialogue d'installation
    deferredPrompt.prompt();

    // Attendre que l'utilisateur réponde à la boîte de dialogue
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Nettoyer
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  // En mode développement, toujours afficher le bouton pour les tests
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Ne pas afficher le bouton si l'app est déjà installée ou si l'événement n'est pas disponible
  // Sauf en mode développement pour les tests
  if (!showInstallButton && !isDevelopment) {
    return null;
  }

  return (
    <button
      onClick={handleInstallClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 text-sm font-medium ${
        isDevelopment 
          ? 'bg-green-600 hover:bg-green-700 text-white' 
          : 'bg-blue-600 hover:bg-blue-700 text-white'
      }`}
      title={isDevelopment ? "Mode test - Installer l'application" : "Installer l'application"}
      aria-label="Installer l'application sur votre appareil"
    >
      <IoDownload className="text-lg" />
      <span className="hidden sm:inline">
        {isDevelopment ? 'Test Install' : 'Installer'}
      </span>
    </button>
  );
}
