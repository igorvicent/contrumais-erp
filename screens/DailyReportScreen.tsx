import React from 'react';
import { useNavigate } from 'react-router-dom';

const DailyReportScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen pb-32">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <span onClick={() => navigate(-1)} className="material-symbols-outlined text-primary cursor-pointer">arrow_back_ios</span>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Relatório Diário - 24/05/2024</h2>
          </div>
          <span className="material-symbols-outlined text-slate-400">sync</span>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        {/* Section: Clima */}
        <section className="mt-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-4 pt-4">Clima</h3>
          <div className="flex px-4 py-3">
            <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 p-1">
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-primary has-[:checked]:text-white text-slate-500 dark:text-slate-400 text-sm font-medium transition-all">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-xl">wb_sunny</span>
                  <span className="text-[10px] mt-0.5">Ensolarado</span>
                </div>
                <input defaultChecked className="hidden" name="weather" type="radio" value="Ensolarado"/>
              </label>
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-primary has-[:checked]:text-white text-slate-500 dark:text-slate-400 text-sm font-medium transition-all">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-xl">cloud</span>
                  <span className="text-[10px] mt-0.5">Nublado</span>
                </div>
                <input className="hidden" name="weather" type="radio" value="Nublado"/>
              </label>
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-primary has-[:checked]:text-white text-slate-500 dark:text-slate-400 text-sm font-medium transition-all">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-xl">rainy</span>
                  <span className="text-[10px] mt-0.5">Chuvoso</span>
                </div>
                <input className="hidden" name="weather" type="radio" value="Chuvoso"/>
              </label>
            </div>
          </div>
        </section>

        {/* Section: Mão de Obra */}
        <section className="mt-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-4 pt-4">Mão de Obra</h3>
          <div className="flex items-center gap-4 bg-white dark:bg-slate-800/50 mx-4 mt-2 p-4 rounded-xl border border-slate-200 dark:border-slate-800 justify-between">
            <div className="flex items-center gap-4">
              <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <p className="text-base font-medium leading-normal flex-1 truncate">Total de Colaboradores</p>
            </div>
            <div className="shrink-0">
              <div className="flex items-center gap-4">
                <button className="text-xl font-bold flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 active:scale-95 transition-transform">-</button>
                <input className="text-xl font-bold w-8 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none" type="number" defaultValue="12" />
                <button className="text-xl font-bold flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white active:scale-95 transition-transform">+</button>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Atividades */}
        <section className="mt-6 px-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Atividades</h3>
            <span className="text-xs text-primary font-medium">Auto-salvamento ativo</span>
          </div>
          <textarea className="w-full h-32 p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none" placeholder="Descreva as principais atividades realizadas no dia de hoje..."></textarea>
        </section>

        {/* Section: Ocorrências */}
        <section className="mt-6 px-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Ocorrências</h3>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400 text-lg">report_problem</span>
            <textarea className="w-full h-24 p-4 pl-11 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none" placeholder="Houve algum imprevisto, atraso ou acidente?"></textarea>
          </div>
        </section>

        {/* Section: Galeria de Fotos */}
        <section className="mt-6 px-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Galeria de Fotos (3)</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 group">
              <img className="w-full h-full object-cover" alt="Foundation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMxp9dWY9t4EvZ5ccY-9RBWHLybBp9z8siz7tueZiorvnI6IUD7hY2DA61CBbtItRbxTK0mG_Lw07Tt5znPsQd-7OuLq1y8fh933JS5HnxRfEMDg2OWYXtBS46u8tUBaBCeXpsjzn712XWQC5Cv1VrhVO0Fix_Qy9TmXVPcmIcxMsjvyT0qoThP_ib87Usm7x288Ex94tGV_Zf-QYGvHNwfk9oUvxorqXTkwM5G-zfIOEDoe4Meduv1Xb5yiTLZrzk0Y_wZXaLm9w"/>
              <div className="absolute inset-0 bg-black/20 group-active:bg-black/40 transition-colors"></div>
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 group">
              <img className="w-full h-full object-cover" alt="Concrete" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpi39wkIIn8M95BrOR_74jT3g8A0rNrygsUaJKpawHDN5hGnxLLSDIB2E9IIzxsf1ciHvGwpay9huCIGOyKU9PID55uYBFyr0TrDINZ4yNe58CvJ5Ft0Mn6x0SpuTeNEwXLDSxYgfc6hntZd-MetdkSj6Ui5P0HV27M4ljMGUCUhX64i2mMmEEbRmgsZi9mmUY_58x4PoT-stTOM6j8TOnEFPzRLx_RhdLYs4Z7XGGiytHF6oFI1J-sqDoWe7zZEFUXXA6bwgXK5Y"/>
              <div className="absolute inset-0 bg-black/20 group-active:bg-black/40 transition-colors"></div>
            </div>
            <button className="aspect-square flex flex-col items-center justify-center bg-slate-200 dark:bg-slate-800 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 active:bg-slate-300 dark:active:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">add_a_photo</span>
              <span className="text-[10px] mt-1 font-bold text-slate-500 uppercase">Adicionar</span>
            </button>
          </div>
        </section>
      </main>

      {/* Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 pb-8 z-50">
        <div className="max-w-md mx-auto flex gap-3">
          <button onClick={() => navigate(-1)} className="flex-1 py-4 px-6 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-sm bg-white dark:bg-slate-800 active:bg-slate-100 dark:active:bg-slate-700 transition-colors">
            Salvar Rascunho
          </button>
          <button className="flex-1 py-4 px-6 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 active:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">draw</span>
            Assinar Relatório
          </button>
        </div>
      </footer>
    </div>
  );
};

export default DailyReportScreen;