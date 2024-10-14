import Header from "./components/BaiTapLayoutComponent/Header";
import Banner from "./components/BaiTapLayoutComponent/Banner";
import Footer from "./components/BaiTapLayoutComponent/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="grid grid-cols-12"></div>
      <Footer />
    </>
  );
}

export default App;
