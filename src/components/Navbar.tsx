import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/home', label: 'HOME' },
  { to: '/staff', label: 'STAFF' },
  { to: '/ripados-oficiais', label: 'RIPADOS OFICIAIS' },
  { to: '/lista-negra', label: 'LISTA NEGRA' },
  { to: '/hall-da-fama', label: 'HALL DA FAMA' },
  { to: '/mais-infos', label: 'MAIS INFOS' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo + brand */}
        <NavLink to="/home" className="flex-shrink-0 flex items-center gap-3">
          <img
            src="/images/header_logo.png"
            alt="Rest In Peace"
            className="h-12 w-auto object-contain"
          />
          <span
            className="hidden sm:block font-cinzelPlain text-sm tracking-widest"
            style={{ color: 'var(--color-gold-light)', textShadow: '0 0 8px rgba(240,208,128,0.35)' }}
          >
            Rest In Peace
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to}>
                {({ isActive }) => (
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="block font-cinzelPlain text-xs tracking-widest uppercase cursor-pointer select-none"
                    style={{
                      color: isActive ? 'var(--color-gold-light)' : 'var(--color-gold)',
                      borderBottom: isActive ? '1px solid var(--color-gold-light)' : '1px solid transparent',
                      paddingBottom: '2px',
                      transition: 'color 0.2s, border-color 0.2s, text-shadow 0.2s',
                      textShadow: isActive ? '0 0 10px rgba(240,208,128,0.5)' : 'none',
                    }}
                  >
                    {label}
                  </motion.span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Discord icon */}
        <motion.a
          href="https://discord.com/invite/UeZ3AyF2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord da Rest In Peace"
          whileHover={{ y: -2, scale: 1.1 }}
          className="hidden md:flex items-center"
          style={{ color: 'var(--color-gold)', transition: 'color 0.2s' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
          </svg>
        </motion.a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all"
              style={{ background: 'var(--color-gold)' }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(0,0,0,0.92)', borderTop: '1px solid var(--color-border)' }}
          >
            <ul className="flex flex-col py-4">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-6 py-3 font-cinzelPlain text-xs tracking-widest uppercase ${
                        isActive ? 'text-gold-light' : 'text-gold'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href="https://discord.com/invite/UeZ3AyF2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 font-cinzelPlain text-xs tracking-widest uppercase"
                  style={{ color: 'var(--color-gold)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                  </svg>
                  Discord
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
