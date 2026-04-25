interface SectionTitleProps {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center gap-3 mb-10">
      <h2
        className="font-cinzel text-2xl md:text-3xl text-center tracking-widest shimmer-gold"
        style={{ fontFamily: '"Cinzel Decorative", serif' }}
      >
        {title}
      </h2>
      <div
        className="w-48 h-0.5"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
        }}
      />
    </div>
  )
}
