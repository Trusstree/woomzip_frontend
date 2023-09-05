import React from "react";
import styles from "./LoginButton.module.css"; // Import your CSS module

export default function LoginButton() {
  return (
    <span className={`btn-group ${styles.buttonGroup}`}>
      <button type="button" className={`btn text-white ${styles.loginButton}`}>
        로그인
      </button>
      <button type="button" className={`btn text-white ${styles.loginButton}`}>
        회원가입
      </button>
    </span>
  );
}
