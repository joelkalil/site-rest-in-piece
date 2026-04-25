import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import SectionTitle from '../components/SectionTitle'
import GoldDivider from '../components/GoldDivider'

const BASE = '/images/mais_infos'
const SHIRT_IMAGES = ['blusas_1.jpg', 'blusas_2.jpg']
const PIX_KEY = '21982861956'

// ─── PIX Block ────────────────────────────────────────────────────────────────

function PixBlock() {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(PIX_KEY).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [])

  return (
    <div
      style={{
        background: 'rgba(201,168,76,0.08)',
        border: '1px solid var(--color-gold)',
        borderRadius: '6px',
        padding: '16px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <p
        style={{
          fontFamily: 'Cinzel, serif',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-gold)',
        }}
      >
        Faça o PIX do X-Tudo
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '1.1rem' }}>📱</span>
        <span
          style={{
            fontFamily: '"Crimson Text", serif',
            fontSize: '1.25rem',
            color: 'var(--color-text-body)',
            letterSpacing: '0.04em',
          }}
        >
          Chave: {PIX_KEY}
        </span>
        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'rgba(201,168,76,0.15)',
            border: '1px solid var(--color-gold)',
            borderRadius: '4px',
            padding: '4px 10px',
            cursor: 'pointer',
            fontFamily: 'Cinzel, serif',
            fontSize: '0.72rem',
            color: 'var(--color-gold-light)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'background 0.2s',
          }}
        >
          {copied ? '✅' : '📋'}{' '}
          {copied ? 'Copiado!' : 'Copiar'}
        </motion.button>
      </div>
    </div>
  )
}

// ─── Shirt Carousel ──────────────────────────────────────────────────────────

function ShirtCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % SHIRT_IMAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [paused])

  const prev = () => setCurrent((i) => (i - 1 + SHIRT_IMAGES.length) % SHIRT_IMAGES.length)
  const next = () => setCurrent((i) => (i + 1) % SHIRT_IMAGES.length)

  return (
    <div
      className="mx-auto w-full"
      style={{ maxWidth: '700px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          position: 'relative',
          border: '2px solid var(--color-border)',
          borderRadius: '8px',
          overflow: 'hidden',
          background: 'rgba(10,8,5,0.7)',
        }}
      >
        {/* Image area */}
        <div style={{ position: 'relative', minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={`${BASE}/${SHIRT_IMAGES[current]}`}
              alt={`Camisa RIP modelo ${current + 1}`}
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                maxHeight: '500px',
                width: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </AnimatePresence>

          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Imagem anterior"
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              color: 'var(--color-gold)',
              fontFamily: 'Cinzel, serif',
              fontSize: '1.2rem',
              cursor: 'pointer',
              padding: '8px 14px',
              lineHeight: 1,
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.2)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--color-gold-light)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.6)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--color-gold)'
            }}
          >
            ←
          </button>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Próxima imagem"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              color: 'var(--color-gold)',
              fontFamily: 'Cinzel, serif',
              fontSize: '1.2rem',
              cursor: 'pointer',
              padding: '8px 14px',
              lineHeight: 1,
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.2)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--color-gold-light)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.6)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--color-gold)'
            }}
          >
            →
          </button>
        </div>

        {/* Dot indicators */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            padding: '10px 0',
          }}
        >
          {SHIRT_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir para imagem ${i + 1}`}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                background: i === current ? 'var(--color-gold-light)' : 'var(--color-gold-dark)',
                opacity: i === current ? 1 : 0.5,
                transition: 'background 0.2s, opacity 0.2s',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MaisInfos() {
  return (
    <PageWrapper>
      <section className="min-h-screen px-4 py-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">

          {/* Section 1 — VIP */}
          <div className="flex flex-col gap-8">
            <SectionTitle title="SEJA MEMBRO VIP" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto w-full">
              {/* X-Tudo photo */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              >
                <img
                  src={`${BASE}/x_tudo.jpg`}
                  alt="X-Tudo — ritual de entrada na RIP"
                  loading="lazy"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    border: '2px solid var(--color-gold)',
                    boxShadow: '0 0 30px rgba(201,168,76,0.3)',
                    display: 'block',
                  }}
                />
              </motion.div>

              {/* Text + PIX */}
              <div className="flex flex-col gap-6">
                <h2
                  style={{
                    fontFamily: '"Cinzel Decorative", serif',
                    fontSize: '1.4rem',
                    color: 'var(--color-gold-light)',
                    lineHeight: 1.3,
                  }}
                >
                  Seja Membro VIP
                </h2>

                <p
                  style={{
                    fontFamily: '"Crimson Text", serif',
                    fontStyle: 'italic',
                    fontSize: '1.15rem',
                    color: 'var(--color-text-body)',
                    lineHeight: 1.7,
                  }}
                >
                  Para fazer parte da elite da RIP, o ritual de entrada é simples: faça o PIX do
                  X-Tudo pro Bolado. Não é uma taxa. É uma prova de caráter.
                </p>

                <PixBlock />
              </div>
            </div>
          </div>

          <GoldDivider />

          {/* Section 2 — Shirts */}
          <div className="flex flex-col gap-6 items-center">
            <SectionTitle title="CAMISA REST IN PEACE" />

            <p
              style={{
                fontFamily: '"Crimson Text", serif',
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: 'var(--color-text-muted)',
                textAlign: 'center',
              }}
            >
              "Adquira e venha jogar o Tribal Wars no modo Very Hard"
            </p>

            <ShirtCarousel />
          </div>

        </div>
      </section>
    </PageWrapper>
  )
}
