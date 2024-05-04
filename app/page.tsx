import  Search  from "./_components/search";
import Header from "./_components/header"
import CategoryList from "./_components/category-list";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 py-6">
      <Search />
      </div>

      <CategoryList />
    </>
  );
}

export default Home;