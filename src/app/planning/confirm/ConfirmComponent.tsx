'use client';

import { postPlanning } from '@/actions/apis/planningAPI';
import { useUser } from '@/app/_components/ContextSession';
import useQuery from '@/hooks/useQuery';
import { alertError, alertSuccess } from '@/lib/alertUtil';
import { useRouter } from 'next/navigation';

export default function ConfirmComponent() {
  const { getParams } = useQuery();
  const router = useRouter();
  const { userContext } = useUser();

  const submit = async () => {
    const houseData = {};
    getParams().forEach((value, key) => {
      houseData[key] = value;
    });

    houseData['auth'] = {
      is_login: !!userContext,
      access_token: userContext ? userContext.at : undefined,
    };
    console.log(houseData);

    const [data, error] = await postPlanning(houseData);
    if (error) {
      console.log(error);
      alertError('에러', '입력값에 문제가 있어요. 새로고침하여 다시 시도해보세요!');
      return;
    }
    console.log(data);
    alertSuccess('성공적으로 등록되었어요!', '제대로 입력되었습니다!');
    router.push('/');
  };

  return (
    <div className="row">
      <div
        className="btn btn-lg btn-success"
        onClick={() => {
          submit();
        }}
      >
        맞아요?
      </div>
      <div
        className="btn btn-lg btn-danger"
        onClick={() => {
          router.back();
        }}
      >
        아니에요?
      </div>
    </div>
  );
}
