import Link from "next/link";
import style from "../styles/pages/error.module.css";

export default function errorPage() {
  return (
    <>
      <img src="/404.png" alt="404" className={style.errorPage} />
    </>
  );
}
