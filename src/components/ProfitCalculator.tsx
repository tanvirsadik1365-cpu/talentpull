import { useState, useMemo } from "react";
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Calculate Your <span className="text-primary">Delivery App Costs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            See exactly how much commission you're losing every month.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 space-y-8"
          >
            <div>
              <label className="flex justify-between text-sm font-medium mb-3">
                <span>Monthly Orders</span>
                <span className="text-primary font-bold">{orders}</span>
              </label>
              <input
                type="range"
                min={50}
                max={5000}
                step={50}
                value={orders}
                onChange={(e) => setOrders(Number(e.target.value))}
                className="w-full accent-primary h-2 rounded-full bg-muted cursor-pointer"
              />
            </div>
            <div>
              <label className="flex justify-between text-sm font-medium mb-3">
                <span>Average Order Value</span>
                <span className="text-primary font-bold">£{avgValue}</span>
              </label>
              <input
                type="range"
                min={5}
                max={100}
                step={1}
                value={avgValue}
                onChange={(e) => setAvgValue(Number(e.target.value))}
                className="w-full accent-primary h-2 rounded-full bg-muted cursor-pointer"
              />
            </div>
            <div>
              <label className="flex justify-between text-sm font-medium mb-3">
                <span>Commission Percentage</span>
                <span className="text-primary font-bold">{commission}%</span>
              </label>
              <input
                type="range"
                min={10}
                max={40}
                step={1}
                value={commission}
                onChange={(e) => setCommission(Number(e.target.value))}
                className="w-full accent-primary h-2 rounded-full bg-muted cursor-pointer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col justify-center space-y-6"
          >
            <div>
              <p className="text-sm text-muted-foreground mb-1">Monthly Commission Lost</p>
              <p className="text-3xl font-extrabold text-destructive">
                £{results.monthlyLost.toLocaleString("en-GB", { minimumFractionDigits: 0 })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Yearly Commission Lost</p>
              <p className="text-4xl font-extrabold text-destructive">
                £{results.yearlyLost.toLocaleString("en-GB", { minimumFractionDigits: 0 })}
              </p>
            </div>
            <div className="h-px bg-border" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">Potential Savings with Talentpull</p>
              <p className="text-4xl font-extrabold text-secondary">
                £{Math.round(results.yearlyLost * 0.85).toLocaleString("en-GB")}
              </p>
              <p className="text-xs text-muted-foreground mt-1">Estimated yearly savings</p>
            </div>
            <button
             onClick={() => setOpenModal(true)}
             className="mt-4 block text-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
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
