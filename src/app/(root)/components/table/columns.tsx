"use client"

export type PersonaData = {
  id: string
  persona: string
  correo: string
  tituloTrabajo: string
  status: "Activo" | "Pendiente" | "Inactivo"
  url: string
}

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "persona",
    header: "Personas",
  },
  {
    accessorKey: "correo",
    header: "Correo",
  },
  {
    accessorKey: "tituloTrabajo",
    header: "Título de Trabajo",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "url",
    header: "URL",
  },
]
