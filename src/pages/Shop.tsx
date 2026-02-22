import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppOrderForm from "@/components/WhatsAppOrderForm";
import { ShoppingCart } from "lucide-react";
import productProtein from "@/assets/product-protein.jpg";
import productCreatine from "@/assets/product-creatine.jpg";
import productPre from "@/assets/product-preworkout.jpg";
import productAcc from "@/assets/product-accessories.jpg";

const products = [
  { img: productProtein, name: "Whey Protein Premium", price: "450 MAD", category: "Proteins" },
  { img: productCreatine, name: "Creatine Monohydrate", price: "280 MAD", category: "Creatine" },
  { img: productPre, name: "Pre-Workout Extreme", price: "320 MAD", category: "Pre-workout" },
  { img: productAcc, name: "Gym Accessories Kit", price: "150 MAD", category: "Accessories" },
  { img: productProtein, name: "Casein Night Protein", price: "520 MAD", category: "Proteins" },
  { img: productCreatine, name: "BCAA Recovery", price: "350 MAD", category: "Pre-workout" },
];

const categories = ["All", "Proteins", "Creatine", "Pre-workout", "Accessories"];

const Shop = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [orderForm, setOrderForm] = useState<{ name: string; price: string } | null>(null);

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title={t("shop.title")} />

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-heading text-sm px-5 py-2 rounded-sm tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-sm overflow-hidden group hover-lift"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-xs font-body uppercase tracking-wider">{product.category}</span>
                    <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{product.name}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-heading text-xl font-bold text-primary">{product.price}</span>
                      <button
                        onClick={() => setOrderForm({ name: product.name, price: product.price })}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-sm font-body text-sm font-semibold transition-all duration-300 bg-primary text-primary-foreground hover:shadow-[var(--neon-glow)]"
                      >
                        <ShoppingCart size={16} /> {t("shop.addToCart")}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <WhatsAppOrderForm
        isOpen={!!orderForm}
        onClose={() => setOrderForm(null)}
        itemName={orderForm?.name || ""}
        itemPrice={orderForm?.price}
        itemType="product"
      />
    </div>
  );
};

export default Shop;
