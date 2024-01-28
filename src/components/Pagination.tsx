import useQuery from "@/hooks/useQuery";
import { isNumber } from "@/lib/validator";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
  const rawPage = Number(searchParams.get("page"));
  const page = rawPage>0?rawPage:1;
  const { createQueryString } = useQuery();
  
  const maxPageNumber = Math.ceil(numItems / numShowItems); //페이지네이션에서 가장 큰 페이지 값
  const remainder = (page-1) % numShowPages; //페이지네이션에서 페이지 변수가 현재 보이는 숫자 중에 몇 번째?
  const firstPage = (page-1) - remainder; //페이지네이션에서 현재 보일 숫자들 중에 가장 작은 숫자

  const prevPage = () => {
    if (page > numShowPages)
      // 맨 첫 줄에 있는 친구들보다는 커야 함
      router.push(createQueryString("page", firstPage.toString()));// 다음 수열 중에 가장 큰 숫자로 이동.
    // ex) 6 7 8 9 10 => 1 2 3 4 5 면 page는 5
    window.scrollTo({ top: 0 });
  };

  const nextPage = () => {
    if (maxPageNumber - firstPage > numShowPages)
      // 마지막 페이지 숫자랑 줄에 있는 친구들보다는 커야 함
      router.push(createQueryString("page", (firstPage + 1 + numShowPages).toString()));// 다음 수열 중에 가장 작은 숫자로 이동.
    // ex) 1 2 3 4 5 => 6 7 8 9 10 면 page는 5
    window.scrollTo({ top: 0 });
  };

  const handlePage = (number: number) => {
    router.push(createQueryString("page", number.toString()));
    window.scrollTo({ top: 0 });
  };

  //페이지네이션 숫자 버튼 만드는 JSX 반환
  const pagigationButton = (number: number, selected: boolean) => {
    return (
      <li className="page-item" key={number}>
        <button
          type="button"
          className={`btn page-link link-dark ${selected ? 'fw-bold' : ''}`}
          onClick={() => {
            handlePage(number);
          }}
        >
          {number}
        </button>
      </li>
    );
  };

  //숫자가 예쁘게 1 2 3 4 5 이런 식으로 잘 나오도록 리스트 만들어서 버튼 집어넣는 함수
  const paginationManage = (page: number) => {
    return new Array(numShowPages).fill([]).map((_, i) => {
      if (firstPage + i + 1 > maxPageNumber) return null;
      else return pagigationButton(firstPage + i+1, page === firstPage + i+1); //버튼 만드는 부분
    });
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            type="button"
            className="btn page-link link-dark"
            onClick={prevPage} >
            Prev
          </button>
        </li>
        {paginationManage(page)}
        <li className="page-item">
          <button
            type="button"
            className="btn page-link link-dark"
            onClick={nextPage} >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}