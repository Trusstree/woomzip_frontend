"use client"


export default function FillteringButton({ title, value, name, data, setData }) {
    return(
        <button
				style={{
				width:"80px",
				height:"40px",
				borderRadius:"10px",
				borderStyle:"solid",
				margin:"3px",
				backgroundColor:data[name]==value?"#F5F7FF":"white",
				borderWidth:"2px",
				borderColor:data[name]==value?"#314FC0":"gray"}}
				onClick={()=>{setData((oldValue)=>({...oldValue, [name]:value}));}}>
            <div style={{fontSize:"13px", fontWeight:"600"}}>{title}</div>
        </button>
        );
}