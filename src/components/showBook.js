import Book from "./book"

const ShowBooks=({bookList,onDel,onEdit})=>{

    const renderBooks=bookList.map((book)=>{
        return (<Book bookDetails={book} onDel={onDel} onEdit={onEdit} key={book.id} />)
    })

    const showBookStyle={columns:'8 300px',columnGap:'10px'}
    return(
        <div style={showBookStyle} >{renderBooks}</div>
    )
}

export default ShowBooks