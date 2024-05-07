"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const badgeExample = [
	<span className="badge" style={{padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>지금까지 5명이 살아봤어요!</span>,
	<span className="badge" style={{padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>또 살아보고 싶어요</span>,
	<span className="badge" style={{padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>따뜻해요</span>
]

export function LivingCard({company, title, addr, img, url}){
	const router = useRouter();

	function handleClick() {
		// e.target.value
		router.push(url);
	}
	
	return (
		<div
			className="card"
			style={{border:"none", width:"50%", minWidth:"400px"}}
			onClick={handleClick}>
			<Image
				className="card-img-top"
				style={{borderRadius:"25px", objectFit:"cover"}}
				alt="main-img"
				src={img}
				width={100}
				height={270}
				unoptimized={true}/>
			
			<div style={{color:"gray", padding:"20px"}}>
				<div style={{fontSize:"15px", marginLeft:"2px"}}>{company}</div>
				<div style={{fontSize:"25px", color:"#101648"}}>{title}</div>
				<div style={{fontSize:"15px", marginLeft:"10px", marginTop:"10px"}}>{addr}</div>
				<hr/>
				{badgeExample}
			</div>
		</div>
	)
}