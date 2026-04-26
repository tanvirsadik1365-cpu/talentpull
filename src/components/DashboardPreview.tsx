import { motion } from "framer-motion";
import { BarChart3, Users, PoundSterling, TrendingUp, Globe, Share2, Calculator, FileText, Calendar, LayoutDashboard } from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Globe, label: "Website Analysis" },
  { icon: Share2, label: "Social Media Health" },
  { icon: Calculator, label: "Profit Calculator" },
  { icon: FileText, label: "Reports" },
  { icon: Calendar, label: "Meetings" },
];

const DashboardPreview = () => {
  return (
    <section id="dashboard-preview" data-track-section="Dashboard Preview" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Your Growth <span className="text-primary">Dashboard</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl overflow-hidden max-w-5xl mx-auto"
        >
          <div className="flex">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-56 border-r border-border p-4 gap-1">
              {sidebarItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${
                    item.active
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "SEO Score", value: "87", icon: BarChart3, change: "+12%" },
                  { label: "Customers", value: "1,247", icon: Users, change: "+23%" },
                  { label: "Revenue", value: "£18.4k", icon: PoundSterling, change: "+18%" },
                  { label: "Growth", value: "+67%", icon: TrendingUp, change: "+5%" },
                ].map((stat, i) => (
                  <div key={i} className="bg-accent rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="text-primary" size={16} />
                      <span className="text-xs text-muted-foreground">{stat.label}</span>
                    </div>
                    <p className="text-xl font-bold">{stat.value}</p>
                    <p className="text-xs text-secondary">{stat.change}</p>
                  </div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="bg-accent rounded-lg p-4">
                <p className="text-sm font-semibold mb-3">Revenue Growth</p>
                <div className="flex items-end gap-2 h-32">
                  {[30, 45, 35, 50, 65, 55, 70, 80, 75, 85, 90, 95].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Jan</span><span>Jun</span><span>Dec</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
