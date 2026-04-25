import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import SectionTitle from '../components/SectionTitle'
import SkullFrame from '../components/SkullFrame'

interface RipadoMember {
  name: string
  file: string | null
}

const BASE = '/images/ripados_oficiais'

function imgSrc(file: string): string {
  return `${BASE}/${encodeURIComponent(file)}`
}

// Order follows the original site; additional discovered members appended at end
const ripados: RipadoMember[] = [
  { name: 'RiPaDo By DeusBolado',   file: '- RiPaDo By DeusBolado -.jpg' },
  { name: 'RiPaDo By Oblivion',     file: '- RiPaDo By Oblivion -.jpg' },
  { name: 'RiPaDo By SemAlmas',     file: '- RiPaDo By SemAlmas -.jpg' },
  { name: 'RiPaDo By Google',       file: '- RiPaDo By Google -.jpg' },
  { name: 'RiPaDo By Trefu12',      file: '- RiPaDo By Trefu12 -.png' },
  { name: 'RiPaDo By Uruburguer',   file: '- RiPaDo By Uruburguer -.jpg' },
  { name: 'RiPaDo By Governador',   file: '- RiPaDo By Governador -.png' },
  { name: 'RiPaDo By Twofaces',     file: '- RiPaDo By Twofaces -.jpg' },
  { name: 'RiPaDo By Magoga',       file: '- RiPaDo By Magoga -.jpg' },
  { name: 'RiPaDo By Evair',        file: '- RiPaDo By Evair -.jpg' },
  { name: 'RiPaDo By Meta',         file: '- RiPaDo By Meta -.jpg' },
  { name: 'RiPaDo By Friedrich',    file: '- RiPaDo By Friedrich -.png' },
  { name: 'RiPaDo By Brazino777',   file: '- RiPaDo By Brazino777  -.jpg' },
  { name: 'RiPaDo By Brenno',       file: '- RiPaDo By Brenno -.png' },
  { name: 'RiPaDo By GodCaveira',   file: '- RiPaDo By GodCaveira -.jpg' },
  { name: 'RiPaDo By Iraki',        file: '- RiPaDo By Iraki   -.jpg' },
  { name: 'RiPaDo By NightWariors', file: '- RiPaDo By NightWariors  -.png' },
  { name: 'RiPaDo By Righzeira',    file: '- RiPaDo By Righzeira  -.png' },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
}

export default function RipadosOficiais() {
  return (
    <PageWrapper>
      <section className="min-h-screen px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="RIPADOS OFICIAIS" />

          <p
            className="text-center text-lg italic mb-12"
            style={{
              fontFamily: '"Crimson Text", serif',
              color: 'var(--color-text-muted)',
            }}
          >
            Estes guerreiros vestiram a tag. A RIP os reconhece.
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {ripados.map((member) => (
              <motion.div key={member.name} variants={cardVariants}>
                <SkullFrame
                  name={member.name}
                  src={member.file ? imgSrc(member.file) : null}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
