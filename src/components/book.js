import EditComponent from "./editComponent"
import { useState } from 'react'

const Book=({bookDetails,onDel,onEdit})=>{
    const [editState,setEditState]=useState(true)

    const handleDeleteClick=()=>{
        onDel(bookDetails.id)
    }
    const handleEditChange=()=>{
        setEditState(!editState)
    }
    const handleEdit=(id,newName)=>{
        onEdit(id,newName)
        setEditState(!editState)
    }
    const cardStyle={
        padding:'10px',
        backgroundColor:'#ffffff',
        margin:'0px 5px 10px 5px',
        borderRadius:'10px'
    }

    const show=editState?(<div style={{margin:'14px 14px 12px 17px'}} >{bookDetails.name}</div>):(<EditComponent bookDetails={bookDetails} onEdit={handleEdit} />)
    return(
        <div style={cardStyle} >
            <img src={bookDetails.imgadd} />
            {show}
            <div style={{display:'flex' ,justifyContent:'space-between'}} >
            <button className="button is-rounded is-dark" onClick={handleDeleteClick} >Delete</button>
            <button className="button is-rounded is-dark" onClick={handleEditChange} >Edit</button>
            </div>
        </div>
    )
}

export default Book