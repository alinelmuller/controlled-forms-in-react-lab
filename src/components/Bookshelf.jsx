import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook , setNewBook] = useState ({
        title: '',
        author: '',
    })
    
    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name] : event.target.value});
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form> 
                    <label htmlFor="title">Title: </label>
                    <input id="title" name="title" value={newBook.title} onChange={handleInputChange}/>
                    <br />
                    <label htmlFor="author">Authour: </label>
                    <input id="author" name="author" value={newBook.author} onChange={handleInputChange} />
                    <br />
                </form>
            </div>
            <div className="bookCardsDiv">{/* Book cards will display here */}</div>
        </div>
    );
};
  
export default Bookshelf;

