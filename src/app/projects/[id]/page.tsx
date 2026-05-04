import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProjectDetail({ params }: {  params : Promise<{ id: string }> }) {
  const id = (await params).id;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-10 md:p-20">
      <div className="max-w-4xl mx-auto">

        <span className="text-blue-500 font-mono">{project.role}</span>
        <h1 className="text-4xl font-bold text-white mt-4">{project.title}</h1>
        <p className="mt-4 text-gray-400 text-justify">{project.description}</p>

        <div className="flex justify-center items-center mt-6">
          <Image src={project.image} alt={project.title} loading="eager" width={800} height={450} className="mt-8 rounded-2xl border border-gray-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 p-4 gap-4">
          <div className="md:col-span-2">
            <h2 className="text-white text-2xl font-bold">Detail</h2>
            <p className="text-gray-400 mt-2 text-justify">{project.detail}</p>
            <a href={project.link} target="_blank">
              <button className="mt-6 bg-blue-700 hover:bg-blue-800 px-8 py-3.5 rounded-xl font-semibold cursor-pointer transition-colors">
                Lihat Project
              </button>
            </a>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
            <h3 className="text-white font-bold mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-4 py-2 bg-blue-900/20 text-blue-400 text-xs rounded-full border border-blue-800/20">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="text-white font-bold mt-4 mb-2">Docs</h3>
            <div className="flex flex-wrap gap-2">
              {project.docs.map((d) => (
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

  // return (
  //   <main className="min-h-screen p-10 md:p-24 bg-slate-950 text-white">
  //     <div className="max-w-4xl mx-auto">
  //       <span className="text-blue-500 font-mono">{project.role}</span>
  //       <h1 className="text-5xl font-extrabold mt-2">{project.title}</h1>
        
  //       <div className="mt-8 aspect-video bg-gray-900 rounded-2xl border border-gray-800 flex items-center justify-center">
  //          {/* Nanti taruh gambar project di sini */}
  //          <p className="text-gray-500 italic">Preview Image: {project.image}</p>
  //       </div>

  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
  //         <div className="md:col-span-2">
  //           <h2 className="text-2xl font-bold mb-4">Problem & Solution</h2>
  //           <p className="text-gray-400 mb-6">{project.detail}</p>
  //           {/* <p className="text-gray-400">{project.details.solution}</p> */}
  //         </div>
          
  //         <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 h-fit">
  //           <h3 className="font-bold mb-4">Technologies</h3>
  //           <div className="flex flex-wrap gap-2">
  //             {project.tech.map(t => (
  //               <span key={t} className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">
  //                 {t}
  //               </span>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );
}