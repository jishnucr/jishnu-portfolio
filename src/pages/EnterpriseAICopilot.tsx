import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const techStack = [
  'Python',
  'TensorFlow',
  'Power BI',
  'Snowflake',
  'Azure ML',
  'SQL',
  'Streamlit',
  'FastAPI',
];

const featureCards = [
  'AI Copilot',
  'SQL Copilot',
  'Forecasting',
  'Customer Segmentation',
  'Executive Dashboard',
  'KPI Analytics',
  'Revenue Analytics',
  'Profit Analytics',
];

function EnterpriseAICopilot() {
  return (
    <section className="space-y-14 rounded-[2rem] border border-[#D4AF37]/15 bg-[#F7F3EB]/95 p-8 shadow-[0_35px_90px_rgba(110,78,55,0.08)] backdrop-blur-xl sm:p-12">
      <motion.div
        className="rounded-[2rem] border border-white/70 bg-white/80 p-10 shadow-[0_32px_80px_rgba(17,17,17,0.08)] backdrop-blur-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl space-y-6">
          <div className="space-y-3 text-[#111111]">
            <p className="text-sm uppercase tracking-[0.24em] text-[#C8A24A]">Case Study</p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Enterprise AI Business Intelligence & Decision Copilot
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[#5A5248] sm:text-xl">
              A premium SaaS experience delivering AI-powered decision intelligence, next-generation BI workflows, and executive-grade financial analytics.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {['AI', 'BI', 'Decision Automation', 'Revenue Optimization'].map((badge) => (
              <span
                key={badge}
                className="inline-flex rounded-full border border-[#D4AF37]/25 bg-[#FFFDF8] px-4 py-2 text-sm font-semibold text-[#6E4E37]"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="#github"
              className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-3xl bg-[#111111] px-6 text-sm font-semibold text-white transition duration-300 hover:bg-[#111111]/90"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="#demo"
              className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-3xl border border-[#D4AF37] bg-[#FFFDF8] px-6 text-sm font-semibold text-[#111111] transition duration-300 hover:bg-[#FBF7EE]"
            >
              <FaExternalLinkAlt className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-10 xl:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <section className="space-y-6 rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Overview</h2>
            <p className="text-base leading-8 text-[#5A5248]">
              This enterprise-grade solution fuses AI copilot intelligence with business intelligence workflows to deliver adaptive analytics and decision support across finance, sales, and operations.
            </p>
          </section>

          <section className="space-y-6 rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Business Problem</h2>
            <p className="text-base leading-8 text-[#5A5248]">
              Organizations struggle to convert complex enterprise data into timely decisions. Executives require a cohesive platform that merges BI reporting, AI forecasting, and contextual guidance into a single workflow.
            </p>
          </section>

          <section className="space-y-6 rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Solution</h2>
            <p className="text-base leading-8 text-[#5A5248]">
              Built a decision copilot powered by machine learning, BI dashboards, and natural language automation to streamline analysis, forecasting, and action recommendations for leadership teams.
            </p>
          </section>

          <section className="space-y-6 rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-[#111111]">System Architecture</h2>
                <p className="mt-3 text-base leading-8 text-[#5A5248]">
                  A polished enterprise architecture diagram enables clear understanding of data flow, ML inference, and dashboard delivery.
                </p>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#F8F3EA] p-8 text-[#5A5248] shadow-[0_20px_60px_rgba(110,78,55,0.08)]">
              <div className="grid gap-4 sm:grid-cols-3">
                {['Data Ingestion', 'Model Training', 'BI Dashboard'].map((item) => (
                  <div key={item} className="rounded-3xl bg-white/90 p-5 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6E4E37]">{item}</p>
                    <p className="mt-3 text-sm leading-6 text-[#5A5248]">Placeholder for architecture details and visual flow.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-6 rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Technology Stack</h2>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {techStack.map((tech) => (
                <div key={tech} className="rounded-3xl border border-[#D4AF37]/20 bg-[#FFFDF8] p-5 text-[#111111] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]">
                  <p className="text-base font-semibold">{tech}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6 rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Features</h2>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {featureCards.map((feature) => (
                <div key={feature} className="rounded-3xl border border-[#D4AF37]/20 bg-[#FFFDF8] p-5 text-[#111111] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]">
                  <p className="text-base font-semibold">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        </motion.div>

        <motion.aside
          className="space-y-10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <section className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Dashboard Screenshots</h2>
            <div className="grid gap-4">
              <div className="h-44 rounded-[1.75rem] bg-slate-950/5" />
              <div className="h-44 rounded-[1.75rem] bg-slate-950/5" />
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Workflow</h2>
            <div className="space-y-4 text-[#5A5248]">
              {[
                'Data ingestion from enterprise sources',
                'Automated ML modeling and forecast generation',
                'Contextual SQL and AI Copilot query assistance',
                'Executive dashboard delivery and action recommendations',
              ].map((step) => (
                <div key={step} className="rounded-3xl bg-[#FFFDF8] p-4 shadow-sm">
                  <p className="text-sm leading-6">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Challenges</h2>
            <p className="text-base leading-8 text-[#5A5248]">
              Managing data accuracy, maintaining model explainability, and aligning BI UX with executive decision workflows were key challenges addressed during development.
            </p>
          </section>

          <section className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Results & Business Impact</h2>
            <p className="text-base leading-8 text-[#5A5248]">
              Prepared for premium business outcomes such as faster decision cycles, richer forecasting insight, and a unified executive analytics experience.
            </p>
          </section>

          <section className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Future Improvements</h2>
            <p className="text-base leading-8 text-[#5A5248]">
              Future iterations will tighten AI contextualization, add multivariate scenario planning, and introduce adaptive KPI coaching for leadership teams.
            </p>
          </section>

          <section id="github" className="rounded-[2rem] border border-[#D4AF37]/15 bg-[#FFFDF8] p-8 shadow-[0_25px_70px_rgba(110,78,55,0.08)]">
            <h2 className="text-3xl font-semibold text-[#111111]">GitHub Repository</h2>
            <p className="mt-4 text-base leading-8 text-[#5A5248]">
              Placeholder link for the enterprise AI copilot repository, designed to showcase code structure and deployment artifacts.
            </p>
          </section>

          <section id="demo" className="rounded-[2rem] border border-[#D4AF37]/15 bg-[#FFFDF8] p-8 shadow-[0_25px_70px_rgba(110,78,55,0.08)]">
            <h2 className="text-3xl font-semibold text-[#111111]">Live Demo</h2>
            <p className="mt-4 text-base leading-8 text-[#5A5248]">
              Placeholder area for the demo environment and onboarding experience of this premium SaaS product.
            </p>
          </section>
        </motion.aside>
      </div>
    </section>
  );
}

export default EnterpriseAICopilot;
