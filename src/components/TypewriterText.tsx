import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}

export default function TypewriterText({
  text,
  className = '',
  delay = 0,
  wordDelay = 0.045,
}: TypewriterTextProps) {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i}>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + i * wordDelay, duration: 0.3, ease: 'easeOut' }}
          >
            {word}
          </motion.span>{' '}
        </span>
      ))}
    </span>
  );
}
