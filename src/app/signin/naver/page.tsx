"use client"

import useNaverLogin from "@/hooks/useNaverSignin";

export default function NaverLoginPage () {
	const isLoading=true;
	return (
		<div>
		...
		{isLoading ? 
			<div>
					...
					...
			</div>
			: <div /> // 로딩 이후의 작업을 해주는 컴포넌트(서비스의 방향에 맞게)
		}
		</div>
	)
}