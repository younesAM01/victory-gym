"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import WhatsAppOrderForm from "@/components/WhatsAppOrderForm";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount } = useCart();
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCheckout = () => {
    setShowCheckout(true);
    setIsOpen(false);
  };

  const cartItemsText = cart.map((item) => `${item.name} (${item.quantity}x) - ${item.price}`).join("\n");
  const totalPrice = getCartTotal().toFixed(0);

  const cartModal = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-sm p-6 w-full max-w-md max-h-[80vh] overflow-y-auto neon-border border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl font-bold text-foreground">
                {t("shop.title")} ({getCartCount()})
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground font-body">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-4 p-4 bg-secondary rounded-sm"
                    >
                      <div className="flex-1">
                        <h4 className="font-heading font-semibold text-foreground">{item.name}</h4>
                        <p className="text-primary font-heading text-sm">{item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity - 1)}
                          className="w-8 h-8 rounded-sm bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-heading text-foreground w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity + 1)}
                          className="w-8 h-8 rounded-sm bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="w-8 h-8 rounded-sm bg-destructive/20 hover:bg-destructive text-destructive hover:text-destructive-foreground transition-colors flex items-center justify-center ml-2"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-lg text-foreground">Total:</span>
                    <span className="font-heading text-2xl font-bold text-primary">{totalPrice} MAD</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading text-lg px-6 py-4 rounded-sm tracking-wider uppercase hover:shadow-[var(--neon-glow-strong)] transition-all duration-300 hover:scale-105"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const checkoutModal = showCheckout ? (
    <WhatsAppOrderForm
      isOpen={showCheckout}
      onClose={() => {
        setShowCheckout(false);
      }}
      onOrderComplete={() => {
        clearCart();
        setShowCheckout(false);
      }}
      itemName={cartItemsText || "Cart Items"}
      itemPrice={`${totalPrice} MAD`}
      itemType="product"
      cartItems={cart}
    />
  ) : null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-foreground/70 hover:text-primary transition-colors"
      >
        <ShoppingCart size={20} />
        {getCartCount() > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {getCartCount()}
          </span>
        )}
      </button>

      {mounted && createPortal(cartModal, document.body)}
      {mounted && createPortal(checkoutModal, document.body)}
    </>
  );
};

export default Cart;
