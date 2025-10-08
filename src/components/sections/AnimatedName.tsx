import { motion } from 'framer-motion';

const AnimatedName = () => {
  return (
    <motion.h1
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
    >
      I'm Mani Durga Kanaparthi
    </motion.h1>
  );
};

export default AnimatedName;
