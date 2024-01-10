import { useCallback, useEffect, useState , useRef } from 'react'
 
function App() {
  const [length,setLength] = useState(8)
  const [numerAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")
   
  
 // useRef Hook 
  const passwordRef = useRef(null);
  
  const copyPaswordToClipboard = useCallback(()=>
  {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select();
  },[password])

  const passwordGenerator = useCallback(()=>
  {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numerAllowed) str+= "0123456789";
    if(charAllowed) str+= "!@#$%^&*()_-+={}[];:<>?/~`";

     for (let i = 1; i <= length; i++){
       
        let char =  Math.floor(Math.random() * str.length + 1);
         pass += str.charAt(char);

        setPassword(pass);

     }
},
    [length,numerAllowed,charAllowed,setPassword])

     useEffect( ()=>{
      passwordGenerator()
}, 
    [length,numerAllowed,charAllowed,setPassword])


 return (
    <>
     <div className='w-full text-orange-500 bg-gray-600 px-4 py-5 shadow-md rounded-lg max-w-md my-20 mx-auto text-center'> 
       <h1 className='text-white text-center my-3'>Password Generator</h1>
         <div className='flex shadow rounded-lg mb-4  overflow-hidden'>
            <input className='outline-none px-3 py-1 w-full rounded'
               type='text'
               readOnlys
               placeholder='Password'
               value={password}
               ref= {passwordRef}>

             </input>
             <button className='shrink-0 bg-blue-700 outline-none px-3 py-0.5 text-white' onClick={copyPaswordToClipboard}>Copy</button>

        </div>
       <div className='flex items-center text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 '>
            <input 
                type='range'
                min={8}
                max={20}
                className='cursor-pointer'
                value={length}
                onChange={(e)=>(setLength(e.target.value))}>
          
             </input>
          <label>Length : {length}</label>
        </div>
       
        <div className='flex items-center gap-x-1'>
           <input 
                type='checkbox'
                defaultChecked = {numerAllowed}
                onChange={()=>{
                    setNumberAllowed((prev)=> !prev)
          }}>
            
          </input>
          <label>Numbers</label>

        </div>
            <div className='flex items-center gap-x-1'>
               <input 
                  type='checkbox'
                  defaultChecked = {charAllowed}
                  onChange={()=>{
                     setCharAllowed((prev)=> !prev)
          }}>
            
            </input>
          <label>Characters</label>
          
             </div>
          </div>
      </div>
    </>
  )
}

export default App
