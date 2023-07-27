import { useState } from 'react'

const AddBar=({onSubmit})=>{
    const [text,setText]=useState('')
    const handleChange=(event)=>{
        setText(event.target.value)
    }
    const handleClick=(event)=>{
        onSubmit(text)
        setText('')
    }

    const barStyle={
        display:'flex',
        padding:'10px'
                }
    return(
        <div style={barStyle} >
            <input className='input is-rounded' value={text} placeholder='Book name' onChange={handleChange}/>
            <button className='button is-rounded' onClick={handleClick}>Add book</button>
        </div>
    )
}

export default AddBar