import React from 'react';
import StarField from './components/StarField';
import RegistrationForm from './components/RegistrationForm';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0015] via-[#0d0030] to-[#050020] px-5 py-10 font-['Exo_2',sans-serif] overflow-hidden select-none">
      {/* Memanggil Animasi Bintang */}
      <StarField />

      {/* Nebula & Planet Dekorasi */}
      <div className="absolute w-[400px] h-[300px] rounded-full bg-gradient-to-br from-[#7c3aed] to-transparent filter blur-[60px] opacity-20 top-[-80px] left-[-100px] pointer-events-none" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#1d4ed8] to-transparent filter blur-[60px] opacity-20 bottom-[-100px] right-[-80px] pointer-events-none" />
      <div className="absolute w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#7c3aed] to-[#2d1b69] top-3 right-10 opacity-50 shadow-[0_0_20px_rgba(124,58,237,0.3)] animate-float" />
      <div className="absolute w-[30px] h-[30px] rounded-full bg-gradient-to-br from-[#db2777] to-[#7c1d52] bottom-20 left-5 opacity-40 animate-float" style={{ animationDelay: '2s' }} />

      {/* Roket & UFO Lintasan */}
      <div className="absolute text-[22px] filter drop-shadow-[0_0_6px_#a78bfa] animate-fly" style={{ top: '20%', animationDuration: '8s' }}>🚀</div>
      <div className="absolute text-[18px] filter drop-shadow-[0_0_5px_#60a5fa] animate-fly" style={{ top: '50%', animationDuration: '11s', animationDelay: '2s' }}>🛸</div>

      {/* Memanggil Form Utama */}
      <RegistrationForm />
    </div>
  );
}