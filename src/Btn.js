import React from 'react'

export default function btn({value,action,breeds,setoptbreed}) {
    function set(e){
        setoptbreed(e.target.value);
    }
    return (
        <div>
            <button onClick={action} style={{marginLeft:"50%",transform:"translateX(-50%)",padding:"15px",whiteSpace:"nowrap",borderRadius:"10px",background:"black"}}>{value}</button>
            <select style={{background:"black",padding:"10px",marginLeft:"50%",transform:"translateX(-50%)",marginTop:"10px"}} onChange={set}>
                {breeds.map((breed,i) =>{
                        var show=breed;
                        if(breed==="breeds")
                            show="All";
                        if(breed.split("/")[1]!==undefined){
                            show=breed.split("/")[0] + " " + breed.split("/")[1];
                        }
                        return <option key={i} value={i} style={{textTransform:"capitalize",padding:"10px"}}>{show}</option>
                    })
                }
            </select>
        </div>
    )
}
