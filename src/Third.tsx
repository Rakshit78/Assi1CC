import { useEffect,useState } from "react";
export default function Third() {
  const [list,setlist]=useState([]);
  let arr:any=[];
  async function getdata(){
    const res=await fetch(`http://api.weatherstack.com/current?access_key=f97561106c9153d29b4081f510940097&query=Delhi`);
    const data= await res.json();
    arr=[data];
    setlist(arr);
    console.log(arr);
  }
  useEffect(()=>{
    getdata()
  // console.log(list)
  },[])
  return <div style={{"marginTop":"-100px"}}>
 
   {list.map(({current:{temperature,weather_icons,wind_speed,Trecit}})=>{
  return<div key={temperature}>
<p>Temp : {temperature}</p>
<p>Whether_icon : <img src={weather_icons} alt="logo" width="20px" height="20px"/></p>
<p>Wind_speed : {wind_speed}</p>
<p>Trecit: {Trecit}</p>
  </div>
})}
 
  </div>;
}

{/*api.map(({Temp,Whether_icon,Wind_speed,Trecit})=>{
  return<>
<p>Temp:{Temp}</p>
<p>Whether_icon:{Whether_icon}</p>
<p>Wind_speed:{Wind_speed}</p>
<p>Trecit: {Trecit}</p>
  </>
})*/}

{/*list.map((res:any)=>{
  <>
  <img src={res.current.Whether_icon} alt="image" />
  <h5>{res.current.Wind_speed}</h5>
  <h5>{res.current.Temp}</h5>
   <h5>{res.current.Trecit}</h5>
  </>
})*/}