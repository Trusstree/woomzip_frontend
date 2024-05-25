"use client"


export default function ResetButton({ title, value, setData }) {
    return(
        <button
				style={{
				width:"80px",
				height:"50px",
				borderRadius:"10px",
				borderStyle:"solid",
				margin:"5px",
				backgroundColor:"white",
				borderWidth:"2px",
				borderColor:"gray"}}
				onClick={()=>{setData({});}}>
            <div style={{fontSize:"15px", fontWeight:"600"}}>{title}</div>
        </button>
        );
}