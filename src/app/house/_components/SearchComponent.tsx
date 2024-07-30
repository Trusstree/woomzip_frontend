"use client";

import React, { useState } from "react";
import useQuery from "@/hooks/useQuery";
import { useRouter } from "next/navigation";
import styles from "@/styles/SearchComponent.module.css"; // 외부 CSS 파일 import
import Image from "next/image";

export default function SearchComponent() {
  const [q, setQ] = useState("");

  const router = useRouter();
  const { createQuery, getRouteParams } = useQuery();

  const handleChange = (e) => {
    setQ(e.target.value);
  };

  const handleClick = () => {
    createQuery("q", q);
    router.push(getRouteParams());
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      createQuery("q", q);
      router.push(getRouteParams());
    }
  };

  const handleOutOfFocus = () => {
    createQuery("q", q);
    router.push(getRouteParams());
  };

  return (
    <div className="d-flex align-items-center">
      <input
        className="w-75"
        style={{ height: 37 }}
        placeholder={" 찾고 싶은 내용을 검색해보세요"}
        value={q}
        onChange={handleChange}
        onBlur={handleOutOfFocus}
        onKeyDown={handlePressEnter}
      />
      <div
        className={`btn ${styles.searchButton}`}
        data-bs-toggle="modal"
        data-bs-target={`#search_modal`}
        onClick={handleClick}
      >
        <div style={{ cursor: "pointer" }}>
          <Image
            width={37}
            height={37}
            src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/search.png"}
            className={styles.searchButtonImg}
            alt={"search submit btn"}
          />
          <div className={styles.searchButtonText}>검색</div>
        </div>
      </div>
    </div>
  );
}
