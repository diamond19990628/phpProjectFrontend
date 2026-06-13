import style from "./Footer.module.scss";

const Footer:React.FC = () => {
  return (
    <footer className={style.footer}>

      <div className={style.container}>

        <div className={style.logo}>
          MediLink
        </div>

        <p className={style.description}>
          在线诊疗预约管理平台
        </p>

        <p className={style.copyright}>
          © 2026 MediLink All Rights Reserved
        </p>

      </div>

    </footer>
  );
}

export default Footer;