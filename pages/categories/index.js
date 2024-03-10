import CategoriesPage from '../../components/templates/CategoriesPage';

function categories({ data }) {
  return <CategoriesPage data={data} />;
}

export default categories;

export async function getServerSideProps(context) {
  const { params, query } = context;
  const res = await fetch('https://food-express-api-blue.vercel.app/data');
  const data = await res.json();
  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === query.difficulty
    );
    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail['Cooking Time'] || '';
      const [timeData] = cookingTime.split(' ');
      if (query.time === 'less' && +timeData <= 30 && timeData) {
        return detail;
      } else if (query.time === 'more' && +timeData > 30) {
        return detail;
      }
    });
    if (difficultyResult.length && query.difficulty && !query.time) {
      return item;
    }
    if (difficultyResult.length && timeResult.length && query.difficulty && query.time) {
      return item;
    }
    if (timeResult.length && query.time && !query.difficulty) {
      return item;
    }
  });

  return {
    props: { data: filteredData },
  };
}
