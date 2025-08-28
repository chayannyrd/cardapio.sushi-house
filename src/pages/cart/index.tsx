import { useState, useEffect } from 'react'; // Hooks do React para estado e efeitos colaterais
import Link from 'next/link';               // Link do Next.js para navegação entre páginas
import { useRouter } from 'next/router';    // Hook para navegação programática
import {
  CartContainer,
  CartItem,
  EmptyMessage,
  BackLink,
  FaArrowLeft,
  FaTrash,
  CheckoutButton
} from './styled'; // Importa componentes estilizados e ícones

export default function CartPage() {
  // Estado local para armazenar os itens do carrinho
  const [cartItems, setCartItems] = useState<any[]>([]);
  const router = useRouter(); // Hook para navegação

  // Carrega os itens do carrinho do localStorage ao montar o componente
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) setCartItems(JSON.parse(storedCart));
  }, []);

  // Atualiza o estado do carrinho e salva no localStorage
  const updateCart = (updatedCart: any[]) => {
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove um item do carrinho pelo índice
  const removeFromCart = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  // Aumenta a quantidade de um item
  const increaseQuantity = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    updateCart(updatedCart);
  };

  // Diminui a quantidade de um item, mas nunca abaixo de 1
  const decreaseQuantity = (index: number) => {
    const updatedCart = [...cartItems];
    if ((updatedCart[index].quantity || 1) > 1) {
      updatedCart[index].quantity -= 1;
      updateCart(updatedCart);
    }
  };

  // Calcula o total do carrinho
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  // Função para navegar até a página de checkout
  const handleGoToCheckout = () => {
    if (cartItems.length === 0) return; // Não navega se o carrinho estiver vazio
    router.push('/checkout');
  };

  return (
    <CartContainer>
      {/* Link para voltar à loja */}
      <Link href="/" style={{ textDecoration: 'none' }}>
        <BackLink>
          <FaArrowLeft /> Voltar para a loja
        </BackLink>
      </Link>

      {/* Se o carrinho estiver vazio, mostra mensagem */}
      {cartItems.length === 0 ? (
        <EmptyMessage>Seu carrinho está vazio</EmptyMessage>
      ) : (
        <>
          {/* Lista de itens no carrinho */}
          {cartItems.map((item, i) => (
            <CartItem key={i}>
              <img src={item.image} alt={item.description} /> {/* Imagem do produto */}
              <div className="info">
                <p>{item.description}</p> {/* Descrição do produto */}
                <div className="quantity-controls">
                  {/* Botões para diminuir e aumentar quantidade */}
                  <button onClick={() => decreaseQuantity(i)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => increaseQuantity(i)}>+</button>
                </div>
              </div>
              {/* Preço do item multiplicado pela quantidade */}
              <div className="price">
                {(item.price * (item.quantity || 1)).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </div>
              {/* Botão para remover item */}
              <button className="remove-btn" onClick={() => removeFromCart(i)}>
                <FaTrash />
              </button>
            </CartItem>
          ))}

          {/* Linha de total do carrinho */}
          <CartItem>
            <div className="info">
              <strong>Total</strong>
            </div>
            <div className="price">
              <strong>
                {total.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </strong>
            </div>
          </CartItem>

          {/* Botão de checkout estilizado */}
          <CheckoutButton onClick={handleGoToCheckout}>
            Finalizar Pedido
          </CheckoutButton>
        </>
      )}
    </CartContainer>
  );
}
