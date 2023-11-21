"use client"

import { getHouseCount, postHouse } from "@/api/HouseAPI";
import SubmitButton from "@/components/forms/SubmitButton";
import useForm from "@/hooks/useForm";
import { getS3Url, setS3Url } from "@/utils/s3Util";
import { isRequired } from "@/utils/validator";
import { useSession } from "next-auth/react";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

export default function AdminClient() {
  const [houseData, setHouseData] = useState({
    title : "test 1",
    image: "",
    subImage1: "",
    subImage2: "",
    buildingImage: "",
    blueprint: "",
    costImage: "",
    officeImage: "",
    price : 0,
    floorSpace : 0,
    roomNumber : 0,
    toiletNumber : 0,
    hasLoft : true
  });

  const handleTitle = (e:ChangeEvent<HTMLInputElement>, name:string):ChangeEventHandler<HTMLInputElement> => {
    if (e) e.preventDefault();

    setHouseData((oldValues) => ({...oldValues, [name]: e.target.value}));
    return;
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>, name:string):ChangeEventHandler<HTMLInputElement> => {
    if (e) e.preventDefault();
    setHouseData((oldValues) => ({...oldValues, [name]: Number(e.target.value)}));
    return;
  } 

  const testFunction = async (e:ChangeEvent<HTMLInputElement>, name:string) => {
    const img = e.target.files[0];
    const count = await getHouseCount();
    const pid = count.data+1;
    const {response, error} = await setS3Url(`houses/${pid}/${name}.${img.type.split("/")[1]}`, img);
    if(!error) {
      setHouseData((oldValues) => (
        {
          ...oldValues,
          [name]: `https://trussbucket.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/houses/${pid}/${name}.${img.type.split("/")[1]}`
        }
      ));
    }
    else console.log(error);
  };
  
  return (
    <div>
      <div className="d-flex flex-column justify-content-center">
        {/* title */}
        <div className="d-flex justify-content-center align-items-center">
          <label htmlFor={"title"}>title</label>
          <input
            type='text'
            id={"title"}
            onChange={(e)=>handleTitle(e, "title")}
            value={houseData["title"]}
          />
          <span>{houseData["title"]!="" && houseData["title"]}</span>
        </div>

        {/* image */}
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <label htmlFor={"image"}>image</label>
            <input
              id={"image"}
              accept="image/*"
              multiple
              type="file" 
              onChange={(e)=>{testFunction(e, "image")}}
            />
          </div>
          <img src={houseData["image"]} width={200} height={100}/>
        </div>

        {/* subImage1 */}
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <label htmlFor={"subImage1"}>subImage1</label>
            <input
              id={"subImage1"}
              accept="image/*"
              multiple
              type="file" 
              onChange={(e)=>{testFunction(e, "subImage1")}}
            />
          </div>
          <img src={houseData["subImage1"]} width={200} height={100}/>
        </div>

        {/* subImage2 */}
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <label htmlFor={"subImage2"}>subImage2</label>
            <input
              id={"subImage2"}
              accept="image/*"
              multiple
              type="file" 
              onChange={(e)=>{testFunction(e, "subImage2")}}
            />
          </div>
          <img src={houseData["subImage2"]} width={200} height={100}/>
        </div>

        {/* buildingImage */}
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <label htmlFor={"buildingImage"}>buildingImage</label>
            <input
              id={"buildingImage"}
              accept="image/*"
              multiple
              type="file" 
              onChange={(e)=>{testFunction(e, "buildingImage")}}
            />
          </div>
          <img src={houseData["buildingImage"]} width={200} height={100}/>
        </div>

        {/* blueprint */}
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <label htmlFor={"blueprint"}>blueprint</label>
            <input
              id={"blueprint"}
              accept="image/*"
              multiple
              type="file" 
              onChange={(e)=>{testFunction(e, "blueprint")}}
            />
          </div>
          <img src={houseData["blueprint"]} width={200} height={100}/>
        </div>

        {/* costImage */}
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <label htmlFor={"costImage"}>costImage</label>
            <input
              id={"costImage"}
              accept="image/*"
              multiple
              type="file" 
              onChange={(e)=>{testFunction(e, "costImage")}}
            />
          </div>
          <img src={houseData["costImage"]} width={200} height={100}/>
        </div>

        {/* officeImage */}
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <label htmlFor={"officeImage"}>officeImage</label>
            <input
              id={"officeImage"}
              accept="image/*"
              multiple
              type="file" 
              onChange={(e)=>{testFunction(e, "officeImage")}}
            />
          </div>
          <img src={houseData["officeImage"]} width={200} height={100}/>
        </div>

        {/* price */}
        <div className="d-flex justify-content-center align-items-center">
          <label htmlFor={"price"}>price</label>
          <input
            type='text'
            id={"price"}
            onChange={(e)=>handleChange(e, "price")}
            value={houseData["price"]}
          />
          <span>{houseData["price"]!=0 && houseData["price"]}</span>
        </div>

        {/*  floorSpace */}
        <div className="d-flex justify-content-center align-items-center">
          <label htmlFor={"floorSpace"}>floorSpace</label>
          <input
            type='text'
            id={"floorSpace"}
            onChange={(e)=>handleChange(e, "floorSpace")}
            value={houseData["floorSpace"]}
          />
          <span>{houseData["floorSpace"]!=0 &&houseData["floorSpace"]}</span>
        </div>

        {/* roomNumber */}
        <div className="d-flex justify-content-center align-items-center">
          <label htmlFor={"roomNumber"}>roomNumber</label>
          <input
            type='text'
            id={"roomNumber"}
            onChange={(e)=>handleChange(e, "roomNumber")}
            value={houseData["roomNumber"]}
          />
          <span>{houseData["roomNumber"]!=0 &&houseData["roomNumber"]}</span>
        </div>

        {/* toiletNumber */}
        <div className="d-flex justify-content-center align-items-center">
          <label htmlFor={"toiletNumber"}>toiletNumber</label>
          <input
            type='text'
            id={"toiletNumber"}
            onChange={(e)=>handleChange(e, "toiletNumber")}
            value={houseData["toiletNumber"]}
          />
          <span>{houseData["toiletNumber"]!=0 &&houseData["toiletNumber"]}</span>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button type="button"
          style={{backgroundColor:"#6764F7"}}
          className={`my-5 px-4 py-2 btn btn-primary rounded-lg fw-bold fs-5`}
          onClick={async ()=>{ console.log(houseData); await postHouse(houseData)}}>
          {"post house TEST"}
        </button>
      </div>

    </div>
  )
}