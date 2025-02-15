
import styles from "./page.module.css";
const Dashboard = () => {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2>Bayer Health</h2>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">My Profile</a></li>
          <li><a href="#">Health Metrics</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles.content}>
        <h2>Welcome, David</h2>

        {/* Health Metrics Section */}
        <section className={styles.metrics}>
          <h3>Health Metrics</h3>
          <div className={styles.metricsBox}>
            <div className={styles.metricItem}>
              <h4>Heart Rate</h4>
              <p>82.43 bpm</p>
            </div>
            <div className={styles.metricItem}>
              <h4>Body Temperature</h4>
              <p>33.90 °C</p>
            </div>
            <div className={styles.metricItem}>
              <h4>Blood Glucose</h4>
              <p>114.77 mg/dL</p>
            </div>
          </div>
        </section>

        {/* Health Tip Section */}
        <section className={styles.healthTip}>
          <h3>Health Tip of the Day</h3>
          <p>Stay hydrated! Aim to drink at least 8 glasses of water per day.</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;