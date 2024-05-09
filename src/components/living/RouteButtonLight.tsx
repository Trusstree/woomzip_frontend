"use client"

import { useRouter } from "next/navigation";

export function RouteButtonLight({url, text}){
	const router = useRouter();

	function handleClick() {
		// e.target.value
		router.push(url);
	}
	
	return (
		<div
        className="button"
        style={{float:"right", marginRight:"20px", color:"black", fontSize:"14px", backgroundColor:"none", border:"none"}}
        onClick={handleClick}>
        {text}
        </div>
	)
}