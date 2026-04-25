import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { awards, type Award } from '../data/awards'

const BASE = '/images/hall_da_fama'

function AwardCard({ badgeImage, title, winner }: Award) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(201,168,76,0.25)' }}
      style={{
        background: 'rgba(15,10,0,0.85)',
        border: '1px solid var(--color-border)',
        borderRadius: '8px',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Trophy image */}
      <img
        src={`${BASE}/${badgeImage}`}
        alt={title}
        loading="lazy"
        style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
      />

      {/* Category title */}
      <div style={{ padding: '12px 16px 8px', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: '"Cinzel Decorative", serif',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-gold-light)',
            lineHeight: 1.4,
          }}
        >
          {title}
        </p>
      </div>

      {/* Gold separator */}
      <div
        style={{
          height: '1px',
          width: '60%',
          margin: '0 auto',
          background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
        }}
      />

      {/* Winner field */}
      <div style={{ padding: '10px 16px 14px' }}>
        {winner === null ? (
          <div
            style={{
              background: 'rgba(30,20,0,0.6)',
              borderRadius: '4px',
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '0.85rem' }}>⏳</span>
            <span
              style={{
                fontFamily: 'Cinzel, serif',
                fontStyle: 'italic',
                fontSize: '0.72rem',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.06em',
              }}
            >
              AINDA NÃO DEFINIDO
            </span>
          </div>
        ) : (
          <div
            style={{
              background: 'rgba(201,168,76,0.15)',
              border: '1px solid var(--color-gold)',
              borderRadius: '4px',
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '1rem' }}>👑</span>
            <span
              style={{
                fontFamily: '"Cinzel Decorative", serif',
                fontSize: '1rem',
                color: 'var(--color-gold-light)',
                textShadow: '0 0 8px rgba(240,208,128,0.4)',
                letterSpacing: '0.04em',
              }}
            >
              {winner}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function HallDaFama() {
  const [mvp, atacante, defensor, apoiador, snipador] = awards

  return (
    <PageWrapper
      bgImage="/images/hall_da_fama/background_trophies.png"
      overlayColor="rgba(20,10,0,0.80)"
    >
      <section className="min-h-screen px-4 py-24">
        <div className="flex flex-col items-center gap-10 max-w-5xl mx-auto">

          {/* Banner hero */}
          <motion.img
            src={`${BASE}/hall_da_fama.png`}
            alt="Hall da Fama"
            className="hall-fama-banner w-full object-contain"
            style={{ maxWidth: '700px' }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />

          {/* Subtitle */}
          <p
            className="text-center max-w-xl mx-auto"
            style={{
              fontFamily: 'Cinzel, serif',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
            }}
          >
            Todo mês, os guerreiros que mais se destacaram em batalha são imortalizados aqui.
          </p>

          {/* Award grid:
              Row 1: MVP (full width)
              Row 2: Atacante | Defensor | Apoiador | Snipador (4 cols) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 w-full">

            {/* MVP — linha inteira */}
            <div className="col-span-2 md:col-span-4 flex justify-center">
              <div className="w-full max-w-sm">
                <AwardCard {...mvp} />
              </div>
            </div>

            {/* Atacante · Defensor · Apoiador · Snipador */}
            <AwardCard {...atacante} />
            <AwardCard {...defensor} />
            <AwardCard {...apoiador} />
            <AwardCard {...snipador} />

          </div>

        </div>
      </section>
    </PageWrapper>
  )
}
