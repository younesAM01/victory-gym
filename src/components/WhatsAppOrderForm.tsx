import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

interface WhatsAppOrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
  itemPrice?: string;
  itemType: "product" | "program" | "subscription";
}

const WhatsAppOrderForm = ({ isOpen, onClose, itemName, itemPrice, itemType }: WhatsAppOrderFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel = itemType === "product" ? "Product" : itemType === "program" ? "Program" : "Subscription";
    const text = `Hello Victory Gym! 💪\n\n*${typeLabel} Inquiry*\n📦 Item: ${itemName}${itemPrice ? `\n💰 Price: ${itemPrice}` : ""}\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/212522123456?text=${encoded}`, "_blank");
    setName("");
    setEmail("");
    setMessage("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-sm p-8 w-full max-w-md neon-border border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl font-bold text-foreground">Order via WhatsApp</h3>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="bg-secondary rounded-sm p-4 mb-6">
              <p className="text-primary font-heading text-sm tracking-wider uppercase">{itemType}</p>
              <p className="font-heading text-lg font-semibold text-foreground">{itemName}</p>
              {itemPrice && <p className="text-primary font-heading text-xl font-bold mt-1">{itemPrice}</p>}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-body text-sm text-muted-foreground block mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground block mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground block mb-1">Message</label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Any details or questions..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-heading text-lg px-6 py-4 rounded-sm tracking-wider uppercase hover:brightness-110 transition-all duration-300 hover:scale-[1.02]"
              >
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.668-1.218-4.762-1.972-7.822-6.794-8.06-7.11-.228-.316-1.918-2.556-1.918-4.876 0-2.32 1.214-3.462 1.646-3.934.39-.426 1.026-.638 1.634-.638.198 0 .376.01.536.018.47.02.706.048 1.016.788.39.926 1.338 3.246 1.454 3.482.118.236.236.554.078.87-.148.324-.278.526-.516.806-.236.278-.496.622-.708.834-.236.236-.482.494-.208.968.278.47 1.234 2.034 2.65 3.294 1.82 1.62 3.354 2.122 3.828 2.358.474.236.75.198 1.026-.118.278-.316 1.194-1.39 1.512-1.868.316-.474.634-.394 1.066-.236.434.158 2.75 1.296 3.224 1.532.474.236.788.354.906.55.116.198.116 1.14-.274 2.24z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppOrderForm;
