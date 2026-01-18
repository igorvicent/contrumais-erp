import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActiveProjects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="text-[#1c160d] dark:text-white flex size-12 shrink-0 items-center justify-start">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </div>
          <h2 className="text-[#1c160d] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center font-display">Obras Ativas</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 bg-transparent text-[#1c160d] dark:text-white">
              <span className="material-symbols-outlined text-2xl">notifications</span>
            </button>
          </div>
        </div>
        {/* Search Bar */}
        <div className="px-4 py-2">
          <label className="flex flex-col min-w-40 h-11 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
              <div className="text-[#9e7b47] flex border-none bg-white dark:bg-[#32281a] items-center justify-center pl-4 rounded-l-xl">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-[#1c160d] dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-[#32281a] h-full placeholder:text-[#9e7b47] px-4 pl-2 text-base font-normal leading-normal" 
                placeholder="Buscar por nome ou localização" 
              />
            </div>
          </label>
        </div>
        {/* Filter Chips */}
        <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-4 shadow-sm">
            <p className="text-white text-sm font-semibold leading-normal">Todas</p>
            <span className="material-symbols-outlined text-white text-sm">expand_more</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#32281a] px-4 shadow-sm border border-black/5">
            <p className="text-[#1c160d] dark:text-white text-sm font-medium leading-normal">Em andamento</p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#32281a] px-4 shadow-sm border border-black/5">
            <p className="text-[#1c160d] dark:text-white text-sm font-medium leading-normal">Atrasadas</p>
          </button>
        </div>
      </div>

      <main className="px-4 flex flex-col gap-4 mt-2 pb-4">
        {/* Project Card 1 */}
        <div className="bg-white dark:bg-[#32281a] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-black/5">
          <div className="relative h-48 w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEoG9-lgBhMNvE3wutFP61hFNkRM6K82EA3hw_2sE-cwovkW_uZt46VFbGYc8wSOrInLSSa7asklIqxSGvrX23xvxeHtn2u3C_QH2qLvmoOK2b_fgwAlqC99Rz0NR9YVO01_Jntk1kuue9ISt2wEFY584WAaNbUdqcIrduMvb8c-JgQfW4KfdAUuEJbsFiCFB2F3vHzr3OhGDmV1zTSLFKqHrMA927fH2T4e9Zw-U-w3Rc6GbN3e_OPkscAexYl8DWKmab47Il-dQ")' }}>
            <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
              Prioridade Alta
            </div>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-primary text-[10px] font-bold leading-normal uppercase tracking-widest">Em Andamento</p>
                <h3 className="text-[#1c160d] dark:text-white text-xl font-bold leading-tight tracking-tight">Residencial Aurora</h3>
                <p className="text-[#9e7b47] text-sm font-medium leading-normal flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Vila Mariana, São Paulo - SP
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="flex items-center gap-1 text-red-500 font-bold text-sm bg-red-50 dark:bg-red-950/30 px-2 py-1 rounded-lg">
                  <span className="material-symbols-outlined text-sm fill-1">warning</span>
                  2
                </span>
                <p className="text-[10px] text-[#9e7b47] mt-1">pendências</p>
              </div>
            </div>
            {/* Progress Section */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p className="text-[#1c160d] dark:text-white text-sm font-semibold">Progresso Geral</p>
                <p className="text-primary text-sm font-bold">65%</p>
              </div>
              <div className="h-2 w-full bg-[#f4efe6] dark:bg-black/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <button onClick={() => navigate('/daily-report')} className="w-full bg-primary text-white py-3 rounded-lg font-bold text-sm mt-1 active:scale-95 transition-transform">
              Diário de Obra
            </button>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white dark:bg-[#32281a] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-black/5 opacity-90">
          <div className="relative h-48 w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkeqz9dC1pFSydvz2cwlmg3Og3w7dT_cZw_csR-1TnIAWHDjv_RXz51JlDAgOKy4Ch4MZ1SSxhD-i75RDiVQkUAoK6UuZbZ_C-Yqa33_M53IyE27rG2n5qdY6Dy4OKVppUg_iayTh2a1VE-FIe3GrA07UdsmUGmbR3v_hUKMqnl1OaFR5ZmeGx2Une4H4mXU2xroU1TpEzwYdDQWo9QJdAQxcAo81o5uLxd9pVJkCeXf468Rmc521SGoeoQmYEHA2Ok-ppY9XM6uk")' }}>
            <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
              Atrasada
            </div>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#9e7b47] text-[10px] font-bold leading-normal uppercase tracking-widest">Fundação</p>
                <h3 className="text-[#1c160d] dark:text-white text-xl font-bold leading-tight tracking-tight">Edifício Horizonte</h3>
                <p className="text-[#9e7b47] text-sm font-medium leading-normal flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Barra da Tijuca, Rio de Janeiro - RJ
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="flex items-center gap-1 text-red-500 font-bold text-sm bg-red-50 dark:bg-red-950/30 px-2 py-1 rounded-lg">
                  <span className="material-symbols-outlined text-sm fill-1">warning</span>
                  5
                </span>
                <p className="text-[10px] text-[#9e7b47] mt-1">pendências</p>
              </div>
            </div>
            {/* Progress Section */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p className="text-[#1c160d] dark:text-white text-sm font-semibold">Progresso Geral</p>
                <p className="text-primary text-sm font-bold">12%</p>
              </div>
              <div className="h-2 w-full bg-[#f4efe6] dark:bg-black/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '12%' }}></div>
              </div>
            </div>
            <button className="w-full bg-[#f4efe6] dark:bg-primary/20 text-[#1c160d] dark:text-white py-3 rounded-lg font-bold text-sm mt-1">
              Acessar Dashboard
            </button>
          </div>
        </div>
      </main>
      
      {/* FAB */}
      <button className="fixed right-6 bottom-24 size-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center z-40 active:scale-90 transition-transform">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};

export default ActiveProjects;