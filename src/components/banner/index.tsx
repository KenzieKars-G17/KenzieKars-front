const Banner = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "375px",
        position: "relative",
        color: "white",
        textAlign: "center",
        fontSize: "25pt"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            'url("https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2021/06/12104139/0x0-ModelSPLAID-1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <h1 style={{ fontSize: "15.5pt" }}>Motors Shop</h1>
        <p style={{ fontSize: "15.5pt" }}>A melhor plataforma de anúncios de carros do país</p>
      </div>
    </div>
  );
};

export default Banner;
