import { data } from "../../mocks/CardsMock";

export default function DataTable() {
  return (
    <div className=" max-padd-container  ">
      <table className="w-full border-2 border-gray-300 border-separate overflow-hidden rounded-md md:border-spacing-2 lg:border-spacing-6 ">
        <thead className=" ">
          <tr className="">
            <th className="p-4 border-b text-left">ID</th>
            <th className="p-4 border-b text-left">Personas</th>
            <th className="p-4 border-b text-left">Correo</th>
            <th className="p-4 border-b text-left">Título de Trabajo</th>
            <th className="p-4 border-b text-left">Status</th>
            <th className="p-4 border-b text-left">URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="">
              <td className="px-4 py-2 border-b">{row.id}</td>
              <td className="px-4 py-2 border-b">{row.persona}</td>
              <td className="px-4 py-2 border-b">{row.correo}</td>
              <td className="px-4 py-2 border-b">{row.tituloTrabajo}</td>
              <td
                className={`p-1 text-center font-medium overflow-hidden rounded-md border-2 ${
                  row.status === "Activo"
                    ? "bg-green-300 text-green-800"
                    : row.status === "Pendiente"
                    ? "bg-yellow-300 text-yellow-800"
                    : "bg-red-300 text-red-800"
                }`}
              >
                {row.status}
              </td>
              <td className="px-4 py-2 border-b">
                <a
                  href={row.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 text-[#b150cf] border-[#b150cf] rounded-md "
                >
                Perfil
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}