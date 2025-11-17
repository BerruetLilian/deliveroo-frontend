import "./assets/css/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--h7xf99wskwy6.code.run/"
        );
        console.log(response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <ClipLoader
      loading={isLoading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  ) : (
    <>
      <Header restaurant={data.restaurant} />
      <main>
        <div className="container">
          <Menu categories={data.categories} />
          <Cart />
        </div>
      </main>
    </>
  );
}

export default App;
