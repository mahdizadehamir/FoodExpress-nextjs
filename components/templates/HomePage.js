import Attributes from '../modules/Attributes';
import Banner from '../modules/Banner';
import Companies from '../modules/Companies';
import Guide from '../modules/Guide';
import Instruction from '../modules/Instruction';
import Definition from '../modules/definition';
import Restrictions from '../modules/Restricitons';
import styles from './HomePage.module.css';
function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
}

export default HomePage;