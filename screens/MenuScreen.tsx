import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuScreen: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Mais</h1>
          <div className="text-primary material-symbols-outlined text-3xl">settings</div>
        </div>
      </header>
      
      <main className="pb-4">
        {/* Profile Header Section */}
        <section className="px-4 py-4">
          <div className="flex items-center gap-4 bg-white dark:bg-[#1c2632] p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="relative">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 border-2 border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsejpcV6imNSvXtr15jNkfPAy6gLdFWgL5D3_tnLWSVtGhsblZMUeDn8peKWXdMbaRcmP9LDD9y_y6DBJ4XWISm3-A56b2UhWKtYv01Nw_cEyYN5PVuNbZG37O72cHIpsrN8oCrh0qGp87Pe4Z85RVkvvuno7St415hqYRABjlhuCyLeoCPJLAS5NQHwEzOXC3VThUm4ZmBXJM0UqyKoffdcvS1kLg3GUz_wYH8MjLMttnzDZKjJ8bkCEPKqp6SbUlOYzkt4E3dxo")' }}>
              </div>
              <div className="absolute bottom-0 right-0 bg-green-500 h-4 w-4 rounded-full border-2 border-white dark:border-zinc-900"></div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold leading-tight">Eng. Ricardo Silva</h2>
              <p className="text-[#9e7b47] dark:text-primary/70 text-sm font-medium">Gestor de Obras</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs">Unidade São Paulo - Matriz</p>
            </div>
          </div>
        </section>

        {/* Administrative Section */}
        <section className="mt-4">
          <h3 className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider px-6 mb-2">Administrativo</h3>
          <div className="bg-white dark:bg-[#1c2632] border-y border-zinc-100 dark:border-slate-800">
            {/* Item 1 */}
            <button className="w-full flex items-center gap-4 px-4 min-h-[56px] hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
              <div className="flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 size-10">
                <span className="material-symbols-outlined text-2xl">domain</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-base font-medium">Dados da Construtora</p>
                <p className="text-zinc-400 text-xs">CNPJ, Razão Social e Logo</p>
              </div>
              <span className="material-symbols-outlined text-zinc-300">chevron_right</span>
            </button>
            <div className="h-px bg-zinc-100 dark:bg-slate-800 ml-16"></div>
            
            {/* Item 2 */}
            <button className="w-full flex items-center gap-4 px-4 min-h-[56px] hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
              <div className="flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 shrink-0 size-10">
                <span className="material-symbols-outlined text-2xl">group</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-base font-medium">Gestão de Equipe</p>
                <p className="text-zinc-400 text-xs">Permissões e Acessos</p>
              </div>
              <span className="material-symbols-outlined text-zinc-300">chevron_right</span>
            </button>
            <div className="h-px bg-zinc-100 dark:bg-slate-800 ml-16"></div>

            {/* Item 3 */}
            <button className="w-full flex items-center gap-4 px-4 min-h-[56px] hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
              <div className="flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 shrink-0 size-10">
                <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-base font-medium">Centro de Custo</p>
                <p className="text-zinc-400 text-xs">Categorias e Classificações</p>
              </div>
              <span className="material-symbols-outlined text-zinc-300">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Support Section */}
        <section className="mt-8">
          <h3 className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider px-6 mb-2">Ajuda</h3>
          <div className="bg-white dark:bg-[#1c2632] border-y border-zinc-100 dark:border-slate-800">
            <button className="w-full flex items-center gap-4 px-4 min-h-[56px] hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
              <div className="flex items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 shrink-0 size-10">
                <span className="material-symbols-outlined text-2xl">contact_support</span>
              </div>
              <div className="flex-1 text-left text-base font-medium">Ajuda e Suporte</div>
              <span className="material-symbols-outlined text-zinc-300">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Exit Section */}
        <section className="mt-8">
          <div className="bg-white dark:bg-[#1c2632] border-y border-zinc-100 dark:border-slate-800">
            <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 min-h-[56px] hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
              <div className="flex items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 shrink-0 size-10">
                <span className="material-symbols-outlined text-2xl">logout</span>
              </div>
              <div className="flex-1 text-left text-base font-medium text-red-600 dark:text-red-400">Sair da Conta</div>
            </button>
          </div>
          <p className="text-center text-zinc-400 text-[10px] mt-4 uppercase tracking-[2px]">Versão 2.4.12 - Build 2024</p>
        </section>
      </main>
    </div>
  );
};

export default MenuScreen;