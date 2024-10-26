import { motion } from 'framer-motion';
import RegisterButton from './RegisterButton';
import logo from '../assets/logo.png'; // Update path based on your logo file type
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.img
          src={logo}
          alt="DeFiLore Logo"
          className="logo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="title"
        >
          Your Web3 Brain
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="tagline"
        >
          "One brain to rule them all, one brain to bring them all..."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="description"
        >
          <p>
            In the vast and ever-expanding realms of Web3, Your Web3 Brain stands as a 
            singular source of knowledge and power. Built for the Arbitrum ecosystem, 
            we harness the latest in Retrieval Augmented Generation (RAG) technology 
            to revolutionize blockchain development.
          </p>
        </motion.div>

        <RegisterButton />
      </div>
      {/* Spline container for future animation */}
      <div className="spline-container" />
    </section>
  );
};

export default Hero;
