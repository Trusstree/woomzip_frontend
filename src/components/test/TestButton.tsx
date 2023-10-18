"use client"

type TestButtonProps = {
  children?: string
  className?: string
}

let number=0;

export default function TestButton(props: TestButtonProps) {
  const { className, children } = props;

  const testFunction = () => {

  };

  return (
  <button type="button"
    style={{backgroundColor:"#6764F7"}}
    className={`${className?className:""} px-4 py-2 btn btn-primary rounded-lg fw-bold fs-5`}
    onClick={()=>{testFunction()}}>
    {children?children:"TEST"}
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