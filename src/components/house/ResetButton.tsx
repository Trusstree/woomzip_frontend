"use client"


export default function ResetButton({ title, value, data, setData }) {
    return(
        <button
				style={{
				width:"80px",
				height:"50px",
				borderRadius:"10px",
				borderStyle:"solid",
				margin:"5px",
				backgroundColor:data==value?"#F5F7FF":"white",
				borderWidth:"2px",
				borderColor:data==value?"#314FC0":"gray"}}
				onClick={()=>{setData(value);}}>
            <div style={{fontSize:"15px", fontWeight:"600"}}>{title}</div>
        </button>
        );
}