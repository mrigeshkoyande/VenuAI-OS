import { Link, useNavigate } from 'react-router-dom';

export default function AiAnalysisResults() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f8faf8] text-[#191c1b]">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-emerald-50/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black text-emerald-900 italic font-headline tracking-tight">NutriSense AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-zinc-500 font-medium hover:text-emerald-600 transition-colors">Dashboard</Link>
            <Link to="/input" className="text-zinc-500 font-medium hover:text-emerald-600 transition-colors">Nutrition Log</Link>
            <Link to="/analysis" className="text-emerald-700 font-bold border-b-2 border-emerald-600">AI Insights</Link>
            <Link to="/nearby" className="text-zinc-500 font-medium hover:text-emerald-600 transition-colors">Meal Plans</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-[#40493d]">history</button>
            <button className="material-symbols-outlined text-[#40493d]">notifications</button>
            <img alt="User Profile" className="w-8 h-8 rounded-full border border-[#bfcaba]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTJqnAxjn8VjsslsDMwdFyMnUnHE9vsb73lBIFAJ9AyD9x57MQ2Ed0tqK21umdrsn8xrpLJXHvwVAxf7xZM8zHue7YfjrmswE9oYzieSyesMswsXaTmH8z7fwe4GGgptl1SDYEPI-WzzjzrWi-Gfuz8LOsfoVE33OQMHDcyzqEZNBtA0k0nnK8wyGsIpGGP64b6rKr_Pr51XpCA4wzlQZGL-UCg8p9_MUezMNPUwaXaafJI40J8R8XhLYxLN1yB9qRonBLrrBQKY3y" />
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4 max-w-7xl mx-auto min-h-screen">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#40493d] text-sm uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">schedule</span>
              Night Analysis • Weight Loss Goal
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#191c1b] leading-tight">AI Decision Engine</h1>
            <p className="text-lg text-[#40493d] max-w-xl">Real-time metabolic impact assessment for your late-night craving.</p>
          </div>
          <div className="inline-flex items-center px-4 py-2 rounded-xl bg-[#ffdad6] text-[#93000a] font-bold gap-2 sunlight-shadow">
            <span className="material-symbols-outlined">report</span>
            ❌ Not Ideal
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Calorie Card */}
              <div className="bg-white p-8 rounded-3xl sunlight-shadow flex flex-col justify-between aspect-video md:aspect-square">
                <span className="text-[#40493d] font-semibold">Energy Density</span>
                <div>
                  <div className="text-6xl font-black text-[#191c1b] tracking-tighter">650</div>
                  <div className="text-xl font-bold text-[#40493d] italic">kcal</div>
                </div>
                <div className="h-1 w-full bg-[#eceeec] rounded-full overflow-hidden">
                  <div className="h-full bg-[#ba1a1a] w-3/4"></div>
                </div>
              </div>
              {/* Health Score Card */}
              <div className="bg-white p-8 rounded-3xl sunlight-shadow flex flex-col justify-between aspect-video md:aspect-square">
                <span className="text-[#40493d] font-semibold">Metabolic Health Score</span>
                <div className="relative flex items-center justify-center">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle className="text-[#e6e9e7]" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="12" />
                    <circle className="text-[#814700]" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="218.6" strokeWidth="12" />
                  </svg>
                  <span className="absolute text-4xl font-black text-[#814700]">40</span>
                </div>
                <p className="text-sm text-[#40493d] text-center font-medium italic">Poor alignment with goal</p>
              </div>
            </div>

            {/* Why Section */}
            <div className="bg-[#f2f4f2] p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0070eb] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>insights</span>
                </div>
                <h2 className="text-2xl font-bold">Why?</h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#40493d] leading-relaxed">
                  A high-carb, high-fat meal like a <span className="font-bold text-[#191c1b]">Burger</span> at night triggers a significant insulin spike. During the evening, your body's insulin sensitivity naturally decreases.
                </p>
                <div className="flex flex-col md:flex-row gap-4 py-4">
                  <div className="flex-1 p-4 rounded-2xl bg-[#e1e3e1]">
                    <span className="material-symbols-outlined text-[#814700] mb-2">speed</span>
                    <p className="text-sm font-semibold mb-1">Slow Metabolism</p>
                    <p className="text-xs text-[#40493d]">Late-night calories are processed less efficiently, favoring fat storage.</p>
                  </div>
                  <div className="flex-1 p-4 rounded-2xl bg-[#e1e3e1]">
                    <span className="material-symbols-outlined text-[#0058bc] mb-2">bedtime</span>
                    <p className="text-sm font-semibold mb-1">Sleep Quality</p>
                    <p className="text-xs text-[#40493d]">Heavy digestion can disrupt REM cycles, leading to higher ghrelin levels tomorrow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Recommendation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-24">
              <div className="bg-[#0d631b] text-white rounded-3xl p-1 flex flex-col sunlight-shadow overflow-hidden">
                <div className="px-6 py-4 flex items-center justify-between">
                  <span className="font-bold uppercase tracking-widest text-xs opacity-90">Better Alternative</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>verified</span>
                </div>
                <div className="bg-white text-[#191c1b] m-1 rounded-[22px] overflow-hidden">
                  <img alt="Grilled Paneer Wrap" className="w-full h-48 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr5EIz02Sh_xIwGumaT4YZD_YoFSo-F6vmh6Q-EZClolPMAbjN3sW9S1NIU7AeD3ACR1yl8tm8gOfCwLGfgYO7viXADnEG_X47zkfm8o-1qgztNkWSwKGPKbfJDYfkY2nqwSKgA4vxxccClPTmr96OPkdtkao3MsOpAmLGZV20_0GGgR1HjOJB--fE5CKzcgZOY4wF4DbDEdsb0zTmqL3MsdhpmnWxK-31sem0T2wVT3pW_xT0Qnh8sQZvPz1vxqnOSpNn8NsL6LJU" />
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-black tracking-tight text-[#0d631b]">Grilled Paneer Wrap</h3>
                        <p className="text-[#40493d]">Lean Protein • High Fiber</p>
                      </div>
                      <div className="bg-[#a3f69c] text-[#002204] px-3 py-1 rounded-full font-bold text-sm">350 kcal</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <span className="material-symbols-outlined text-[#0d631b] text-sm">check_circle</span>
                        46% fewer calories than your current choice
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <span className="material-symbols-outlined text-[#0d631b] text-sm">check_circle</span>
                        Low-glycemic index; maintains steady glucose
                      </li>
                    </ul>
                    <div className="pt-4 flex flex-col gap-3">
                      <button className="w-full bg-[#0d631b] hover:bg-[#2e7d32] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95">
                        <span className="material-symbols-outlined">restaurant_menu</span>
                        Try Alternative
                      </button>
                      <button onClick={() => navigate('/input')} className="w-full bg-[#e6e9e7] hover:bg-[#e1e3e1] text-[#191c1b] py-4 rounded-2xl font-bold transition-all active:scale-95">
                        Save to Log Anyway
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pro Tip */}
              <div className="mt-6 p-6 rounded-3xl bg-[#0058bc]/10 border border-[#0058bc]/20 flex items-start gap-4">
                <span className="material-symbols-outlined text-[#0058bc]" style={{fontVariationSettings:"'FILL' 1"}}>lightbulb</span>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-[#0058bc]">Pro-Tip</p>
                  <p className="text-sm text-[#40493d] leading-snug">Drinking 250ml of warm water with lemon before this meal can boost thermogenesis by 3%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-panel border-t border-[#bfcaba]/10 px-8 py-4 flex justify-between items-center z-50">
        <Link to="/" className="flex flex-col items-center gap-1 text-[#40493d]">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-bold">Dash</span>
        </Link>
        <Link to="/input" className="flex flex-col items-center gap-1 text-[#40493d]">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="text-[10px] font-bold">Log</span>
        </Link>
        <button onClick={() => navigate('/input')} className="bg-[#0d631b] text-white p-4 rounded-2xl -mt-12 sunlight-shadow active:scale-90 transition-transform">
          <span className="material-symbols-outlined">add</span>
        </button>
        <Link to="/analysis" className="flex flex-col items-center gap-1 text-[#0d631b]">
          <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>insights</span>
          <span className="text-[10px] font-bold text-[#0d631b]">AI</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center gap-1 text-[#40493d]">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-bold">Settings</span>
        </Link>
      </nav>
    </div>
  );
}
