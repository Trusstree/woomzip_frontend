import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/app/community/write/_components/Editor"), { ssr: false });

export default function Write() {
  return (
    <div className={`container px-5 my-5`}>
      <Editor />
    </div>
  );
}
