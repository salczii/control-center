import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = () => {
  return (
    <div className={"flex flex-col min-h-screen bg-blue-50"}>
      <Header />
      <main className={"flex-grow mx-auto flex flex-col"}>
        <div className="test">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aliquam asperiores aspernatur autem, consequatur delectus esse harum
          in ipsum libero magni, non numquam praesentium quisquam, rem
          repudiandae sed soluta voluptate
        </div>
        <div className="test">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aliquam asperiores aspernatur autem, consequatur delectus esse harum
          in ipsum libero magni, non numquam praesentium quisquam, rem
          repudiandae sed soluta voluptate
        </div>
        <div className="test">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aliquam asperiores aspernatur autem, consequatur delectus esse harum
          in ipsum libero magni, non numquam praesentium quisquam, rem
          repudiandae sed soluta voluptate
        </div>
        <div className="test">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aliquam asperiores aspernatur autem, consequatur delectus esse harum
          in ipsum libero magni, non numquam praesentium quisquam, rem
          repudiandae sed soluta voluptate
        </div>
        <div className="test">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aliquam asperiores aspernatur autem, consequatur delectus esse harum
          in ipsum libero magni, non numquam praesentium quisquam, rem
          repudiandae sed soluta voluptate
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
