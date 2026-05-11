import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

export default async function ProjectDetail({
  params
}: {
  params : Promise<{ id: string, locale: string }>
}) {
  const { id, locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('Projects');
  
  const projectsList = t.raw('list');

  const project = projectsList.find((p: any) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-10 md:p-20">
      <div data-aos="fade-up" className="max-w-4xl mx-auto">

        <span className="text-blue-500 font-mono">{project.role}</span>
        <h1 className="text-4xl font-bold text-white mt-4">{project.title}</h1>
        <p className="mt-4 text-gray-400 text-justify">{project.description}</p>

        <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center items-center mt-6">
          <Image src={project.image} alt={project.title} loading="eager" width={800} height={450} className="mt-8 rounded-2xl border border-gray-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 p-4 gap-4">
          <div data-aos="fade-right" className="md:col-span-2">
            <h2 className="text-white text-2xl font-bold">Detail</h2>
            <p className="text-gray-400 mt-2 mb-6 text-justify">{project.detail}</p>
            <div className="flex flex-wrap gap-4">
              {(project.project_link !== "-") && (
                <a href={project.project_link} target="_blank">
                  <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3.5 rounded-xl font-semibold cursor-pointer transition-colors">
                    {t('projectLink')}
                  </button>
                </a>
              )}
              {(project.docs_link !== "-") && (
                <a href={project.docs_link} target="_blank">
                  <button className=" bg-gray-700 hover:bg-gray-800 px-6 py-3.5 rounded-xl font-semibold cursor-pointer transition-colors">
                    {t('docsLink')}
                  </button>
                </a>
              )}
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="300" className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
            <h3 className="text-white font-bold mb-2">Tech</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span key={t} className="px-4 py-2 bg-blue-900/20 text-blue-400 text-xs rounded-full border border-blue-800/20">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="text-white font-bold mt-4 mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t: string) => (
                <span key={t} className="px-4 py-2 bg-blue-900/20 text-blue-400 text-xs rounded-full border border-blue-800/20">
                  {t}
                </span>
              ))}
            </div>
            {project.docs.length > 0 && (
              <h3 className="text-white font-bold mt-4 mb-2">Docs</h3>
            )}
            <div className="flex flex-wrap gap-2">
              {project.docs.map((d: string) => (
                <span key={d} className="px-4 py-2 bg-blue-900/20 text-blue-400 text-xs rounded-full border border-blue-800/20">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}