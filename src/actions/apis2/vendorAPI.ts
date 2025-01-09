// 'use server';

// import { privateApi, publicApi } from '@/configs/axiosClient';

// export const postHouse = async (house: any) => {
//   let [data, error] = [undefined, undefined] as any;

//   try {
//     const result = await publicApi.post(`/vendors`, house);
//     data = result?.payload;
//   } catch (err) {
//     error = err.response?.data;
//     if (!error) error = err;
//   }

//   return [data, error];
// };
// vendorAPI.ts

// 요청 데이터 타입 정의
export interface VendorRequest {
  representativeName: string;
  representativeImageUrl: string;
  representativeIntro: string;
  vendorName: string;
  vendorIntro: string;
}

// 응답 데이터 타입 정의
interface ApiResponse {
  result: {
    code: number;
    message: string;
  };
  payload: string; // 성공 메시지
}

// API 호출 함수
export async function createVendor(vendorData: VendorRequest): Promise<[string | null, Error | null]> {
  const url = '/vendors';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vendorData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return [data.payload, null];
  } catch (error) {
    console.error('Error creating vendor:', error);
    return [null, error as Error];
  }
}
