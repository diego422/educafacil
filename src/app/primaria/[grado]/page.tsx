import Link from "next/link"
import { Button } from "@/componentes/ui/button"
import { Card, CardContent } from "@/componentes/ui/card"
import { BookOpen, Download, ChevronLeft, Home } from "lucide-react"

type GradoPageProps = {
  params: {
    grado: string
  }
}

export default async function GradoPrimariaPage({ params }: GradoPageProps) {
  const { grado } = await params
  const materias = [
    { nombre: "Matematicas", color: "bg-red-500", icon: "📐", descripcion: "Números, operaciones, geometría y más" },
    {
      nombre: "Español",
      color: "bg-blue-500",
      icon: "📝",
      descripcion: "Lectura, escritura, gramática y comunicación",
    },
    {
      nombre: "Ciencias",
      color: "bg-green-500",
      icon: "🔬",
      descripcion: "Naturaleza, experimentos y descubrimientos",
    },
    { nombre: "Estudios Sociales", color: "bg-amber-500", icon: "🏛️", descripcion: "Historia, geografía y cultura" },
    { nombre: "Inglés", color: "bg-purple-500", icon: "🌎", descripcion: "Vocabulario, gramática y conversación" },
    { nombre: "Fisica", color: "bg-pink-500",  icon: "🧪", descripcion: "Expresión artística y creatividad" },
  ]

  const recursos = [
    { titulo: "Guía de Matemáticas", tipo: "PDF", tamaño: "2.3 MB" },
    { titulo: "Ejercicios de Español", tipo: "PDF", tamaño: "1.5 MB" },
    { titulo: "Video: Experimentos de Ciencias", tipo: "Video", tamaño: "45 MB" },
    { titulo: "Mapas para Estudios Sociales", tipo: "Imágenes", tamaño: "3.7 MB" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <BookOpen className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">Primaria - {grado}° Grado</h1>
          </div>
          <nav className="flex gap-4">
            <Button asChild variant="ghost" className="text-white hover:bg-white/20">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Inicio
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-white/20">
              <Link href="/primaria">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Volver a Primaria
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Bienvenido a {grado}° Grado</h2>
          <p className="text-yellow-700">
            Explora todas las materias y recursos disponibles para este nivel. Puedes descargar los materiales para
            estudiar sin conexión a internet.
          </p>
        </div>

        {/* Materias */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-yellow-700">Materias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materias.map((materia, index) => (
              <Link
                href={`/primaria/${grado}/materias/${materia.nombre.toLowerCase().replace(/\s+/g, "-")}`}
                key={index}
                className="block"
              >
                <Card className={`${materia.color} text-white hover:shadow-lg transition-shadow h-full`}>
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="text-4xl mb-3">{materia.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{materia.nombre}</h3>
                    <p className="text-center text-white/90">{materia.descripcion}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Recursos Descargables */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-yellow-700">Recursos Descargables</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-yellow-100 p-4 border-b border-yellow-200">
              <h3 className="font-bold text-yellow-800">Materiales para {grado}° Grado</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              {recursos.map((recurso, index) => (
                <li key={index} className="p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{recurso.titulo}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 mr-2">
                          {recurso.tipo}
                        </span>
                        <span>{recurso.tamaño}</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      <Download className="h-4 w-4 mr-1" /> Descargar
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" className="border-yellow-500 text-yellow-700 hover:bg-yellow-50">
              Ver todos los recursos
            </Button>
          </div>
        </section>

        {/* Actividades Interactivas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-yellow-700">Actividades Interactivas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { titulo: "Juego de Matemáticas", descripcion: "Practica sumas y restas de forma divertida" },
              { titulo: "Cuentos Interactivos", descripcion: "Lee y responde preguntas sobre la lectura" },
              { titulo: "Experimentos Virtuales", descripcion: "Aprende ciencias con simulaciones" },
            ].map((actividad, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-yellow-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{actividad.titulo}</h3>
                  <p className="text-gray-600 mb-4">{actividad.descripcion}</p>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Iniciar Actividad</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} EducaFácil. Todos los derechos reservados.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/" className="hover:underline">
                Inicio
              </Link>
              <Link href="/acerca" className="hover:underline">
                Acerca de
              </Link>
              <Link href="/contacto" className="hover:underline">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
