import yoda1 from '../../../assets/image/yoda1.webp';
const HeroBanner = ({ image, title }) => {
  return (
    <section
      className="hero d-flex a-items-center min-h-25vh"
      style={{
        backgroundImage: `url(${image ? image : yoda1})`
      }}
    >
      <div className="container">
        <h1 className="hero__title">{title}</h1>
      </div>
    </section>
  );
};

export default HeroBanner;