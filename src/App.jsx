import Header from "./components/BaiTapLayoutComponent/Header";
import Banner from "./components/BaiTapLayoutComponent/Banner";
import Footer from "./components/BaiTapLayoutComponent/Footer";
import Item from "./components/BaiTapLayoutComponent/Item";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="grid grid-cols-12 gap-5 myContainer px-[40px]">
        <div className="col-span-4">
          <Item />
        </div>
        <div className="col-span-4">
          <Item />
        </div>
        <div className="col-span-4">
          <Item />
        </div>
        <div className="col-span-4">
          <Item />
        </div>
        <div className="col-span-4">
          <Item />
        </div>
        <div className="col-span-4">
          <Item />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
