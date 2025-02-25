// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function Acordeon() {
    const [preguntas, setPreguntas] = useState([]);

    // Cargar las preguntas desde el archivo JSON local
    useEffect(() => {
        fetch('/preguntas.json')
            .then(response => response.json())
            .then(data => setPreguntas(data))
            .catch(error => console.error('Error al cargar preguntas:', error));
    }, []);

    return (
        <div className="container mt-4">
            <h2>Preguntas Frecuentes</h2>
            <div className="accordion" id="faqAccordion">
                {preguntas.map((item, index) => (
                    <div className="accordion-item" key={item.id}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button 
                                className="accordion-button collapsed" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target={`#collapse${index}`} 
                                aria-expanded="false" 
                                aria-controls={`collapse${index}`}
                            >
                                {item.pregunta}
                            </button>
                        </h2>
                        <div 
                            id={`collapse${index}`} 
                            className="accordion-collapse collapse" 
                            aria-labelledby={`heading${index}`} 
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                {item.respuesta}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Acordeon;
