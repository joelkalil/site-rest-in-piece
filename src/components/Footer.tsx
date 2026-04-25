export default function Footer() {
  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{
        backgroundImage: "url('/images/footer_background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.80)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center gap-4">
        {/* Gold separator */}
        <div
          className="w-48 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
          }}
        />

        <img
          src="/images/rest_in_piece_logo.png"
          alt="Rest In Peace"
          className="h-20 w-auto object-contain opacity-90"
        />

        <div
          className="w-48 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
          }}
        />

        <p
          className="font-cinzelPlain text-sm tracking-widest text-center"
          style={{ color: 'var(--color-text-muted)' }}
        >
          RIP — Copyright © — 2018
        </p>
        <p
          className="font-cinzelPlain text-xs tracking-wider"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
