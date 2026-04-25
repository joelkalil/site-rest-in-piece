import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const paragraphs = [
  'A Rest In Peace nasceu no BR92, onde tudo começou na pressão e na vontade de vencer. Com o tempo, evoluiu até se fundir à Irmandade da Morte, absorvendo uma mentalidade fria, direta e sem espaço pra fraqueza.',
  'Aqui, cada integrante assume um compromisso real: vestir essa tag significa aceitar ser descartado em várias outras por rivalidade. Não é sobre conveniência… é sobre escolha.',
  'Somos uma tribo de amigos e contratações feitas com critério, gente que entra sabendo exatamente o que quer: competir, evoluir e vencer. Não existe espaço pra indecisão, nem pra quem joga em dois lados.',
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Home() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <motion.img
            src="/images/rest_in_piece_logo.png"
            alt="Rest In Peace"
            className="w-260 md:w-200 h-auto object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          {/* Title */}
          <motion.h1
            className="font-cinzel text-3xl md:text-5xl lg:text-6xl tracking-widest shimmer-gold leading-tight"
            style={{ fontFamily: '"Cinzel Decorative", serif' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            BEM VINDOS A<br />REST IN PEACE
          </motion.h1>

          {/* Divider */}
          <motion.div
            className="w-48 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />

          {/* Paragraphs */}
          <motion.div
            className="flex flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                className="font-crimson text-lg md:text-xl leading-relaxed"
                style={{
                  fontFamily: '"Crimson Text", serif',
                  color: 'var(--color-text-body)',
                }}
                variants={itemVariants}
              >
                {text}
              </motion.p>
            ))}

            {/* Highlight sentence */}
            <motion.p
              className="text-xl md:text-2xl italic font-semibold mt-2"
              style={{
                fontFamily: '"Crimson Text", serif',
                color: 'var(--color-gold-light)',
                textShadow: '0 0 16px rgba(240,208,128,0.4)',
              }}
              variants={itemVariants}
            >
              Lealdade aqui não se cobra… se prova.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
