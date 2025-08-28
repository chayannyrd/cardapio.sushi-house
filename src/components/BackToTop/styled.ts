import styled from 'styled-components';

// Estilo do botão flutuante "Voltar ao topo"
export const Button = styled.button`
  position: fixed;      /* Fixa o botão na tela, não rola junto com a página */
  bottom: 30px;         /* Distância da parte inferior da tela */
  right: 30px;          /* Distância da lateral direita da tela */
  
  background: #e86c51;  /* Cor de fundo do botão */
  color: white;         /* Cor do ícone (seta) */
  border: none;         /* Remove qualquer borda padrão */
  padding: 10px 12px;   /* Espaçamento interno (aumenta o "tamanho clicável") */
  border-radius: 50%;   /* Deixa o botão totalmente arredondado (círculo) */
  
  cursor: pointer;      /* Mostra a "mãozinha" ao passar o mouse */
  display: flex;        /* Centraliza o conteúdo interno */
  align-items: center;  /* Alinha o ícone verticalmente */
  justify-content: center; /* Alinha o ícone horizontalmente */
  
  font-size: 18px;      /* Tamanho do ícone */
  z-index: 1000;        /* Garante que o botão fica acima de outros elementos */
  visibility: hidden;   /* Começa escondido, só aparece após rolar a página */

  &:hover {
    opacity: 2;         /* Efeito ao passar o mouse (talvez você queira usar 0.8 em vez de 2) */
  }
`;
