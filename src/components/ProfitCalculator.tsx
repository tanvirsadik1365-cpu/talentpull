import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const ProfitCalculator = ({ setOpenModal }: any) => {
  const [orders, setOrders] = useState(500);
  const [avgValue, setAvgValue] = useState(25);
  const [commission, setCommission] = useState(30);

  const results = useMemo(() => {
    const monthlyRevenue = orders * avgValue;
    const monthlyLost = monthlyRevenue * (commission / 100);
    const yearlyLost = monthlyLost * 12;

    return { monthlyRevenue, monthlyLost, yearlyLost };
  }, [orders, avgValue, commission]);

  return (
    <section id="calculator" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-12"
        >
          <h2 className="mb-4 text-[2rem] font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
            Calculate Your <span className="text-primary">Delivery App Costs</span>
          </h2>

          <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg">
            See exactly how much commission you're losing every month.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card space-y-6 p-5 sm:space-y-8 sm:p-8"
          >
            <div>
              <label className="mb-3 flex justify-between text-sm font-medium">
                <span>Monthly Orders</span>
                <span className="font-bold text-primary">{orders}</span>
              </label>

              <input
                type="range"
                min={50}
                max={5000}
                step={50}
                value={orders}
                onChange={(event) => setOrders(Number(event.target.value))}
                className="h-2 w-full cursor-pointer rounded-full bg-muted accent-primary"
              />
            </div>

            <div>
              <label className="mb-3 flex justify-between text-sm font-medium">
                <span>Average Order Value</span>
                <span className="font-bold text-primary">£{avgValue}</span>
              </label>

              <input
                type="range"
                min={5}
                max={100}
                step={1}
                value={avgValue}
                onChange={(event) => setAvgValue(Number(event.target.value))}
                className="h-2 w-full cursor-pointer rounded-full bg-muted accent-primary"
              />
            </div>

            <div>
              <label className="mb-3 flex justify-between text-sm font-medium">
                <span>Commission Percentage</span>
                <span className="font-bold text-primary">{commission}%</span>
              </label>

              <input
                type="range"
                min={10}
                max={40}
                step={1}
                value={commission}
                onChange={(event) => setCommission(Number(event.target.value))}
                className="h-2 w-full cursor-pointer rounded-full bg-muted accent-primary"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card flex flex-col justify-center space-y-6 p-5 sm:p-8"
          >
            <div>
              <p className="mb-1 text-sm text-muted-foreground">Monthly Commission Lost</p>
              <p className="text-2xl font-extrabold text-destructive sm:text-3xl">
                £{results.monthlyLost.toLocaleString("en-GB", { minimumFractionDigits: 0 })}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm text-muted-foreground">Yearly Commission Lost</p>
              <p className="text-3xl font-extrabold text-destructive sm:text-4xl">
                £{results.yearlyLost.toLocaleString("en-GB", { minimumFractionDigits: 0 })}
              </p>
            </div>

            <div className="h-px bg-border" />

            <div>
              <p className="mb-1 text-sm text-muted-foreground">Potential Savings with Talentpull</p>
              <p className="text-3xl font-extrabold text-secondary sm:text-4xl">
                £{Math.round(results.yearlyLost * 0.85).toLocaleString("en-GB")}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Estimated yearly savings</p>
            </div>

            <button
              onClick={() => setOpenModal(true)}
              className="mt-4 rounded-lg bg-primary px-6 py-3 text-center font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start Free Trial
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;
