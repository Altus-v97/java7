import React from "react";

interface Usuario {
  id: number;
  nombre: string;
  activo: boolean;
}

function ListaUsuarios({ usuarios = [] }: { usuarios?: Usuario[] }) {
  const usuariosActivos = usuarios.filter((usuario) => usuario.activo);

  return (
    <div>
      {usuariosActivos.length > 0 ? (
        <ul>
          {usuariosActivos.map((usuario) => (
            <li key={usuario.id}>{usuario.nombre}</li>
          ))}
        </ul>
      ) : (
        <p>No hay usuarios activos en este momento.</p>
      )}
    </div>
  );
}

export default ListaUsuarios;
