import { useEffect, useRef } from 'react'

export default function StarField() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    for (let i = 0; i < 120; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      const size = Math.random() * 2.5 + 0.5
      star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        --d: ${(Math.random() * 3 + 1).toFixed(1)}s;
        animation-delay: ${(Math.random() * 3).toFixed(1)}s;
      `
      container.appendChild(star)
    }
    return () => { container.innerHTML = '' }
  }, [])

  return <div ref={ref} className="absolute inset-0 pointer-events-none" />
}
