
import styles from "./page.module.css";
import Input from "@/components/EmailInput/page";
import { redirect } from "next/navigation";

const LoginPage = () => {
  async function loginEntry(formData) {
    'use server'
 
    const rawFormData = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    if(rawFormData.email && rawFormData.password){

      redirect("/dashboard")
    }else {
      redirect("/login?ErrorMessage=please fill mandate fields")
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.imagePlaceholder}>
          <span>150 x 150</span>
        </div>
        <h2 className={styles.title}>Login</h2>
        <form action={loginEntry} className={styles.form}>
        
          <Input
          name="email"
            type="email"
            required
            className={styles.input}
            placeholder="Email"
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            className={styles.input}
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
};
export default LoginPage;
