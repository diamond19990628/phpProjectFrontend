import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./Dashboard.module.scss";

const Dashboard:React.FC = () => {
  return (
    <>
      <Header />

      <main className={style.main}>
        <h1 className={style.title}>我的预约</h1>

        <div className={style.summary}>
          <div className={style.summaryCard}>
            <strong>3</strong>
            <span>总预约</span>
          </div>

          <div className={style.summaryCard}>
            <strong>2</strong>
            <span>待就诊</span>
          </div>

          <div className={style.summaryCard}>
            <strong>1</strong>
            <span>已完成</span>
          </div>
        </div>

        <div className={style.list}>
          <AppointmentCard
            doctor="王医生"
            date="2026-06-20"
            time="09:30"
            status="已预约"
          />

          <AppointmentCard
            doctor="李医生"
            date="2026-06-21"
            time="15:00"
            status="已完成"
          />

          <AppointmentCard
            doctor="陈医生"
            date="2026-06-25"
            time="11:00"
            status="已预约"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;