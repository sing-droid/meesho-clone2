import React from "react";
import styles from "./home.module.css";
import { Footer } from "../Footer";
import {
  SiInstagram,
  SiFacebook,
  SiYoutube,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";

// import { useDispatch } from "react-redux";
// import {getQuery } from "../Redux/action";
import { Link } from "react-router-dom";
import { Navbar } from "../header-footer'/Navbar";
const Home = () => {
  // const dispatch = useDispatch();
  const getSares = () => {
    // dispatch(getQuery("Sarees"))
  };
  const getDreses = () => {
    // dispatch(getQuery("Dresses"))
  };
  const getMenswares = () => {
    // dispatch(getQuery("Mens Top Were"))
  };
  const homeCare = () => {
    // dispatch(getQuery("Home and Kitchen"))
  };
  return (
    <div>
      <Navbar />
      <div className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.title}>
            Lowest Prices
            <div id="b_qual">Best Quality Shopping</div>
          </div>
          <div className={styles.title1}>50 lakh+ Styles | 650+ categories</div>
          <div className={styles.button}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJqSURBVHgBrZRPaxNBGMbfmd1oG+KfFBGpCBtBUPBgoB49BEzxpNSLx/YqXhJtTxqr/QLJfoKkX0ByEaQVDEIpAUtKBS2I3VgjWGLcEJq02Sb7OrNlY5pskk12H1hmdt6Z5zfz7B8yr6wt3vQUIyFvPq8TnAn4o3lwUWR+Zw1558apPxD2KgAIqSbF126BqNn5ql2A7OFlhoQ5AcmHgirPggui7TfZw8ljCICkI6Z2/yYURY3fAgeinQNtEAPETpPbLSWSDCSBGwALSCu2H6V4BNwAmJDN+qX2IYkQEuex/VLlB+AUwPXx4Irx8DskNRHTdmOjgyas1gJWEDO23E9VXgQnABNSaJyxKp1HxFc8NlV5MjsygOtt9RoUm17L2lhtT/KVv6UauXASc/ekkQB1FODN/vUuiEerwLnSltFHIHMN0JWj3HQrttavwq7O0jo89G2zVjPMJ/ayQPWjrnkEIM+aqO0TmKrop42TVLUm+IsbluZcbNcSu5JDA7iECsDFtG60/cROUR4a4N+vw+P3X2CiSEFYvw1QG+8xEzMC0NBQANPcX60f7/BgvAvCs2fXjCe4GiLBd3nbgDGtccK8Zcghn4IADQ/ftSyAFhSDK2mzLjoxb0Eqvoy4cjdKnkc3O2u2ANx8Uq1ZlcrMPkJiz5Z7rR0Y0aP17z3MUYYmDZDY0+V+68VB5lM7xU7jDFDBMo6hANNbhU5zlcUR7ReHlWgv8/DngnnLPkhMsDiuDorDSmIfczTiAFwisYUMjCixh7kKRF8iLxYS4FAUjVcN4M72b27+Pw4XzLlEgro8pZRe3t9QMk7jsNI/SVwmYkYExSAAAAAASUVORK5CYII=" />
            <span>Download the Meesho App</span>
          </div>
        </div>
        <div className={styles.container1}></div>
      </div>
      <div className={styles.line}>
        <div className={styles.hr}></div>
        <div className={styles.hrtitle}>Top Categories to choose from</div>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.banner1}>
        <div className={styles.img}>
          <Link to="/products">
            <img
              onClick={getSares}
              src="https://images.meesho.com/images/marketing/1631611172021.png"
            />
          </Link>
        </div>
        <div className={styles.temp}>
          <Link to="/products">
            <img
              onClick={getDreses}
              src="https://images.meesho.com/images/marketing/1631610854491.png"
            />
          </Link>
        </div>
        <div className={styles.temp}>
          <Link to ="/products">
            <img
              onClick={getMenswares}
              src="https://images.meesho.com/images/marketing/1631611208025.png"
            />
          </Link>
        </div>
      </div>
      <Link style={{ textDecoration: "none" }} to="/products">
        <div onClick={homeCare} className={styles.banner2}>
          <div className={styles.tbox}>
            <span>Homecare</span>
            <button>VIEW ALL</button>
          </div>
          <div className={styles.cardBox}>
            <div className={styles.card}>
              <img src="https://images.meesho.com/images/marketing/1629883981751.png" />
            </div>
            <button>Bedsheets</button>
          </div>
          <div className={styles.cardBox}>
            <div className={styles.card}>
              <img src="https://images.meesho.com/images/marketing/1629884011960.png" />
            </div>
            <button>Kitchenware</button>
          </div>
          <div className={styles.cardBox}>
            <div className={styles.card}>
              <img src="https://images.meesho.com/images/marketing/1629883997863.png" />
            </div>
            <button>Carpets</button>
          </div>
        </div>
      </Link>
      <div className={styles.banner3}>
        <div className={styles.banner3container}>
          <h4>Become a Reseller and</h4>
          <h1>Start your Online Business</h1>
          <h1>with Zero Investment</h1>
          <div className={styles.banner3ibox}>
            <img src="https://meesho.com/_next/static/images/playstore-a7dfd2afcd42f96d491912cbec2d6fa2.png" />
            <img src="https://meesho.com/_next/static/images/appstore-a689c2ac38f3ed1ab7e7b39e98aaf15a.png" />
          </div>
        </div>
      </div>
      <div className={styles.banner4}></div>
      <div className={styles.banner5}>
        <div className={styles.banner5tbox}>
          <h4>Shop Non-Stop on Meesho</h4>
          <p>Trusted by more than 1 Crore Indians</p>
          <p>Cash on Delivery | Free Delivery</p>
          <div className={styles.b5img}>
            <img src="https://meesho.com/_next/static/images/appstore-button-4b171cf04fe0557718dfd2cbf309c61d.png" />
            <img
              src="https://meesho.com/_next/static/images/google-play-button-1f2aa747a3eefa161840b04e057b31ac.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className={styles.b5text}>
          <h4>Careers</h4>
          <p>Become a supplier</p>
        </div>
        <div className={styles.b5text}>
          <h4>Legal and Policies</h4>
          <p>Meesho Tech Blog</p>
        </div>
        <div className={styles.b5text}>
          <h4>Contact Us</h4>
          <p>query@meesho.com</p>
        </div>
        <div className={styles.b5text}>
          <h4>Reach out to us</h4>
          <div style={{ display: "flex" }}>
            <div style={{ margin: " 0px 10px" }}>
              <SiInstagram color="#833AB4" fontSize="1.5em" />
            </div>
            <div style={{ margin: "0px 10px" }}>
              <SiFacebook color="#4267B2" fontSize="1.5em" />
            </div>
            <div style={{ margin: "0px 10px" }}>
              <SiYoutube color="#FF0000" fontSize="1.5em" />
            </div>
            <div style={{ margin: "0px 10px" }}>
              <SiLinkedin color="#0077b5" fontSize="1.5em" />
            </div>
            <div style={{ margin: "0px 10px" }}>
              <SiTwitter color="#00ACEE" fontSize="1.5em" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
