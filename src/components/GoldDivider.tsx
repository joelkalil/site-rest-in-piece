export default function GoldDivider() {
  return (
    <div className="flex items-center justify-center my-12 gap-3">
      <div
        className="flex-1 h-px max-w-[200px]"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-gold))',
        }}
      />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z"
          fill="var(--color-gold)"
          opacity="0.8"
        />
      </svg>
      <div
        className="flex-1 h-px max-w-[200px]"
        style={{
          background: 'linear-gradient(90deg, var(--color-gold), transparent)',
        }}
      />
    </div>
  )
}
