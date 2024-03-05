import { useRouter } from 'next/router';
import styles from './Categories.module.css';
import { useState } from 'react';

function CategoriesPage() {
    const router = useRouter();
    const customQuery = useState({})
    const clickHandler = () =>{

    }
  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subcontainer}>
        <div className={styles.select}>
          <select>
            <option>Difficulty</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <select>
            <option>Cooking Time</option>
            <option>More than 30 minutes</option>
            <option>Less than 30 minutes</option>
          </select>
          <button onClick={() => clickHandler()}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
