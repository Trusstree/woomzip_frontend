"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export function RouteButton({url, text}){
	const router = useRouter();

	function handleClick() {
		// e.target.value
		router.push(url);
	}
	
	return (
		<div
        className="button"
        style={{width:"100%", height:"50px", borderRadius:"10px", padding:"10px", marginBottom:"10px",backgroundColor:"#101648", color:"white", fontSize:"20px", fontWeight:"600", textAlign:"center"}}
        onClick={handleClick}>
        {text}
        </div>
	)
}
