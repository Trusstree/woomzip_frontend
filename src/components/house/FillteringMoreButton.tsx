"use client"

import { SearchModal } from "../living/SearchModal";

export default function FillteringMoreButton({ title, data, setData }) {
	return(
    <>
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
			data-bs-toggle="modal"
      data-bs-target={`#search_modal`}>
				<div style={{fontSize:"15px", fontWeight:"600"}}>{title}</div>
		</button>
		<SearchModal data={data} setData={setData} />
		</>
		);
}