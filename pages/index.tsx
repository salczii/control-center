import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = () => {
  return (
    <div className={"flex flex-col min-h-screen bg-blue-50"}>
      <Header />
      <main className={"flex-grow"}>Content</main>
      <Footer />
    </div>
  );
};

export default Home;
