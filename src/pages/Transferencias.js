import React from 'react';
import Sidebar from '../components/Sidebar';

const Transferencias = () => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="ml-[280px] w-full overflow-y-auto p-8 bg-[#1BC681]">
      <div className="flex justify-between items-center mb-12">
        {/* Barra de busca */}
        <div className="w-[240px]">
          <div className="flex items-center border border-white rounded-lg px-4 py-2 bg-transparent">
            {/* Ícone de lupa */}
            <div className="flex items-center justify-center w-4 h-4 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM12 12l4 4"
                />
              </svg>
            </div>

            {/* Input de busca */}
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full bg-transparent border-none outline-none placeholder-white text-white ml-4"
            />
          </div>
        </div>
        {/* Informações do usuário e notificações */}
        <div className="flex items-center space-x-6">
          {/* Ícone de notificação */}
          <div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v4h2v-4z" />
            </svg>
          </div>

          {/* Ícone de usuário */}
          <div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c1.1 0 1.99.9 1.99 2 0 1.1-.9 2-2 2s-2-.9-2-2c0-1.1.9-2 2-2zm-4 9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H8z" />
            </svg>
          </div>

          {/* Nome do usuário */}
          <div className="text-white">
            Bem-vindo, <span className="font-semibold">Tide Cardoso</span>
          </div>
        </div>
      </div>

      {/* Área em branco (onde você pode colocar outro conteúdo, como gráficos, resumos, etc.) */}
      <div className="w-full h-[720px] bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
        <span className="text-gray-600 text-lg">
          Placeholder de navegação Trasferencias
        </span>
      </div>
    </div>
  </div>
);

export default Transferencias;
