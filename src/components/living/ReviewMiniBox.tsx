"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const badgeExample = [
	<span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>가족끼리 좋아요</span>,
	<span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>또 살아보고 싶어요</span>,
	<span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>따뜻해요</span>,
	<span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>자연이 좋아요</span>,
	<span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>집갈래요 피곤해요</span>
]

export function ReviewMiniBox({name, comment, img, url}){
	const router = useRouter();

	function handleClick() {
		// e.target.value
		router.push(url);
	}



	return (
        <div 
					className="card"
					style={{marginRight:"10px", width:"430px", minWidth:"350px", height:"100%", border:"1px solid lightGray", borderRadius:"15px", overflow:"hidden"}}>
            <div style={{color:"gray", padding:"10px"}}>{name}</div>
            <div className="container row" style={{margin:"0", padding:"0"}}>
                <div className="container" style={{width:"65%", height:"110px", marginLeft:"0", fontWeight:"500", overflow:"hidden"}}>
                {comment}
                </div>
                <div className="container" style={{float:"right", margin:"0", padding:"0" ,width:"100px", height:"100px"}}>
                <Image
									className="card-img-top"
									style={{borderRadius:"10px", objectFit:"cover"}}
									alt="main-img"
									src={img}
									width={100}
									height={100}
									unoptimized={true}/>
                </div>
            </div>
            <div className="container" style={{width:"500px"}}>
                
								{badgeExample}
            </div>
        </div>
	)}