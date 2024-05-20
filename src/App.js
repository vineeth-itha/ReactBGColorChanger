import { useState } from "react";

const App = () => {
  
  const [type,setType] = useState()
  const [color,setColor] = useState()

  const HexColorSetup = ()=>{
     const colorValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H']
     var code = '#'
     for(let i =0;i<6;i++){
      code = code+ colorValues[Math.floor(Math.random()*18)]
     }
     setColor(code)
  }

  const RGBColorSetup = ()=>{
    const colorR = Math.random()*256
    const colorG = Math.random()*256
    const colorB = Math.random()*256
    setColor(`rgb(${colorR}, ${colorG}, ${colorB})`)
  }

  return (<>
  <div style={{backgroundColor:color}} className="bg-slate-200 min-h-screen">
    <div className=" flex justify-around">
      <button onClick={()=>setType("Hex")} className="bg-blue-500 text-white p-2 m-10">Hex Colors</button>
      <button onClick={()=>setType("RGB")} className="bg-blue-500 text-white p-2 m-10">RGB Colors</button>
      <button onClick={type==="Hex"?HexColorSetup:RGBColorSetup} className="bg-blue-500 text-white p-2 m-10">Change Color</button>
    </div>
    <div className="text-center w-6/12 m-auto mt-20" > <span className="text-3xl">{color}</span></div>
    </div>
  </>);
};

export default App;
