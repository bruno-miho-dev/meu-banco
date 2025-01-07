import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Usando o useEffect para definir o usuário padrão no localStorage
  useEffect(() => {
    const defaultUser = {
      username: 'admin',
      password: 'admin123',
    };
    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', JSON.stringify(defaultUser));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      // Salva o usuário logado no localStorage
      localStorage.setItem('user', JSON.stringify({ username }));
      navigate('/dashboard');
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Lado esquerdo: Imagem de fundo e logo */}
      <div
        className="w-[800px] 2xl:w-[50%] h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/portrait-woman-holding-card.png')",
        }}
      >
        <div className="flex justify-start p-8">
          <img
            src="/images/logo-meu-banco.png"
            alt="Logo MeuBanco"
            className="w-200"
          />
        </div>
      </div>

      {/* Lado direito: Formulário de login */}
      <div className="w-[640px] 2xl:w-[50%] h-screen flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-[48px] font-bold text-[#484848]">
            Bem-vindo <span className="text-[#1BC681]">:) </span>
          </h1>
          <p className="text-[24px] font-light text-[#484848] mb-6">
            Entre na sua conta
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm text-gray-700">
                Usuário
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-700">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                Lembrar dispositivo
              </label>
              <a
                href="/forgot-password"
                className="text-sm text-[#43B7FF] hover:underline"
              >
                Esqueceu sua senha?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#1BC681] text-white font-semibold rounded hover:bg-[#1a9e63] transition"
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[24px] text-gray-600">
              <span className="font-light">Não tem conta? </span>
              <a
                href="/register"
                className="font-semibold text-[#1BC681] hover:underline"
              >
                Faça uma agora.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
