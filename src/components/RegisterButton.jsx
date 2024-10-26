import { motion } from 'framer-motion';
import '../styles/RegisterButton.css';

const RegisterButton = () => {
  return (
    <motion.a
      href="https://forms.gle/XLESKEx6xAC2bKk79"
      className="register-button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      Register Now
    </motion.a>
  );
};

export default RegisterButton;
