import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./Booking.module.scss";

const Booking:React.FC = () => {
  return (
    <>
      <Header />

      <main className={style.main}>
        <h1 className={style.title}>预约挂号</h1>

        <form className={style.form}>
          <div className={style.formGroup}>
            <label>姓名</label>
            <input type="text" placeholder="请输入姓名" />
          </div>

          <div className={style.formGroup}>
            <label>手机号</label>
            <input type="text" placeholder="请输入手机号" />
          </div>

          <div className={style.formGroup}>
            <label>科室</label>
            <select>
              <option>内科</option>
              <option>外科</option>
              <option>皮肤科</option>
              <option>心理咨询</option>
            </select>
          </div>

          <div className={style.formGroup}>
            <label>预约日期</label>
            <input type="date" />
          </div>

          <div className={style.formGroup}>
            <label>预约时间</label>
            <select>
              <option>09:00 - 09:30</option>
              <option>10:00 - 10:30</option>
              <option>14:00 - 14:30</option>
              <option>15:00 - 15:30</option>
            </select>
          </div>

          <div className={style.formGroup}>
            <label>症状描述</label>
            <textarea placeholder="请简单描述症状" />
          </div>

          <button className={style.submit} type="submit">
            提交预约
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}

export default Booking;