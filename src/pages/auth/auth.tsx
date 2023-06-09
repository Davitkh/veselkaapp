import { useEffect, useState } from "react";
import { AuthStateKeys, handleAuthState } from "./authstate";
import { AppTitles } from "../../enums/app_titles";
import styles from "./auth.module.css";
import { ElementTypeTitles } from "../../enums/element_type_titles";
import { LoginFormState } from "../../types/loginformstate";

export const Auth = () => {
  useEffect(() => {
    document.title = AppTitles.Login;
  }, []);
  const [authType, setAuthType] = useState<AuthStateKeys>(AuthStateKeys.Login);
  const [loginFormState, setLoginFormState] = useState<LoginFormState>({
    email: "",
    password: "",
  });
  console.log("loginFormState", loginFormState);

  const authState = handleAuthState({
    setAuthType,
    authType,
    setLoginFormState,
    loginFormState,
  });

  switch (authType) {
    case AuthStateKeys.Login:
      return (
        <div className={styles.auth}>
          <form className={styles.authform}>
            <h1 className={styles.formtitle}>Войти</h1>
            {authState?.map((item) => {
              if (
                item.type === ElementTypeTitles.Submit ||
                item.type === ElementTypeTitles.Button
              ) {
                return (
                  <div
                    className={styles.buttonwrapper}
                    key={JSON.stringify(item)}
                  >
                    <button type={item.type} onClick={item.onClick}>
                      {item.label}
                    </button>
                  </div>
                );
              } else if (item.type === ElementTypeTitles.Span) {
                return (
                  <div
                    className={styles.forgotpassword}
                    key={JSON.stringify(item)}
                  >
                    <span>{item.label}</span>
                  </div>
                );
              }
              return (
                <div className={styles.inputwrapper} key={JSON.stringify(item)}>
                  <label htmlFor={item.name} className={styles.inputlabel}>
                    {item.label}
                  </label>
                  <input
                    value={
                      item.name === "login"
                        ? loginFormState.email
                        : loginFormState.password
                    }
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    autoComplete={"autoComplete"}
                    onChange={item.onChange}
                  />
                </div>
              );
            })}
          </form>
        </div>
      );
    case AuthStateKeys.Register:
      return (
        <div className={styles.auth}>
          <form className={styles.authform}>
            <h1 className={styles.formtitle}>Зарегистрироваться</h1>
            {authState?.map((item) => {
              if (
                item.type === ElementTypeTitles.Submit ||
                item.type === ElementTypeTitles.Button
              ) {
                return (
                  <div
                    className={styles.buttonwrapper}
                    key={JSON.stringify(item)}
                  >
                    <button type={item.type} onClick={() => {}}>
                      {item.label}
                    </button>
                  </div>
                );
              } else if (item.type === ElementTypeTitles.Span) {
                return (
                  <div
                    className={styles.forgotpassword}
                    key={JSON.stringify(item)}
                  >
                    <span>{item.label}</span>
                  </div>
                );
              }
              return (
                <div className={styles.inputwrapper} key={JSON.stringify(item)}>
                  <label htmlFor={item.name} className={styles.inputlabel}>
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    autoComplete={"autoComplete"}
                  />
                </div>
              );
            })}
          </form>
        </div>
      );
    case AuthStateKeys.Restore:
      return <>Test 1</>;
    default:
      return <>Restore</>;
  }
};
