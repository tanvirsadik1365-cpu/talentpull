import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShoppingBag, TrendingUp } from "lucide-react";

const Hero = ({ setOpenModal }: any) => {

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-24 md:pt-32 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container-main grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Stop Giving{" "}
            <span className="text-primary">30%</span>{" "}
            Of Your Orders To Delivery Apps
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Discover how much profit delivery platforms are taking
            from your restaurant and see how Talentpull helps you grow direct orders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <button
  onClick={() => setOpenModal(true)}
  className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity text-center animate-pulse-glow"
>
  Start Free Trial
</button>

            <a
              href="#audit"
              className="px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-lg hover:bg-accent transition-colors text-center flex items-center justify-center gap-2"
            >
              Run Free Growth Audit
              <ArrowRight size={18} />
            </a>

          </div>
        </motion.div>


        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex flex-col items-center lg:block"
        >

          {/* Glow */}
          <div className="absolute w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] bg-primary/20 blur-[120px] rounded-full" />


          {/* Phone */}
          <motion.img
            src="/mobile.png"
            alt="Mobile ordering system"
            className="
              relative z-10
              w-[180px]
              sm:w-[200px]
              md:w-[210px]
              lg:w-[220px]
              drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]
            "
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />


          {/* Dashboard Card */}
          <div
            className="
              glass-card
              p-6
              rounded-2xl
              mt-6
              lg:mt-0
              lg:absolute
              lg:left-[220px]
              lg:top-1/2
              lg:-translate-y-1/2
              w-[300px]
              sm:w-[340px]
              lg:w-[360px]
              opacity-95
            "
          >

            {/* Chart */}
            <div className="bg-accent rounded-xl p-4 mb-4">

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <ShoppingBag className="text-primary" size={20}/>
                </div>

                <div>
                  <p className="font-semibold text-sm">Direct Orders</p>
                  <p className="text-xs text-muted-foreground">This month</p>
                </div>
              </div>


              {/* Bars */}
              <div className="flex items-end gap-2 h-24">
                {[35,45,40,60,55,70,85,75,90,80,95,100].map((h,i)=>(
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-primary"
                    initial={{height:0}}
                    animate={{height:`${h}%`}}
                    transition={{duration:0.5, delay:0.5 + i*0.05}}
                  />
                ))}
              </div>

            </div>


            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">

              <div className="glass-card p-3 rounded-lg">

                <div className="flex items-center gap-2 mb-1">
                  <BarChart3 className="text-secondary" size={16}/>
                  <span className="text-xs text-muted-foreground">
                    SEO Score
                  </span>
                </div>

                <p className="text-2xl font-bold text-secondary">
                  98
                </p>

              </div>


              <div className="glass-card p-3 rounded-lg">

                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="text-primary" size={16}/>
                  <span className="text-xs text-muted-foreground">
                    Revenue
                  </span>
                </div>

                <p className="text-2xl font-bold text-primary">
                  +37%
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;