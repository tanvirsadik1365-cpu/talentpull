import type { CSSProperties } from "react";
import { ArrowRight, BarChart3, ShoppingBag, TrendingUp } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";

const Hero = ({ setOpenModal }: any) => {
  const monthlyBars = [35, 45, 40, 60, 55, 70, 85, 75, 90, 80, 95, 100];

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden section-padding pt-24 md:pt-32">

      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container-main grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">

        {/* LEFT TEXT */}
        <div className="hero-reveal relative z-20">

          <h1 className="mb-5 text-[2.25rem] font-extrabold leading-[1.05] sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
            Stop Giving{" "}
            <span className="text-primary">30%</span>{" "}
            Of Your Orders To Delivery Apps
          </h1>

          <p className="mb-7 max-w-lg text-base text-muted-foreground sm:text-lg md:mb-8 md:text-xl">
            Discover how much profit delivery platforms are taking
            from your restaurant and see how Talentpull helps you grow direct orders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <button
              onClick={() => setOpenModal(true)}
              className="animate-pulse-glow will-change-transform rounded-xl bg-primary px-6 py-3.5 text-center text-base font-bold text-primary-foreground shadow-[0_14px_36px_rgba(255,122,61,0.24)] transition-opacity hover:opacity-90 sm:px-8 sm:py-4 sm:text-lg"
            >
              Start Free Trial
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("#audit")}
              className="flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 text-center text-base font-semibold text-foreground transition-colors hover:bg-accent sm:px-8 sm:py-4 sm:text-lg"
            >
              Run Free Growth Audit
              <ArrowRight size={18} />
            </button>

          </div>
        </div>


        {/* RIGHT VISUAL */}
        <div className="hero-reveal hero-reveal-delay relative z-10 flex flex-col items-center lg:block">

          {/* Glow */}
          <div className="absolute w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] bg-primary/20 blur-[120px] rounded-full" />


          {/* Phone */}
          <div className="hero-float relative z-10">
            <picture>
              <source srcSet="/mobile.avif" type="image/avif" />
              <source srcSet="/mobile.webp" type="image/webp" />
              <img
                src="/mobile-fallback.png"
                alt="Mobile ordering system"
                width={4396}
                height={8192}
                fetchPriority="high"
                decoding="async"
                className="
                  block
                  w-[160px]
                  sm:w-[200px]
                  md:w-[210px]
                  lg:w-[220px]
                  drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]
                "
              />
            </picture>
          </div>


          {/* Dashboard Card */}
          <div
            className="
              glass-card
              p-4
              rounded-2xl
              mt-4
              lg:mt-0
              lg:absolute
              lg:left-[220px]
              lg:top-1/2
              lg:-translate-y-1/2
              w-full
              max-w-[320px]
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
                {monthlyBars.map((h, i) => (
                  <div
                    key={i}
                    className="hero-bar-grow flex-1 rounded-t bg-gradient-to-t from-primary/60 to-primary"
                    style={
                      {
                        "--bar-delay": `${0.5 + i * 0.05}s`,
                        height: `${h}%`,
                      } as CSSProperties
                    }
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

        </div>

      </div>

    </section>
  );
};

export default Hero;
