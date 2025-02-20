import React, { useState } from "react";

export default function Contact({ id }: { id?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    corporateEmail: "",
    phone: "",
    revenue: "",
    segment: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar o código para enviar os dados, por exemplo, para uma API
    console.log(formData);
  };

  return (
    <div id={id} className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Entre em Contato
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Seu nome completo"
              required
            />
          </div>
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700"
            >
              Nome da Empresa
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Nome da sua empresa"
              required
            />
          </div>
          <div>
            <label
              htmlFor="corporateEmail"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail Corporativo
            </label>
            <input
              type="email"
              id="corporateEmail"
              name="corporateEmail"
              value={formData.corporateEmail}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="seuemail@empresa.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="(DDD) 1234-5678"
              required
            />
          </div>
          <div>
            <label
              htmlFor="revenue"
              className="block text-sm font-medium text-gray-700"
            >
              Faturamento
            </label>
            <input
              type="text"
              id="revenue"
              name="revenue"
              value={formData.revenue}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Faturamento estimado"
            />
          </div>
          <div>
            <label
              htmlFor="segment"
              className="block text-sm font-medium text-gray-700"
            >
              Segmento
            </label>
            <input
              type="text"
              id="segment"
              name="segment"
              value={formData.segment}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Segmento de atuação"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Digite sua mensagem aqui"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

