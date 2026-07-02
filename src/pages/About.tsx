import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { featuredProjects } from '../data/projects';

const skillCategories = [
  {
    title: 'Languages & Databases',
    skills: ['Python', 'SQL', 'R', 'PostgreSQL', 'MySQL', 'DuckDB', 'Excel'],
  },
  {
    title: 'Machine Learning',
    skills: ['Machine Learning', 'NLP', 'Computer Vision', 'Time Series Analysis', 'AutoML', 'Predictive Analytics'],
  },
  {
    title: 'Libraries & Frameworks',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'NLTK', 'SpaCy', 'Streamlit', 'OpenCV', 'YOLOv8', 'Plotly', 'Dash', 'Prophet', 'Statsmodels'],
  },
  {
    title: 'BI & Tools',
    skills: ['Power BI', 'DAX', 'Power Query', 'Excel', 'Git', 'VS Code'],
  },
  {
    title: 'AI & Analytics',
    skills: ['AutoML', 'LlamaIndex', 'LangGraph', 'AI Analytics', 'Decision Intelligence'],
  },
];

type Certificate = {
  title: string;
  org: string;
  image: string;
};

const certificateList: Certificate[] = [
  {
    title: 'Machine Learning with Python',
    org: 'IBM',
    image: '/certificates/ml-python-ibm.png',
  },
  {
    title: 'Machine Learning',
    org: 'Great Learning',
    image: '/certificates/ml-great learning.png',
  },
  {
    title: 'Statistics for Data Science',
    org: 'Great Learning',
    image: '/certificates/great-leraning-statistic-for-datascience.png',
  },
  {
    title: 'Data Science Certificate',
    org: 'Codeme',
    image: '/certificates/codeme-ds-certificate.png',
  },
  {
    title: 'Internship',
    org: 'CodTech IT Solutions',
    image: '/certificates/codtech-it-solutions-internship.png',
  },
  {
    title: 'Internship',
    org: 'Vitez Tech Lab',
    image: '/certificates/viteztechlab-internship.png',
  },
];

function About() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [brokenCertificates, setBrokenCertificates] = useState<Record<string, boolean>>({});

  return (
    <section id="experience" className="relative overflow-hidden bg-[#F7F3EB] px-4 py-14 text-[#111111] sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,162,74,0.14),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute left-16 top-10 h-80 w-80 rounded-full bg-[#D4AF37]/12 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-[#C8A24A]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-10 bottom-28 h-56 w-56 rounded-full bg-[#6E4E37]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl space-y-14">
        <motion.div
          className="rounded-[2rem] border border-[#D4AF37]/20 bg-white/85 p-8 shadow-[0_35px_90px_rgba(110,78,55,0.08)] backdrop-blur-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.24em] text-[#C8A24A]">Professional Experience</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#111111]">Experience</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#5A5248] sm:text-lg">
            Real-world analytics experience solving business and public-sector problems through AI, Machine Learning, Business Intelligence, and Data Analytics.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-10 lg:grid-cols-[1fr_0.9fr]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <div className="space-y-10">
            <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-white/90 p-8 shadow-[0_25px_70px_rgba(110,78,55,0.08)]">
              <p className="text-sm uppercase tracking-[0.24em] text-[#C8A24A]">Internship Experience</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#111111]">Hands-on internship experience in Data Analytics, Machine Learning, Computer Vision, and Business Intelligence.</h2>
              <div className="mt-8 space-y-8">
                <div className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-[#FFFDF8] p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#6E4E37]">Data Analyst Intern</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#111111]">Commissioner of Police, Ernakulam</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5A5248]">June 2025 – November 2025 | Kochi, Kerala</p>
                  <p className="mt-4 text-sm font-semibold text-[#111111]">Python, YOLOv8, OpenCV, Power BI, Google Maps API, Excel</p>
                  <ul className="mt-5 list-disc space-y-3 pl-5 text-[#5A5248]">
                    <li>Built AI-based vehicle detection using YOLOv8.</li>
                    <li>Analyzed traffic congestion across Kochi city junctions.</li>
                    <li>Created Power BI dashboards for traffic KPIs.</li>
                    <li>Worked with CCTV video datasets using Python and OpenCV.</li>
                    <li>Supported data-driven traffic analysis and route optimization.</li>
                  </ul>
                </div>

                <div className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-[#FFFDF8] p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#6E4E37]">Data Analyst Intern</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#111111]">Tech Vitez International Pvt Ltd, Calicut</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5A5248]">June 2023 – March 2024 | Calicut, Kerala</p>
                  <p className="mt-4 text-sm font-semibold text-[#111111]">Python, SQL, Scikit-learn, Statsmodels, Power BI</p>
                  <ul className="mt-5 list-disc space-y-3 pl-5 text-[#5A5248]">
                    <li>Worked on Kerala rainfall and flood data analysis.</li>
                    <li>Built machine learning and time-series models for flood prediction.</li>
                    <li>Improved prediction accuracy compared to baseline models.</li>
                    <li>Created Power BI dashboards for climate risk insights.</li>
                    <li>Presented insights for disaster preparedness planning.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#FFFDF8]/90 p-8 shadow-[0_25px_70px_rgba(110,78,55,0.08)]">
            <h3 className="text-3xl font-semibold text-[#111111]">Career Snapshot</h3>
            <div className="mt-6 space-y-6">
              <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-[#6E4E37]">Current role</p>
                <p className="mt-3 text-xl font-semibold text-[#111111]">Data Science Intern</p>
                <p className="mt-2 text-sm leading-7 text-[#5A5248]">Worked on analytics, CV, and BI tasks during internship projects.</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-[#6E4E37]">Impact focus</p>
                <p className="mt-3 text-xl font-semibold text-[#111111]">Hands-on analytics delivery</p>
                <p className="mt-2 text-sm leading-7 text-[#5A5248]">Supporting practical, data-driven outcomes with models and dashboards.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.section
          id="projects"
          className="space-y-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-[#C8A24A]">Featured Projects</p>
            <h2 className="text-4xl font-semibold text-[#111111]">Featured Projects</h2>
            <p className="max-w-3xl text-base leading-8 text-[#5A5248] sm:text-lg">
              A collection of AI, Machine Learning, Business Intelligence, and Data Analytics projects focused on solving real-world problems.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <motion.article
                key={project.id}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-[2rem] border border-white/30 bg-white/75 shadow-[0_25px_70px_rgba(17,17,17,0.08)] transition duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_35px_90px_rgba(110,78,55,0.18)]"
              >
                <img src={project.coverImage} alt={project.title} className="h-64 w-full object-cover" />
                <div className="space-y-6 p-8">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-[#111111]">{project.title}</h3>
                    <p className="text-sm leading-6 text-[#5A5248]">{project.summary}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techBadges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#FFFDF8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6E4E37]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 text-[#5A5248]">
                    <p>Premium SaaS experience designed for leadership teams.</p>
                    <p>Rich dashboard interfaces, AI workflow automation, and strategic business intelligence.</p>
                    <p>Delivered with polished visuals and executive analytics storytelling.</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-3xl bg-[#111111] px-4 text-sm font-semibold text-white transition hover:bg-[#111111]/90"
                    >
                      <FaGithub className="h-4 w-4" />
                      GitHub
                    </a>
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-3xl border border-[#D4AF37] bg-[#FFFDF8] px-4 text-sm font-semibold text-[#111111] transition hover:bg-[#FBF7EE] hover:border-[#D4AF37]"
                    >
                      Case Study
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-[#C8A24A]">Technical Skills</p>
            <h2 className="text-4xl font-semibold text-[#111111]">Technical Skills</h2>
            <p className="max-w-3xl text-base leading-8 text-[#5A5248] sm:text-lg">
              Modern analytics and AI capabilities presented in clean, premium categories.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {skillCategories.map((category) => (
              <div key={category.title} className="rounded-[2rem] border border-[#D4AF37]/20 bg-white/90 p-8 shadow-[0_25px_70px_rgba(110,78,55,0.08)]">
                <h3 className="text-2xl font-semibold text-[#111111]">{category.title}</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="rounded-3xl border border-[#D4AF37]/15 bg-[#FFFDF8] p-4 text-[#111111] shadow-sm">
                      <p className="text-sm font-semibold">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="education"
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3 }}
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-[#C8A24A]">Education</p>
            <h2 className="text-4xl font-semibold text-[#111111]">Education Timeline</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-white/90 p-8 shadow-[0_25px_70px_rgba(110,78,55,0.08)]">
              <p className="text-sm uppercase tracking-[0.18em] text-[#6E4E37]">MSc</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#111111]">Data Science and Analytics</h3>
              <p className="mt-3 text-base leading-7 text-[#5A5248]">Jain University, Kochi</p>
            </div>
            <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-white/90 p-8 shadow-[0_25px_70px_rgba(110,78,55,0.08)]">
              <p className="text-sm uppercase tracking-[0.18em] text-[#6E4E37]">BCA</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#111111]">Bachelor of Computer Applications</h3>
              <p className="mt-3 text-base leading-7 text-[#5A5248]">Calicut University, Moulana College</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="certifications"
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-[#C8A24A]">Certifications</p>
            <h2 className="text-4xl font-semibold text-[#111111]">Certifications</h2>
            <p className="max-w-3xl text-base leading-8 text-[#5A5248] sm:text-lg">
              Real certificates from training programs and internships, presented with premium cards and image previews.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {certificateList.map((cert) => {
              const isBroken = brokenCertificates[cert.image];
              return (
                <button
                  type="button"
                  key={cert.image}
                  onClick={() => setSelectedCertificate(cert)}
                  className="group h-full rounded-[2rem] border border-[#D4AF37]/20 bg-white/90 p-6 text-left shadow-[0_25px_70px_rgba(110,78,55,0.08)] transition duration-300 hover:-translate-y-1"
                >
                  <div className="overflow-hidden rounded-[1.5rem] bg-[#F7F3EB]">
                    {isBroken ? (
                      <div className="flex h-56 items-center justify-center p-6 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[#5A5248]">
                        {cert.title}
                      </div>
                    ) : (
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        className="h-56 w-full object-cover"
                        onError={() => setBrokenCertificates((prev) => ({ ...prev, [cert.image]: true }))}
                      />
                    )}
                  </div>
                  <div className="mt-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#6E4E37]">{cert.org}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#111111]">{cert.title}</h3>
                  </div>
                  <div className="mt-6 inline-flex items-center justify-between rounded-3xl border border-[#D4AF37]/15 bg-[#FFFDF8] px-4 py-3 text-sm font-semibold text-[#111111] transition group-hover:bg-[#FBF7EE]">
                    <span>View Certificate</span>
                    <FaExternalLinkAlt className="h-4 w-4 text-[#6E4E37]" />
                  </div>
                </button>
              );
            })}
          </div>
          {selectedCertificate && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
              <div className="relative max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_35px_90px_rgba(110,78,55,0.25)]">
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-white transition hover:bg-[#333333]"
                >
                  ✕
                </button>
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#C8A24A]">Certificate Preview</p>
                  <h3 className="mt-2 text-3xl font-semibold text-[#111111]">{selectedCertificate.title}</h3>
                  <p className="mt-2 text-sm text-[#5A5248]">{selectedCertificate.org}</p>
                </div>
                <img
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} certificate`}
                  className="w-full object-contain"
                />
              </div>
            </div>
          )}
        </motion.section>

        <motion.section
          id="resume"
          className="space-y-10 rounded-[2rem] border border-[#D4AF37]/20 bg-white/90 p-10 shadow-[0_25px_70px_rgba(110,78,55,0.08)]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4 }}
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#C8A24A]">Resume</p>
                <h2 className="mt-3 text-4xl font-semibold text-[#111111]">Resume</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[#5A5248]">
                  Download my latest resume or preview it directly.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/Jishnu_CR_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[3rem] items-center justify-center rounded-3xl border border-[#D4AF37] bg-[#FFFDF8] px-8 text-sm font-semibold text-[#111111] transition hover:bg-[#FBF7EE]"
                >
                  View Resume
                </a>
                <a
                  href="/Jishnu_CR_Resume.pdf"
                  download
                  className="inline-flex min-h-[3rem] items-center justify-center rounded-3xl bg-[#111111] px-8 text-sm font-semibold text-white transition hover:bg-[#222222]"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-[#FFFDF8]/90 shadow-[0_25px_70px_rgba(110,78,55,0.08)]">
              <iframe
                src="/Jishnu_CR_Resume.pdf"
                title="Resume preview"
                className="h-[32rem] w-full bg-white"
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45 }}
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-[#C8A24A]">Contact</p>
            <h2 className="text-4xl font-semibold text-[#111111]">Contact</h2>
            <p className="max-w-3xl text-base leading-8 text-[#5A5248] sm:text-lg">
              Let’s connect on the next analytics transformation, hiring initiative, or AI-driven business problem.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#FFFDF8]/90 p-8 shadow-[0_25px_70px_rgba(110,78,55,0.08)]">
            <div className="space-y-5 text-[#5A5248]">
              <div className="flex items-center gap-3 text-[#111111]">
                <FaEnvelope className="h-5 w-5 text-[#C8A24A]" />
                <a href="mailto:jishnucr9970@gmail.com" className="font-semibold text-[#111111] hover:text-[#6E4E37]">jishnucr9970@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-[#111111]">
                <FaPhoneAlt className="h-5 w-5 text-[#C8A24A]" />
                <span className="font-semibold">+91 9946189970</span>
              </div>
              <div className="flex items-center gap-3 text-[#111111]">
                <FaMapMarkerAlt className="h-5 w-5 text-[#C8A24A]" />
                <span className="font-semibold">Ernakulam, Kerala</span>
              </div>
              <div className="border-t border-[#D4AF37]/20 pt-5">
                <a href="https://github.com/jishnucr" target="_blank" rel="noreferrer" className="block text-sm font-semibold text-[#111111] hover:text-[#6E4E37]">
                  GitHub: github.com/jishnucr
                </a>
                <a href="https://www.linkedin.com/in/Jishnu-cr" target="_blank" rel="noreferrer" className="mt-3 block text-sm font-semibold text-[#111111] hover:text-[#6E4E37]">
                  LinkedIn: linkedin.com/in/Jishnu-cr
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <footer className="rounded-[2rem] border border-[#D4AF37]/20 bg-white/90 p-10 shadow-[0_25px_70px_rgba(110,78,55,0.08)]">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4">
              <p className="text-3xl font-semibold text-[#111111]">Jishnu C R</p>
              <p className="text-sm text-[#5A5248]">Data Analyst | Data Scientist | Business Intelligence Developer</p>
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-[#C8A24A]">Quick Links</p>
              <div className="grid gap-3">
                <a href="https://github.com/jishnucr" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#111111] hover:text-[#6E4E37]">GitHub</a>
                <a href="https://www.linkedin.com/in/Jishnu-cr" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#111111] hover:text-[#6E4E37]">LinkedIn</a>
                <a href="mailto:jishnucr9970@gmail.com" className="text-sm font-semibold text-[#111111] hover:text-[#6E4E37]">Email</a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-[#D4AF37]/20 pt-6 text-sm text-[#5A5248]">
            Copyright © 2026 Jishnu C R
          </div>
        </footer>
      </div>
    </section>
  );
}

export default About;
