import { useRouter } from 'next/router';
import DetailsPage from '../../components/templates/DetailsPage';

function Details({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading Page ... </h2>;
  }
  return <DetailsPage {...data} />;
}

export default Details;

export async function getStaticPaths() {
  const res = await fetch('http://localhost:4000/data');
  const data = await res.json();
  const slicedData = data.slice(0, 10);
  const paths = slicedData.map((food) => ({
    params: {
      id: food.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/data/${params.id}`);
  const data = await res.json();

  if (!data.name) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 10, //seconds
  };
}
