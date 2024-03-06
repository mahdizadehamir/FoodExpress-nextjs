import CategoriesPage from '../../components/templates/CategoriesPage';

function categories({ data }) {
  return <CategoriesPage {...data} />;
}

export default categories;

export async function getServerSideProps(context) {
    const {params , query} = context;
    console.log(query)
  const res = await fetch('http://localhost:4000');
  const data = await res.json();



  return {
    props: { data },
  };
}
