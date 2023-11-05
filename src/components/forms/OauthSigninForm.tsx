// "use client"

// import useNaverInit from "@/hooks/useNaverInit";
// import { useRef } from "react";

// export default function OauthSigninForm(props: any) {
// 	const {}=props;
// 	useNaverInit();

//   const naverRef = useRef<HTMLButtonElement>(null);

//   const handleNaverLoginClick = () => {
//     if (!naverRef || !naverRef.current || !naverRef.current.children) return;
//     (naverRef.current.children[0] as HTMLImageElement).click();
//   };
  
// 	return (
// 		<div>
// 			<div>
//         <button className="btn m-0 p-0" ref={naverRef} id='naverIdLogin' onClick={handleNaverLoginClick} />
//         <button className="btn m-0 p-0" ref={naverRef} id='naverIdLogin' onClick={handleNaverLoginClick} />
//       </div>
// 		</div>
// 	);
// }