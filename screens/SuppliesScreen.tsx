import React from 'react';

const SuppliesScreen: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">inventory_2</span>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Gestão de Suprimentos</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center rounded-full w-10 h-10 hover:bg-slate-200 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">notifications</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Search Section */}
      <div className="px-4 py-3 sticky top-[60px] z-30 bg-background-light dark:bg-background-dark">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
            <div className="text-[#9dabb9] flex border-none bg-white dark:bg-[#1c2127] items-center justify-center pl-4 rounded-l-xl">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-[#1c2127] h-full placeholder:text-slate-400 dark:placeholder:text-[#9dabb9] px-4 pl-2 text-base font-normal leading-normal" placeholder="Buscar pedidos ou obras..." />
            <div className="flex items-center bg-white dark:bg-[#1c2127] pr-2 rounded-r-xl">
              <button className="p-2 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>
          </div>
        </label>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar">
        <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4">
          <p className="text-sm font-semibold">Todos</p>
        </div>
        <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800 px-4">
          <p className="text-slate-600 dark:text-white text-sm font-medium">Pendente</p>
        </div>
        <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800 px-4">
          <p className="text-slate-600 dark:text-white text-sm font-medium">Cotação</p>
        </div>
        <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800 px-4">
          <p className="text-slate-600 dark:text-white text-sm font-medium">Aprovado</p>
        </div>
        <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800 px-4">
          <p className="text-slate-600 dark:text-white text-sm font-medium">Entregue</p>
        </div>
      </div>

      {/* Order List */}
      <div className="flex flex-col gap-4 p-4 pb-4">
        {/* Card 1: Pendente */}
        <div className="flex flex-col rounded-xl overflow-hidden shadow-sm bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800">
          <div className="w-full h-32 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAW0jh1LLsyv_76uPuwqwcImm8BEGHBF3QNARX1Jo5oYkRtmQjOa7vuhTor1L_dev73MVfMWa4a1b2T7Fm7emmkfH9C20HAaXdlcaR4e_9M_BchKj5IOVUsFsy5-zLYPIgszH0SZ-bdcICCqWsysVxPBmHMdLqLLiPohI5GI0eaGddg6esFp4b6SFJV_hfoVOLOd-6JilSxcZIYP5irMPW19Lx5NWBZmFiPK-5GrIuq0cZprTwiX2yTaDaYS2T1LYYwQSwEy5QfYgc")' }}></div>
          <div className="flex flex-col gap-1 p-4">
            <div className="flex justify-between items-start">
              <p className="text-white bg-orange-500/80 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Pendente</p>
              <p className="text-primary text-xs font-bold">#10293</p>
            </div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mt-1">Edifício Horizonte</h3>
            <div className="flex flex-col gap-1 mt-2">
              <div className="flex items-center gap-2 text-slate-500 dark:text-[#9dabb9]">
                <span className="material-symbols-outlined text-sm">storefront</span>
                <p className="text-sm font-normal">ABC Materiais</p>
              </div>
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-slate-400 dark:text-[#9dabb9] text-xs">Total do Pedido</span>
                <p className="text-slate-900 dark:text-white text-lg font-bold">R$ 15.400,00</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 2: Em Cotação */}
        <div className="flex flex-col rounded-xl overflow-hidden shadow-sm bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800">
          <div className="w-full h-32 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIIGOIsX-bIwqG8lTw_4ZCbcV5Nh4FLUkhkcNjRdOLFgrFT8pt96Po5I6Mlh-gTdJPp4LtCOCmlENp7NnOUJGirz1aLLlArW7jyNg0bZ-cw5MyiCwpmC5g8roY1SjsLKnOyPd0GNFa4Ieu4G1B1JTb2-hbycf0BZ_BhQlCYfZTwmkK1iRE5UzXVRrV87F_pJsR7uS-5tPiJBCqX3Sx8lLtrzyEIo1C1ZuLDqwN15NMiJ-KnENE4wtBkvZe_kKa1gZyEwb8X5kYDyM")' }}></div>
          <div className="flex flex-col gap-1 p-4">
            <div className="flex justify-between items-start">
              <p className="text-white bg-primary/80 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Em Cotação</p>
              <p className="text-primary text-xs font-bold">#10294</p>
            </div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mt-1">Residencial Aurora</h3>
            <div className="flex flex-col gap-1 mt-2">
              <div className="flex items-center gap-2 text-slate-500 dark:text-[#9dabb9]">
                <span className="material-symbols-outlined text-sm">storefront</span>
                <p className="text-sm font-normal">Metalúrgica Silva</p>
              </div>
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-slate-400 dark:text-[#9dabb9] text-xs">Total do Pedido</span>
                <p className="text-slate-900 dark:text-white text-lg font-bold">R$ 8.900,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-40">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};

export default SuppliesScreen;