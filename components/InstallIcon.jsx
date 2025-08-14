'use client';
 
import { useState, useEffect } from 'react';
import { MdOutlineInstallDesktop } from 'react-icons/md';
import { useMyContext } from '@/provider/MyContextProvider';
 
export default function InstallIcon() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const { theme } = useMyContext();
 
//push pour mise a jour de vercel
//modification pour test
 
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);
 
  const handleClick = async () => {
    if (installPrompt) {
      installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === 'accepted') {
        setInstallPrompt(null);
      }
    }
  };
 
  if (!installPrompt) return null;
 
  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="relative cursor-pointer"
    >
      <MdOutlineInstallDesktop
        size={24}
        className={`transition-colors duration-300 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}
      />
      {showTooltip && (
        <div className="absolute bottom-full left-0 ml-[-150px] mb-2 px-3 py-0.5 text-sm rounded bg-black text-white shadow-lg z-50 opacity-0 animate-fade-in whitespace-nowrap">
          Cliquez pour installer&nbsp;!
        </div>
 
      )}
    </div>
  );
}