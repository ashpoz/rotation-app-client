import { type FormEvent } from "react";
import { getResultsFromSearch } from "../lib/discogsHelpers"
import { resultsItems, resultsLoading } from '../stores/resultsStore'
import styles from './SearchBar.module.css'

export default function SearchBar() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    resultsLoading.set(true)
    const formData = new FormData(e.target as HTMLFormElement)
    const query = formData.get("q") as string | null
    const data = await getResultsFromSearch(query)
    resultsItems.set(data)
    resultsLoading.set(false)
  }

  return (
    <>
      <search className={styles.root}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="release">Find an Album or Track</label>
          <input type="search" id="release" name="q" />
          <button type="submit">Search</button> 
        </form>
      </search>
    </>
  )
}