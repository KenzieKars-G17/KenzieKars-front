import { useContext } from "react";
import { ProductPageContext } from "../../contexts/productPage.context";

const Banner = () => {
  const { showBannerPicture } = useContext(ProductPageContext);

  return (
    <div
      style={{
        width: "100vw",
        height: "375px",
        position: "relative",
        color: "white",
        textAlign: "center",
        fontSize: "25pt",
        opacity: 0.7,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: showBannerPicture === true
          ? `linear-gradient(to top, rgba(0, 0, 0, 2.5), rgba(0, 0, 0, 0)), url("https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2021/06/12104139/0x0-ModelSPLAID-1.jpg")`
          : "none",
        backgroundColor: showBannerPicture === false ? "#4529E6" : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {showBannerPicture === true && (
        <>
          <h1 style={{ fontSize: "15.5pt" }}>Motors Shop</h1>
          <p style={{ fontSize: "15.5pt" }}>
            A melhor plataforma de anúncios de carros do país
          </p>
        </>
      )}
    </div>
  );
};

export default Banner;