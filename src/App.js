import AddBar from "./components/addBar";
import ShowBooks from "./components/showBook";
import SearchImage from "./components/api";
import { useState } from 'react'

function App() {
  const [bookList,setBookList]=useState([])

  const handleSubmit= async (value)=>{
    const images= await SearchImage(value)
    let imgadd=images[0].urls.small
    setBookList([...bookList,{name:value,id:value,imgadd:imgadd}])
  }
  const deleteBook=(id)=>{
    const updatedList=bookList.filter((book)=>{
      return book.id!==id
    })
    setBookList(updatedList)
  }

  const editBook=(id,newName)=>{
    console.log('hello')
    const updatedList=bookList.map((book)=>{
      if(book.id===id)
      return {...book,name:newName}
      return book})
    setBookList(updatedList)
  }

  return (
    <div style={{backgroundColor:'#112233'}} >
      <AddBar onSubmit={handleSubmit}/>
      <ShowBooks bookList={bookList} onDel={deleteBook} onEdit={editBook}/>
    </div>
  );
}

export default App;
