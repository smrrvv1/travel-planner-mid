import { Link } from 'react-router'
import type { ICountry } from '../types/country'
import styles from './Main.module.css'

const Main = ({ list }: { list: ICountry[] }) => (
  <div className={styles.page}>
    <h2>Мои планы</h2>
    {list.length === 0 ? <p>Список пуст</p> : list.map(c => (
      <div key={c.alpha3Code} className={styles.card}>
        <span>{c.name}</span>
        <Link to={`/country/${c.alpha3Code}`} className={styles.btn}>Детали</Link>
      </div>
    ))}
  </div>
)

export default Main;