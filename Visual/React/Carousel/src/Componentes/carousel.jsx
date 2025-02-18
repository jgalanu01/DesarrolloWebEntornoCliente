import { useState, useEffect } from 'react';
const Carousel = () => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    fetch('http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php')
      .then(response => response.json())
      .then(data => {
        setImagenes(data);
        console.log(data)
      })
      .catch(error => console.error('Error al cargar las imágenes:', error));
  }, []);

  return (
    <div className="container mt-5">
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {imagenes.map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={img.imagen} className="d-block w-100" alt={img.alt} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{img.texto}</h5>
              <p>{img.subtexto}</p>
            </div>
          </div>
        ))}
      </div>
  
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
  
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  
  );
};

export default Carousel;
