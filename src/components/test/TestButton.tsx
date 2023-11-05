"use client"

type TestButtonProps = {
  children?: string
  className?: string
  src: string
  setSrc:any
}

let number=0;

export default function TestButton(props: TestButtonProps) {
  const { className, children, src, setSrc } = props;

  return (<></>);
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