import { motion } from 'framer-motion'

interface SkullFrameProps {
  name: string
  src: string | null
}

const SkullSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-gold)" aria-hidden="true">
    <path d="M12 2C7.03 2 3 6.03 3 11c0 2.97 1.45 5.59 3.68 7.22V20a1 1 0 0 0 1 1h8.64a1 1 0 0 0 1-1v-1.78C19.55 16.59 21 13.97 21 11c0-4.97-4.03-9-9-9zm-2 14v-2H9v2H7v-1.5c-1.8-1.07-3-3.01-3-5.5 0-3.87 3.13-7 7-7s7 3.13 7 7c0 2.49-1.2 4.43-3 5.5V16h-2zm0-5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>
)

export default function SkullFrame({ name, src }: SkullFrameProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        position: 'relative',
        width: '200px',
        height: '240px',
        border: '2px solid var(--color-gold)',
        borderRadius: '4px',
        boxShadow: '0 0 16px rgba(201,168,76,0.25)',
        overflow: 'hidden',
        cursor: 'default',
        flexShrink: 0,
      }}
    >
      {/* Photo or placeholder */}
      {src ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          style={{
            width: '100%',
            height: '85%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '85%',
            background: 'linear-gradient(135deg, #0a0a0a, #1a1208)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: '"Cinzel Decorative", serif',
              fontSize: '3rem',
              color: 'var(--color-gold)',
              opacity: 0.4,
              lineHeight: 1,
            }}
          >
            ?
          </span>
        </div>
      )}

      {/* Corner skulls */}
      <span style={{ position: 'absolute', top: '4px', left: '4px', lineHeight: 0 }}>
        <SkullSVG />
      </span>
      <span style={{ position: 'absolute', top: '4px', right: '4px', lineHeight: 0 }}>
        <SkullSVG />
      </span>

      {/* Name plate */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '15%',
          background: 'linear-gradient(135deg, #3a2608, #c9a84c, #3a2608)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 6px',
        }}
      >
        <span
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.62rem',
            color: '#fff',
            textAlign: 'center',
            letterSpacing: '0.04em',
            lineHeight: 1.2,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {name}
        </span>
      </div>
    </motion.div>
  )
}
