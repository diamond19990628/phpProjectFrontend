import style from "./AppointmentCard.module.scss";

type Props = {
  doctor: string;
  date: string;
  time: string;
  status: string;
};

const AppointmentCard:React.FC<Props> = ({ doctor, date, time, status }: Props) => {
  return (
    <div className={style.card}>
      <div className={style.info}>
        <h3 className={style.doctor}>{doctor}</h3>
        <p className={style.date}>{date}</p>
        <p className={style.time}>{time}</p>
      </div>

      <div className={style.right}>
        <span className={style.status}>{status}</span>
        <button className={style.cancelBtn}>取消</button>
      </div>
    </div>
  );
}

export default AppointmentCard;