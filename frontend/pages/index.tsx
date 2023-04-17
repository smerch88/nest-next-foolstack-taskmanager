import { NextPage } from 'next';
import { withLayout } from '@/layout/Layout';

export async function getServerSideProps() {
  const res = await fetch(
    `https://www.omdbapi.com/?s=shrek&apikey=19759c28&page=1&type=movie`,
  );
  const data = await res.json();
  return { props: { data } };
}

const Home: NextPage = ({ data }: any) => {
  const { Search } = data;
  console.log(Search);
  return (
    <>
      <h1>home page</h1>
      <ul>
        {Search.map(({ imdbID, Title }: any) => (
          <li key={imdbID}>{Title}</li>
        ))}
      </ul>
    </>
  );
};

export default withLayout(Home);
