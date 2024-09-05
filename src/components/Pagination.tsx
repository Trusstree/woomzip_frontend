'use client';

import useQuery from '@/hooks/useQuery';
import { useRouter, useSearchParams } from 'next/navigation';

//컴포넌트가 받을 props
interface PagenationProps {
  numItems: number;
  numShowItems: number;
  numShowPages: number;
}

export default function Pagination(props: PagenationProps) {
  const { numItems, numShowItems, numShowPages } = props;

  const router = useRouter();
  const searchParams = useSearchParams();
  const rawPage = Number(searchParams.get('page'));
  const page = rawPage > 0 ? rawPage : 1;
  const { createQuery, getRouteParams } = useQuery();

  const maxPageNumber = Math.ceil(numItems / numShowItems); //페이지네이션에서 가장 큰 페이지 값
  const remainder = (page - 1) % numShowPages; //페이지네이션에서 페이지 변수가 현재 보이는 숫자 중에 몇 번째?
  const firstPage = page - 1 - remainder; //페이지네이션에서 현재 보일 숫자들 중에 가장 작은 숫자

  const prevPage = () => {
    if (page > numShowPages) {
      // 맨 첫 줄에 있는 친구들보다는 커야 함
      createQuery('page', firstPage.toString());
    } else {
      // 맨 첫 줄에 있으면 그냥 1로 보내줌
      createQuery('page', '1');
    }
    router.push(getRouteParams()); // 다음 수열 중에 가장 큰 숫자로 이동.
    // ex) 6 7 8 9 10 => 1 2 3 4 5 면 page는 5
    window.scrollTo({ top: 0 });
  };

  const nextPage = () => {
    if (maxPageNumber - firstPage > numShowPages) {
      // 마지막 페이지 숫자랑 줄에 있는 친구들보다는 커야 함
      createQuery('page', (firstPage + 1 + numShowPages).toString());
    } else {
      // 맨 마지막 줄에 있으면 그냥 제일 큰 숫자로 보내줌
      createQuery('page', maxPageNumber.toString());
    }
    router.push(getRouteParams()); // 다음 수열 중에 가장 작은 숫자로 이동.
    // ex) 1 2 3 4 5 => 6 7 8 9 10 면 page는 5
    window.scrollTo({ top: 0 });
  };

  const handlePage = (number: number) => {
    createQuery('page', number.toString());
    router.push(getRouteParams());
    window.scrollTo({ top: 0 });
  };

  return (
    <nav aria-label="Page navigation" className="col-12 p-0">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button type="button" className="btn page-link link-dark" style={{ border: 'none' }} onClick={prevPage}>
            {'<'}
          </button>
        </li>

        {new Array(numShowPages).fill([]).map((_, i) => {
          if (firstPage + i + 1 > maxPageNumber) return null;
          else {
            const number = firstPage + i + 1;
            return (
              <li className="page-item" key={number}>
                <button
                  type="button"
                  className={`btn page-link link-dark ${page === firstPage + i + 1 ? 'fw-bold' : ''}`}
                  style={{ border: 'none' }}
                  onClick={() => {
                    handlePage(number);
                  }}
                >
                  {number}
                </button>
              </li>
            );
          } //버튼 만드는 부분
        })}

        <li className="page-item">
          <button type="button" className="btn page-link link-dark" style={{ border: 'none' }} onClick={nextPage}>
            {'>'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
