import { Link } from 'react-router'
import type { ICountry } from '../types/country'
import styles from './Main.module.css'

interface MainProps {
  list: ICountry[];
  onDelete: (code: string) => void;
}

const Main = ({ list, onDelete }: MainProps) => (
  <div className={styles.page}>
    <h2>Мои планы</h2>
    {list.length === 0 ? <p>Список пуст</p> : list.map(c => (
      <div key={c.alpha3Code} className={styles.card}>
        <span>{c.name}</span>

        <div style={{ display: 'flex', gap: '10px' }}>
        <Link to={`/country/${c.alpha3Code}`} className={styles.btn}>Детали</Link>
        <button 
            onClick={() => onDelete(c.alpha3Code)} 
            className={styles.deleteBtn}>Удалить</button>
        </div>
      </div>
    ))}
  </div>
)

export default Main;