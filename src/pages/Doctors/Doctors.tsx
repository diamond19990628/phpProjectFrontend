import DoctorCard from "../../components/DoctorCard/DoctorCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./Doctors.module.scss";

const Doctors:React.FC = () => {
  return (
    <>
      <Header />

      <main className={style.main}>
        <h1 className={style.title}>医生列表</h1>

        <div className={style.filterBar}>
          <button>全部</button>
          <button>内科</button>
          <button>外科</button>
          <button>皮肤科</button>
          <button>心理咨询</button>
        </div>

        <div className={style.doctorList}>
          <DoctorCard name="王医生" department="内科" score={4.9} />
          <DoctorCard name="李医生" department="皮肤科" score={4.8} />
          <DoctorCard name="陈医生" department="外科" score={4.7} />
          <DoctorCard name="张医生" department="心理咨询" score={4.9} />
          <DoctorCard name="赵医生" department="内科" score={4.6} />
          <DoctorCard name="刘医生" department="皮肤科" score={4.8} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Doctors;