import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { projectDetails } from '../data/projects';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';

function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectDetails[projectId as keyof typeof projectDetails] : undefined;

  if (!project) {
    return (
      <div className="rounded-[2rem] border border-[#D4AF37]/15 bg-white/80 p-10 shadow-[0_35px_90px_rgba(110,78,55,0.1)]">
        <p className="text-lg text-[#5A5248]">Project not found.</p>
        <Link
          to="/#projects"
          className="mt-6 inline-flex items-center gap-2 rounded-3xl bg-[#111111] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#333333]"
        >
          <FaArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="space-y-14 rounded-[2rem] border border-[#D4AF37]/15 bg-[#F7F3EB]/95 p-8 shadow-[0_35px_90px_rgba(110,78,55,0.08)] backdrop-blur-xl sm:p-12">
      <div className="grid gap-10 xl:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          className="rounded-[2rem] border border-white/70 bg-white/90 p-10 shadow-[0_32px_80px_rgba(17,17,17,0.08)] backdrop-blur-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-6">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#6E4E37] transition hover:text-[#111111]"
            >
              <FaArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-[#C8A24A]">Project Detail</p>
              <h1 className="text-5xl font-semibold tracking-tight text-[#111111] sm:text-6xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#5A5248] sm:text-xl">
                {project.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.techBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex rounded-full border border-[#D4AF37]/25 bg-[#FFFDF8] px-4 py-2 text-sm font-semibold text-[#6E4E37]"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-3xl bg-[#111111] px-6 text-sm font-semibold text-white transition duration-300 hover:bg-[#111111]/90"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-[#111111]">Quick Summary</h2>
            <p className="mt-4 text-base leading-8 text-[#5A5248]">{project.summary}</p>
          </div>
          <div className="rounded-[2rem] border border-white/70 bg-[#FFFDF8]/90 p-8 shadow-[0_25px_70px_rgba(110,78,55,0.08)] backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-[#111111]">Project highlights</h3>
            <ul className="mt-5 space-y-3 text-[#5A5248]">
              {project.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#C8A24A]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-10">
          <section className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Overview</h2>
            <p className="mt-4 text-base leading-8 text-[#5A5248]">{project.overview}</p>
          </section>

          <section className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Problem Statement</h2>
            <p className="mt-4 text-base leading-8 text-[#5A5248]">{project.problem}</p>
          </section>

          <section className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Solution</h2>
            <p className="mt-4 text-base leading-8 text-[#5A5248]">{project.solution}</p>
          </section>

          <section className="rounded-[2rem] border border-white/70 bg-[#FFFDF8]/90 p-8 shadow-[0_25px_70px_rgba(110,78,55,0.08)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">System Architecture</h2>
            <img
              src={project.systemArchitecture}
              alt="System architecture diagram"
              className="mt-6 w-full rounded-[1.75rem] border border-[#D4AF37]/20"
            />
          </section>

          <section className="rounded-[2rem] border border-white/70 bg-[#FFFDF8]/90 p-8 shadow-[0_25px_70px_rgba(110,78,55,0.08)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Workflow</h2>
            <img
              src={project.workflow}
              alt="Workflow diagram"
              className="mt-6 w-full rounded-[1.75rem] border border-[#D4AF37]/20"
            />
          </section>
        </div>

        <aside className="space-y-10">
          <section className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Dashboard Gallery</h2>
            <div className="mt-6 grid gap-4">
              {project.dashboardImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Dashboard ${index + 1}`}
                  className="h-44 w-full rounded-[1.75rem] object-cover border border-[#D4AF37]/15"
                />
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/70 bg-[#FFFDF8]/90 p-8 shadow-[0_25px_70px_rgba(110,78,55,0.08)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Feature Icons</h2>
            <img
              src={project.featureIcons}
              alt="Feature icons"
              className="mt-6 w-full rounded-[1.75rem] border border-[#D4AF37]/15"
            />
          </section>

          <section className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Technology Icons</h2>
            <img
              src={project.technologyIcons}
              alt="Technology icons"
              className="mt-6 w-full rounded-[1.75rem] border border-[#D4AF37]/15"
            />
          </section>

          <section className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Key Features</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="rounded-3xl border border-[#D4AF37]/20 bg-[#FFFDF8] p-4 text-[#111111] shadow-sm">
                  <p className="text-sm font-semibold">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Results & Impact</h2>
            <p className="mt-4 text-base leading-8 text-[#5A5248]">{project.results}</p>
          </section>

          <section className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Challenges</h2>
            <p className="mt-4 text-base leading-8 text-[#5A5248]">{project.challenges}</p>
          </section>

          <section className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_25px_70px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[#111111]">Future Improvements</h2>
            <p className="mt-4 text-base leading-8 text-[#5A5248]">{project.futureImprovements}</p>
          </section>
        </aside>
      </div>
    </section>
  );
}

export default ProjectDetail;
