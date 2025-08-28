import styled from "styled-components";

// Container principal da página, centraliza o conteúdo e define largura máxima
export const Container = styled.div`
  max-width: 800px;       // Largura máxima do container
  margin: 40px auto;      // Espaço acima/abaixo e centraliza horizontalmente
  padding: 16px;          // Espaçamento interno
  font-family: Arial, sans-serif; // Fonte padrão da página
`;

// Seções internas para separar blocos de conteúdo (dados do cliente, endereço etc.)
export const Section = styled.div`
  background: #f5f5f5;    // Cor de fundo clara
  padding: 16px;           // Espaçamento interno
  border-radius: 12px;     // Cantos arredondados
  margin-bottom: 20px;     // Espaço entre as seções
`;

// Título de cada seção
export const Title = styled.h2`
  font-size: 18px;        // Tamanho da fonte
  margin-bottom: 8px;     // Espaço abaixo do título
`;

// Input de texto padrão para formulários
export const Input = styled.input`
  width: 97%;             // Largura quase total do container
  padding: 10px;          // Espaçamento interno
  margin-top: 8px;        // Espaço acima do input
  border: 1px solid #ccc; // Borda cinza clara
  border-radius: 8px;     // Cantos arredondados
`;

// Textarea para observações ou mensagens maiores
export const Textarea = styled.textarea`
  width: 97%;             // Largura quase total do container
  padding: 10px;          // Espaçamento interno
  margin-top: 8px;        // Espaço acima
  border: 1px solid #ccc; // Borda cinza clara
  border-radius: 8px;     // Cantos arredondados
`;

// Botão principal de ação (ex: "Fazer pedido")
export const Button = styled.button`
  width: 100%;            // Botão ocupa toda a largura do container
  background: orange;     // Cor de fundo laranja
  color: white;           // Texto branco
  padding: 14px;          // Espaçamento interno
  font-size: 18px;        // Tamanho da fonte
  border: none;           // Sem borda
  border-radius: 12px;    // Cantos arredondados
  cursor: pointer;        // Cursor muda para indicar clicável
`;

// Overlay que cobre a tela inteira quando o modal é aberto
export const ModalOverlay = styled.div`
  position: fixed;        // Fixa na tela
  top: 0;
  left: 0;
  width: 100%;            // Ocupa toda largura
  height: 100%;           // Ocupa toda altura
  background: rgba(0,0,0,0.5); // Fundo semi-transparente
  display: flex;          // Flexbox para centralizar conteúdo
  justify-content: center; 
  align-items: center;    
  z-index: 1000;          // Fica acima de outros elementos
`;

// Conteúdo do modal (a "caixa" branca)
export const ModalContent = styled.div`
  background: white;      // Fundo branco
  padding: 24px;          // Espaçamento interno
  border-radius: 12px;    // Cantos arredondados
  max-width: 400px;       // Largura máxima do modal
  text-align: center;     // Texto centralizado
`;

// Botão dentro do modal (ex: "Voltar à tela inicial")
export const ModalButton = styled.button`
  margin-top: 16px;       // Espaço acima do botão
  padding: 12px 20px;     // Espaçamento interno horizontal e vertical
  border: none;           // Sem borda
  background: orange;     // Cor de fundo laranja
  color: white;           // Texto branco
  border-radius: 8px;     // Cantos arredondados
  cursor: pointer;        // Cursor clicável
  font-size: 16px;        // Tamanho da fonte
`;
