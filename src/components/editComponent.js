import { useState } from 'react'

const EditComponent=({bookDetails,onEdit})=>{
    const [text,setText]=useState(bookDetails.name)
    const handleChange=(event)=>{
        setText(event.target.value)
    }
    const handleClick=(event)=>{
        onEdit(bookDetails.id,text)
    }

    return (
        <div style={{display:'flex', margin:'5px'}} >
            <input className='input' value={text} onChange={handleChange} />
            <button className='button' onClick={handleClick} >Save</button>
        </div>
    )
}

export default EditComponent