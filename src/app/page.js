
import styles from "./page.module.css";

const HealthPage = () => {
  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <h1>Bayer Healthcare</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Health Topics</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <h2>Your Health, Our Priority</h2>
        <p>Explore the latest health information and resources from Bayer Healthcare.</p>
      </header>

      {/* Featured Health Topics */}
      <section className={styles.topics}>
        <h3>Featured Health Topics</h3>
        <div className={styles.topicCards}>
          <div className={styles.card}>
            <h4>COVID-19 Updates</h4>
            <p>Stay informed about the latest COVID-19 guidelines and vaccination information.</p>
            <button>Learn More</button>
          </div>

          <div className={styles.card}>
            <h4>Heart Health</h4>
            <p>Discover tips and information for maintaining a healthy heart and cardiovascular system.</p>
            <button>Learn More</button>
          </div>

          <div className={styles.card}>
            <h4>Mental Wellness</h4>
            <p>Explore resources and support options for maintaining good mental health.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthPage;