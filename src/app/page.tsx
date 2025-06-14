import Link from "next/link"
import { Button } from "@/componentes/ui/button"
import { Card, CardContent } from "@/componentes/ui/card"
import { BookOpen, Download, Users, GraduationCap, Home } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="header">
        <div className="container flex-col md:flex-row flex items-center justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <GraduationCap className="h-10 w-10 text-white" />
            <h1 className="text-3xl font-bold text-white">EducaFácil</h1>
          </div>
          <nav className="flex gap-4">
            <Button asChild variant="ghost" className="text-white hover:bg-white/20">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Inicio
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-white/20">
              <Link href="/acerca">
                <BookOpen className="mr-2 h-4 w-4" />
                Acerca de
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-white/20">
              <Link href="/docentes">
                <Users className="mr-2 h-4 w-4" />
                Docentes
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container relative z-10 px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Aprendizaje para todos</h2>
            <p className="text-xl mb-6">
              Recursos educativos gratuitos para estudiantes de primaria y secundaria. Aprende a tu ritmo y descarga
              materiales para estudiar sin conexión.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="btn-yellow" asChild>
                <Link href="/primaria">Primaria</Link>
              </Button>
              <Button size="lg" className="btn-green" asChild>
                <Link href="/secundaria">Secundaria</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container py-8 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Niveles Educativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primaria Card */}
            <Card className="nivel-card-primaria">
              <CardContent className="p-0">
                <div className="bg-yellow-100 p-6">
                  <h3 className="text-2xl font-bold text-yellow-700 mb-4">Primaria</h3>
                  <p className="mb-4">Recursos educativos para estudiantes de 1° a 6° grado.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {[1, 2, 3, 4, 5, 6].map((grado) => (
                      <Button
                        key={grado}
                        variant="outline"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-600"
                        asChild
                      >
                        <Link href={`/primaria/${grado}`}>{grado}° Grado</Link>
                      </Button>
                    ))}
                  </div>
                  <Button className="w-full btn-yellow text-black" asChild>
                    <Link href="/primaria">Explorar Primaria</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Secundaria Card */}
            <Card className="nivel-card-secundaria">
              <CardContent className="p-0">
                <div className="bg-green-100 p-6">
                  <h3 className="text-2xl font-bold text-green-700 mb-4">Secundaria</h3>
                  <p className="mb-4">Recursos educativos para estudiantes de 7° a 11° grado.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {[7, 8, 9, 10, 11].map((grado) => (
                      <Button
                        key={grado}
                        variant="outline"
                        className="bg-green-500 hover:bg-green-600 text-white border-green-600"
                        asChild
                      >
                        <Link href={`/secundaria/${grado}`}>{grado}° Grado</Link>
                      </Button>
                    ))}
                  </div>
                  <Button className="w-full btn-green text-white" asChild>
                    <Link href="/secundaria">Explorar Secundaria</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Materias Destacadas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Materias Destacadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Matemáticas", color: "bg-red-500", icon: "📐" },
              { name: "Español", color: "bg-blue-500", icon: "📝" },
              { name: "Ciencias", color: "bg-green-500", icon: "🔬" },
              { name: "Historia", color: "bg-amber-500", icon: "🏛️" },
              { name: "Inglés", color: "bg-purple-500", icon: "🌎" },
              { name: "Educación Fisica", color: "bg-pink-500", icon: "🧪" },
            ].map((materia, index) => (
              <Link href={`/materias/${materia.name.toLowerCase()}`} key={index} 
              className="block no-underline text-white">
                <Card
                  className={`${materia.color} text-white hover:shadow-lg transition-shadow h-full flex flex-col items-center justify-center py-6 text-center`}
                >
                  <div className="text-4xl mb-2">{materia.icon}</div>
                  <h3 className="font-bold">{materia.name}</h3>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Recursos Destacados */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Recursos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Guía de Matemáticas Básicas", type: "PDF", grade: "Primaria" },
              { title: "Experimentos de Ciencias", type: "Video", grade: "Primaria" },
              { title: "Literatura Hispanoamericana", type: "PDF", grade: "Secundaria" },
            ].map((recurso, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          recurso.grade === "Primaria" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {recurso.grade}
                      </span>
                      <span className="inline-block ml-2 px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                        {recurso.type}
                      </span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-800 shadow-none border-none focus:ring-0 outline-none px-1">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="font-bold mb-2">{recurso.title}</h3>
                  <p className="text-sm text-gray-600">
                    Material educativo para reforzar el aprendizaje en el aula y en casa.
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-2 shadow-none border-none focus:ring-0 outline-none text-blue-600 hover:text-blue-800">
                    Ver más
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline">Ver todos los recursos</Button>
          </div>
        </section>

        {/* Sección para Docentes */}
        <section className="bg-blue-50 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3">
              <Users className="h-24 w-24 text-blue-600 mx-auto" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-3 text-blue-700">Recursos para Docentes</h2>
              <p className="mb-4">
                Accede a materiales didácticos, guías de enseñanza y recursos para facilitar la educación de tus
                estudiantes.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/docentes">Área de Docentes</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">EducaFácil</h3>
                <p>Plataforma educativa gratuita para niños y jóvenes de primaria y secundaria.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Enlaces</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="footer-link">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/primaria" className="footer-link">
                      Primaria
                    </Link>
                  </li>
                  <li>
                    <Link href="/secundaria" className="footer-link">
                      Secundaria
                    </Link>
                  </li>
                  <li>
                    <Link href="/docentes" className="footer-link">
                      Docentes
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contacto</h3>
                <p>contacto@educafacil.org</p>
                <p className="mt-4">© {new Date().getFullYear()} EducaFácil. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}