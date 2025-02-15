import styles from "./page.module.css";

export const HealthMetricsPage=()=> {
  const patient = {
    name: "John Doe",
    age: 45,
    gender: "Male",
    bloodPressure: "120/80 mmHg",
    weight: "75 kg",
    height: "175 cm",
    heartRate: "72 bpm",
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Health Metrics</h2>
        <div className={styles.details}>
          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
        </div>
        <hr className={styles.hr} />
        <div className={styles.metrics}>
          <p><strong>Blood Pressure:</strong> {patient.bloodPressure}</p>
          <p><strong>Weight:</strong> {patient.weight}</p>
          <p><strong>Height:</strong> {patient.height}</p>
          <p><strong>Heart Rate:</strong> {patient.heartRate}</p>
        </div>
      </div>
    </div>
  );
}

export default HealthMetricsPage