import React, { useState } from 'react';
import Navbar from './navbar';
import './Pag.css';

// Importar os vídeos
import video1 from './videos/MESES/Janeiro.mov';
import video2 from './videos/MESES/Fevereiro.mov';
import video3 from './videos/MESES/Março.mov';
import video4 from './videos/MESES/Abril.mov';
import video5 from './videos/MESES/Maio.mov';
import video6 from './videos/MESES/Junho.mov';
import video7 from './videos/MESES/Julho.mov';
import video8 from './videos/MESES/Agosto.mov';
import video9 from './videos/MESES/Setembro.mov';
import video10 from './videos/MESES/Outubro.mov';
import video11 from './videos/MESES/Novembro.mov';
import video12 from './videos/MESES/Dezembro.mov';

const videos = [
  { id: 1, name: 'JANEIRO', url: video1 },
  { id: 2, name: 'FEVEREIRO', url: video2 },
  { id: 3, name: 'MARÇO', url: video3 },
  { id: 4, name: 'ABRIL', url: video4 },
  { id: 5, name: 'MAIO', url: video5 },
  { id: 6, name: 'JUNHO', url: video6 },
  { id: 7, name: 'JULHO', url: video7 },
  { id: 8, name: 'AGOSTO', url: video8 },
  { id: 9, name: 'SETEMBRO', url: video9 },
  { id: 10, name: 'OUTUBRO', url: video10 },
  { id: 11, name: 'NOVEMBRO', url: video11 },
  { id: 12, name: 'DEZEMBRO', url: video12 },
];

const PagMeses = () => {
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
          <h1>Meses</h1>
          <input
            type="text"
            placeholder="Pesquisar Mes..."
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

export default PagMeses;
