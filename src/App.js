import React,{ useState , useEffect } from 'react';
import './App.css';
import Display from './Display'
import Btn from './Btn';
function App() {
  function set(i){
    setbreed([breeds[i]]);
    setTimeout(RandomDog,1000);
  }
  async function RandomDog(){
    console.log(currentbreed);
    var _mid=currentbreed[0] || "breeds";
    if(_mid!="breeds"){
      _mid="breed/"+_mid+"/images";
      console.log(_mid);
    }
    else{
      _mid=_mid+"/image";
    }
    const res=await fetch("https://dog.ceo/api/"+_mid+"/random");
    const val=await res.json();
    const link=val.message;
    setdog(link);
    const _name=link.split("/")[link.split("/").length-2];
    setdogname(_name);
    const name=_name+"_"+ Math.floor(10+Math.random()*89) +"."+link.split(".")[link.split(".").length-1];
    setname(name);
    console.log(name);
  }
  async function GetBreeds(){
    const res=await fetch("https://dog.ceo/api/breeds/list/all");
    const val=await res.json();
    const links=val.message;
    var link=[]
    link.push("breeds");
    for(var i in links){
      if(links[i].length===0){
        link.push(i);
        continue;
      }
      for(var j in links[i]){
        const val=i+"/"+links[i][j];
        link.push(val);
      }
    }
    setbreeds(link);
  }
  const [breeds,setbreeds]=useState([]);
  const [image,setdog]=useState([]);
  const [imageName,setname]=useState([]);
  const [dogname,setdogname]=useState([]);
  const [currentbreed,setbreed]=useState([]);
  useEffect(async ()=>{
    setbreed(["breeds"]);
    await GetBreeds();
    await RandomDog();
  },[]);
  return (
    <div style={{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div>
        <h2 style={{padding:"10px",fontSize:"1.2rem",textAlign:"center"}}>A RandomDog Image Will Be Shown.</h2>
        <h1 style={{padding:"10px",fontSize:"1.5rem",textAlign:"center",textTransform:"capitalize"}}>{dogname}</h1>
        <Display image = {image} />
        <br/>
        <Btn action={RandomDog} value="Radom Dog" breeds={breeds} setoptbreed={set}/>
        <div style={{padding:"16px",whiteSpace:"nowrap",border:"2px solid #0f0",width:"fit-content",margin:"auto",marginTop:"10px",borderRadius:"10px"}}>
          <a download={imageName} href={image} title="ImageName" style={{textAlign:"center",textDecoration:"none"}}>
            {imageName}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
