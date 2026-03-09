import { Link, useParams } from 'react-router'
import { BASE_URL } from '../constants/api'
import type { ICountry } from '../types/country'
import { useEffect, useState } from 'react'
import styles from './CountryDetail.module.css'

const CountryDetail = () => {
  const { id } = useParams()
  const [item, setItem] = useState<ICountry | null>(null)

  useEffect(() => {
    fetch(`${BASE_URL}/alpha/${id}`)
      .then(res => res.json()).then(setItem)
  }, [id])

  if (!item) return <p>Загрузка...</p>

  return (
      <div className={styles.container}>
      <Link to="/" className={styles.backLink}>Назад к списку</Link>
      
      <h1>{item.name}</h1>
      <img src={item.flag} width="200" alt="flag" />
      
      <div className={styles.info}>
      <p><b>1. Столица:</b> {item.capital}</p>
      <p><b>2. Население:</b> {item.population}</p>
      <p><b>3. Регион:</b> {item.region}</p>
      <p><b>4. Субрегион:</b> {item.subregion}</p>
      <p><b>5. Площадь:</b> {item.area}</p>
      <p><b>6. Оригинальное имя:</b> {item.nativeName}</p>
      <p><b>7. Код страны:</b> {item.alpha3Code}</p>
      <p><b>8. Числовой код:</b> {item.numericCode}</p>
      <p><b>9. Домен:</b> {item.alpha3Code.toLowerCase()}</p>
      <p><b>10. Статус:</b> Планируется</p>
    </div>
  </div>
  )
}
  
export default CountryDetail;