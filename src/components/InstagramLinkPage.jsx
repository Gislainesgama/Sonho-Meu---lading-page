import React from 'react';
import Slider from 'react-slick';
import './InstagramLinkPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InstagramLinkPage = () => {
  const phoneNumber = '5574988275987'; 
  const message = 'Olá! Gostaria de saber mais informações.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="link-container">
      <div className="content-container">
        <header className="link-header">
        <img src={require('../assets/logo-img.jpg')} alt="Logo da empresa" className="logo-photo" />
          <h1>Sonho Meu Decorações<br />Bem-vindo!</h1>

        </header>
        <main className="link-main">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
             WhatsApp
          </a>
        </main>
      </div>

      <aside className="company-history">
        <img src={require('../assets/img7.jpg')} alt="Dinah Gama" className="company-photo" />
        <h2>Sobre Nós</h2>
        <p>Com 15 anos de tradição, a Sonho Meu Decorações é uma empresa pioneira em nossa cidade, reconhecida por sua dedicação e qualidade. Em 2022, tivemos a honra de receber o prêmio "Profissionais do Ano", um reconhecimento ao nosso compromisso com a excelência.

Fundada por Dinah Gama, a Sonho Meu Decorações se especializa em criar ambientes inesquecíveis para festas infantis, celebrações de quinze anos, casamentos e decorações em geral. Transformamos momentos especiais em memórias eternas, trazendo o sonho de cada cliente à realidade.</p>
      </aside>

      <div className="carousel-container">
        <Slider {...settings}>
          <div><img src={require('../assets/img1.jpg')} alt="Imagem 1" /></div>
          <div><img src={require('../assets/img2.jpg')} alt="Imagem 2" /></div>
          <div><img src={require('../assets/img3.jpg')} alt="Imagem 3" /></div>
          <div><img src={require('../assets/img4.jpg')} alt="Imagem 4" /></div>
          <div><img src={require('../assets/img5.jpg')} alt="Imagem 5" /></div>
          <div><img src={require('../assets/img6.jpg')} alt="Imagem 6" /></div>
        </Slider>
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return <div className="custom-arrow next-arrow" onClick={onClick}>▶</div>;
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return <div className="custom-arrow prev-arrow" onClick={onClick}>◀</div>;
};

export default InstagramLinkPage;
