import { useEffect,useState } from 'react'
import { BookForm } from './component/BookForm'
import { BookTable } from './component/BookTable'
import './App.css'

function App() {
  const [Libros, setLibros] = useState([])

  const fetchBook = async () => {

    const response = await fetch("http://localhost:3000/books");
    const data = await response.json();
    setLibros(data);

  }

  const borrarLibro = async (id) => {
    await fetch(`http://localhost:3000/books/${id}`, {
      method: 'DELETE',
    })
    fetchBook();
  }

  const agregarLibro = async( title, author, year) =>{
    await fetch("http://localhost:3000/books", {
      method: 'POST',
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        author,
        year
      })
     
    })
    fetchBook()
  }
  useEffect(() => {
    fetchBook()
  }, []);

  return (
   <div>
    <BookForm agregarLibro={agregarLibro} />
    <BookTable libros={Libros} borrarLibros={borrarLibro} />
   </div>
  )
}

export default App
