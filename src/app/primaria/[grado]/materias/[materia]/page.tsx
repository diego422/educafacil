import Link from "next/link"
import { Button } from "@/componentes/ui/button"
import { Card, CardContent } from "@/componentes/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/componentes/ui/tabs"
import { BookOpen, Download, ChevronLeft, Home, Play, FileText } from "lucide-react"

type MateriaPageProps = {
  params: {
    grado: string
    materia: string
  }
}

export default async function MateriaPage({ params }: MateriaPageProps) {
  const { grado, materia } = await params

  const decodedMateria = decodeURIComponent(materia)
  const materiaFormatted = decodedMateria.charAt(0).toUpperCase() + decodedMateria.slice(1).replace(/-/g, " ")

  const getColorScheme = () => {
    switch (materia) {
      case "matematicas":
        return {
          gradient: "from-red-500 to-red-600",
          accent: "text-red-700",
          bg: "bg-red-50",
          button: "bg-red-500 hover:bg-red-600",
          border: "border-red-200",
        }
      case "español":
        return {
          gradient: "from-blue-500 to-blue-600",
          accent: "text-blue-700",
          bg: "bg-blue-50",
          button: "bg-blue-500 hover:bg-blue-600",
          border: "border-blue-200",
        }
      case "ciencias":
        return {
          gradient: "from-green-500 to-green-600",
          accent: "text-green-700",
          bg: "bg-green-50",
          button: "bg-green-500 hover:bg-green-600",
          border: "border-green-200",
        }
      default:
        return {
          gradient: "from-purple-500 to-purple-600",
          accent: "text-purple-700",
          bg: "bg-purple-50",
          button: "bg-purple-500 hover:bg-purple-600",
          border: "border-purple-200",
        }
    }
  }

  const colors = getColorScheme()

  const temas = [
    { titulo: "Tema 1: Introducción", descripcion: "Conceptos básicos y fundamentos" },
    { titulo: "Tema 2: Desarrollo", descripcion: "Aplicaciones y ejemplos prácticos" },
    { titulo: "Tema 3: Avanzado", descripcion: "Temas complejos y desafíos" },
    { titulo: "Tema 4: Repaso", descripcion: "Ejercicios de práctica y evaluación" },
  ]

  const videos = [
    { titulo: "Introducción a la materia", duracion: "5:30" },
    { titulo: "Explicación de conceptos clave", duracion: "8:45" },
    { titulo: "Ejercicios prácticos", duracion: "12:20" },
  ]

  const documentos = [
    { titulo: "Guía completa de estudio", tipo: "PDF", tamaño: "3.2 MB" },
    { titulo: "Ejercicios de práctica", tipo: "PDF", tamaño: "1.8 MB" },
    { titulo: "Resumen de conceptos", tipo: "PDF", tamaño: "1.1 MB" },
    { titulo: "Material complementario", tipo: "ZIP", tamaño: "5.4 MB" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`bg-gradient-to-r ${colors.gradient} p-4 shadow-md`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <BookOpen className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">
              {materiaFormatted} - {grado}° Grado
            </h1>
          </div>
          <nav className="flex gap-4">
            <Button asChild variant="ghost" className="text-white hover:bg-white/20">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Inicio
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-white/20">
              <Link href={`/primaria/${grado}`}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Volver a {grado}° Grado
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className={`${colors.bg} p-6 rounded-lg mb-8`}>
          <h2 className={`text-2xl font-bold ${colors.accent} mb-4`}>Bienvenido a {materiaFormatted}</h2>
          <p className="mb-4">
            Explora todos los recursos disponibles para esta materia. Puedes ver los temas, videos explicativos y
            descargar materiales para estudiar sin conexión a internet.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className={`text-white ${colors.button}`}>
              <Download className="mr-2 h-4 w-4" /> Descargar todo el material
            </Button>
            <Button variant="outline">Ver programa completo</Button>
          </div>
        </div>

        {/* Contenido por pestañas */}
        <Tabs defaultValue="temas" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="temas">Temas</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="documentos">Documentos</TabsTrigger>
          </TabsList>

          {/* Pestaña de Temas */}
          <TabsContent value="temas">
            <Card>
              <CardContent className="p-6">
                <h3 className={`text-xl font-bold ${colors.accent} mb-4`}>Temas del curso</h3>
                <div className="grid gap-4">
                  {temas.map((tema, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${colors.border} hover:shadow-md transition-shadow`}
                    >
                      <h4 className="font-bold">{tema.titulo}</h4>
                      <p className="text-gray-600 mt-1">{tema.descripcion}</p>
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" variant="outline">
                          Ver contenido
                        </Button>
                        <Button size="sm" className={`text-white ${colors.button}`}>
                          <Download className="mr-1 h-4 w-4" /> Descargar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pestaña de Videos */}
          <TabsContent value="videos">
            <Card>
              <CardContent className="p-6">
                <h3 className={`text-xl font-bold ${colors.accent} mb-4`}>Videos educativos</h3>
                <div className="grid gap-6">
                  {videos.map((video, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-4 items-center">
                      <div className="relative w-full sm:w-48 h-28 bg-gray-200 rounded-md overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                          <div className="bg-black/60 rounded-full p-2">
                            <Play className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold">{video.titulo}</h4>
                        <p className="text-gray-500 text-sm mt-1">Duración: {video.duracion}</p>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" className={`text-white ${colors.button}`}>
                            <Play className="mr-1 h-4 w-4" /> Ver video
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="mr-1 h-4 w-4" /> Descargar
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pestaña de Documentos */}
          <TabsContent value="documentos">
            <Card>
              <CardContent className="p-6">
                <h3 className={`text-xl font-bold ${colors.accent} mb-4`}>Documentos descargables</h3>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                  <ul className="divide-y">
                    {documentos.map((doc, index) => (
                      <li key={index} className="p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <FileText className="h-6 w-6 text-gray-400" />
                            <div>
                              <h4 className="font-medium">{doc.titulo}</h4>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 mr-2">
                                  {doc.tipo}
                                </span>
                                <span>{doc.tamaño}</span>
                              </div>
                            </div>
                          </div>
                          <Button size="sm" className={`text-white ${colors.button}`}>
                            <Download className="h-4 w-4 mr-1" /> Descargar
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Actividades de Aprendizaje */}
        <section className="mb-12">
          <h2 className={`text-3xl font-bold mb-6 text-center ${colors.accent}`}>Actividades de Aprendizaje</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { titulo: "Ejercicios Interactivos", descripcion: "Practica lo aprendido con ejercicios interactivos" },
              { titulo: "Juegos Educativos", descripcion: "Aprende jugando con actividades divertidas" },
              { titulo: "Evaluación", descripcion: "Pon a prueba tus conocimientos con esta evaluación" },
            ].map((actividad, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow border-2 ${colors.border}`}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{actividad.titulo}</h3>
                  <p className="text-gray-600 mb-4">{actividad.descripcion}</p>
                  <Button className={`w-full text-white ${colors.button}`}>Iniciar Actividad</Button>
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