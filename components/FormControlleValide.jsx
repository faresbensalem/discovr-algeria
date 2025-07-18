'use client';

import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useMyContext } from "@/Provider/MyContextProvider";

export default function FormHook() {
  const [resultMessage, setResultMessage] = useState('');
  const [success, setSuccess] = useState(null);
  const { theme } = useMyContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      name: data.nom,
      subject: data.objet,
      email: data.courriel,
      message: data.message,
    };

    emailjs.send(
      'service_9mz23yl',
      'template_0l2yc6b',
      templateParams,
      'yNtMcyo-OBJjTU4kS'
    ).then(
      () => {
        setResultMessage("✅ Message envoyé avec succès !");
        setSuccess(true);
        reset();
      },
      () => {
        setResultMessage("❌ Échec de l'envoi du message. Veuillez réessayer.");
        setSuccess(false);
      }
    );
  };

  // Classes dynamiques selon le thème
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900";
  const borderColor = theme === "light" ? "border-gray-200" : "border-gray-700";
  const inputBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const inputText = theme === "light" ? "text-black" : "text-gray-100";
  const labelText = theme === "light" ? "text-gray-800" : "text-gray-200";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`max-w-lg mx-auto mt-10 p-6 border rounded-xl shadow-sm flex flex-col gap-4 ${bgColor} ${borderColor}`}
    >
      {/* Champ nom */}
      <div>
        <label className={`block font-medium mb-1 ${labelText}`}>
          Nom:
          <input
            type="text"
            {...register('nom', {
              required: 'Le nom est obligatoire',
              minLength: { value: 2, message: 'Min. 2 caractères' }
            })}
            placeholder="Votre nom"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${inputBg} ${inputText} ${borderColor}`}
          />
        </label>
        {errors.nom && <p className="text-red-600 text-sm">{errors.nom.message}</p>}
      </div>

      {/* Champ courriel */}
      <div>
        <label className={`block font-medium mb-1 ${labelText}`}>
          Courriel:
          <input
            type="email"
            {...register('courriel', {
              required: 'Le courriel est obligatoire',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Format de courriel invalide'
              }
            })}
            placeholder="exemple@email.com"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${inputBg} ${inputText} ${borderColor}`}
          />
        </label>
        {errors.courriel && <p className="text-red-600 text-sm">{errors.courriel.message}</p>}
      </div>

      {/* Champ objet */}
      <div>
        <label className={`block font-medium mb-1 ${labelText}`}>
          Objet:
          <input
            type="text"
            {...register('objet', {
              required: 'L’objet est obligatoire'
            })}
            placeholder="Sujet de votre message"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${inputBg} ${inputText} ${borderColor}`}
          />
        </label>
        {errors.objet && <p className="text-red-600 text-sm">{errors.objet.message}</p>}
      </div>

      {/* Champ message */}
      <div>
        <label className={`block font-medium mb-1 ${labelText}`}>
          Message:
          <textarea
            {...register('message', {
              required: 'Le message est obligatoire'
            })}
            rows="4"
            placeholder="Votre message ici..."
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none ${inputBg} ${inputText} ${borderColor}`}
          />
        </label>
        {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
      </div>

      {/* Bouton d'envoi */}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Envoyer
      </button>

      {/* Message de retour */}
      {resultMessage && (
        <div className={`mt-3 text-sm font-medium ${success ? 'text-green-600' : 'text-red-600'}`}>
          {resultMessage}
        </div>
      )}
    </form>
  );
}