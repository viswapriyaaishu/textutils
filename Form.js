import React,{useState} from 'react'

export default function Form(props)

{  const[text,setText]=useState('')
    let newtext1
    let newtext2
    const onup=()=>
    {
 newtext1=text.toUpperCase()
 setText(newtext1)
 props.showAlert('success','converted to upper case')
    }
    const ondown=()=>
        {   newtext2=text.toLowerCase()
            setText(newtext2)
            props.showAlert('success','converted to Lower case')
        }

    const onc=(e)=>
        {
            setText(e.target.value)
        }

        const oncle=()=>
            {
                setText('')
                props.showAlert('success','Cleared text')
            }

    const[myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    const[bstate,setBstate]=useState('Enable dark mode')
const toggle=()=>{
    if(myStyle.color==='black')
        {
            setMyStyle(
               { color:'white',
                backgroundColor:'black'}
            )
            setBstate('Enable light mode')
        }
    else{
        setMyStyle(
            { color:'black',
             backgroundColor:'white'}
         )
         setBstate('Enable dark mode')
    }}

    const copy=()=>
        {
            var text=document.getElementById('poi')
            text.select()
            navigator.clipboard.writeText(text.value)
            props.showAlert('success','Text copied to clipboard')
        }
let t
        const rmxtra=()=>
            {
                t=text.split(/[' ']+/)
                setText(t.join(" "))
                props.showAlert('success','Removed extra spaces')
            }
    return(
        <div  style={{backgroundColor:props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'grey'}}>
        <div className="container my-5 "  >
Enter your text here
<br/>
< textarea rows='10' cols='150' value={text} onChange={onc}  style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}} id="poi"> </textarea>
<div className="container">
<button onClick={onup} className="btn btn-primary mx-3" >Upper case</button>

<button onClick={ondown} className="btn btn-primary mx-3">Lower case</button>
<button onClick={oncle} className="btn btn-primary mx-3">Clear</button>
<button onClick={toggle} className="btn btn-success mx-3">{bstate}</button>
<button onClick={copy} className="btn btn-primary mx-3">Copy</button>
<button onClick={rmxtra} className="btn btn-primary mx-3">Remove extra spaces</button>
</div>
</div>
<div className="container"  style={{color: props.mode==='light'?'black':'white'}}>
<p> No. of characters {text.length}</p>
<p>No. of words {text.split(' ').length}</p>
<p>Time in minutes to count the words {0.008*text.split(' ').length}min</p>
</div>
</div>
    );
}