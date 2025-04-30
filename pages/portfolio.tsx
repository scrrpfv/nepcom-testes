import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';

const portfolioItems = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1. Um projeto desafiador usando React e Next.js.',
    image: '/images/project1.jpg', // Substitua pelos caminhos reais das imagens
    link: '/projects/project1',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2. Trabalhamos com uma API RESTful e integração com banco de dados.',
    image: '/images/project2.jpg', // Substitua pelos caminhos reais das imagens
    link: '/projects/project2',
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do projeto 3. Desenvolvemos uma aplicação web com Vue.js e Firebase.',
    image: '/images/project3.jpg', // Substitua pelos caminhos reais das imagens
    link: '/projects/project3',
  },
  {
    title: 'Projeto 4',
    description: 'Descrição do projeto 4. Sistema de e-commerce com carrinho de compras.',
    image: '/images/project4.jpg', // Substitua pelos caminhos reais das imagens
    link: '/projects/project4',
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <Header />
      <h2 className="portfolio-title">Nosso Portfólio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="portfolio-item-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link href={item.link}>Ver mais</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
