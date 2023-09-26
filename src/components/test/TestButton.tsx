"use client"

import { postPost } from "@/api/postAPI"

type TestButtonProps = {
  url?: string
  children?: string
  className?:string
}

let number=0;

export default function TestButton(props: TestButtonProps) {
  const { className, children } = props;
  return (
  <button type="button"
    style={{backgroundColor:"#6764F7"}}
    className={`${className?className:""} px-4 py-2 btn btn-primary rounded-lg fw-bold fs-5`}
    onClick={async ()=>{
      console.log(process.env.NEXT_PUBLIC_BASEURL);
      const { data, error } = await postPost(
        {
          title: "post.title",
          text: "post.text",
          pictures: "post.pictures",
          create_at: ",",
          author: "post.author",
          category: "post.category",
          thumbnail: "post.thumbnail",
          likeCount: 3,
          viewCount: 2,
          comments: "post.comments"
        }
      );
      console.log(data);
      number+=1;
      }}>
    {children}
  </button>
  );
}


// const { data, error } = await postPost(
//   {
//     title: "post.title",
//     text: "post.text",
//     pictures: "post.pictures",
//     author: "post.author",
//     timestamp: 16584821,
//     category: "post.category",
//     thumbnail: "post.thumbnail",
//     likeCount: 3,
//     viewCount: 2,
//     comments: "post.comments"
//   }
// );