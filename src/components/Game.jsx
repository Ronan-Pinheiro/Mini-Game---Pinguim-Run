import React, { useState, useEffect, useRef } from 'react';
import '../styles/Game.css';
import penguin from '../assets/images/penguin.png';
import background from '../assets/images/background.gif';
import obstacle from '../assets/images/obstacle.png';

const Game = () => {
  // Estados do jogo
  const [isJumping, setIsJumping] = useState(false);
  const [obstaclePosition, setObstaclePosition] = useState(1000);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [NoJump, setNoJump] = useState(false); // Estado para bloquear o pulo
  const [distance, setDistance] = useState(0);
  const [speed, setSpeed] = useState(7); // Velocidade inicial dos obstáculos

  // Referências para elementos do jogo
  const penguinRef = useRef(null);
  const gameContainerRef = useRef(null);

  // Movimentação do obstáculo e contagem de distância
  useEffect(() => {
    if (!gameStarted || isGameOver) return;

    const interval = setInterval(() => {
      setObstaclePosition((prev) => (prev > -50 ? prev - speed : 1000));
      setDistance((prev) => prev + 1);

      // Aumenta a velocidade do obstáculo a cada 50 km percorridos
      if (distance % 50 === 0) {
        setSpeed((prevSpeed) => Math.min(prevSpeed + 1, 15));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [gameStarted, isGameOver, distance]);

  // Verifica colisões entre o pinguim e o obstáculo
  useEffect(() => {
    if (!gameStarted || isGameOver) return;

    const checkCollision = () => {
      if (penguinRef.current) {
        const penguinRect = penguinRef.current.getBoundingClientRect();
        const obstacleRect = document
          .querySelector('.obstacle')
          .getBoundingClientRect();

        if (
          penguinRect.right > obstacleRect.left &&
          penguinRect.left < obstacleRect.right &&
          penguinRect.bottom > obstacleRect.top
        ) {
          setIsGameOver(true);
        }
      }
    };

    const collisionInterval = setInterval(checkCollision, 50);
    return () => clearInterval(collisionInterval);
  }, [gameStarted, isGameOver]);

  // Captura os comandos de pulo (apenas espaço e seta para cima)
  useEffect(() => {
    const handleJump = (e) => {
      if (e.key === ' ' || e.key === 'ArrowUp') {
        e.preventDefault(); // Impede a rolagem da página ao pressionar espaço
        if (!NoJump) {
          jump();
          setNoJump(true); // Bloqueia o pulo por 500ms
          setTimeout(() => setNoJump(false), 500);
        }
      }
    };

    window.addEventListener('keydown', handleJump);
    return () => window.removeEventListener('keydown', handleJump);
  }, [isJumping, gameStarted, NoJump]);

  // Função de pulo
  const jump = () => {
    if (!gameStarted || isJumping || isGameOver) return;

    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 700); // Tempo total do pulo
  };

  // Inicia o jogo
  const startGame = () => {
    setGameStarted(true);
    setIsGameOver(false);
    setObstaclePosition(1000);
    setDistance(0); // Reinicia a distância
    setSpeed(7); // Reseta a velocidade inicial
  };

  return (
    <div
      className="game-container"
      onClick={jump} // Permite pular clicando na tela
      tabIndex="0"
      ref={gameContainerRef}
    >
      <img src={background} alt="background" className="background" />
      <div className="game-area">
        <img
          ref={penguinRef}
          src={penguin}
          alt="Penguin"
          className={`penguin ${isJumping ? 'jump' : ''}`}
        />
        <img
          src={obstacle}
          alt="Obstacle"
          className="obstacle"
          style={{ left: `${obstaclePosition}px` }}
        />
      </div>

      {/* Mostra a distância percorrida */}
      <div className="distance-counter">{distance} km</div>

      {/* Botão para iniciar o jogo */}
      {!gameStarted && !isGameOver && (
        <button className="start-button" onClick={startGame}>
          Iniciar Jogo
        </button>
      )}

      {/* Tela de Game Over */}
      {isGameOver && (
        <div className="game-over-screen">
          <h2>Game Over</h2>
          <p>Distância percorrida: {distance} km</p>
          <button onClick={startGame}>Reiniciar</button>
        </div>
      )}
    </div>
  );
};

export default Game;
