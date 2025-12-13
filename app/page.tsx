import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.top}>
    <div>
      <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
      <p className={styles.description}>
        私たちは市場をリードしているグローバルテックカンパニーです。
        </p>
      </div>
      <img className={styles.bgimg} src="/img-mv.jpg" alt="" />
    </section>
   ); 
}
.top {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: 
rgba(0, 0, 0, 0.5);
  color: #fff;
  overflow: hidden;
  padding: 200px 0;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;

}