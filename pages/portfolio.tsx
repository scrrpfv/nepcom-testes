import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

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
      <h1 className='font-semibold text-size-[4rem] px-[20px] py-[60px]'>Nosso Portfólio</h1>
      <div className="px-[10px] py-[20px] grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[20px] mx-auto max-w-[1200px]">
        {portfolioItems.map((item, index) => (
          <div className="bg-color-(--color-background) rounded-xl shadow-lg overflow-hidden transition duration-300 ease-in-out hover:-translate-y-2 shadow-lg/20" key={index}>
            <img className='w-100 h-[200px] object-cover' src={item.image} alt={item.title} />
            <div className="p-[20px]">
              <h3 className='text-2xl text-(--color-secondary) mb-[10px]'>{item.title}</h3>
              <p className='text-base text-(--color-dark-text) mb-[15px]'>{item.description}</p>
              <Link href={item.link}>
                <Button text="Ver mais"/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
