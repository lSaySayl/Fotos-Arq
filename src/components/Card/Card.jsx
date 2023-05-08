import "./Card.css"

// eslint-disable-next-line react/prop-types
const Card = ({nombre,telefono,email,direccion,foto}) => {
  return (
    <section>
      <section className="card__container">
        <img src= {foto} alt=""/>
        <section className="card__middle">
          <section>
            <h2>{nombre}</h2>
          </section>
        </section>

        <section className="card__info">
          <p>{telefono}</p>
          <p>{email}</p>
          <p>{direccion}</p>
        </section>
      </section>
    </section>
  );
};

export default Card;
