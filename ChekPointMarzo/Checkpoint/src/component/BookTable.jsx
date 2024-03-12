export function BookTable({ libros, borrarLibros }) {
  return (
    <table>
      <fieldset>
        Libros {libros.length}
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {libros.map((libro) => (
            <tr key={libro.id}>
              <td>{libro.title}</td>
              <td>{libro.author}</td>
              <td>{libro.year}</td>
              <td>
                <button onClick={() => borrarLibros(libro.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </fieldset>
    </table>
  );
}
