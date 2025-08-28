import styled from "styled-components"; // Importa styled-components para criar estilos CSS em JS
import { FaArrowLeft, FaTrash } from "react-icons/fa"; // Importa ícones de seta para trás e lixeira

// Botão para finalizar o pedido
export const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.6rem 1.2rem;
  background-color: orange;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  margin-top: 1rem;
  font-size: 1rem;

  &:hover {
    background-color: darkorange;
  }
`;

// Container principal do carrinho
export const CartContainer = styled.div`
  max-width: 900px;      // Largura máxima do container
  margin: 40px auto;     // Centraliza horizontalmente com margem superior e inferior
  padding: 0 16px;       // Espaçamento interno lateral
`;

// Cada item do carrinho
export const CartItem = styled.div`
  display: flex;                // Layout flexível horizontal
  align-items: center;          // Alinha verticalmente ao centro
  justify-content: space-between; // Espaça itens igualmente
  border-bottom: 1px solid #ddd;  // Linha inferior
  padding: 12px 0;               // Espaçamento interno vertical

  // Estilo da imagem do item
  img {
    width: 60px;
    height: 60px;
    border-radius: 8px; // Cantos arredondados
    margin-right: 12px; // Espaço à direita
  }

  // Container de informações do produto
  .info {
    flex: 1;            // Ocupa o espaço restante
    margin-left: 12px;  // Espaço à esquerda
  }

  // Controles de quantidade do item (+/-)
  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 8px; // Espaço entre botões e quantidade

    button {
      width: 28px;
      height: 28px;
      border: 1px solid #ddd;
      background: #f7f7f7;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      transition: 0.2s;

      &:hover {           // Efeito ao passar o mouse
        background: #e86c51;
        color: white;
      }
    }
  }

  // Preço do item
  .price {
    font-weight: bold;
    margin-right: 12px;
  }

  // Botão de remover item
  .remove-btn {
    background: transparent;
    border: none;
    color: #e86c51;
    cursor: pointer;
    font-size: 1.2rem;
  }
`;

// Mensagem exibida quando o carrinho está vazio
export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 40px;
`;

// Link ou botão para voltar à loja
export const BackLink = styled.div`
  display: inline-flex;      // Layout flexível horizontal
  align-items: center;       // Alinha verticalmente ao centro
  margin-bottom: 20px;       // Espaço abaixo
  cursor: pointer;           // Cursor de clique
  color: #e86c51;            // Cor do texto
  font-weight: bold;          // Texto em negrito
  text-decoration: none;     // Sem sublinhado

  svg {
    margin-right: 8px;       // Espaço entre ícone e texto
  }
`;

// Reexporta ícones para facilitar importação em outros arquivos
export { FaArrowLeft, FaTrash };
