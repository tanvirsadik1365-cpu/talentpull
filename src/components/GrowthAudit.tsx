import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Facebook, Instagram, MapPin, CheckCircle, XCircle, Loader2 } from "lucide-react";

interface AuditResult {
  seo: number;
  speed: number;
  google: number;
  social: number;
}

const ScoreCard = ({ label, score, icon: Icon }: { label: string; score: number; icon: any }) => {
  const color = score >= 80 ? "text-secondary" : score >= 50 ? "text-primary" : "text-destructive";
  const bgColor = score >= 80 ? "bg-secondary/10" : score >= 50 ? "bg-primary/10" : "bg-destructive/10";
  return (
    <div className="glass-card p-4 text-center">
      <Icon className={`mx-auto mb-2 ${color}`} size={24} />
      <p className={`text-3xl font-extrabold ${color}`}>{score}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
      <div className={`mt-2 h-1.5 rounded-full ${bgColor}`}>
        <div className={`h-full rounded-full ${score >= 80 ? "bg-secondary" : score >= 50 ? "bg-primary" : "bg-destructive"}`} style={{ width: `${score}%` }} />
      </div>
    </div>
  );
};

const GrowthAudit = () => {
  const [website, setWebsite] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [google, setGoogle] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AuditResult | null>(null);

  const runAudit = () => {
    if (!website) return;
    setLoading(true);
    setTimeout(() => {
      setResults({
        seo: Math.floor(Math.random() * 40) + 30,
        speed: Math.floor(Math.random() * 40) + 35,
        google: Math.floor(Math.random() * 50) + 25,
        social: Math.floor(Math.random() * 40) + 40,
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <section id="audit" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Check Your Restaurant's <span className="text-primary">Online Health</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 space-y-4"
          >
            <div className="relative">
              <Globe className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <input
                type="url"
                placeholder="Website URL"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full bg-accent border border-border rounded-lg pl-10 pr-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <Facebook className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <input
                type="url"
                placeholder="Facebook Page URL"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                className="w-full bg-accent border border-border rounded-lg pl-10 pr-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <Instagram className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <input
                type="url"
                placeholder="Instagram Page URL"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full bg-accent border border-border rounded-lg pl-10 pr-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <input
                type="url"
                placeholder="Google Business Profile URL"
                value={google}
                onChange={(e) => setGoogle(e.target.value)}
                className="w-full bg-accent border border-border rounded-lg pl-10 pr-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              onClick={runAudit}
              disabled={loading || !website}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? <><Loader2 className="animate-spin" size={18} /> Analysing...</> : "Run Free Growth Audit"}
            </button>
          </motion.div>

          {results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
            >
              <ScoreCard label="SEO Score" score={results.seo} icon={Globe} />
              <ScoreCard label="Website Speed" score={results.speed} icon={CheckCircle} />
              <ScoreCard label="Google Visibility" score={results.google} icon={MapPin} />
              <ScoreCard label="Social Engagement" score={results.social} icon={Instagram} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GrowthAudit;
