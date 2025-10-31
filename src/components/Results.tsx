import { useStore } from "@nanostores/react";
import { resultsItems, resultsLoading } from "../stores/resultsStore";
import styles from './Results.module.css'

interface Result {
  id: string;
  cover_image: string;
  thumb?: string;
  title: string;
  year: string;
  genre: string[];
}

export default function Results() {
  const $resultsItems = useStore(resultsItems) ?? [];
  const $resultsLoading = useStore(resultsLoading) ?? false;
  return (
    <section className={styles.root}>
      {$resultsLoading && <p>Loading...</p>}
      {!$resultsLoading && $resultsItems.length === 0 && <p>No results found. Please try again.</p>}
      <ul>
        {!$resultsLoading && $resultsItems.length > 0 &&
          $resultsItems.map((item: Result) => (
            <li key={item.id}>
              <article>
                <figure className="searchResults__image">
                  {item.cover_image && item.cover_image.length > 0 && (
                    <img src={item.cover_image} alt={item.title} />
                  )}
                </figure>
                <div className="searchResults__body">
                  <h2>
                    <a href="#">{item.title}</a>
                  </h2>
                  <p>Year: {item.year}</p>
                  <p>
                    Genre/s:{" "}
                    {item.genre.map((genre: string) => genre).join(", ")}
                  </p>
                  <div className="grid">
                    <button>Review</button>
                    <button className="secondary">Favorite</button>
                  </div>
                </div>
              </article>
            </li>
          ))}
      </ul>
    </section>
  );
}
