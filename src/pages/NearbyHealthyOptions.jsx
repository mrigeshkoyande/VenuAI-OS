import { Link, useNavigate } from 'react-router-dom';

export default function NearbyHealthyOptions() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f8faf8] font-body text-[#191c1b]">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-emerald-50/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black text-emerald-900 italic font-headline tracking-tight">NutriSense AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-zinc-500 font-medium hover:text-emerald-600 transition-colors">Dashboard</Link>
            <Link to="/nearby" className="text-emerald-700 font-bold border-b-2 border-emerald-600">Explore</Link>
            <Link to="/analysis" className="text-zinc-500 font-medium hover:text-emerald-600 transition-colors">History</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-emerald-800 hover:bg-emerald-100/50 rounded-full transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-emerald-200">
              <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHptmyOwAamXJu5TSf7gMYfYHD-tmx7lrN94XR9sLeT0bEBGynJzAh28MqQsdNkPs6FD8mzL3Il3JPe8J_qtPB6_3oNF5_0wIEsFCD_T_7aml4sthk9igZIzuJpuhTS7Gp5bALcA7CbSMTvWJ8YlaB0uR71RXx9DnRrYYhse-jFSgVrpcMSu-rIlECjWSiW9yKvxFQRtanNiHAADZnCYsfILIf7S58LTOrBiXFoputnDBz8Q9KqVI3YswZ0MAIIIrdJhLwPiainxRk" />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex min-h-screen pt-20">
        {/* SideNavBar */}
        <aside className="hidden lg:flex flex-col h-screen p-4 fixed left-0 w-72 bg-emerald-50 z-40 rounded-r-3xl shadow-2xl space-y-4">
          <div className="px-4 py-6">
            <h2 className="text-xl font-bold text-emerald-800 font-headline">NutriSense AI</h2>
            <p className="text-xs text-zinc-500 font-medium">The Living Curator</p>
          </div>
          <nav className="flex-1 space-y-1">
            <Link to="/" className="flex items-center gap-3 text-zinc-600 p-3 hover:bg-emerald-50 rounded-xl transition-all font-headline text-sm font-semibold">
              <span className="material-symbols-outlined">dashboard</span>Dashboard
            </Link>
            <Link to="/input" className="flex items-center gap-3 text-zinc-600 p-3 hover:bg-emerald-50 rounded-xl transition-all font-headline text-sm font-semibold">
              <span className="material-symbols-outlined">auto_awesome</span>Nutrition Log
            </Link>
            <Link to="/nearby" className="flex items-center gap-3 bg-emerald-100 text-emerald-900 rounded-xl p-3 font-headline text-sm font-semibold">
              <span className="material-symbols-outlined">insights</span>AI Insights
            </Link>
            <Link to="/analysis" className="flex items-center gap-3 text-zinc-600 p-3 hover:bg-emerald-50 rounded-xl transition-all font-headline text-sm font-semibold">
              <span className="material-symbols-outlined">restaurant_menu</span>Meal Plans
            </Link>
            <Link to="/profile" className="flex items-center gap-3 text-zinc-600 p-3 hover:bg-emerald-50 rounded-xl transition-all font-headline text-sm font-semibold">
              <span className="material-symbols-outlined">settings</span>Settings
            </Link>
          </nav>
          <div className="mt-auto p-4">
            <button onClick={() => navigate('/input')} className="w-full py-4 px-6 bg-gradient-to-br from-[#0d631b] to-[#2e7d32] text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">add</span>Quick Log Food
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-72 flex flex-col md:flex-row h-[calc(100vh-80px)] overflow-hidden">
          {/* Map */}
          <section className="flex-1 relative order-2 md:order-1 h-2/3 md:h-full">
            <div className="absolute inset-0 bg-[#f2f4f2] overflow-hidden">
              <img className="w-full h-full object-cover opacity-80" alt="City Map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADxDadbRs61b6z_4LHa0s8cZe0vw0FbBzQ1-vJRov4ZpO5zW6-hDQ8_EpUPSkcwhJaG81qEF9kU8WiRvZjyxn7KOR15rgQfi2R_i_0FLMng7zf6MJqlb5BN2W96B4aFuErtrEByfIT1ueZ-9If9_4FJr99t2nMGgnFqyTyQRZU4daKKUV63DJ8aAUq8EDnRxU8gwJRzVYJLX-02_VmGtnuEe7L_yovahRP2maG0ahbkhx8wIJfXXkGPYMgDYIMs2Jf-XAHVkswU94I" />
              {/* Markers */}
              <div className="absolute top-1/3 left-1/4 group cursor-pointer">
                <div className="relative">
                  <span className="material-symbols-outlined text-[#0d631b] text-4xl" style={{fontVariationSettings:"'FILL' 1"}}>location_on</span>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg whitespace-nowrap hidden group-hover:block">
                    <span className="text-xs font-bold text-[#0d631b]">Green Garden Salads</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-1/3 right-1/3 group cursor-pointer">
                <div className="relative">
                  <span className="material-symbols-outlined text-[#0058bc] text-4xl" style={{fontVariationSettings:"'FILL' 1"}}>location_on</span>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg whitespace-nowrap hidden group-hover:block">
                    <span className="text-xs font-bold text-[#0058bc]">Pure Protein Hub</span>
                  </div>
                </div>
              </div>
              {/* AI Overlay */}
              <div className="absolute top-6 right-6 z-10 max-w-xs">
                <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-[#0058bc]">auto_awesome</span>
                    <h3 className="font-headline font-bold text-[#191c1b]">Curated Path</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-[#40493d] italic">
                    "Based on your morning cardio and weight loss goal, I've highlighted spots with high-fiber, low-glycemic options within a 15-minute walk."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Results Sidebar */}
          <section className="w-full md:w-[420px] bg-[#f2f4f2] overflow-y-auto order-1 md:order-2 p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-black font-headline text-emerald-900 tracking-tight leading-none mb-2">Nearby Vitality</h1>
              <p className="text-[#40493d] font-medium text-sm">Fueling your progress locally</p>
            </div>
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="bg-white p-5 rounded-3xl transition-all hover:scale-[1.01] shadow-sm cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold font-headline text-[#191c1b]">Green Garden Salads</h3>
                    <div className="flex items-center gap-2 text-xs text-[#40493d] font-semibold">
                      <span className="material-symbols-outlined text-[16px]">distance</span>
                      <span>0.4 miles away</span>
                    </div>
                  </div>
                  <div className="bg-[#a3f69c] px-3 py-1 rounded-full">
                    <span className="text-[10px] font-bold text-[#002204] tracking-wider uppercase">98% Health Match</span>
                  </div>
                </div>
                <div className="mb-5 rounded-2xl overflow-hidden aspect-video">
                  <img className="w-full h-full object-cover" alt="Green Garden Salads"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkcRF5fJ9_cXE3K7-BW-LBCSQysroYmyVYZ_s9JmykvwcqzrfX6srhrHVyEoyFxlE6vnY-D_bCsh9LUXRP476Q8bSeSAT8aPOD8oqXNb1pyz6T8AF7G6p5ZYHtajC1mSiDH75gVQluoAHkpRHYdHojAfxi8ihc5jYa10Qz0vJl6EVS8DTC0MD9wTc2ID-po3FkCsie6tNh7Lyb-F5JsQWXJnwR5sp943eB7nq-JIHqz2-l4wKCSwZ6JLFgNlJTfxNbBHt5440WxPi_" />
                </div>
                <div className="bg-[#f2f4f2] p-4 rounded-2xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-[#0d631b] text-sm">stars</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0d631b]">Top AI Pick</span>
                  </div>
                  <p className="text-sm font-bold text-[#191c1b]">Harvest Quinoa Bowl</p>
                  <p className="text-xs text-[#40493d] mt-1">Lean protein, rich fiber, 420 kcal. Matches your macro target.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-5 rounded-3xl transition-all hover:scale-[1.01] shadow-sm cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold font-headline text-[#191c1b]">Pure Protein Hub</h3>
                    <div className="flex items-center gap-2 text-xs text-[#40493d] font-semibold">
                      <span className="material-symbols-outlined text-[16px]">distance</span>
                      <span>0.9 miles away</span>
                    </div>
                  </div>
                  <div className="bg-[#d8e2ff] px-3 py-1 rounded-full">
                    <span className="text-[10px] font-bold text-[#001a41] tracking-wider uppercase">Muscle Fuel</span>
                  </div>
                </div>
                <div className="mb-5 rounded-2xl overflow-hidden aspect-video">
                  <img className="w-full h-full object-cover" alt="Pure Protein Hub"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNxMVRNChOn74yR1g0rptMBqdmXrCA-tZ59s6PHw8nmi80ps-FRXzF3FIpv4s1d1CEbNyQcR6b7R5uJq-TfUhX7zRd9Townn2_MfdX9Ii7UIHDQg5Zi7hBG64ucvJec8n4ZkAxit7-etRFj4aMgkBAZ1jIO6o_ItV0V4pE-yjLbIVg9xIgCe6zUb9lZEmoEMuSlsxXGf_2X0s1Y8iCp8lihbHv4nFhgGpWLvLFP8Z5ZBiCyZb_PIPsao5KSV6WZC0w3s3nr4OS8yZQ" />
                </div>
                <div className="bg-[#f2f4f2] p-4 rounded-2xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-[#0058bc] text-sm">bolt</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0058bc]">Post-Workout Best</span>
                  </div>
                  <p className="text-sm font-bold text-[#191c1b]">Zesty Lemon Salmon</p>
                  <p className="text-xs text-[#40493d] mt-1">High Omega-3s, 38g Protein. Perfect for recovery.</p>
                </div>
              </div>

              {/* Market Chip */}
              <div className="bg-[#814700]/10 p-4 rounded-3xl flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[#a45b00] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#ffeee2]">shopping_basket</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#191c1b]">Prefer to cook?</p>
                  <p className="text-[11px] text-[#40493d]">2 Organic Markets nearby have ingredients for your 'Green Detox' recipe.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50">
        <nav className="bg-white/80 backdrop-blur-2xl border border-white/20 rounded-full shadow-2xl flex justify-around items-center p-3">
          <Link to="/" className="p-3 text-zinc-400"><span className="material-symbols-outlined">dashboard</span></Link>
          <Link to="/nearby" className="p-3 text-[#0d631b] bg-[#0d631b]/10 rounded-full"><span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>explore</span></Link>
          <Link to="/analysis" className="p-3 text-zinc-400"><span className="material-symbols-outlined">history</span></Link>
          <Link to="/profile" className="p-3 text-zinc-400"><span className="material-symbols-outlined">person</span></Link>
        </nav>
      </div>
    </div>
  );
}
