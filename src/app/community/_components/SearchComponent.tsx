"use client";

import React, { useState } from "react";
import useQuery from "@/hooks/useQuery";
import { useRouter } from "next/navigation";
import styles from "@/styles/SearchComponent.module.css"; // 외부 CSS 파일 import

export default function SearchComponent() {
  const [q, setQ] = useState("");

  const router = useRouter();
  const { createQuery, getRouteParams } = useQuery();
  const handleClick = () => {
    createQuery("q", q);
    router.push(getRouteParams());
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        placeholder={" 찾고 싶은 내용을 검색해보세요"}
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
        }}
      />
      <div
        className={`btn ${styles.searchButton}`}
        data-bs-toggle="modal"
        data-bs-target={`#search_modal`}
        onClick={handleClick}
      >
        <div style={{ width: "65px", height: "37px" }}>
          <img
            src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/search.png"}
            className={styles.searchButtonImg}
          ></img>
          <div className={styles.searchButtonText}>검색</div>
        </div>
      </div>
    </div>
  );
}
