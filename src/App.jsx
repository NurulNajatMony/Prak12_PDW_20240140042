import StarField from './components/StarField'
import RegistrationForm from './components/RegistrationForm'

const rockets = [
  { emoji: '🚀', size: '22px', cls: 'rocket-r1', filter: 'drop-shadow(0 0 6px #a78bfa)' },
  { emoji: '🛸', size: '18px', cls: 'rocket-r2', filter: 'drop-shadow(0 0 5px #60a5fa)' },
  { emoji: '🚀', size: '14px', cls: 'rocket-r3', filter: 'drop-shadow(0 0 5px #f472b6)' },
  { emoji: '🛸', size: '20px', cls: 'rocket-r4', filter: 'drop-shadow(0 0 6px #34d399)' },
]

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden px-5 py-10"
      style={{ background: 'linear-gradient(135deg, #0a0015 0%, #0d0030 30%, #050020 60%, #0a0015 100%)' }}>

      {/* Stars */}
      <StarField />

      {/* Nebulas */}
      <div className="absolute rounded-full pointer-events-none opacity-[0.18] blur-[60px]"
        style={{ width: 400, height: 300, background: 'radial-gradient(#7c3aed, transparent)', top: -80, left: -100 }} />
      <div className="absolute rounded-full pointer-events-none opacity-[0.18] blur-[60px]"
        style={{ width: 350, height: 350, background: 'radial-gradient(#1d4ed8, transparent)', bottom: -100, right: -80 }} />
      <div className="absolute rounded-full pointer-events-none opacity-[0.18] blur-[60px]"
        style={{ width: 300, height: 200, background: 'radial-gradient(#db2777, transparent)', top: '40%', left: '30%' }} />

      {/* Planets */}
      <div className="absolute rounded-full pointer-events-none opacity-50 planet-float"
        style={{ width: 60, height: 60, top: 12, right: 40,
          background: 'radial-gradient(circle at 35% 35%, #7c3aed, #2d1b69)',
          boxShadow: '0 0 20px rgba(124,58,237,0.3)' }} />
      <div className="absolute rounded-full pointer-events-none opacity-40 planet-float-2"
        style={{ width: 30, height: 30, bottom: 80, left: 20,
          background: 'radial-gradient(circle at 35% 35%, #db2777, #7c1d52)' }} />

      {/* Rockets */}
      {rockets.map((r, i) => (
        <div key={i} className={`absolute pointer-events-none ${r.cls}`}
          style={{ fontSize: r.size, filter: r.filter }}>
          {r.emoji}
        </div>
      ))}

      {/* Card */}
      <div className="relative z-10 max-w-[500px] mx-auto rounded-[20px] p-8"
        style={{
          background: 'rgba(15, 5, 40, 0.75)',
          border: '1px solid rgba(139, 92, 246, 0.4)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 0 40px rgba(109,40,217,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}>

        {/* Header */}
        <div className="text-center mb-7">
          <h2 className="font-orbitron text-[18px] font-bold tracking-[2px] mb-[6px]"
            style={{ background: 'linear-gradient(135deg, #c084fc, #60a5fa, #f472b6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            ✦ PENDAFTARAN PEMINATAN ✦
          </h2>
          <p className="text-[12px] tracking-[1px] font-light" style={{ color: 'rgba(167,139,250,0.6)' }}>
            Information Technology · UMY
          </p>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)' }} />

        {/* Form */}
        <RegistrationForm />

      </div>
    </div>
  )
}
