import styled from 'styled-components';

// Seção que envolve o bloco "Mais Pedidos"
export const MaisPedidosSection = styled.section`
  margin: 40px 0;          /* Espaço vertical acima e abaixo da seção */
  margin-left: 10px;       /* Pequena margem esquerda */
  margin-right: 10px;      /* Pequena margem direita */

  /* Estilo do título (h2) */
  h2 {
    font-size: 1.8rem;     /* Tamanho do título */
    margin-bottom: 20px;   /* Espaço abaixo do título */
  }

  /* Container que vira scroll horizontal */
  .mais-pedidos-scroll {
    display: flex;                    /* Alinha os cards em linha */
    gap: 8px;                         /* Espaço entre os cards */
    overflow-x: auto;                 /* Ativa rolagem horizontal */
    scroll-snap-type: x mandatory;    /* Faz o snap no eixo X (rolagem "travada" nos cards) */
    -webkit-overflow-scrolling: touch;/* Rolagem suave no iOS */

    &::-webkit-scrollbar {
      display: none; /* Esconde a barra de rolagem padrão */
    }
  }

  /* Estilo de cada card */
  .card {
    flex: 0 0 140px;       /* Card não cresce nem encolhe, sempre 140px de largura */
    height: 215px;         /* Altura fixa do card */
    background: #ffffff;   /* Fundo branco */
    border-radius: 12px;   /* Cantos arredondados */
    text-align: center;    /* Conteúdo centralizado */
    overflow: hidden;      /* Esconde partes que saírem da área do card */
    scroll-snap-align: start; /* Faz o snap começar no início do card */

    /* Imagem do produto */
    img {
      width: 150px;             /* Largura fixa da imagem */
      aspect-ratio: 1 / 1;      /* Mantém sempre quadrada */
      object-fit: cover;        /* Corta/ajusta para preencher sem distorcer */
      border-radius: 8px 8px 0 0; /* Canto arredondado só em cima */
    }

    /* Nome/descrição do item */
    h3 {
      font-size: small;
      margin: 8px 0 4px;
      color: black;
    }

    /* Preço do item */
    p {
      margin: 2px 0 8px;
      color: #5a5a5a;
      font-weight: bold;
      font-size: small;
    }

    /* Espaçamento interno */
    padding-left: 0;
    padding-right: 0;

    /* Em telas maiores, adiciona mais "respiro" nos lados */
    @media (min-width: 500px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

export const SectionTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 16px;
  color: #333333;
  font-weight: bold;
  margin-left: 16px;

`;