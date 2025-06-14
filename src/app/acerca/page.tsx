import Link from "next/link"
import { Button } from "@/componentes/ui/button"
import { Card, CardContent } from "@/componentes/ui/card"
import { BookOpen, Home, Target, Users, Heart, Globe } from "lucide-react"

export default function AcercaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <BookOpen className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">Acerca de EducaFácil</h1>
          </div>
          <nav className="flex gap-4">
            <Button asChild variant="ghost" className="text-white hover:bg-white/20">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Inicio
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-8 px-4">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-purple-700">Nuestra Misión</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EducaFácil es una plataforma educativa gratuita que tiene como propósito reunir todos los contenidos
            necesarios para que niños y jóvenes puedan terminar con éxito la educación primaria y secundaria.
          </p>
        </section>

        {/* Objetivos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Nuestros Objetivos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Acceso Universal</h3>
                <p className="text-gray-600">
                  Proporcionar herramientas de aprendizaje accesibles para todos, sin importar su ubicación o situación
                  económica.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Desarrollo Académico</h3>
                <p className="text-gray-600">
                  Ayudar a desarrollar la parte académica ofreciendo las mismas oportunidades educativas para todos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-green-200">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Pensamiento Crítico</h3>
                <p className="text-gray-600">
                  Generar pensamiento crítico desde temprana edad a través de contenidos educativos de calidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Características */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">¿Qué nos hace diferentes?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Plataforma Gratuita</h3>
                  <p className="text-gray-600">
                    Todos nuestros recursos son completamente gratuitos, eliminando barreras económicas al aprendizaje.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fácil de Usar</h3>
                  <p className="text-gray-600">
                    Interfaz intuitiva y amigable diseñada especialmente para niños y jóvenes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Organización por Niveles</h3>
                  <p className="text-gray-600">
                    Recursos organizados según el nivel educativo para facilitar el aprendizaje progresivo.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Apoyo a Docentes</h3>
                  <p className="text-gray-600">Sección especial con recursos didácticos para facilitar la enseñanza.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Acceso Sin Conexión</h3>
                  <p className="text-gray-600">
                    Posibilidad de descargar materiales para estudiar sin conexión a internet.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contenido de Calidad</h3>
                  <p className="text-gray-600">
                    Materiales educativos cuidadosamente seleccionados y organizados por expertos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impacto */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Nuestro Impacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <p className="text-gray-600">Gratuito y Accesible</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">11</div>
                <p className="text-gray-600">Grados Cubiertos</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">6+</div>
                <p className="text-gray-600">Materias Principales</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visión */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-xl mb-6">
                Ser la plataforma educativa líder en América Latina, reduciendo la brecha educativa y democratizando el
                acceso al conocimiento de calidad.
              </p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100" asChild>
                <Link href="/">Únete a nuestra misión</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Compromiso */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-700">Nuestro Compromiso</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            En EducaFácil nos comprometemos a mantener nuestra plataforma siempre gratuita, actualizada y accesible.
            Trabajamos constantemente para mejorar nuestros recursos y expandir nuestro contenido, siempre con el
            objetivo de brindar la mejor experiencia educativa posible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/primaria">Explorar Primaria</Link>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="/secundaria">Explorar Secundaria</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/docentes">Área de Docentes</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EducaFácil</h3>
              <p>Plataforma educativa gratuita para niños y jóvenes de primaria y secundaria.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white hover:underline hover:text-gray-300 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/primaria" className="text-white hover:underline hover:text-gray-300 transition-colors">
                    Primaria
                  </Link>
                </li>
                <li>
                  <Link href="/secundaria" className="text-white hover:underline hover:text-gray-300 transition-colors">
                    Secundaria
                  </Link>
                </li>
                <li>
                  <Link href="/docentes" className="text-white hover:underline hover:text-gray-300 transition-colors">
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
    </div>
  )
}