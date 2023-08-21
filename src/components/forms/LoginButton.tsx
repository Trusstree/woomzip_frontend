import React from "react";
import styles from "./LoginButton.module.css"; // Import your CSS module
import Link from "next/link";

export default function LoginButton() {
  return (
    <span className={`btn-group ${styles.buttonGroup}`}>
      <Link href="localhost:3000/sing_in">
        <button type="button" className={`btn ${styles.loginButton}`}>
          로그인
        </button>
      </Link>

      <Link href="localhost:3000/sing_up">
        <button type="button" className={`btn ${styles.loginButton}`}>
          회원가입
        </button>
      </Link>
    </span>
  );
}
