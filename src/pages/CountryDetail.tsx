import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { BASE_URL } from '../constants/api'
import type { ICountry } from '../types/country'

const CountryDetail = () => {
  const { id } = useParams()
  const [item, setItem] = useState<ICountry | null>(null)

  useEffect(() => {
    fetch(`${BASE_URL}/alpha/${id}`)
      .then(res => res.json()).then(setItem)
  }, [id])

  if (!item) return <p>Загрузка...</p>

  return (
    <div style={{ padding: '40px' }}>
      <h1>{item.name}</h1>
      <img src={item.flag} width="200" alt="flag" />
      <p><b>Столица:</b> {item.capital}</p>
      <p><b>Население:</b> {item.population}</p>
      <p><b>Регион:</b> {item.region}</p>
      <p><b>Субрегион:</b> {item.subregion}</p>
      <p><b>Площадь:</b> {item.area}</p>
      <p><b>Оригинальное имя:</b> {item.nativeName}</p>
      <p><b>Код:</b> {item.alpha3Code}</p>
      <p><b>Числовой код:</b> {item.numericCode}</p>
      <p><b>Домен:</b> {item.numericCode}</p>
    </div>
  )
}
export default CountryDetail;