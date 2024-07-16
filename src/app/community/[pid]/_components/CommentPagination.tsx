import { useState } from "react";

export default function CommentPagination({ page, setPage, numItems, numShowItems, numShowPages }) {
  const maxPageNumber = Math.ceil(numItems / numShowItems); //페이지네이션에서 가장 큰 페이지 값
  const remainder = (page - 1) % numShowPages; //페이지네이션에서 페이지 변수가 현재 보이는 숫자 중에 몇 번째?
  const firstPage = page - 1 - remainder; //페이지네이션에서 현재 보일 숫자들 중에 가장 작은 숫자

  const prevPage = () => {
    if (page > numShowPages) {
      // 맨 첫 줄에 있는 친구들보다는 커야 함
      setPage(firstPage);
    } else {
      // 맨 첫 줄에 있으면 그냥 1로 보내줌
      setPage(1);
    }
    // ex) 6 7 8 9 10 => 1 2 3 4 5 면 page는 5
    window.scrollTo({ top: document.getElementById("commentForm").offsetTop });
  };

  const nextPage = () => {
    if (maxPageNumber - firstPage > numShowPages) {
      // 마지막 페이지 숫자랑 줄에 있는 친구들보다는 커야 함
      setPage(firstPage + 1 + numShowPages);
    } else {
      // 맨 마지막 줄에 있으면 그냥 제일 큰 숫자로 보내줌
      setPage(maxPageNumber);
    }
    // ex) 1 2 3 4 5 => 6 7 8 9 10 면 page는 5
    window.scrollTo({ top: document.getElementById("commentForm").offsetTop });
  };

  const handlePage = (number: number) => {
    setPage(number);
    window.scrollTo({ top: document.getElementById("commentForm").offsetTop });
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button type="button" className="btn page-link link-dark" style={{ border: "none" }} onClick={prevPage}>
            {"<"}
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
                  className={`btn page-link link-dark ${page === firstPage + i + 1 ? "fw-bold" : ""}`}
                  style={{ border: "none" }}
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
          <button type="button" className="btn page-link link-dark" style={{ border: "none" }} onClick={nextPage}>
            {">"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
