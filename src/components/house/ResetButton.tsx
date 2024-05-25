"use client"
import Image from "next/image";


export default function ResetButton({ img, value, setData }) {
    return(
        <button
				style={{
				width:"50px",
				height:"50px",
				borderRadius:"10px",
				borderStyle:"solid",
				margin:"5px",
				backgroundColor:"white",
				borderWidth:"2px",
				borderColor:"gray"}}
				onClick={()=>{setData({});}}>
            <Image
				src={img}
				alt={"icon"}
				width={25}
				height={25}
				style={{padding:"3px", marginLeft:"2px"}}			/>
        </button>
        );
}