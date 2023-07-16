import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClip = ()=>{
        console.log("UpperCase was clicked" + text );
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleClip = ()=>{
        console.log("LowerCase was clicked" + text );
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange =(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const [text,setText] = useState('Enter text here');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
        </div>
        <button className="btnprimary mx-2" onClick={handleUpClip}>Convert to UpperCase</button>
        <button className="btnprimary mx-2" onClick={handleClip}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p className="preview">{text}</p>
    </div>
    </>
    
  )
}
