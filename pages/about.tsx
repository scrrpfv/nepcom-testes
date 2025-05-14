import Header from '../components/Header';

export default function About() {
  return (
    <div className='font-roboto'>
      <Header />
      <main className='px-[20px] py-[60px]'>
        <h1 className='font-semibold text-4xl ml-[30px]'>Sobre o NUPCOM</h1>
        <p className='mt-[20px] text-xl'>Somos a NEPCOM — uma equipe formada por estudantes de graduação do Centro de Informática da UFPE (CIn), movidos pela paixão por tecnologia, inovação e impacto real. Atuamos nas áreas de desenvolvimento de software, freelancing e soluções tecnológicas personalizadas, sempre buscando conectar teoria e prática em projetos desafiadores.<br /><br /> 
          Nosso time é composto por futuros profissionais das mais diversas áreas da computação, o que nos permite entregar soluções completas, desde a concepção da ideia até sua implementação e manutenção. Trabalhamos com metodologias ágeis, foco em qualidade e constante aprendizado, transformando conhecimento acadêmico em resultados concretos.<br /><br />
          Na NEPCOM, acreditamos que a experiência prática é essencial para a formação de um bom profissional. Por isso, cada projeto é uma oportunidade de crescimento mútuo — para nós e para nossos clientes. Mais do que códigos e sistemas, entregamos valor, parceria e inovação.<br /><br />
          Seja para desenvolver um site, um sistema sob medida ou encontrar a solução tecnológica ideal para o seu negócio, estamos prontos para ajudar.</p>
      </main>
    </div>
  );
}