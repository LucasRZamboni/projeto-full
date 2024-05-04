import  Search  from "./_components/search";
import Header from "./_components/header"

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 py-6">
      <Search />
      </div>
    </>
  );
}

export default Home;