import React from 'react';
import ronanPhoto from '../assets/images/MinhaFotoRonan.png';

function AboutMe() {
  return (
    <div className="about-me">
      <h1>👨‍💻 Sobre o Desenvolvedor</h1>
      <div className="about-me-content">
        <img src={ronanPhoto} alt="Ronan Pinheiro" className="profile-photo" />
        <div className="about-me-text">
          <p>
            Olá! Meu nome é <strong>Ronan Pinheiro</strong>, sou Desenvolvedor
            Front-end apaixonado pela criação de jogos, especialmente em
            Realidade Virtual (VR). <br />
            Tenho experiência em{' '}
            <strong>HTML, CSS, JavaScript, React, C#</strong>, e desenvolvimento
            de aplicações web e experiências imersivas. <br />
            Atualmente, faço parte da <strong>Fábrica de Softwares</strong> do
            SENAI, onde desenvolvo projetos de VR para treinamentos industriais.{' '}
            <br />
            Também criei um mini game em AR para a marca <strong>Fiufiu</strong>
            . <br />
            Estou cursando{' '}
            <strong>Análise e Desenvolvimento de Sistemas</strong> e sou
            fascinado por tecnologia e interfaces interativas.
          </p>
          <p>
            Explore meu portfólio e descubra mais projetos! <br />
            <a
              href="https://portfolio-ronan-pinheiro.vercel.app/"
            >
              DEV= Ronan Pinheiro
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
