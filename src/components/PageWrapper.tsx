import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  overlayColor?: string
  bgImage?: string
}

export default function PageWrapper({
  children,
  overlayColor = 'rgba(0,0,0,0.65)',
  bgImage,
}: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="page-bg pt-16"
      // Inline style overrides the background-image from .page-bg when a custom bg is provided.
      // The other .page-bg properties (size/position/attachment) are inherited from the class.
      style={bgImage ? { backgroundImage: `url('${bgImage}')` } : undefined}
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
