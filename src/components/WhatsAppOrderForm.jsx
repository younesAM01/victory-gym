"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

const WhatsAppOrderForm = ({ isOpen, onClose, onOrderComplete, itemName, itemPrice, itemType, cartItems }) => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error(
        language === "fr"
          ? "Veuillez remplir tous les champs obligatoires"
          : language === "ar"
          ? "يرجى ملء جميع الحقول المطلوبة"
          : "Please fill in all required fields"
      );
      return;
    }

    setIsSubmitting(true);

    const labels =
      language === "fr"
        ? { title: "🛒 Nouvelle Commande (Victory Gym)", name: "Nom", email: "Email", message: "Message", items: "Articles", total: "Total" }
        : language === "ar"
        ? { title: "🛒 طلب جديد (Victory Gym)", name: "الاسم", email: "البريد", message: "رسالة", items: "المنتجات", total: "المجموع" }
        : { title: "🛒 New Order (Victory Gym)", name: "Name", email: "Email", message: "Message", items: "Items", total: "Total" };

    let itemsText = itemName;
    if (cartItems && cartItems.length > 0) {
      itemsText = cartItems
        .map((item) => `• ${item.name} (x${item.quantity}) — ${item.price}`)
        .join("\n");
    }

    let whatsappMessage = `*${labels.title}*\n\n`;
    whatsappMessage += `*${labels.items}:*\n${itemsText}\n`;
    if (itemPrice) whatsappMessage += `\n*${labels.total}:* ${itemPrice}\n`;
    whatsappMessage += `\n*${labels.name}:* ${formData.name}\n`;
    whatsappMessage += `*${labels.email}:* ${formData.email}\n`;
    if (formData.message) whatsappMessage += `*${labels.message}:* ${formData.message}`;

    const phoneNumber = "212777443995";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");

    toast.success(
      language === "fr"
        ? "Redirection vers WhatsApp..."
        : language === "ar"
        ? "جاري التحويل إلى واتساب..."
        : "Redirecting to WhatsApp..."
    );

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);

    if (onOrderComplete) {
      onOrderComplete();
    } else {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-card rounded-sm p-5 sm:p-6 w-full max-w-lg neon-border border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-lg font-bold text-foreground">
                {language === "fr" ? "Finaliser la commande" : language === "ar" ? "إتمام الطلب" : "Complete Your Order"}
              </h3>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Order Summary */}
            <div className="bg-secondary rounded-sm p-3 mb-4 max-h-32 overflow-y-auto">
              <p className="text-primary font-heading text-xs tracking-wider uppercase mb-2">
                {language === "fr" ? "Résumé" : language === "ar" ? "ملخص" : "Summary"}
              </p>
              {cartItems && cartItems.length > 0 ? (
                <div className="space-y-1">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-xs">
                      <span className="font-body text-foreground">
                        {item.name} (x{item.quantity})
                      </span>
                      <span className="font-heading text-primary">{item.price}</span>
                    </div>
                  ))}
                  {itemPrice && (
                    <div className="border-t border-border pt-1 mt-1 flex justify-between items-center">
                      <span className="font-heading text-sm font-semibold text-foreground">Total:</span>
                      <span className="font-heading text-lg font-bold text-primary">{itemPrice}</span>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <p className="font-heading text-sm font-semibold text-foreground">{itemName}</p>
                  {itemPrice && <p className="text-primary font-heading text-base font-bold mt-1">{itemPrice}</p>}
                </>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  {language === "fr" ? "Nom *" : language === "ar" ? "الاسم *" : "Name *"}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-sm px-3 py-2 text-sm text-foreground font-body focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder={language === "fr" ? "Votre nom" : language === "ar" ? "اسمك" : "Your name"}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  {language === "fr" ? "Email *" : language === "ar" ? "البريد *" : "Email *"}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-sm px-3 py-2 text-sm text-foreground font-body focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder={language === "fr" ? "Votre email" : language === "ar" ? "بريدك" : "Your email"}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  {language === "fr" ? "Message" : language === "ar" ? "رسالة" : "Message"}
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-sm px-3 py-2 text-sm text-foreground font-body focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder={language === "fr" ? "Détails ou questions..." : language === "ar" ? "تفاصيل أو أسئلة..." : "Any details or questions..."}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading text-sm px-4 py-3 rounded-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                    {language === "fr" ? "Envoi en cours..." : language === "ar" ? "جاري الإرسال..." : "Sending..."}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {language === "fr" ? "Finaliser la commande" : language === "ar" ? "إتمام الطلب" : "Finalize Order"}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppOrderForm;
