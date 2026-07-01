import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/images/profile.png';

const titles = [
  'Data Analyst',
  'Data Scientist',
  'Business Intelligence Developer',
  'AI Engineer',
];

function Home() {
  const [typedText, setTypedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = window.setTimeout(() => {
      setTypedText((prev) =>
        isDeleting
          ? currentTitle.slice(0, prev.length - 1)
          : currentTitle.slice(0, prev.length + 1)
      );

      if (!isDeleting && typedText === currentTitle) {
        setIsDeleting(true);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, isDeleting ? 60 : typedText === currentTitle ? 1200 : 80);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, typedText, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#F7F3EB] text-[#111111]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,162,74,0.12),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.08),transparent_25%)]" />
      <div className="pointer-events-none absolute left-16 top-10 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-[#C8A24A]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-10 bottom-28 h-56 w-56 rounded-full bg-[#6E4E37]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-[25%] h-64 bg-[radial-gradient(circle_at_center,_rgba(255,253,248,0.95),transparent_58%)]" />
      <div className="pointer-events-none absolute left-14 top-72 h-px w-24 bg-[#5A5248]/20" />
      <div className="pointer-events-none absolute right-36 top-44 h-px w-28 bg-[#5A5248]/15" />
      <div className="pointer-events-none absolute left-24 top-96 h-2 w-2 rounded-full bg-[#5A5248]/20" />
      <div className="pointer-events-none absolute right-24 top-52 h-2 w-2 rounded-full bg-[#5A5248]/20" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#C8A24A]/30 bg-[#FFFDF8] px-4 py-2 text-sm font-semibold text-[#6E4E37] shadow-[0_22px_70px_rgba(200,162,74,0.12)]">
            Data Science & AI Portfolio
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Jishnu C R
            </h1>
            <p className="text-xl font-medium text-slate-600 sm:text-2xl">
              MSc Data Science and Analytics
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Data Analyst | Data Scientist | Business Intelligence Developer | AI/ML Engineer
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#FFFDF8]/90 p-8 shadow-[0_36px_90px_rgba(110,78,55,0.08)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#C8A24A]">Tagline</p>
            <p className="mt-4 text-3xl font-semibold leading-tight text-[#111111] sm:text-4xl">
              Building AI-powered analytics solutions that transform data into actionable business insights.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5A5248]">
              I specialize in Data Analytics, Business Intelligence, Machine Learning, Computer Vision, and AI-powered Decision Support Systems. Passionate about solving real-world problems using data-driven solutions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1.4fr_1fr]">
            <div className="grid gap-3">
              <a
                href="#projects"
                className="inline-flex min-h-[3rem] items-center justify-center rounded-3xl bg-[#111111] px-6 text-sm font-semibold text-white shadow-[0_24px_60px_rgba(17,17,17,0.18)] transition duration-300 hover:border-[#D4AF37] hover:bg-[#111111] hover:shadow-[0_24px_80px_rgba(200,162,74,0.2)]"
              >
                View Projects
              </a>
              <a
                href="/Jishnu_CR_Resume.pdf"
                download
                className="inline-flex min-h-[3rem] items-center justify-center rounded-3xl border border-[#C8A24A] bg-[#FFFDF8] px-6 text-sm font-semibold text-[#111111] shadow-sm transition duration-300 hover:bg-[#FBF7EE] hover:border-[#D4AF37]"
              >
                Download Resume
              </a>
            </div>
            <a
              href="mailto:jishnucr9970@gmail.com"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-3xl border border-[#C8A24A] bg-[#FFFDF8] px-6 text-sm font-semibold text-[#111111] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#FBF7EE]"
            >
              Contact Me
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <a
              href="https://github.com/jishnucr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-3xl border border-[#C8A24A]/40 bg-[#FFFDF8] px-5 py-4 text-sm font-medium text-[#111111] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#6E4E37]"
            >
              <FaGithub className="text-lg text-[#111111]" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/Jishnu-cr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-3xl border border-[#C8A24A]/40 bg-[#FFFDF8] px-5 py-4 text-sm font-medium text-[#111111] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#6E4E37]"
            >
              <FaLinkedin className="text-lg text-[#111111]" />
              LinkedIn
            </a>
            <a
              href="mailto:jishnucr9970@gmail.com"
              className="inline-flex items-center justify-center gap-3 rounded-3xl border border-[#C8A24A]/40 bg-[#FFFDF8] px-5 py-4 text-sm font-medium text-[#111111] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#6E4E37]"
            >
              <FaEnvelope className="text-lg text-[#111111]" />
              Email
            </a>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#FFFDF8] p-6 text-sm text-[#5A5248] shadow-[0_30px_80px_rgba(110,78,55,0.08)] backdrop-blur-xl">
            <p className="text-[#5A5248]">Current focus</p>
            <p className="mt-4 text-xl font-semibold text-[#111111]">
              <span className="text-[#C8A24A]">{typedText}</span>
              <span className="ml-1 inline-block animate-pulse">|</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex w-full max-w-[280px] items-center justify-center"
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-[#6E4E37]/12 blur-3xl" />
          <div className="relative z-10 aspect-square w-full overflow-hidden rounded-full border border-[#C8A24A]/20 bg-[#FCF9F3] p-3 shadow-[0_60px_90px_rgba(110,78,55,0.18)] transition duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 rounded-full border border-[#C8A24A]/30" />
            <img
              src={profileImage}
              alt="Profile photo of Jishnu C R"
              className="relative h-full w-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
