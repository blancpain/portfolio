import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';

type LinkProps = {
  href: string;
  children: JSX.Element | JSX.Element[];
};

export function Link({ href, children }: LinkProps) {
  const isSmallScreen = useMediaQuery('(max-width: 42em)');
  const hoverScale = isSmallScreen ? 1.05 : 1.2; // use smaller scale on smaller screens

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="view">
      <motion.div whileHover={{ scale: hoverScale }} whileTap={{ scale: 0.8 }}>
        {children}
      </motion.div>
    </a>
  );
}
