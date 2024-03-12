import { useState } from "react";


export function BookForm ({ agregarLibro}) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');


    const handleTitle = (event) => setTitle(event.target.value); 
    const handleAuthor = (event) => setAuthor(event.target.value);
    const handleYear = (event) => setYear(event.target.value);

        return (
             <form onSubmit={() => agregarLibro( title, author , year)}>
                <label>
                    Title
                    <input type="text" value={title} onChange={handleTitle} />
                </label>
                <label>
                    Author
                    <input type="text" value={author} onChange={handleAuthor} />
                </label>
                <label>
                    Year
                    <input type="text" value={year} onChange={handleYear} />
                </label>
                <button type="submit">Add</button>
             </form>
        )

}