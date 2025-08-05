import { data } from "../../mocks/CardsMock";

export default function DataTable() {
  return (
    <div className=" max-padd-container rounded-md border ">
      <table className="w-full">
        <thead className="">
          <tr className="">
            <th className="px-4 py-2 border-b text-left">ID</th>
            <th className="px-4 py-2 border-b text-left">Personas</th>
            <th className="px-4 py-2 border-b text-left">Correo</th>
            <th className="px-4 py-2 border-b text-left">Título de Trabajo</th>
            <th className="px-4 py-2 border-b text-left">Status</th>
            <th className="px-4 py-2 border-b text-left">URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2 border-b">{row.id}</td>
              <td className="px-4 py-2 border-b">{row.persona}</td>
              <td className="px-4 py-2 border-b">{row.correo}</td>
              <td className="px-4 py-2 border-b">{row.tituloTrabajo}</td>
              <td
                className={`px-4 py-2 border-b font-medium ${
                  row.status === "Activo"
                    ? "text-green-300"
                    : row.status === "Pendiente"
                    ? "text-yellow-300"
                    : "text-red-300"
                }`}
              >
                {row.status}
              </td>
              <td className="px-4 py-2 border-b">
                <a
                  href={row.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Ver Perfil
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}