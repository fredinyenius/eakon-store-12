const HeroInformation = ({ subtitle, text, image }) => {
    return (
      <section className="section">
        <div className="container d-flex f-direction-column gap-sm">
          <h2 className="section__subtitle">{subtitle}</h2>
          <p className="section__text">{text}</p>
          <img src={image} alt="Nosotros" className="section__img section__img--lg mx-auto" />
        </div>
      </section>
    );
  }
  
  export default HeroInformation;