import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Mr Badrul", role: "Owner, Naira Indian and Bangladeshi cuisine", rating: 5, text: "Talentpull transformed our online presence. We went from 65 to 195 orders per week in just 3 months. Incredible results." },
  { name: "Mr Liton", role: "Manager, Kacchi Dine", rating: 5, text: "We were paying thousands in commission to JustEat. Now we get direct orders and keep all the profit. Wish we'd switched sooner." },
  { name: "Mr Ahmed", role: "Owner, Ruchita", rating: 5, text: "The Growth OS dashboard is a game-changer. I can see exactly where my customers come from and what's working." },
  { name: "Mr Ali", role: "Owner, Rajshahi Restaurant", rating: 5, text: "Professional, responsive, and they genuinely understand the restaurant business. Our Google ranking went from page 3 to page 1." },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Trusted By Restaurants <span className="text-primary">Across The UK</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-primary fill-primary" size={20} />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">4.9/5 average rating</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="text-primary fill-primary" size={14} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">"{r.text}"</p>
              <div>
                <p className="font-semibold text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
