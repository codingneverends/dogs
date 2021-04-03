import React from 'react'

export default function Display({image}) {
    return (
        <div style={{fontSize:"1.5rem",width:"400px",padding:"20px",height:"400px",display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"calc(100% - 40px)",maxHeight:"calc(50vh - 40px)"}} className="glass">
            <img alt="nil" src={image} style={{maxHeight:"100%",maxWidth:"100%"}}/>
        </div>
    )
}
