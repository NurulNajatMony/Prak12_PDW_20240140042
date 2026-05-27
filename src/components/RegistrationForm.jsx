import { useState } from 'react'

const PEMINATAN = ['Programming', 'Desain', 'Jaringan', 'Data']
const ANGKATAN  = ['2021', '2022', '2023', '2024', '2025']

function Field({ label, children }) {
  return (
    <div className="mb-[18px]">
      <label className="block text-[11px] font-medium tracking-[1.5px] text-[#a78bfa] uppercase mb-[7px]">
        {label}
      </label>
      {children}
    </div>
  )
}

export default function RegistrationForm() {
  const [form, setForm]       = useState({ nama: '', nim: '', peminatan: '', angkatan: '', tanggal: '', alamat: '' })
  const [result, setResult]   = useState(null)
  const [error, setError]     = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    const { nama, nim, peminatan, angkatan, tanggal, alamat } = form
    if (!nama || !nim || !peminatan || !angkatan || !tanggal || !alamat) {
      setError('⚠️ Harap isi semua field terlebih dahulu!')
      return
    }
    setError('')

    const tglFormat = new Date(tanggal).toLocaleDateString('id-ID', {
      day: '2-digit', month: 'long', year: 'numeric'
    })

    setResult({ ...form, tanggalFormat: tglFormat })
    setForm({ nama: '', nim: '', peminatan: '', angkatan: '', tanggal: '', alamat: '' })

    setTimeout(() => {
      document.getElementById('result-box')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 100)
  }

  return (
    <>
      {/* Nama */}
      <Field label="Nama Lengkap">
        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Masukkan nama anda"
          className="galaxy-input"
        />
      </Field>

      {/* NIM */}
      <Field label="NIM">
        <input
          type="text"
          name="nim"
          value={form.nim}
          onChange={handleChange}
          placeholder="Masukkan NIM anda"
          className="galaxy-input"
        />
      </Field>

      {/* Peminatan */}
      <Field label="Peminatan Bidang">
        <div className="grid grid-cols-2 gap-2">
          {PEMINATAN.map(p => (
            <label
              key={p}
              className={`flex items-center gap-2 rounded-lg px-3 py-[9px] cursor-pointer border transition-all duration-200 text-xs tracking-[0.5px]
                ${form.peminatan === p
                  ? 'bg-[rgba(124,58,237,0.2)] border-[#7c3aed] text-[#e2d9f3] shadow-[0_0_12px_rgba(124,58,237,0.2)]'
                  : 'bg-[rgba(255,255,255,0.03)] border-[rgba(139,92,246,0.25)] text-[#c4b5fd]'
                }`}
            >
              <input
                type="radio"
                name="peminatan"
                value={p}
                checked={form.peminatan === p}
                onChange={handleChange}
                className="hidden"
              />
              <span className={`w-2 h-2 rounded-full border-2 flex-shrink-0 transition-all duration-200
                ${form.peminatan === p ? 'bg-[#a78bfa] border-[#a78bfa] shadow-[0_0_6px_#a78bfa]' : 'border-[#6d28d9]'}`}
              />
              {p}
            </label>
          ))}
        </div>
      </Field>

      {/* Angkatan */}
      <Field label="Pilih Angkatan">
        <select name="angkatan" value={form.angkatan} onChange={handleChange} className="galaxy-input">
          <option value="">— Pilih Angkatan —</option>
          {ANGKATAN.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </Field>

      {/* Tanggal */}
      <Field label="Tanggal Lahir">
        <input
          type="date"
          name="tanggal"
          value={form.tanggal}
          onChange={handleChange}
          className="galaxy-input"
        />
      </Field>

      {/* Alamat */}
      <Field label="Alamat">
        <textarea
          name="alamat"
          value={form.alamat}
          onChange={handleChange}
          placeholder="Tulis alamat lengkap anda"
          className="galaxy-input"
        />
      </Field>

      {/* Glow Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(96,165,250,0.5)] via-[rgba(167,139,250,0.8)] to-transparent my-5 glow-line" />

      {/* Error */}
      {error && (
        <p className="text-[#f472b6] text-xs mb-3 text-center">{error}</p>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full py-[13px] rounded-[10px] border-none cursor-pointer font-orbitron text-[13px] font-semibold tracking-[2px] text-white
          bg-gradient-to-br from-[#7c3aed] to-[#2563eb] transition-all duration-150
          shadow-[0_4px_20px_rgba(124,58,237,0.4)] mt-2 relative overflow-hidden
          hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(124,58,237,0.55)]
          active:scale-[0.98]"
      >
        ⬡ KIRIM DATA ⬡
      </button>

      {/* Result Box */}
      {result && (
        <div
          id="result-box"
          className="mt-5 bg-[rgba(109,40,217,0.12)] border border-[rgba(139,92,246,0.4)] rounded-xl p-4 fade-in-up"
        >
          <div className="font-orbitron text-[11px] text-[#7c3aed] tracking-[2px] uppercase mb-[10px]">
            ◈ Data Terkirim
          </div>
          <p className="text-[13px] text-[#c4b5fd] leading-loose font-exo">
            <strong className="text-[#a78bfa] font-medium">Nama</strong>      : {result.nama}<br />
            <strong className="text-[#a78bfa] font-medium">NIM</strong>       : {result.nim}<br />
            <strong className="text-[#a78bfa] font-medium">Peminatan</strong> : {result.peminatan}<br />
            <strong className="text-[#a78bfa] font-medium">Angkatan</strong>  : {result.angkatan}<br />
            <strong className="text-[#a78bfa] font-medium">Tanggal</strong>   : {result.tanggalFormat}<br />
            <strong className="text-[#a78bfa] font-medium">Alamat</strong>    : {result.alamat}
          </p>
        </div>
      )}
    </>
  )
}
