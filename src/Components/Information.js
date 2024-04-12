import { useState } from "react";

function Information()
{
    const [clientname,setClientname]=useState('')
    const [clientadd,setClientadd]=useState('')
    return (
        <div>
            <form>
                <input type='text' placeholder="Enter Name" onChange={(e)=>setClientname(e.target.value)}></input><br/><br/>
                <input type='text' placeholder="Enter Address" onChange={(e)=>setClientadd(e.target.value)}></input>
                
            </form>
        </div>
    )
}
export default Information;