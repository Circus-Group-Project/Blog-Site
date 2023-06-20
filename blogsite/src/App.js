import React from "react";
import api from "./api/axiosConfig";
import Home from "./components/home/home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  const getGallery = async () => {
    try {
      const response = await api.get("/api/v1/gallery");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  getGallery();

  return (
    <>
      <Navbar></Navbar>
      <Home />
      <Footer></Footer>
    </>
  );
}

export default App;
