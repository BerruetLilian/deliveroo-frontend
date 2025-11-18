import "./App.css";
import { Oval } from "react-loader-spinner";
import { useState, useEffect } from "react";

import axios from "axios";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--deliveroo-backend--h7xf99wskwy6.code.run/"
      );
      setData(response.data);
      // mettre le changement de isLoading APRES avoir envoyé les données dans le state data
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // console.log(data);

  return isLoading ? (
    <main className="spinner-container">
      <Oval
        height={80}
        width={80}
        color="#a94d95ff"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="darkmagenta"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </main>
  ) : (
    <>
      <Header />
      <Hero restaurant={data.restaurant} />
      <Main categories={data.categories} />
    </>
  );
};

export default App;
