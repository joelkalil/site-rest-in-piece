import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import SectionTitle from '../components/SectionTitle'
import GoldDivider from '../components/GoldDivider'

interface StaffMember {
  name: string
  image: string
  paragraphs: string[]
}

const members: StaffMember[] = [
  {
    name: 'RiPaDo By DeusBolado',
    image: '/images/staff_fundador.png',
    paragraphs: [
      'Renan, o nome por trás da conta RiPaDo By DeusBolado, mas conhecido por todos simplesmente como Bolado.',
      'Um nick que ecoa. Polêmico, intenso, impossível de ignorar. Odiado por uns, respeitado por outros, mas nunca esquecido.',
      'Sua verdadeira marca não está apenas nas batalhas travadas, mas naquilo que construiu: a Rest In Peace. Mais do que uma tribo, um legado. Foi ali que Bolado transformou jogadores em um elenco fiel, criando laços que resistiram ao tempo, às derrotas e às traições.',
      'Dessa base nasceram nomes conhecidos como White Walker e Locutor Jardel e momentos eternizados como o lendário "Apoio pelo amor de Deus" — de RegysonJr, no BR103.',
      'Dentro do jogo, uma figura marcante. Fora dele, um exemplo de disciplina e propósito. Renan dedica seu tempo formando caráter, dando aulas de karatê para crianças de áreas carentes e também em condomínios privados ensinando muito mais do que golpes: ensinando respeito e caminho. Além disso, tem sua própria empresa de soluções financeiras, mostrando que estratégia não é só no jogo é na vida.',
    ],
  },
  {
    name: 'Senhor Oblivion',
    image: '/images/staff_staff.png',
    paragraphs: [
      'Paulo, ex-jogador da Corra, não foi apenas mais um nome no jogo, foi o responsável por uma decisão que mudou completamente a trajetória de um BR inteiro.',
      'Quando escolheu se juntar à Rest In Peace, não foi só uma transferência. Foi um movimento estratégico que redefiniu rumos, alianças e o equilíbrio do jogo.',
      'Hoje, lado a lado com Bolado, ocupa a liderança com presença firme e mente afiada. Não é apenas um líder é estrutura, disciplina e execução.',
      'No front, onde muitos hesitam, Paulo é o cara que segura a linha, que coordena, que responde, defendendo com unhas e dentes cada aliado sob ataque.',
      'Fora dele, mantém o mesmo padrão de disciplina. Cuida da sua aparência, treina, evolui porque para ele, constância não é opção, é regra.',
      'Paulo não entrou para a RIP. Ele ajudou a redefinir o que ela é.',
    ],
  },
  {
    name: 'Livioprofight',
    image: '/images/staff_ex_lider.png',
    paragraphs: [
      'Livioprofight, conhecido por muitos como Livio ou Glivio. Um nome que atravessa gerações dentro do Tribal Wars. Hoje é referência e já era no passado.',
      'Carregou nicks que marcaram época como Hienahahaha e Prince of Peace, mas independente do nick o impacto é o mesmo.',
      'Mas Livio nunca foi só habilidade dentro do jogo. Ele protagonizou uma das lutas mais marcantes da comunidade: uma batalha constante contra o suporte, se recusando a ficar na SOMBRA da parcialidade e injustiça. Pagou o preço por isso. Criou inimizades… muitas. Mas conquistou algo maior: respeito e uma legião de aliados que reconhecem sua postura.',
      'Dentro da Rest In Peace, sua contribuição vai além de jogadas. Foi mente estratégica, criando métodos de organização, grupos e estruturas que permanecem vivos até hoje, sendo seguidos como padrão.',
      'E fora do jogo… é onde sua voz ecoa ainda mais forte. Um dos fundadores e hoje o único criador por trás do TribunaTW, um dos canais mais conhecidos da comunidade, Livio transformou conteúdo em influência. Mais do que informar, ele inspirou uma geração inteira.',
      'De social media a criador dedicado em tempo integral, sua trajetória mostra que consistência e visão constroem legado. Livio não joga apenas Tribal Wars. Ele molda a comunidade ao redor dele.',
    ],
  },
  {
    name: 'Farofa Monstro',
    image: '/images/staff_ex_lider_2.png',
    paragraphs: [
      'Todo grupo tem aquele cara que deixa marca. Na RIP, esse nome vem acompanhado de respeito… e de algumas zoeiras inevitáveis.',
      'Rafael, conhecido como o "carequinha da equipe", ele nunca fugiu das piadas, pelo contrário, abraçou o título. Afinal, como diziam dentro da tribo: "É do careca que eles gostam" — e não era só meme, era reconhecimento disfarçado.',
      'Fora do jogo, sua mente sempre foi voltada para análise e precisão, trabalhando com avaliação de estruturas de canos em construções, alguém acostumado a enxergar falhas antes que elas virem problema. E foi exatamente essa mentalidade que ele levou para a liderança.',
      'Sua maior contribuição foi a criação da famosa "Bíblia da RIP", um PDF completo que organizou a tribo de forma inédita. Ali estavam reunidas: Regras de convivência, Diretrizes administrativas, Tutoriais práticos, Explicações claras sobre o uso dos scripts da barra da tribo.',
      'O objetivo era simples: eliminar dúvidas inúteis, evitar desgaste e manter o foco no que realmente importava. E funcionou. Mais do que liderar, ele estruturou. Mais do que mandar, ele previu problemas.',
    ],
  },
]

interface MemberCardProps {
  member: StaffMember
  index: number
}

function MemberCard({ member, index }: MemberCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center md:items-start`}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Photo */}
      <div className="flex-shrink-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-64 md:w-72 h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div className="flex-1 flex flex-col gap-4">
        <h3
          className="font-cinzel text-xl md:text-2xl shimmer-gold"
          style={{ fontFamily: '"Cinzel Decorative", serif' }}
        >
          {member.name}
        </h3>
        <div
          className="w-24 h-px"
          style={{
            background: 'linear-gradient(90deg, var(--color-gold), transparent)',
          }}
        />
        <div className="flex flex-col gap-3">
          {member.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-lg leading-relaxed"
              style={{
                fontFamily: '"Crimson Text", serif',
                color: 'var(--color-text-body)',
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Staff() {
  return (
    <PageWrapper>
      <section className="min-h-screen px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="STAFF" />

          <div className="flex flex-col">
            {members.map((member, i) => (
              <div key={member.name}>
                <MemberCard member={member} index={i} />
                {i < members.length - 1 && <GoldDivider />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
