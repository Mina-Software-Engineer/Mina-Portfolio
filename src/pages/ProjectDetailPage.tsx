import { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';

const ProjectDetailPage = ({ project }: { project: Project }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${project.title} · Mina Remon`;

    return () => {
      document.title = 'Mina Remon · Android & Full-Stack Developer';
    };
  }, [project.title]);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <header className="sticky top-0 z-50 border-b border-gray-800/80 bg-[#121212]/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/#projects" className="text-[#3DDC84] transition-colors hover:text-white" aria-label="Back to projects">
            <img src="/logos/my_logo.png" width={80} height={80} alt="Mina Remon logo" />
          </a>
          <a href="/#projects" className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-[#3DDC84]">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-gray-800 py-20 sm:py-28">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#3DDC84] opacity-10 blur-3xl" />
          <div className="container relative z-10 mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#3DDC84]">{project.detail.eyebrow}</p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">{project.title}</h1>
              <p className="max-w-2xl text-xl leading-relaxed text-gray-300">{project.detail.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-[#3DDC84]/30 bg-[#3DDC84]/10 px-4 py-2 text-sm text-[#3DDC84]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-[#1E1E1E] shadow-2xl shadow-[#3DDC84]/10">
              <img src={project.image} alt={`${project.title} preview`} className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent" />
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <aside className="h-fit rounded-2xl border border-gray-800 bg-[#1E1E1E] p-6 lg:sticky lg:top-24">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Project snapshot</p>
              <dl className="space-y-5">
                <div>
                  <dt className="text-sm text-gray-500">Role</dt>
                  <dd className="mt-1 text-gray-200">{project.detail.role}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Duration</dt>
                  <dd className="mt-1 text-gray-200">{project.detail.duration}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Category</dt>
                  <dd className="mt-1 text-gray-200">{project.detail.category}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-gray-800 pt-6">
                {project.links.github && project.links.github !== '#' && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                    <Github className="h-4 w-4" /> Source code
                  </a>
                )}
                {project.links.demo && project.links.demo !== '#' && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                    <ExternalLink className="h-4 w-4" /> Live demo
                  </a>
                )}
              </div>
            </aside>

            <div className="space-y-12">
              <DetailSection title="Overview" text={project.detail.overview} />
              <DetailSection title="The challenge" text={project.detail.challenge} />
              <DetailSection title="The solution" text={project.detail.solution} />
              {project.screenshots && project.screenshots.length > 0 && (
                <section>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3DDC84]">App screen</p>
                  <h2 className="mb-6 text-3xl font-bold">A first look at Moon Chat</h2>
                  <div className="max-w-md overflow-hidden rounded-2xl border border-gray-800 bg-[#0b0b14] p-3 shadow-2xl shadow-[#3DDC84]/10">
                    {project.screenshots.map((screenshot) => (
                      <figure key={screenshot.src}>
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt}
                          className="h-auto w-full rounded-xl"
                          loading="lazy"
                        />
                        <figcaption className="px-2 pb-1 pt-4 text-sm text-gray-400">{screenshot.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              )}
              <section>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3DDC84]">Your next additions</p>
                <h2 className="mb-5 text-3xl font-bold">Make this page yours</h2>
                <ul className="grid gap-3 sm:grid-cols-3">
                  {project.detail.nextSteps.map((step) => (
                    <li key={step} className="rounded-xl border border-dashed border-gray-700 bg-[#1E1E1E]/60 p-4 text-sm leading-relaxed text-gray-400">
                      {step}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">More project details coming soon.</div>
      </footer>
    </div>
  );
};

const DetailSection = ({ title, text }: { title: string; text: string }) => (
  <section>
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3DDC84]">{title}</p>
    <p className="max-w-3xl text-lg leading-relaxed text-gray-300">{text}</p>
  </section>
);

export default ProjectDetailPage;
