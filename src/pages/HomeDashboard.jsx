import { Link, useNavigate } from 'react-router-dom';

export default function HomeDashboard() {
  const navigate = useNavigate();
  return (
    <div className="text-on-surface">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-emerald-50/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black text-emerald-900 italic font-headline tracking-tight">NutriSense AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-emerald-700 font-bold border-b-2 border-emerald-600 font-headline tracking-tight transition-all duration-300">Dashboard</Link>
            <Link to="/input" className="text-zinc-500 font-medium font-headline tracking-tight hover:text-emerald-600 transition-colors">Nutrition Log</Link>
            <Link to="/analysis" className="text-zinc-500 font-medium font-headline tracking-tight hover:text-emerald-600 transition-colors">AI Insights</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="p-2 text-zinc-500 hover:text-emerald-600 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-zinc-500 hover:text-emerald-600 transition-colors">
              <span className="material-symbols-outlined">history</span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#a3f69c]">
              <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3PdWtSK0ldgUZEVtqjjcLgq-VaQkImKkJjdzhsGJ19CqFW1oc_18xejHXeHLdnRgMUFkUVO7a9YhLE-AnQ2EiNpDUOKOoYan1brPkcsB3Xa8mQyZCUoWbQr0mBc9o7sf4teizQ-Xsb_TC4VxU5Fj5WYAIy5tokk2KQw1Pg0f_jXOZSs0Gu6T0nYhpnnBQhLb5Km0gdVzwdds2aG2WFZgNc_YcdQgkORBt_dqne7Mzij0JpPYraPmKuYetE57MEqLsIy6nTMG6qFLL" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-20 h-screen overflow-hidden">
        {/* SideNavBar */}
        <aside className="hidden lg:flex flex-col h-full w-72 bg-emerald-50 p-4 space-y-4 shadow-2xl rounded-r-3xl">
          <div className="flex items-center gap-3 p-4 mb-4">
            <div className="w-12 h-12 bg-[#a3f69c] rounded-2xl flex items-center justify-center text-[#0d631b]">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings:"'FILL' 1"}}>auto_awesome</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-800 font-headline">NutriSense AI</h2>
              <p className="text-xs text-zinc-500 font-medium">The Living Curator</p>
            </div>
          </div>
          <nav className="flex-1 space-y-2">
            <Link to="/" className="flex items-center gap-3 bg-emerald-100 text-emerald-900 rounded-xl p-3 font-semibold text-sm transition-all">
              <span className="material-symbols-outlined">dashboard</span>Dashboard
            </Link>
            <Link to="/input" className="flex items-center gap-3 text-zinc-600 p-3 font-semibold text-sm hover:bg-emerald-50 rounded-xl transition-all">
              <span className="material-symbols-outlined">auto_awesome</span>Nutrition Log
            </Link>
            <Link to="/analysis" className="flex items-center gap-3 text-zinc-600 p-3 font-semibold text-sm hover:bg-emerald-50 rounded-xl transition-all">
              <span className="material-symbols-outlined">insights</span>AI Insights
            </Link>
            <Link to="/nearby" className="flex items-center gap-3 text-zinc-600 p-3 font-semibold text-sm hover:bg-emerald-50 rounded-xl transition-all">
              <span className="material-symbols-outlined">restaurant_menu</span>Meal Plans
            </Link>
            <Link to="/profile" className="flex items-center gap-3 text-zinc-600 p-3 font-semibold text-sm hover:bg-emerald-50 rounded-xl transition-all">
              <span className="material-symbols-outlined">settings</span>Settings
            </Link>
          </nav>
          <button onClick={() => navigate('/input')} className="w-full bg-[#2e7d32] text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-all">
            <span className="material-symbols-outlined">add_circle</span>Quick Log Food
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-6 py-8 md:px-12 bg-[#f8faf8]">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Welcome & Smart Suggestion */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <h1 className="text-4xl md:text-5xl font-black text-[#191c1b] tracking-tight mb-4">Welcome back, Elena</h1>
                <p className="text-[#40493d] leading-relaxed max-w-2xl">Your morning metrics look excellent. Let's keep the momentum going for your 7-day health streak.</p>
                {/* Smart Suggestion Card */}
                <div className="mt-8 relative overflow-hidden bg-gradient-to-br from-[#0d631b] to-[#2e7d32] rounded-[2rem] p-8 text-white shadow-xl">
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/10">
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings:"'FILL' 1"}}>bolt</span>
                      <span className="text-xs font-bold tracking-widest uppercase">Smart Suggestion</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Good morning! Since you're aiming for energy, consider a protein-rich breakfast.</h3>
                    <p className="font-medium max-w-lg mb-6 opacity-90" style={{color:'#cbffc2'}}>Based on your metabolic data, a mix of eggs and avocado would stabilize your glucose for the next 4 hours.</p>
                    <button className="bg-white text-[#0d631b] px-6 py-3 rounded-xl font-bold hover:scale-[1.02] transition-transform flex items-center gap-2">
                      <span className="material-symbols-outlined">restaurant</span>View Breakfast Ideas
                    </button>
                  </div>
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block opacity-20">
                    <span className="material-symbols-outlined text-[12rem]">psychology</span>
                  </div>
                </div>
              </div>
              {/* Health Score */}
              <div className="lg:col-span-4 bg-[#f2f4f2] rounded-[2rem] p-8 flex flex-col items-center justify-center space-y-6">
                <h2 className="text-xl font-bold text-[#40493d] font-headline">Health Score</h2>
                <div className="relative flex items-center justify-center">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle className="text-[#e1e3e1]" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12" />
                    <circle className="text-[#0d631b]" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="110.58" strokeLinecap="round" strokeWidth="12" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-black font-headline text-[#191c1b]">82</span>
                    <span className="text-sm font-bold text-[#40493d] tracking-widest uppercase">Excellent</span>
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-sm text-[#40493d] font-medium">↑ 4 points since yesterday</p>
                  <div className="flex gap-1 justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d631b]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d631b]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d631b]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bfcaba]"></span>
                  </div>
                </div>
              </div>
            </section>

            {/* Vitals Row */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-3xl space-y-3">
                <span className="material-symbols-outlined text-[#0058bc]">water_drop</span>
                <div>
                  <p className="text-[#40493d] text-sm font-medium">Hydration</p>
                  <p className="text-2xl font-bold font-headline">1.8 <span className="text-sm font-normal">/ 2.5L</span></p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl space-y-3">
                <span className="material-symbols-outlined text-[#814700]">local_fire_department</span>
                <div>
                  <p className="text-[#40493d] text-sm font-medium">Burned</p>
                  <p className="text-2xl font-bold font-headline">450 <span className="text-sm font-normal">kcal</span></p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl space-y-3">
                <span className="material-symbols-outlined text-[#0d631b]">directions_run</span>
                <div>
                  <p className="text-[#40493d] text-sm font-medium">Steps</p>
                  <p className="text-2xl font-bold font-headline">8,432 <span className="text-sm font-normal">/ 10k</span></p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl space-y-3">
                <span className="material-symbols-outlined text-orange-500">bedtime</span>
                <div>
                  <p className="text-[#40493d] text-sm font-medium">Sleep</p>
                  <p className="text-2xl font-bold font-headline">7h 20m</p>
                </div>
              </div>
            </section>

            {/* Two Column Details */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Recent Log */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <h2 className="text-2xl font-bold font-headline">Recent Log</h2>
                  <a className="text-sm font-bold text-[#0d631b] hover:underline" href="#">View All</a>
                </div>
                <div className="space-y-4">
                  {[
                    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKUcBHDlCFVk5GCnowCDwWBauuo8ZbNRImItLSkOV-zf_YHvNCelvKRG2gkiRC9N0wvC3I_HdwyOz9oj9-BaCYYRusyP4KnupduiUHhuB4KZ3oJ5c4Z-Ido0opbniCFxW2sZ3YWMR6HcBZSIznya19j0ByQrOI85Kacz0wAJGOyUCtub5weCfPVbumAJgx22Gjijr6heb_HQGv0XKsAltERpCRlPiHJ0Bmiw-uo-qR9tfqruzwGsdt-V3F0i4WTbII3RUz0CK0sPAk", name: "Avocado & Egg Sourdough", time: "Breakfast • 08:30 AM", kcal: "420 kcal", tag: "Good Match", tagColor: "text-[#0d631b]" },
                    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsYwWu4xUyOLqLV3-cgOkC7dReodFMEoi8po_82cfHDT_WpMdxX-jOvWwwmUW_k6aSc02q-YiBsIJhV2rM223ECCDvhauaiKjOB5S9S0GBF9w7EvANy8j6UxQ7En-vCAJmvyxWbPWQN84kEwPCR4alU-0BTSrjJmzvPfd6ALC5uDrik_doiLwuut1oCYM85CB2on4WDyD6O23DV4n34tF3mxL8sj2MpHMVG9vDC08uDmYf_oGkJ7BfOoboGIgq6oEponaxS0Ydn8qV", name: "Mediterranean Power Bowl", time: "Lunch • Yesterday", kcal: "580 kcal", tag: "Nutrient Dense", tagColor: "text-[#0d631b]" },
                    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA52eR4BBQMe7zE-yMAleKO89-YX8PRo7NJ0-KP4-vQNejKc4cWBW6-5DQPSZ3IGiMr02n5CNmBgTaq1PeJwFkHSllFEY5C5bUOydmpJsZhZ4_U54QXh8DNOAKjBO2fL92_OkeW8Wv6q6B7YM7J8DE81PBflv69ujr7DY5OjfMC2u51iJ-CXPrmDJ-mek1U4aJ38SbyqEj9wqls17LDH6VcnZ8vL4u-DWnE1WLGwwc7tQb6GWI-NaCfE-HIgmP01u-zNvRaO56v9uZf", name: "Post-Workout Shake", time: "Snack • Yesterday", kcal: "210 kcal", tag: "Standard", tagColor: "text-[#40493d]" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-[#f2f4f2] p-4 rounded-2xl hover:bg-[#e6e9e7] transition-colors group cursor-pointer">
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                        <img alt={item.name} src={item.img} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#191c1b] group-hover:text-[#0d631b] transition-colors">{item.name}</h4>
                        <p className="text-sm text-[#40493d]">{item.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{item.kcal}</p>
                        <p className={`text-xs font-bold ${item.tagColor}`}>{item.tag}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Macro Breakdown */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <h2 className="text-2xl font-bold font-headline">Macro Breakdown</h2>
                  <span className="text-sm font-medium text-[#40493d]">Today's Target</span>
                </div>
                <div className="bg-[#f2f4f2] rounded-[2rem] p-8 space-y-8">
                  {[
                    { label: "Protein", val: "112g / 140g", pct: "80%", color: "bg-[#0d631b]" },
                    { label: "Carbs", val: "156g / 220g", pct: "71%", color: "bg-[#0058bc]" },
                    { label: "Fats", val: "42g / 65g", pct: "64%", color: "bg-[#a45b00]" },
                  ].map((m, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between items-center text-sm font-bold">
                        <span className="text-[#191c1b]">{m.label}</span>
                        <span className="text-[#40493d]">{m.val}</span>
                      </div>
                      <div className="h-3 w-full bg-[#e1e3e1] rounded-full overflow-hidden">
                        <div className={`h-full ${m.color} rounded-full`} style={{width: m.pct}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div className="h-24 md:hidden"></div>
        </main>
      </div>

      {/* Mobile Bottom NavBar */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 h-16 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-around px-4 border border-[#bfcaba]/10 z-50">
        <Link to="/" className="flex flex-col items-center text-[#0d631b]">
          <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>dashboard</span>
        </Link>
        <Link to="/input" className="flex flex-col items-center text-zinc-400">
          <span className="material-symbols-outlined">auto_awesome</span>
        </Link>
        <button onClick={() => navigate('/input')} className="w-12 h-12 bg-[#0d631b] text-white rounded-full flex items-center justify-center shadow-lg -translate-y-4">
          <span className="material-symbols-outlined">add</span>
        </button>
        <Link to="/analysis" className="flex flex-col items-center text-zinc-400">
          <span className="material-symbols-outlined">insights</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-zinc-400">
          <span className="material-symbols-outlined">settings</span>
        </Link>
      </nav>

      {/* Desktop FAB */}
      <button onClick={() => navigate('/input')} className="hidden md:flex fixed bottom-8 right-8 bg-[#0d631b] text-white p-4 rounded-2xl shadow-2xl items-center gap-3 hover:scale-105 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined">add_circle</span>
        <span className="font-bold">Log New Meal</span>
      </button>
    </div>
  );
}
