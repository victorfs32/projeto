import React, { useState } from 'react';
import Navbar from './navbar';
import './Pag.css';

// Importar os vídeos
import video1 from './videos/NIVEL DE FORMAÇÃO/Ensino médio.mov';
import video2 from './videos/NIVEL DE FORMAÇÃO/Escola infantil.mov';
import video3 from './videos/NIVEL DE FORMAÇÃO/Escola.mov';
import video4 from './videos/NIVEL DE FORMAÇÃO/Faculdade.mov';
import video5 from './videos//NIVEL DE FORMAÇÃO/Formado.mov';
import video6 from './videos/NIVEL DE FORMAÇÃO/Fundamental.mov';

const videos = [
  { id: 1, name: 'ENSINO MÉDIO', url: video1 },
  { id: 2, name: 'ESCOLA INFANTIL', url: video2 },
  { id: 3, name: 'ESCOLA', url: video3 },
  { id: 4, name: 'FACULDADE', url: video4 },
  { id: 5, name: 'FORMADO', url: video5 },
  { id: 6, name: 'FUNDAMENTAL', url: video6 },
];

const PagNiveldeFarm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra os vídeos e mantém a ordem correta
  const filteredVideos = videos
    .filter(video => video.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.id - b.id); // Ordena pelos ids em ordem crescente

  return (
    <>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Nivel de Formação</h1>
          <input
            type="text"
            placeholder="Pesquisar Nivel de Formação..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </header>
        <div className="video-grid">
          {filteredVideos.map(video => (
            <div key={video.id} className="video-item">
              <video controls>
                <source src={video.url} type="video/mp4" />
                Seu navegador não suporta o formato de vídeo.
              </video>
              <div className="video-description">{video.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PagNiveldeFarm;
