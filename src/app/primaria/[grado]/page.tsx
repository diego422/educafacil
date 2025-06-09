import Link from "next/link"
import { Button } from "@/componentes/ui/button"
import { Card, CardContent } from "@/componentes/ui/card"
import { BookOpen, Home, ChevronRight } from "lucide-react"

export default function PrimariaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <BookOpen className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">Educación Primaria</h1>
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
        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Bienvenido a Primaria</h2>
          <p className="text-yellow-700">
            Selecciona el grado de tu interés para acceder a todos los recursos educativos disponibles.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-yellow-700">Selecciona tu Grado</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((grado) => (
              <Link href={`/primaria/${grado}`} key={grado} className="block">
                <Card className="hover:shadow-lg transition-shadow border-2 border-yellow-200 bg-yellow-50">
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl font-bold text-yellow-600 mb-4">{grado}°</div>
                    <h3 className="text-xl font-bold text-yellow-800 mb-2">{grado}° Grado</h3>
                    <p className="text-yellow-700 mb-4">
                      Recursos educativos para estudiantes de {grado}° grado de primaria
                    </p>
                    <div className="flex items-center justify-center text-yellow-600">
                      <span className="mr-2">Explorar</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
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