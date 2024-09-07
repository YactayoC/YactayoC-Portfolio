import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center w-full container-section mt-36 gap-y-16" id="experiences">
      <h2 className="text-6xl font-bold text-center text-gradient-2">{t('experience-head')}</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 ">
        {/* TiendaDA */}
        <div className="relative bg-[#171d37] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="relative z-10">
            <h3 className="mb-4 text-3xl font-semibold text-blue-400">TiendaDA</h3>
            {/* <div className="flex items-center mb-2 text-gray-300">
                <FaCalendarAlt className="mr-2" /> Abril 2024 - Agosto 2024
              </div> */}
            <p className="mb-4 text-gray-300">Rol: Desarrollador Frontend</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-sm text-white bg-blue-500 rounded-full">React</span>
              <span className="px-2 py-1 text-sm text-white bg-black rounded-full">Next.js</span>
              <span className="px-2 py-1 text-sm text-white bg-purple-500 rounded-full">Redux</span>
              <span className="px-2 py-1 text-sm text-white bg-gray-500 rounded-full">Supabase</span>
              <span className="px-2 py-1 text-sm text-white bg-yellow-500 rounded-full">Retool</span>
            </div>
            <ul className="ml-6 text-gray-300 list-disc">
              <li>Rehice el módulo de tarifas de envío, expandiéndolo para más países.</li>
              <li>Implementé nuevas funcionalidades en la plataforma SaaS.</li>
              <li>Integré pasarelas de pago como PayPal, Stripe y Culqi.</li>
              <li>Resolví bugs y mejoré la estabilidad del sistema.</li>
              <li>Desarrollé un backoffice low code con Retool.</li>
            </ul>
          </div>
        </div>

        {/* Devioz S.A.C. */}
        <div className="relative bg-[#171d37] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="relative z-10">
            <h3 className="mb-4 text-3xl font-semibold text-blue-400">Devioz S.A.C.</h3>
            {/* <div className="flex items-center mb-2 text-gray-300">
                <FaCalendarAlt className="mr-2" /> Septiembre 2023 - Marzo 2024
              </div> */}
            <p className="mb-4 text-gray-300">Rol: Desarrollador Full Stack</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-sm text-white bg-blue-500 rounded-full">React</span>
              <span className="px-2 py-1 text-sm text-white bg-red-500 rounded-full">Angular</span>
              <span className="px-2 py-1 text-sm text-white bg-green-500 rounded-full">Spring Boot</span>
              <span className="px-2 py-1 text-sm text-white rounded-full bg-cyan-500">TailwindCSS</span>
              <span className="px-2 py-1 text-sm text-white bg-teal-500 rounded-full">MongoDB</span>
              <span className="px-2 py-1 text-sm text-white bg-orange-500 rounded-full">MySQL</span>
            </div>
            <ul className="ml-6 text-gray-300 list-disc">
              <li>Desarrollé interfaces de usuario responsivas y optimizadas.</li>
              <li>Orquesté peticiones API REST desde el frontend.</li>
              <li>Implementé autenticación segura con JWT.</li>
              <li>Contribuí al desarrollo del panel de administración.</li>
              <li>Integré funcionalidades backend con Spring Boot.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
