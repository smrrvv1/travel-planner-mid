import { useState, useEffect } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { BASE_URL } from '../constants/api'
import type { ICountry } from '../types/country'
import styles from './AddPlan.module.css'

const AddPlan = ({ onSave }: { onSave: (c: ICountry) => void }) => {
  const [countries, setCountries] = useState<ICountry[]>([])
  const [selected, setSelected] = useState('')

  useEffect(() => {
    fetch(`${BASE_URL}/all?fields=alpha3Code,name`)
      .then(res => res.json()).then(setCountries)
  }, [])

  const handleAdd = () => {
    const found = countries.find(c => c.alpha3Code === selected)
    if (found) {
      onSave(found)
      alert(`Страна ${found.name} добавлена в список!`)
      setSelected('')
    } 
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <FormControl fullWidth>
          <InputLabel>Страна</InputLabel>
          <Select value={selected} onChange={(e) => setSelected(e.target.value)}>
            {countries.map(c => <MenuItem key={c.alpha3Code} value={c.alpha3Code}>{c.name}</MenuItem>)}
          </Select>
        </FormControl>
        <button className={styles.saveBtn} onClick={handleAdd}>СОХРАНИТЬ</button>
      </div>
    </div>
  )
}

export default AddPlan;