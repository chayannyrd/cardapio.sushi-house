import { useRouter } from 'next/router' // Hook do Next.js para obter parâmetros da rota e navegação
import items from '../../items.json' // Importa os dados dos itens do cardápio
import React, { useRef } from 'react' // Importa React e useRef para referenciar elementos DOM
import styled from 'styled-components' // Styled-components para criar estilos em JS

// Container principal da página do item
const Container = styled.div`
  display: flex;
  flex-wrap: wrap; // Permite que elementos quebrem linha em telas pequenas
  gap: 1rem; // Espaçamento entre os elementos
  padding: 0;
`

// Estilização da imagem do item
const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  border-radius: 4px;
  object-fit: cover; // Ajusta a imagem para cobrir a área sem distorção
  flex-shrink: 0; // Evita que a imagem encolha

  @media (max-width: 499px) {
    max-width: 100%;
    height: 180px;
  }

  @media (min-width: 500px) {
    width: 277px;
    height: 277px;
  }
`

// Container de texto (título e preço) usando o TextContainer original
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;

  @media (max-width: 499px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
`

// Container que engloba o TextContainer e Observações
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  min-width: 100%;
`

// Container da área de observações
const ObservacoesContainer = styled.div`
  background-color: #f1f1f1;
  padding: 0.8rem;
  border-radius: 4px;
  margin-top: 1rem;
  min-width: 95%;

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  textarea {
    width: 96%;
    min-height: 70px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.5rem;
    font-size: 1rem;
    resize: vertical; // Permite redimensionar verticalmente
  }
`

// Botão para adicionar item ao carrinho
const AddButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: orange;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: darkorange; // Efeito hover
  }
`

export default function ItemPage() {
  const router = useRouter() // Hook para navegar e acessar query params
  const { uid } = router.query // Pega o UID do item pela URL
  const observacoesRef = useRef<HTMLTextAreaElement>(null) // Ref para pegar o valor do textarea

  if (!uid) return <p>Carregando...</p> // Enquanto não tem UID, mostra carregando

  // Busca o item dentro de todas as categorias
  const item = items
    .flatMap((category) => category.items)
    .find((item) => item.uid === uid)

  if (!item) return <p>Item não encontrado</p> // Caso não ache, mostra mensagem

  // Função para adicionar o item no carrinho
  const handleAddToCart = () => {
    const observacoes = observacoesRef.current?.value || '' // Pega observações
    const storedCart = localStorage.getItem('cart')
    let cart = storedCart ? JSON.parse(storedCart) : [] // Pega carrinho do localStorage ou cria novo

    const existingIndex = cart.findIndex((i: any) => i.uid === item.uid)
    if (existingIndex !== -1) {
      // Se já existe no carrinho, apenas atualiza quantidade e observações
      cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1
      cart[existingIndex].observacoes = observacoes
    } else {
      // Se não existe, adiciona novo item
      cart.push({ ...item, quantity: 1, observacoes })
    }

    localStorage.setItem('cart', JSON.stringify(cart)) // Salva o carrinho atualizado
    window.dispatchEvent(new Event('cartUpdated')) // Atualiza qualquer listener de carrinho
    router.push('/cart') // Redireciona para página do carrinho
  }

  return (
    <Container>
      <Image src={item.image} alt={item.description} /> {/* Imagem do item */}
      <InfoContainer>
        <TextContainer>
          <h1>{item.description}</h1> {/* Nome do item */}
          <p>
            Preço:{' '}
            {item.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </TextContainer>

        <ObservacoesContainer>
          <label htmlFor="observacoes">Observações</label>
          <textarea
            id="observacoes"
            ref={observacoesRef}
            placeholder="Ex.: Tirar..."
          />
        </ObservacoesContainer>

        <AddButton onClick={handleAddToCart}>Adicionar ao carrinho</AddButton>
      </InfoContainer>
    </Container>
  )
}
