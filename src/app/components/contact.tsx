import React from "react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact({ id }: { id?: string }) {
  return (
    <div id={id} className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Entre em Contato</h1>
        
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-indigo-600" />
            <span className="font-medium">(83) 98672-7276</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-indigo-600" />
            <a href="mailto:hagbytestudios@gmail.com" className="hover:underline">
              hagbytestudios@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaInstagram className="text-indigo-600" />
            <a
              href="https://instagram.com/hagbyte"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @hagbyte
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt className="text-indigo-600" />
            <span>Boa Vista - PB, Brasil</span>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Estamos sempre prontos para transformar ideias em soluções criativas. Fale com a gente!
        </p>
      </div>
    </div>
  );
}
