import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  overlayColor?: string
}

export default function PageWrapper({
  children,
  overlayColor = 'rgba(0,0,0,0.65)',
}: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="page-bg pt-16"
    >
      {/* Full-viewport overlay — color is customizable per page */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: overlayColor,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {children}
    </motion.div>
  )
}
