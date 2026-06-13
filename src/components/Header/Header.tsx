import style from "./Header.module.scss";

const Header:React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>MediLink</div>

      <nav className={style.nav}>
        <a href="#" className={style.link}>首页</a>
        <a href="#" className={style.link}>医生</a>
        <a href="#" className={style.link}>预约</a>
        <a href="#" className={style.link}>我的预约</a>
      </nav>
    </header>
  );
}

export default Header;