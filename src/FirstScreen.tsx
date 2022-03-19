import Button from '@mui/material/Button';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
type P={
    name:string,
    fun:any,
    dis:boolean,
    setdis:any
}
export default function FirstScreen(props:P):any
{
    const navigate = useNavigate()
    return <div style={{"width":"100vw","height":"100vh","display":"grid","placeItems":"center"}}>
    <form onSubmit={(e)=>{
        e.preventDefault();
        console.log(props.name.toLowerCase())
        navigate('./second')
    }} style={{"width":"300px","height":"300px","background":"#e5e5e5","padding":"10px","display":"grid","placeItems":"center"}}>
        <input type='text' placeholder="Country Name" value={props.name} onChange={(event)=>{
          props.fun(event.target.value);
          if(event.target.value.length>0)
          {
              props.setdis(false);
          }
          else{
              props.setdis(true);
          }
        }} style={{"padding":"10px","marginTop":"100px"}}/>
       <Button variant="contained" type="submit" style={{"margin":"10px", "marginBottom":"100px"}} disabled={props.dis?true:false}>Submit</Button>

    </form>
  
    </div>
}