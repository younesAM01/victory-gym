import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/212522123456"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#ba0b20] flex items-center justify-center shadow-lg whatsapp-pulse hover:scale-110 transition-transform"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.668-1.218-4.762-1.972-7.822-6.794-8.06-7.11-.228-.316-1.918-2.556-1.918-4.876 0-2.32 1.214-3.462 1.646-3.934.39-.426 1.026-.638 1.634-.638.198 0 .376.01.536.018.47.02.706.048 1.016.788.39.926 1.338 3.246 1.454 3.482.118.236.236.554.078.87-.148.324-.278.526-.516.806-.236.278-.496.622-.708.834-.236.236-.482.494-.208.968.278.47 1.234 2.034 2.65 3.294 1.82 1.62 3.354 2.122 3.828 2.358.474.236.75.198 1.026-.118.278-.316 1.194-1.39 1.512-1.868.316-.474.634-.394 1.066-.236.434.158 2.75 1.296 3.224 1.532.474.236.788.354.906.55.116.198.116 1.14-.274 2.24z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
