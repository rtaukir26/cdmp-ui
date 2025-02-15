import styles from "../../app/login/page.module.css";

export default function Input({
  type,
  required,
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      type={type}
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
}
