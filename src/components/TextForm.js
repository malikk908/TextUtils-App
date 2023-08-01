import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClickComma = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.match(/[^ ,]+/g).join(',');
        setText(newText)
    }

    const handleClickCommaSpace = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.match(/[^ ,]+/g).join(', ');
        setText(newText)
    }


    const handleChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }


    const [text, setText] = useState("Enter Text here");
    
    
  return (
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">        
        <textarea className="form-control" id="myBox" onChange={handleChange} style={{backgroundColor: props.mode==='light'?'white':'#3e4451', color: props.mode==='light'?'black':'white'}} value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClickComma}>Add Comma</button>
        <button className="btn btn-primary mx-2" onClick={handleClickCommaSpace}>Add Comma & Space</button>
        <div className="my-3">Word Count: {text.split(' ').filter((x) => x !=='').length}
        <div className="my-3">Character Count: {text.length}</div>
        </div>
    </div>
  )
}
