import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-950 px-8 pb-20 md:px-20 md:pb-16 text-white">

      {/* Section Hero */}
      <section data-aos="zoom-out" className="min-h-[calc(100vh-80px)] max-w-7xl mx-auto flex flex-col justify-center items-start gap-6">

        {/* Judul Utama (Nama & Role) */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight max-w-4xl">
          Hello! I'm <span className="text-blue-500">Nyoman Ari Satyadharma.</span><br />
          System Analyst & Web Developer.
        </h1>

        {/* Link Media Sosial */}
        <div className="flex gap-3">
          <a href="https://github.com/nyomanari21" target="_blank" className="hover:text-blue-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/nyomanari21/" target="_blank" className="hover:text-blue-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
            </svg>
          </a>
        </div>

        {/* Tombol Call to Action (CTA) */}
        <div className="flex gap-4 pt-6">
          <a href="#projects" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3.5 rounded-xl font-semibold transition-all cursor-pointer">
            My Projects
          </a>
          <a href="https://drive.google.com/file/d/1AEn8pACqWHblXv8JxLWnhguhrm_VsM9Y/view?usp=sharing" target="_blank" className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3.5 rounded-xl font-semibold transition-all cursor-pointer border border-gray-700">
            My CV
          </a>
        </div>

      </section>

      {/* Section About */}
      <section id="about" className="max-w-7xl mx-auto flex items-start gap-6 my-6 scroll-mt-24">

        {/* Deskripsi Singkat */}
        <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-lg text-gray-400">
              A Computer Science graduate from Universitas Pendidikan Indonesia with professional experience as a System Analyst and Web Developer. Skilled in business and technical requirements analysis, including the preparation of industry-standard documentation such as BRD and SRS. Experienced in system design using UML and ERD, and adept at collaborating with stakeholders and development teams to ensure seamless alignment between requirements and system implementation. Proficient in multiple programming languages including C, C++, Python, Java, and PHP, with a strong interest in software development, quality assurance, and game development.
            </p>
          </div>

          {/* Keahlian */}
          <div data-aos="fade-left" data-aos-delay="300" className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-4">
              {["UML", "ERD", "Draw.io", "PHP", "HTML", "CSS", "Laravel", "Java", "Python", "C/C++", "SQL", "Git"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-900 text-gray-300 text-sm rounded-lg border border-gray-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Section Experiences */}
      <section id="experiences" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-6 pt-6 scroll-mt-24">
        <h2 data-aos="fade-up" className="text-4xl font-bold mb-6">Experiences</h2>

        <div className="space-y-6 md:col-span-2">
          {experiences.map((exp) => (
            <div key={exp.id} data-aos="fade-up" data-aos-delay="300" className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex justify-between mb-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  <p className="text-blue-500">{exp.company}</p>
                </div>
                <p className="text-gray-400 text-sm text-end">{exp.duration}</p>
              </div>
              {exp.description.map((desc) => (
                <ul key={desc} className="list-disc list-outside mt-1 ps-4 text-gray-400">
                  <li>{desc}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>

      </section>

      {/* Section Projects */}
      <section id="projects" className="max-w-7xl mx-auto flex flex-col items-start gap-0 my-6 pt-6 scroll-mt-24">
        <h2 data-aos="fade-up" className="text-4xl font-bold mb-6">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id} data-aos="fade-up" data-aos-delay="300" className="flex">
              <div className="border border-gray-800 rounded-lg flex flex-col w-full hover:border-blue-500 hover:scale-95 transition-all cursor-pointer duration-500 overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover rounded-md" />
                </div>
                <div className="p-6 bg-gray-900 flex flex-col flex-1">
                  <span className="text-xs text-blue-500">{project.role}</span>
                  <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                  <p className="text-gray-400 mt-4">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* Section Education */}
      <section id="education" className="max-w-7xl mx-auto flex flex-col gap-6 my-6 pt-6 scroll-mt-24">
        <h2 data-aos="fade-right" className="text-4xl font-bold">Education</h2>

        {education.map((edu) => (
          <div key={edu.id} data-aos="fade-right" data-aos-delay="300" className="w-full">
            <div className="flex flex-row gap-6 pb-4 max-w-3xl border-b-2 border-gray-800 hover:border-blue-500 hover:max-w-full transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-auto mx-auto">
                  <Image src={edu.image} alt={edu.institution} width={100} height={100} style={{ width: 'auto' }} className="object-contain rounded-md" />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-blue-500 text-xl mb-2">{edu.institution}</p>
                  <p className="text-gray-400 mb-2">{edu.duration}</p>
                  <ul className="list-disc list-outside mt-1 ps-4 text-gray-400">
                    {edu.description.map((desc) => (
                      <li key={desc}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

      </section>

      {/* Footer */}
      <footer className="pt-10 border-t border-gray-900 text-center text-gray-500 text-sm">
        <p>© 2026 Nyoman Ari Satyadharma. Built with Next.js & Tailwind CSS.</p>
      </footer>

    </main>
  );
}