import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./Home.module.scss";

const Home:React.FC = () => {
  return (
    <>
      <Header />

      <main className={style.main}>
        <section className={style.hero}>
          <div className={style.heroText}>
            <span className={style.tag}>Online Medical SaaS</span>

            <h1 className={style.title}>
              让患者更快找到合适的医生
            </h1>

            <p className={style.description}>
              支持在线预约、医生管理、患者管理和后台运营。
            </p>

            <div className={style.buttons}>
              <button className={style.primary}>立即预约</button>
              <button className={style.secondary}>查看医生</button>
            </div>
          </div>

          <div className={style.heroCard}>
            <h3 className={style.cardTitle}>今日预约</h3>

            <div className={style.appointment}>
              <span>09:30</span>
              <span>王医生</span>
            </div>

            <div className={style.appointment}>
              <span>11:00</span>
              <span>李医生</span>
            </div>

            <div className={style.appointment}>
              <span>15:00</span>
              <span>陈医生</span>
            </div>
          </div>
        </section>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>核心功能</h2>

          <div className={style.features}>
            <div className={style.featureCard}>
              <h3>医生筛选</h3>
              <p>按科室、评分、时间快速搜索医生。</p>
            </div>

            <div className={style.featureCard}>
              <h3>在线预约</h3>
              <p>患者可以选择医生和时间段完成预约。</p>
            </div>

            <div className={style.featureCard}>
              <h3>预约管理</h3>
              <p>查看、取消、修改自己的预约记录。</p>
            </div>

            <div className={style.featureCard}>
              <h3>后台运营</h3>
              <p>医生、用户、预约数据统一管理。</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;