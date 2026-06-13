import style from "./DoctorCard.module.scss";

type Props = {
  name: string;
  department: string;
  score: number;
};

const DoctorCard:React.FC<Props> = ({ name, department, score }: Props) => {
  return (
    <div className={style.card}>
      <div className={style.avatar}>{name[0]}</div>

      <h3 className={style.name}>{name}</h3>

      <p className={style.department}>{department}</p>

      <span className={style.score}>⭐ {score}</span>

      <button className={style.button}>预约</button>
    </div>
  );
}

export default DoctorCard;