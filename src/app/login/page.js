"use client"

import React,{ useState } from "react";
import styles from "./page.module.css";
// import { useRouter } from "next/router";

const LoginPage=()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // router.push("/dashboard"); // Redirect on successful login
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.imagePlaceholder}>
          <span>150 x 150</span>
        </div>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
        <div className={styles.links}>
          <a href="#">Forgot Password?</a>
          <a href="/register">New User? Register here</a>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
