import React, { useState } from 'react';
import Navbar from './navbar';
import './Pag.css';

// Importar os vídeos
import video1 from './videos/SEMANA/Segunda-Feira.mov';
import video2 from './videos/SEMANA/Terça-Feira.mov';
import video3 from './videos/SEMANA/Quarta-Feira.mov';
import video4 from './videos/SEMANA/Quinta-Feira.mov';
import video5 from './videos/SEMANA/Sexta-Feira.mov';
import video6 from './videos/SEMANA/Sábado.mov';
import video7 from './videos/SEMANA/Domingo.mov';

const videos = [
  { id: 1, name: 'SEGUNDA-FEIRA', url: video1 },
  { id: 2, name: 'TERÇA-FEIRA', url: video2 },
  { id: 3, name: 'QUARTA-FEIRA', url: video3 },
  { id: 4, name: 'QUINTA-FEIRA', url: video4 },
  { id: 5, name: 'SEXTA-FEIRA', url: video5 },
  { id: 6, name: 'SÁBADO', url: video6 },
  { id: 7, name: 'DOMINGO', url: video7 },
];

const PagSemana = () => {
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
          <h1>Semana</h1>
          <input
            type="text"
            placeholder="Pesquisar Semana..."
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

export default PagSemana;
