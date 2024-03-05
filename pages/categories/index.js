import CategoriesPage from '../../components/templates/CategoriesPage';

function categories({ data }) {
  return <CategoriesPage {...data} />;
}

export default categories;

export async function getServerSideProps() {
  const res = await fetch('http://localhost:4000');
  const data = await res.json();


  
  return {
    props: { data },
  };
}
