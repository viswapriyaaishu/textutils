import React,{useState} from 'react'
export default function About(){

    const[pick,setPick]=useState({
        color: 'black',backgroundColor:'white'
     })

     const[btnText,setBtnText]=useState('Enable dark mode')
const colorpick=()=>
         {
     if(pick.color==='black')
     {
     setPick(
     {
         color:'white',
         backgroundColor:'black'
     }
     )
     setBtnText('Enable light mode')
     }
     else{
         setPick(
             {
                 color:'black',
                 backgroundColor:'white'
             }
         )
         setBtnText('Enable dark mode')
     }
         }
return (
    

            <div className="container" style={pick}>
                <details style={pick}>
                    <summary style={pick}>
                        general
                    </summary>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequatur ea blanditiis animi sed quod sequi rem quisquam laudantium impedit laborum, minima tenetur odit porro! Iste nihil quis, cupiditate hic corrupti quas? Maxime esse et illo! Obcaecati, nulla? Cupiditate commodi aspernatur tempore architecto perspiciatis eos!
                </details>
<details style={pick}>
                <summary style={pick}>
                        oc
                    </summary>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequatur ea blanditiis animi sed quod sequi rem quisquam laudantium impedit laborum, minima tenetur odit porro! Iste nihil quis, cupiditate hic corrupti quas? Maxime esse et illo! Obcaecati, nulla? Cupiditate commodi aspernatur tempore architecto perspiciatis eos!
                </details>
<details style={pick}>
<summary style={pick}>
sc
</summary>
Lorem ipsum dolor sit amet consectetur adipisicing elit.Architecto consequatur ea blanditiis animi sed quod sequi rem quisquam laudantium impedit laborum, minima tenetur odit porro! Iste nihil quis, cupiditate hic corrupti quas ? Maxime esse et illo! Obcaecati, nulla ? Cupiditate commodi aspernatur tempore architecto perspiciatis eos!
</details >

<button className="btn btn-success" onClick={colorpick}>{btnText}</button>
        </div >
        )
    }

   