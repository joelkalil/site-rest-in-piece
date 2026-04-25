import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const listaNegraNames = [
  'Dark x Haavoc',
  'Botelho',
  'TopaComHalls?',
  'Rubens007',
  'ChuckZim e Los Imundos',
  'Smook',
  'GilPontes',
  'AnaoBolado',
  'Dark Heitor',
  'GostozãoSZ',
  'Homer',
  'black-dragon-hiden',
  'JapaBr',
  'Th3 3nd',
  'Leo17Matador',
  'DANTHIX',
  'Cyan Stripe',
  'King Mts',
  'Bermudes',
  'The Finger of God',
  'Dick Dastardly',
  'King Beppler',
  'ZeNoS TxZ',
  'PaiNJuVeNaL',
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

interface TraitorCardProps {
  name: string
}

function TraitorCard({ name }: TraitorCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03, borderColor: '#cc3333', boxShadow: '0 0 12px rgba(204,51,51,0.4)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        background: 'rgba(20,0,0,0.92)',
        border: '1px solid rgba(180,0,0,0.7)',
        borderRadius: '4px',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        cursor: 'default',
      }}
    >
      <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>💀</span>
      <span
        style={{
          fontFamily: 'Cinzel, serif',
          fontSize: '0.78rem',
          fontWeight: 700,
          color: '#e0a0a0',
          textAlign: 'center',
          letterSpacing: '0.05em',
          textShadow: '0 1px 6px rgba(0,0,0,1)',
        }}
      >
        {name}
      </span>
      <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>💀</span>
    </motion.div>
  )
}

export default function ListaNegra() {
  return (
    <PageWrapper bgImage="/images/lista_negra/background.png" overlayColor="rgba(0,0,0,0.78)">
      <section className="min-h-screen px-4 py-24">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">

          {/* Hero art */}
          <motion.img
            src="/images/lista_negra/lista_negra.png"
            alt="Traidor é Pior que Inimigo"
            className="lista-negra-art w-full object-contain"
            style={{ maxHeight: '420px' }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />

          {/* Impact phrase */}
          <p
            className="text-center text-lg italic max-w-2xl"
            style={{
              fontFamily: 'Cinzel, serif',
              color: '#cc3333',
            }}
          >
            "Na RIP, traidor não tem segunda chance. Esses nomes estão gravados para sempre."
          </p>

          {/* Section title — red variant */}
          <div className="flex flex-col items-center gap-3 mb-2 w-full">
            <h2
              className="text-2xl md:text-3xl text-center tracking-widest"
              style={{
                fontFamily: '"Cinzel Decorative", serif',
                color: '#cc3333',
                textShadow: '0 0 20px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,1), 1px 1px 0px rgba(0,0,0,0.8)',
              }}
            >
              LISTA NEGRA
            </h2>
            <div
              className="w-48 h-0.5"
              style={{
                background: 'linear-gradient(90deg, transparent, #cc3333, transparent)',
              }}
            />
          </div>

          {/* Traitor grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {listaNegraNames.map((name) => (
              <TraitorCard key={name} name={name} />
            ))}
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  )
}
