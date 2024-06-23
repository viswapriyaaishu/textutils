import React from 'react'

function Alert(props)
{
     const capital=(letter)=>
        {
            const lower=letter.toLowerCase();
            return lower.charAt(0).toUpperCase()+lower.slice(1);
        }
    return(

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capital(props.alert.type)}</strong> <p>{props.alert.message}</p>
 
  
</div>

    );
}
export default Alert