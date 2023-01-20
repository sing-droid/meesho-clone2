import { ReactComponent as CartLogo } from "../../SVG/CartLogoIcon.svg";
import { useNavigate } from "react-router-dom";
import styles from "../../components/Cart-component/CartNavbar.module.css"

export const SignNavbar = () => {
  const history = useNavigate();

  return (
    <div className={styles.root}>
      <div onClick={() => history("/")} className={styles.logo}>
        <CartLogo />
      </div>
      <ul className={styles.list}></ul>
    </div>
  );
};
