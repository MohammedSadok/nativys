import React from "react";
import styles from "./input.module.css";
const Input = ({
  name,
  value,
  onChangeText,
  placeholder,
  icon,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(password);
  return (
    <div style={{marginBottom:"15px"}}>
      <div
        className={styles.input}
      >
        <input
        style={{borderColor: error ? "red" : isFocused ? "rgb(229, 229, 229)" : "rgb(229, 229, 229)",}}
          type={hidePassword ? "password" : "text"}
          placeholder={placeholder}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          onChange={onChangeText}
          value={value}
          name={name}
        />
        <div className={styles.icon}>{icon}</div>
        {password && (
          <div
            className={styles.icon}
            onClick={() => setHidePassword(!hidePassword)}
          >
            {!hidePassword && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#979797"
                  fillRule="evenodd"
                  d="M12 9.284c-1.205 0-2.182.98-2.182 2.19 0 1.209.977 2.19 2.182 2.19s2.182-.981 2.182-2.19c0-1.21-.977-2.19-2.182-2.19zm0 5.839a3.643 3.643 0 0 1-3.636-3.65A3.643 3.643 0 0 1 12 7.826a3.643 3.643 0 0 1 3.636 3.649A3.643 3.643 0 0 1 12 15.123zM12 6c-3.636 0-6.742 2.27-8 5.474 1.258 3.204 4.364 5.473 8 5.473s6.742-2.27 8-5.473C18.742 8.27 15.636 6 12 6z"
                ></path>
              </svg>
            )}
            {hidePassword && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#979797"
                  fillRule="evenodd"
                  d="M11.876 9.364l2.306 2.298v-.117A2.182 2.182 0 0 0 12 9.364h-.124zm-3.127.581l1.127 1.128a2.004 2.004 0 0 0-.058.472c0 1.205.977 2.182 2.182 2.182.16 0 .32-.022.473-.058l1.127 1.127a3.605 3.605 0 0 1-1.6.386 3.636 3.636 0 0 1-3.636-3.637c0-.574.145-1.112.385-1.6zM4.727 5.924l1.658 1.658.328.327A8.606 8.606 0 0 0 4 11.545C5.258 14.738 8.364 17 12 17a8.564 8.564 0 0 0 3.185-.61l.313.305 2.124 2.123.923-.923L5.651 5l-.924.924zM12 7.909a3.636 3.636 0 0 1 3.636 3.636c0 .466-.094.917-.261 1.324L17.505 15A8.613 8.613 0 0 0 20 11.545c-1.258-3.192-4.364-5.454-8-5.454a8.616 8.616 0 0 0-2.91.509l1.58 1.564c.414-.16.857-.255 1.33-.255z"
                ></path>
              </svg>
            )}
          </div>
        )}
      </div>
        {error && (
          <p className={styles.error}>{error}</p>
        )}
    </div>
  );
};
export default Input;
