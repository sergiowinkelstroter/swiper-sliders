import "./App.scss";
import { ProductImagesSlider } from "./components/product-images-slider";
import { productImages } from "./assets/index";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "650px",
          height: "550px",
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <ProductImagesSlider images={productImages} />
      </div>
    </div>
  );
}

export default App;
