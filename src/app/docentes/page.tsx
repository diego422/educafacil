import Link from "next/link"
import { Button } from "@/componentes/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/componentes/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/componentes/ui/tabs"
import { Input } from "@/componentes/ui/input"
import { Download, Home, Search, FileText, Users, BookMarked } from "lucide-react"

export default function DocentesPage() {
  const materialesDidacticos = [
    { titulo: "Guía para enseñanza de matemáticas", nivel: "Primaria", tipo: "PDF", tamaño: "4.2 MB" },
    { titulo: "Actividades de lectura comprensiva", nivel: "Primaria", tipo: "PDF", tamaño: "2.8 MB" },
    { titulo: "Experimentos de ciencias para el aula", nivel: "Primaria", tipo: "ZIP", tamaño: "15.6 MB" },
    { titulo: "Recursos para enseñanza de historia", nivel: "Secundaria", tipo: "PDF", tamaño: "3.5 MB" },
    { titulo: "Guía de evaluación por competencias", nivel: "Ambos", tipo: "PDF", tamaño: "2.1 MB" },
  ]

  const planificaciones = [
    { titulo: "Planificación anual - Matemáticas 3° grado", nivel: "Primaria", tipo: "DOCX", tamaño: "1.2 MB" },
    { titulo: "Planificación anual - Ciencias 5° grado", nivel: "Primaria", tipo: "DOCX", tamaño: "1.5 MB" },
    { titulo: "Planificación trimestral - Literatura 8° grado", nivel: "Secundaria", tipo: "DOCX", tamaño: "1.8 MB" },
    { titulo: "Planificación de unidad - Física 10° grado", nivel: "Secundaria", tipo: "DOCX", tamaño: "1.3 MB" },
  ]

  const capacitaciones = [
    {
      titulo: "Estrategias de enseñanza innovadoras",
      descripcion: "Aprende nuevas metodologías para aplicar en el aula",
      fecha: "Disponible ahora",
      duracion: "4 horas",
    },
    {
      titulo: "Evaluación formativa en entornos digitales",
      descripcion: "Herramientas y técnicas para evaluar el aprendizaje",
      fecha: "Disponible ahora",
      duracion: "3 horas",
    },
    {
      titulo: "Inclusión en el aula",
      descripcion: "Estrategias para una educación inclusiva y accesible",
      fecha: "Próximamente",
      duracion: "5 horas",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Users className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">Área de Docentes</h1>
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
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Bienvenido al Área de Docentes</h2>
          <p className="mb-4">
            Aquí encontrarás recursos didácticos, planificaciones, materiales descargables y capacitaciones para
            enriquecer tu labor docente y facilitar la enseñanza.
          </p>
          <div className="relative mt-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input placeholder="Buscar recursos para docentes..." className="pl-10 bg-white border-blue-200" />
          </div>
        </div>

        {/* Contenido por pestañas */}
        <Tabs defaultValue="materiales" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="materiales">Materiales Didácticos</TabsTrigger>
            <TabsTrigger value="planificaciones">Planificaciones</TabsTrigger>
            <TabsTrigger value="capacitaciones">Capacitaciones</TabsTrigger>
          </TabsList>

          {/* Pestaña de Materiales Didácticos */}
          <TabsContent value="materiales">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Materiales Didácticos</CardTitle>
                <CardDescription>
                  Recursos para enriquecer tus clases y facilitar el aprendizaje de tus estudiantes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                  <ul className="divide-y">
                    {materialesDidacticos.map((material, index) => (
                      <li key={index} className="p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <FileText className="h-6 w-6 text-blue-400" />
                            <div>
                              <h4 className="font-medium">{material.titulo}</h4>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <span
                                  className={`inline-block px-2 py-1 text-xs rounded-full mr-2 ${
                                    material.nivel === "Primaria"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : material.nivel === "Secundaria"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-purple-100 text-purple-800"
                                  }`}
                                >
                                  {material.nivel}
                                </span>
                                <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 mr-2">
                                  {material.tipo}
                                </span>
                                <span>{material.tamaño}</span>
                              </div>
                            </div>
                          </div>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            <Download className="h-4 w-4 mr-1" /> Descargar
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" className="border-blue-200 text-blue-700">
                  Ver todos los materiales
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Pestaña de Planificaciones */}
          <TabsContent value="planificaciones">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Planificaciones</CardTitle>
                <CardDescription>
                  Modelos de planificación anual, trimestral y por unidad para diferentes niveles y materias.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                  <ul className="divide-y">
                    {planificaciones.map((plan, index) => (
                      <li key={index} className="p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <BookMarked className="h-6 w-6 text-blue-400" />
                            <div>
                              <h4 className="font-medium">{plan.titulo}</h4>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <span
                                  className={`inline-block px-2 py-1 text-xs rounded-full mr-2 ${
                                    plan.nivel === "Primaria"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-green-100 text-green-800"
                                  }`}
                                >
                                  {plan.nivel}
                                </span>
                                <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 mr-2">
                                  {plan.tipo}
                                </span>
                                <span>{plan.tamaño}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Vista previa
                            </Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                              <Download className="h-4 w-4 mr-1" /> Descargar
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" className="border-blue-200 text-blue-700">
                  Ver todas las planificaciones
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Pestaña de Capacitaciones */}
          <TabsContent value="capacitaciones">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Capacitaciones</CardTitle>
                <CardDescription>Cursos y talleres para el desarrollo profesional docente.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {capacitaciones.map((capacitacion, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2">{capacitacion.titulo}</h3>
                        <p className="text-gray-600 mb-4">{capacitacion.descripcion}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <span className="font-medium mr-1">Fecha:</span> {capacitacion.fecha}
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium mr-1">Duración:</span> {capacitacion.duracion}
                          </div>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          {capacitacion.fecha === "Próximamente" ? "Inscribirse" : "Acceder al curso"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" className="border-blue-200 text-blue-700">
                  Ver todas las capacitaciones
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Comunidad Docente */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Comunidad Docente</h2>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <Users className="h-32 w-32 text-blue-500" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3 text-blue-700">Únete a nuestra comunidad</h3>
                  <p className="mb-4">
                    Comparte experiencias, recursos y estrategias con otros docentes. Participa en foros de discusión,
                    colabora en proyectos educativos y mantente actualizado con las últimas tendencias en educación.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Unirse a la comunidad</Button>
                    <Button variant="outline" className="border-blue-300">
                      Conocer más
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Solicitud de Recursos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">¿No encuentras lo que buscas?</h2>
          <Card>
            <CardHeader>
              <CardTitle>Solicita recursos específicos</CardTitle>
              <CardDescription>
                Si necesitas materiales o recursos que no están disponibles, háznoslo saber y trabajaremos para
                proporcionártelos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input id="nombre" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Correo electrónico
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="tipo-recurso" className="text-sm font-medium">
                    Tipo de recurso
                  </label>
                  <select id="tipo-recurso" className="w-full p-2 border rounded-md">
                    <option value="">Selecciona una opción</option>
                    <option value="material">Material didáctico</option>
                    <option value="planificacion">Planificación</option>
                    <option value="evaluacion">Evaluación</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="descripcion" className="text-sm font-medium">
                    Descripción
                  </label>
                  <textarea
                    id="descripcion"
                    placeholder="Describe el recurso que necesitas..."
                    className="w-full p-2 border rounded-md h-32"
                  ></textarea>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Enviar solicitud</Button>
            </CardFooter>
          </Card>
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