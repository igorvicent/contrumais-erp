import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <div className="flex flex-col w-full max-w-[480px] mx-auto min-h-screen">
        {/* Top Bar */}
        <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
          <div className="text-[#0d121b] dark:text-white flex size-12 shrink-0 items-center justify-start">
            {/* Placeholder for back if needed */}
          </div>
          <h2 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Login</h2>
        </div>

        <div className="flex-1 px-6 pt-4 pb-10 flex flex-col justify-center">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-5xl">foundation</span>
            </div>
            <h1 className="text-[#0d121b] dark:text-white tracking-tight text-[28px] font-extrabold leading-tight text-center">
              Bem-vindo ao GestãoPro
            </h1>
            <p className="text-[#4c669a] dark:text-gray-400 text-center mt-2 font-medium">
              Acesse sua conta para gerenciar suas obras.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col w-full">
              <label className="flex flex-col w-full">
                <p className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold leading-normal pb-2">E-mail</p>
                <input 
                  className="w-full rounded-lg text-[#0d121b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfd7e7] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 placeholder:text-[#4c669a] p-[15px] text-base font-normal" 
                  placeholder="exemplo@empresa.com.br" 
                  type="email"
                  defaultValue="admin@gestaopro.com"
                />
              </label>
            </div>

            <div className="flex flex-col w-full">
              <label className="flex flex-col w-full">
                <p className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold leading-normal pb-2">Senha</p>
                <div className="flex w-full items-stretch rounded-lg relative">
                  <input 
                    className="w-full rounded-lg text-[#0d121b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfd7e7] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 placeholder:text-[#4c669a] p-[15px] pr-12 text-base font-normal" 
                    placeholder="••••••••" 
                    type="password"
                    defaultValue="password"
                  />
                  <div className="absolute right-0 top-0 h-full flex items-center pr-[15px] text-[#4c669a]">
                    <span className="material-symbols-outlined cursor-pointer select-none">visibility</span>
                  </div>
                </div>
              </label>
              <div className="flex justify-end mt-2">
                <a className="text-primary text-sm font-bold hover:underline" href="#">Esqueci minha senha</a>
              </div>
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-md transition-colors mt-4 active:scale-[0.98]">
              Entrar
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#cfd7e7] dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-background-light dark:bg-background-dark text-[#4c669a] font-medium">Continuar com</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <button className="flex items-center justify-center gap-2 border border-[#cfd7e7] dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl py-3 px-4 hover:bg-gray-50 transition-colors">
              <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArlp240zgNNd9mVbaRRPkPj8x_SIBPqkJazjPRKkKLC80F0o6XRkFaa2aQsbm0eBNOH8wRzYF3jj70fdPRyzMhaJcscQLGxakzNNeBVYeuDOAQ3b9Z7AnNi9x7b8gTzLnc0NwT53ee1ylaEMcoBnlAOjFLoQpV3XPf84yeOFCFpn_DLgvQrVvNkXkgUoLjvXbdrPRPMgo1f_lWTcndzbeE7m3mHE8fQvVZRfuYMyEtu5FEFF0e4dUTao5bRECqrVXq1E7yOS2bl6U"/>
              <span className="text-[#0d121b] dark:text-white text-sm font-bold">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 border border-[#cfd7e7] dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl py-3 px-4 hover:bg-gray-50 transition-colors">
              <span className="material-symbols-outlined text-[#0d121b] dark:text-white">ios</span>
              <span className="text-[#0d121b] dark:text-white text-sm font-bold">Apple</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-auto text-center">
            <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium">
              Não tem uma conta? 
              <a className="text-primary font-bold hover:underline ml-1" href="#">Cadastre-se</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;