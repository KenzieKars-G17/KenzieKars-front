import { IndividualProductBase } from "./styles";

const IndividualProduct = () => {
  return (
    <IndividualProductBase>
      <section className="mainPicture">
        <img src="https://s2.glbimg.com/dXOjXVKuSt3tSTpjY9huNuBJX9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg" />
      </section>

      <section className="resume">
        <h1>Tesla Model X Advanced Sedan Electric Automatic Pilot</h1>
        <div className="yearAndKm">
          <span className="km">250 KM</span>
          <span className="year">2015</span>
        </div>
        <span className="price">R$ 987.258,00</span>
        <button className="buyButton">Comprar</button>
      </section>

      <section className="description">
        <h2>Descrição</h2>
        <p>
          O Tesla Model X redefine o conceito de veículo elétrico de luxo,
          oferecendo uma experiência de condução emocionante, espaçosa e
          ecologicamente correta. Combinando a elegância de um SUV com
          tecnologia avançada e um design aerodinâmico impressionante, o Model X
          eleva a excelência automotiva a um novo patamar.
        </p>
      </section>

      <section className="pictures">
        <h2>Fotos</h2>
        <ul>
          <li>
            <img src="https://s2.glbimg.com/dXOjXVKuSt3tSTpjY9huNuBJX9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg" />
          </li>
          <li>
            <img src="https://s2.glbimg.com/dXOjXVKuSt3tSTpjY9huNuBJX9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg" />
          </li>
          <li>
            <img src="https://s2.glbimg.com/dXOjXVKuSt3tSTpjY9huNuBJX9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg" />
          </li>
          <li>
            <img src="https://s2.glbimg.com/dXOjXVKuSt3tSTpjY9huNuBJX9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg" />
          </li>
          <li>
            <img src="https://s2.glbimg.com/dXOjXVKuSt3tSTpjY9huNuBJX9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg" />
          </li>
          <li>
            <img src="https://s2.glbimg.com/dXOjXVKuSt3tSTpjY9huNuBJX9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg" />
          </li>
        </ul>
      </section>
    </IndividualProductBase>
  );
};

export default IndividualProduct;
