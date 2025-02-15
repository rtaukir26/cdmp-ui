"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Input from "@/components/EmailInput/page";

export const HealthMetricsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    heartRate: "",
    bloodPressure: "",
    tempreture: "",
  });
  console.log("formData", formData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("Submitted Data:", formData);
    // alert("Health metrics submitted successfully!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Health Metrics Form</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            type="text"
            name="name"
            placeholder="Patient Name"
            // value={formData.name}
            // onChange={handleChange}
            required
            className={styles.input}
          />
          <Input
            type="number"
            name="age"
            placeholder="Age"
            // value={formData.age}
            // onChange={handleChange}
            required
            className={styles.input}
          />
          <select
            name="gender"
            // value={formData.gender}
            // onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <Input
            type="text"
            name="weight"
            placeholder="Weight (kg)"
            // value={formData.weight}
            // onChange={handleChange}
            required
            className={styles.input}
          />
          <Input
            type="text"
            name="height"
            placeholder="Height (cm)"
            // value={formData.height}
            // onChange={handleChange}
            required
            className={styles.input}
          />
          <Input
            type="text"
            name="heartRate"
            placeholder="Heart Rate (bpm)"
            // value={formData.heartRate}
            // onChange={handleChange}
            required
            className={styles.input}
          />{" "}
          <Input
            type="text"
            name="bloodPressure"
            placeholder="Blood Pressure (e.g., 120/80 mmHg)"
            // value={formData.bloodPressure}
            // onChange={handleChange}
            required
            className={styles.input}
          />
          <Input
            type="text"
            name="tempreture"
            placeholder="tempreture "
            // value={formData.tempreture}
            // onChange={handleChange}
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HealthMetricsPage;
