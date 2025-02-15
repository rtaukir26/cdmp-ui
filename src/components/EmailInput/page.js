import styles from "../../app/login/page.module.css";

export default function Input({
  type="text",
  required,
  value,
  onChange,
  placeholder,
  ...props
}) {
  return (
    <input
      type={type}
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      {...props}
    />
  );
}
