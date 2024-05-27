"use client"


export default function SearchBox({ value, name, data, setData }) {
    return(
        <input
				style={{
				width:"350px",
				height:"40px",
				borderRadius:"10px",
				borderStyle:"solid",
				margin:"3px",
				backgroundColor:data[name]==value?"#F5F7FF":"white",
				borderWidth:"2px",
				borderColor:data[name]==value?"#314FC0":"gray"}}
				onClick={()=>{setData((oldValue)=>({...oldValue, [name]:value}));}}
                placeholder={ "제품/업체명으로 검색"}>
          

        </input>
        );
}