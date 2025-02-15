import Link from "next/link";
import styles from "./page.module.css";
import Input from "@/components/EmailInput/page";

export const HealthMetricsPage = () => {
  async function patientHealthEntry(formData) {
    'use server'
 
    const rawFormData = {
      name: formData.get('name'),
      age: formData.get('age'),
      gender: formData.get('gender'),
      weight: formData.get('weight'),
      height: formData.get('height'),
      heartRate: formData.get('heartRate'),
      bloodPressure: formData.get('bloodPressure'),
      tempreture: formData.get('tempreture'),
    }

  }




  return (
    <div className={styles.container}>
    {/* Sidebar */}
    <aside className={styles.sidebar}>
      <h2>Bayer Health</h2>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><a href="#">My Profile</a></li>
        <li><a href="#">Health Metrics</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </aside>

    {/* Main Content */}
    <main className={styles.content}>
    <div className={styles.card}>
        <h2 className={styles.title}>Health Metrics Form</h2>
        <form action={patientHealthEntry} className={styles.form}>
          <Input
            name="name"
            placeholder="Patient Name"
            required
            className={styles.input}
          />
          <Input
            type="number"
            name="age"
            placeholder="Age"
            required
            className={styles.input}
          />
          <select
            name="gender"
            required
            className={styles.select}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <Input
            name="weight"
            placeholder="Weight (kg)"
            required
            className={styles.input}
          />
          <Input
            name="height"
            placeholder="Height (cm)"
            required
            className={styles.input}
          />
          <Input
            name="heartRate"
            placeholder="Heart Rate (bpm)"
            required
            className={styles.input}
          />{" "}
          <Input
            name="bloodPressure"
            placeholder="Blood Pressure (e.g., 120/80 mmHg)"
            required
            className={styles.input}
          />
          <Input
            name="tempreture"
            placeholder="tempreture "
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
        <Link href="/healthMetrics/history">History</Link>
      </div>
    </main>
  </div>
  );
};

export default HealthMetricsPage;
