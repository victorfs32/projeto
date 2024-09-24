import React, { useState } from 'react';
import Navbar from './navbar';
import './Pag.css';

// Importar os vídeos
import video1 from './videos/FAMILIA/Avó.mov';
import video2 from './videos/FAMILIA/Filho.mov';
import video3 from './videos/FAMILIA/Irmão.mov';
import video4 from './videos/FAMILIA/Mãe.mov';
import video5 from './videos/FAMILIA/Pai.mov';
import video6 from './videos/FAMILIA/Sobrinho.mov';
import video7 from './videos/FAMILIA/Tio.mov';

const videos = [
  { id: 1, name: 'AVÓ', url: video1 },
  { id: 2, name: 'FILHO', url: video2 },
  { id: 3, name: 'IRMÃO', url: video3 },
  { id: 4, name: 'MÃE', url: video4 },
  { id: 5, name: 'PAI', url: video5 },
  { id: 6, name: 'SOBRINHO', url: video6 },
  { id: 7, name: 'TIO', url: video7 },
];

const PagFamilia = () => {
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
          <h1>Familia</h1>
          <input
            type="text"
            placeholder="Pesquisar Familia..."
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

export default PagFamilia;
