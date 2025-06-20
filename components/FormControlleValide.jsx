'use client';

import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function FormHook() {
  const [resultMessage, setResultMessage] = useState('');
  const [success, setSuccess] = useState(null); // null = pas encore envoyé

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      name: data.nom,
      subject: data.objet,
      email: data.courriel,
      message: data.message,
    };

    emailjs.send(
      'service_9mz23yl', // Ton service ID
      'template_0l2yc6b', // Ton template ID
      templateParams,
      'yNtMcyo-OBJjTU4kS' // Ton USER PUBLIC KEY
    ).then(
      (response) => {
        setResultMessage("✅ Message envoyé avec succès !");
        setSuccess(true);
        reset(); // Réinitialise le formulaire
      },
      (error) => {
        setResultMessage("❌ Échec de l'envoi du message. Veuillez réessayer.");
        setSuccess(false);
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto mt-10 p-6 border border-gray-200 rounded-xl shadow-sm bg-white flex flex-col gap-4"
    >
      {/* Champ nom */}
      <div>
        <label className="block font-medium mb-1">
          Nom:
          <input
            type="text"
            {...register('nom', {
              required: 'Le nom est obligatoire',
              minLength: { value: 2, message: 'Min. 2 caractères' }
            })}
            placeholder="Votre nom"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </label>
        {errors.nom && <p className="text-red-600 text-sm">{errors.nom.message}</p>}
      </div>

      {/* Champ courriel */}
      <div>
        <label className="block font-medium mb-1">
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
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </label>
        {errors.courriel && <p className="text-red-600 text-sm">{errors.courriel.message}</p>}
      </div>

      {/* Champ objet */}
      <div>
        <label className="block font-medium mb-1">
          Objet:
          <input
            type="text"
            {...register('objet', {
              required: 'L’objet est obligatoire'
            })}
            placeholder="Sujet de votre message"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </label>
        {errors.objet && <p className="text-red-600 text-sm">{errors.objet.message}</p>}
      </div>

      {/* Champ message */}
      <div>
        <label className="block font-medium mb-1">
          Message:
          <textarea
            {...register('message', {
              required: 'Le message est obligatoire'
            })}
            rows="4"
            placeholder="Votre message ici..."
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
