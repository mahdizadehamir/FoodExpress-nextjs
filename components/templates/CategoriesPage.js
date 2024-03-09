import { useRouter } from 'next/router';
import styles from './Categories.module.css';
import { useState } from 'react';

function CategoriesPage() {
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: '', time: '' });
  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  const clickHandler = () => {
    router.push({
      pathname: '/categories',
      query,
    });
  };
  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select value={query.difficulty} name="difficulty" onChange={changeHandler}>
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select value={query.cook} name="time" onChange={changeHandler}>
            <option value="">Cooking Time</option>
            <option value="more">More than 30 minutes</option>
            <option value="less">Less than 30 minutes</option>
          </select>
          <button onClick={clickHandler}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
