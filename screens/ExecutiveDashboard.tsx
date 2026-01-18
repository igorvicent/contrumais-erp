import React from 'react';

const ExecutiveDashboard: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <span className="material-symbols-outlined text-primary">analytics</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 px-3">Dashboard Executivo</h2>
          <div className="flex gap-2">
            <button className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-surface-dark text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeb1KpcIoSkZGtg-yLC4cBFkmktA4YFpzsYdCGL_xiNVUq733Z5jCm13FnEEFZm8B3jJaE2EILV78-ypeSnbs6Skdh90joAGA2UsqALoQWY-XTrhyTxpclx3zjVl-6dWdy8zMFXK_icL6iykBzKI_VKQ6zt-2s2IypFczM2JNt_1kLn5Ih8qNbXb2LdIMa6s1hqTp4QXTHnJjTE0nzCVoj3U1B-1bkgp0jRGSSzACwkMuZLDTGziWib1IbJYeMMozMyb9g1pS4atM')" }}></div>
          </div>
        </div>
      </header>

      <main className="pb-4">
        {/* Resumo Global Section */}
        <div className="px-4 pt-6 pb-2">
          <h3 className="text-lg font-extrabold tracking-tight">Resumo Global</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Visão geral consolidada • 24/05/2024</p>
        </div>

        {/* Horizontal KPI Cards */}
        <div className="flex overflow-x-auto gap-4 p-4 no-scrollbar">
          <div className="flex min-w-[260px] flex-col gap-3 rounded-xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Faturamento Total</p>
              <span className="material-symbols-outlined text-emerald-500">trending_up</span>
            </div>
            <p className="text-2xl font-bold leading-tight">R$ 1.234.567,89</p>
            <p className="text-emerald-500 text-sm font-bold">+5.2% <span className="font-normal text-slate-400 ml-1">vs mês ant.</span></p>
          </div>
          <div className="flex min-w-[200px] flex-1 flex-col gap-3 rounded-xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Saldo em Caixa</p>
              <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
            </div>
            <p className="text-2xl font-bold leading-tight text-primary">R$ 450.000,00</p>
            <p className="text-emerald-500 text-sm font-bold">+2.1%</p>
          </div>
          <div className="flex min-w-[160px] flex-1 flex-col gap-3 rounded-xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Obras Ativas</p>
              <span className="material-symbols-outlined text-amber-500">apartment</span>
            </div>
            <p className="text-2xl font-bold leading-tight">12</p>
            <p className="text-slate-400 text-sm font-medium">Estável</p>
          </div>
        </div>

        {/* Avanço Físico Section */}
        <div className="px-4 pt-6">
          <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-100 dark:border-slate-800">
            <h3 className="text-md font-bold mb-6">Avanço Físico Médio</h3>
            <div className="flex flex-col items-center justify-center py-4">
              <div className="relative flex items-center justify-center rounded-full size-48 circular-progress shadow-lg">
                <div className="absolute inset-4 rounded-full bg-white dark:bg-surface-dark flex flex-col items-center justify-center">
                  <span className="text-4xl font-extrabold">68%</span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Global</span>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8 w-full">
                <div className="text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Meta Acumulada</p>
                  <p className="text-lg font-bold text-primary">75%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Desvio Meta</p>
                  <p className="text-lg font-bold text-rose-500">-7%</p>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold w-24">Fundação</span>
                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '92%' }}></div>
                </div>
                <span className="text-xs font-bold text-slate-500">92%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold w-24">Estrutura</span>
                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '60%' }}></div>
                </div>
                <span className="text-xs font-bold text-slate-500">60%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold w-24">Acabamento</span>
                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '15%' }}></div>
                </div>
                <span className="text-xs font-bold text-slate-500">15%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alertas Urgentes Section */}
        <div className="px-4 pt-8 pb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold tracking-tight">Alertas Urgentes</h3>
            <span className="bg-rose-500/10 text-rose-500 text-xs font-bold px-2 py-1 rounded">2 Críticos</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border-l-4 border-rose-500 shadow-sm">
              <div className="bg-rose-500/10 p-2 rounded-lg">
                <span className="material-symbols-outlined text-rose-500">warning</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-bold">Estouro de Orçamento</h4>
                  <span className="text-[10px] text-slate-400">Agora</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Obra Residencial Aurora: <span className="text-rose-500 font-bold">+15,4%</span> acima do previsto no ciclo atual.</p>
                <button className="mt-2 text-xs font-bold text-primary flex items-center gap-1">
                  Ver detalhes <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border-l-4 border-amber-500 shadow-sm">
              <div className="bg-amber-500/10 p-2 rounded-lg">
                <span className="material-symbols-outlined text-amber-500">pending_actions</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-bold">Aprovação Pendente</h4>
                  <span className="text-[10px] text-slate-400">Há 2h</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Compra de Insumos - Suprimentos: Aguardando assinatura para liberação de pedido #9921.</p>
                <button className="mt-2 text-xs font-bold text-primary flex items-center gap-1">
                  Aprovar Agora <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExecutiveDashboard;