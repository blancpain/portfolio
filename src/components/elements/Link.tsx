import { motion } from 'framer-motion';

type LinkProps = {
  href: string;
  children: JSX.Element | JSX.Element[];
};

export function Link({ href, children }: LinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="view">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        {children}
      </motion.div>
    </a>
  );
}
