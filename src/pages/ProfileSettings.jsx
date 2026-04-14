import { Link, useNavigate } from 'react-router-dom';

export default function ProfileSettings() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f8faf8] text-[#191c1b]">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-emerald-50/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="text-2xl font-black text-emerald-900 italic font-headline tracking-tight">NutriSense AI</div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-zinc-500 font-medium hover:text-emerald-600 transition-colors">Dashboard</Link>
            <Link to="/input" className="text-zinc-500 font-medium hover:text-emerald-600 transition-colors">Nutrition Log</Link>
            <Link to="/analysis" className="text-zinc-500 font-medium hover:text-emerald-600 transition-colors">AI Insights</Link>
            <Link to="/profile" className="text-emerald-700 font-bold border-b-2 border-emerald-600">Settings</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-zinc-500 hover:bg-emerald-100/50 rounded-full transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-zinc-500 hover:bg-emerald-100/50 rounded-full transition-all">
              <span className="material-symbols-outlined">history</span>
            </button>
            <img alt="User" className="w-10 h-10 rounded-full object-cover border-2 border-[#a3f69c]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVdnSZDWV5dnUGpBlU7lZZbhyy0Qp_6wiYOzM5KmWUzhzlhcaXOSVHiEcOfaPI9df4STjefxtZT89XrINJmAUuZ6woStK_MieNXFmuCZmEuYXMfELoBDIlAwjoRRr5NuQMqf395Csr-Kx6SCZVEsbavr-oVhcv8eGOcmffYzLMS58rGsFVS9I4U6k8wd5iLsMkMQk6gyNXWT8Dp9V77Fk9qlj4D_aZA6jNBJN5SQnjAGsaC57FgKhQEGA7SRra2RCWTNW4TPg2npCn" />
          </div>
        </div>
      </nav>

      <div className="flex pt-20">
        {/* SideNavBar */}
        <aside className="hidden md:flex flex-col h-screen p-4 fixed left-0 w-72 bg-emerald-50 rounded-r-3xl shadow-2xl space-y-4">
          <div className="px-4 py-6">
            <h2 className="text-xl font-bold text-emerald-800 font-headline">NutriSense AI</h2>
            <p className="text-xs text-zinc-500 font-medium tracking-widest uppercase mt-1">The Living Curator</p>
          </div>
          <div className="space-y-1 flex-1">
            <Link to="/" className="flex items-center gap-3 text-zinc-600 p-3 hover:bg-emerald-50 rounded-xl transition-all font-headline text-sm font-semibold">
              <span className="material-symbols-outlined">dashboard</span>Dashboard
            </Link>
            <Link to="/input" className="flex items-center gap-3 text-zinc-600 p-3 hover:bg-emerald-50 rounded-xl transition-all font-headline text-sm font-semibold">
              <span className="material-symbols-outlined">auto_awesome</span>Nutrition Log
            </Link>
            <Link to="/analysis" className="flex items-center gap-3 text-zinc-600 p-3 hover:bg-emerald-50 rounded-xl transition-all font-headline text-sm font-semibold">
              <span className="material-symbols-outlined">insights</span>AI Insights
            </Link>
            <Link to="/nearby" className="flex items-center gap-3 text-zinc-600 p-3 hover:bg-emerald-50 rounded-xl transition-all font-headline text-sm font-semibold">
              <span className="material-symbols-outlined">restaurant_menu</span>Meal Plans
            </Link>
            <Link to="/profile" className="flex items-center gap-3 bg-emerald-100 text-emerald-900 rounded-xl p-3 font-headline text-sm font-semibold">
              <span className="material-symbols-outlined">settings</span>Settings
            </Link>
          </div>
          <div className="mt-auto p-4 bg-[#2e7d32] rounded-2xl text-white">
            <button onClick={() => navigate('/input')} className="w-full font-bold flex items-center justify-center gap-2 py-2">
              <span className="material-symbols-outlined">add_circle</span>Quick Log Food
            </button>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white/50 rounded-2xl">
            <img alt="Elena" className="w-10 h-10 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQYfY8cn3KR_1MvZTwtgnvDueymmndRbKIGNlQW-msL2FXymF4TVwj5N1O914K9xjQ03iVUIxmdghKg3PA-kEdaPXmPg_SzP4vBIs_CgSfv7OrLiXAqv4O5z_DZI8LRkA1AzZ63m2DZpampfAj4M2xLTJYK1h07CMOyjCbI1l6Zenbx2ir7R-Gjk7wuXit5Ae77c5ijo8skZH_3dPEha3_PHVnDTSPoOR9nkEQ7TJvoiDuP5YOxLjazBRWDXLZHtSLwAUxmnJLKxvK" />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">Elena</p>
              <p className="text-xs text-zinc-500 truncate">Premium Member</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-72 p-6 md:p-12 max-w-6xl mx-auto">
          {/* Profile Header */}
          <header className="relative mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
              <div className="relative group">
                <img alt="Elena Profile" className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] object-cover shadow-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeTj6-CHEMbeyujI3-8hquy7NGomqthPSyL66HwM8gRbIu3bcx7hjG998Y11nEVKVAqtCr5QK9-tEgDVmRDakFn10mu5uLYjJ1HlXc1v7NdZtlR-l9II2owfBYBABKosFVW1K7Hf4V5tEm16yb6ZCrhiL_GM0JuAPR-9eiF56v_H12Irx8325sU0QIRi1GXZItDfHqX10Ly7r2muve2ZvYWZdnBo71ORxelZ55Tt3fWN14OcF4sViuCT6oqK79NjSHyQv13fs055l6" />
                <div className="absolute -bottom-2 -right-2 bg-[#0d631b] text-white p-3 rounded-2xl shadow-lg flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings:"'FILL' 1"}}>local_fire_department</span>
                  <span className="font-bold text-sm">14 Day Streak</span>
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-4">
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#191c1b]">Elena</h1>
                  <span className="px-4 py-1.5 bg-[#a3f69c] text-[#005312] rounded-full text-xs font-bold uppercase tracking-wider">Pro Athlete</span>
                </div>
                <p className="text-[#40493d] text-lg leading-relaxed max-w-xl">
                  Curating a lifestyle of vitality through data-driven nutrition and mindful movement.
                </p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Personal Info */}
              <section className="bg-[#f2f4f2] rounded-[2rem] p-8 space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#0d631b]">person</span>
                    Personal Information
                  </h3>
                  <button className="text-sm font-semibold text-[#0d631b] hover:underline">Edit Info</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Email Address', val: 'elena.vitality@gmail.com' },
                    { label: 'Age', val: '28 Years' },
                    { label: 'Current Height', val: '172 cm' },
                    { label: 'Current Weight', val: '64.5 kg' },
                  ].map((f, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl">
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{f.label}</p>
                      <p className="font-semibold text-[#191c1b]">{f.val}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Dietary Preferences */}
              <section className="bg-[#f2f4f2] rounded-[2rem] p-8 space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0d631b]">restaurant</span>
                  Dietary Preferences & Goals
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#a3f69c]/30 rounded-2xl border border-[#a3f69c]">
                    <div>
                      <p className="text-xs font-bold text-[#005312] uppercase tracking-widest">Active Goal</p>
                      <p className="text-xl font-extrabold text-[#002204]">Weight Loss</p>
                    </div>
                    <span className="material-symbols-outlined text-[#2e7d32] text-4xl">track_changes</span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl">
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Dietary Restrictions</p>
                    <div className="flex flex-wrap gap-2">
                      {['Gluten-Free', 'Dairy-Free'].map((r, i) => (
                        <span key={i} className="px-4 py-2 bg-[#e6e9e7] rounded-full text-sm font-semibold flex items-center gap-2">
                          <span className="material-symbols-outlined text-xs">check</span>{r}
                        </span>
                      ))}
                      <span className="px-4 py-2 bg-[#e6e9e7] rounded-full text-sm font-semibold flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs">close</span>No Shellfish
                      </span>
                      <button className="px-4 py-2 border-2 border-dashed border-[#bfcaba] rounded-full text-sm font-bold text-zinc-500 hover:border-[#0d631b] hover:text-[#0d631b] transition-all">
                        + Add Restriction
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Connected Systems */}
              <section className="bg-[#f2f4f2] rounded-[2rem] p-8 space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0d631b]">sync</span>
                  Connected Systems
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl">
                    <div className="w-12 h-12 bg-yellow-100 flex items-center justify-center rounded-xl">
                      <span className="material-symbols-outlined text-yellow-400">database</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">Firebase Cloud</p>
                      <p className="text-xs text-zinc-500">Live Sync Enabled</p>
                    </div>
                    <div className="w-3 h-3 bg-[#0d631b] rounded-full shadow-[0_0_8px_rgba(13,99,27,0.6)]"></div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl">
                    <div className="w-12 h-12 bg-[#0058bc]/10 flex items-center justify-center rounded-xl">
                      <span className="material-symbols-outlined text-[#0058bc]">health_metrics</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">Google Health Connect</p>
                      <p className="text-xs text-zinc-500">Last synced 2m ago</p>
                    </div>
                    <div className="w-3 h-3 bg-[#0d631b] rounded-full shadow-[0_0_8px_rgba(13,99,27,0.6)]"></div>
                  </div>
                </div>
              </section>

              {/* Account Settings */}
              <section className="bg-[#f2f4f2] rounded-[2rem] p-8 space-y-4">
                <h3 className="text-xl font-bold mb-4">Account Settings</h3>
                <div className="space-y-1">
                  {[
                    { icon: 'notifications', label: 'Notifications' },
                    { icon: 'privacy_tip', label: 'Privacy & Data' },
                    { icon: 'security', label: 'Security' },
                  ].map((s, i) => (
                    <button key={i} className="w-full flex items-center justify-between p-4 hover:bg-[#e1e3e1] rounded-2xl transition-all group">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-zinc-400 group-hover:text-[#0d631b]">{s.icon}</span>
                        <span className="font-semibold text-[#191c1b]">{s.label}</span>
                      </div>
                      <span className="material-symbols-outlined text-zinc-400">chevron_right</span>
                    </button>
                  ))}
                  <hr className="border-[#bfcaba]/30 my-4" />
                  <button className="w-full flex items-center justify-between p-4 text-[#ba1a1a] hover:bg-[#ffdad6] rounded-2xl transition-all group">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined">logout</span>
                      <span className="font-bold">Sign Out</span>
                    </div>
                  </button>
                </div>
              </section>
            </div>
          </div>

          {/* Upgrade CTA */}
          <div className="mt-16 p-1 bg-gradient-to-br from-[#0d631b] to-[#2e7d32] rounded-[2.5rem]">
            <div className="bg-white rounded-[2.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-[#191c1b] leading-tight">
                  Elevate your performance with <span className="text-[#0d631b] italic">NutriSense AI Pro</span>
                </h2>
                <p className="text-[#40493d] max-w-md">Get personalized biochemical insights, DNA-based meal plans, and real-time biometric feedback.</p>
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-[#0d631b] text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform">Upgrade Now</button>
                  <button className="px-8 py-3 bg-[#eceeec] text-[#191c1b] font-bold rounded-full hover:bg-[#e6e9e7] transition-colors">Compare Plans</button>
                </div>
              </div>
              <div className="relative w-64 h-64">
                <img alt="Healthy Bowl" className="w-full h-full object-cover rounded-[3rem] shadow-2xl rotate-3"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Uoyz7s9dcbSD3ZH0T2cS68JVAtGA58ZTRm2oN-YqHVAK87gjuxlrtT9yISg02B4F5zd4ZTchaRa71l1KACu8K7S12DqdqRE13sCK0_aKSVg0xys5t6oNf2AodEpqM7VdbXx9kIrQfw9JiW-zCNm32WS74PTY44g0dRM4ZS_u0omk48EPjeYEDsexQXjPqhlo9TwoX2Cl-5e8-EuNI1dwU5tBfSktKPT-j37LHTanO6e4QjaxWDXdj5mIMOCNrKRykGPY3mEMP07f" />
                <div className="absolute -top-4 -left-4 bg-[#0058bc] text-white py-2 px-4 rounded-xl font-bold shadow-xl animate-pulse">
                  AI CURATED
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl flex justify-around p-4 border border-[#bfcaba]/10">
          <Link to="/"><span className="material-symbols-outlined text-zinc-400">dashboard</span></Link>
          <Link to="/input"><span className="material-symbols-outlined text-zinc-400">auto_awesome</span></Link>
          <button onClick={() => navigate('/input')} className="w-12 h-12 -mt-8 bg-[#0d631b] rounded-2xl shadow-xl flex items-center justify-center text-white">
            <span className="material-symbols-outlined">add</span>
          </button>
          <Link to="/analysis"><span className="material-symbols-outlined text-zinc-400">insights</span></Link>
          <Link to="/profile"><span className="material-symbols-outlined text-[#0d631b]" style={{fontVariationSettings:"'FILL' 1"}}>settings</span></Link>
        </div>
      </div>
    </div>
  );
}
