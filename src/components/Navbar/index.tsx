import React, { useEffect, useState } from 'react'
import * as S from './styled'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa"

// Componente principal da Navbar
export default function Navbar() {
  // Estado que armazena a quantidade de itens no carrinho
  const [cartCount, setCartCount] = useState(0)

  // Função para atualizar a contagem do carrinho a partir do localStorage
  const updateCartCount = () => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      const cart = JSON.parse(storedCart)
      // Soma as quantidades de todos os itens do carrinho
      const totalItems = cart.reduce(
        (sum: number, item: any) => sum + (item.quantity || 1),
        0
      )
      setCartCount(totalItems)
    } else {
      // Se não tiver nada no carrinho, volta pra 0
      setCartCount(0)
    }
  }

  // useEffect roda ao montar o componente
  useEffect(() => {
    // Atualiza a contagem logo que a Navbar carrega
    updateCartCount()

    // Escuta um evento customizado "cartUpdated" para atualizar a contagem
    const handleCartUpdate = () => updateCartCount()
    window.addEventListener("cartUpdated", handleCartUpdate)

    // Remove o listener quando o componente desmonta
    return () => window.removeEventListener("cartUpdated", handleCartUpdate)
  }, [])

  return (
    <S.Nav>
      {/* Logo que leva para a página inicial */}
      <Link href="/">
        <S.LogoLink>
          <img src="/logo/sushi-house.jpg" alt="Sushi House" />
          <span>Sushi House</span>
        </S.LogoLink>
      </Link>

      {/* Carrinho de compras com badge mostrando a quantidade de itens */}
      <S.CartButton>
        <Link href="/cart">
          <FaShoppingCart size={21} color="fff" />
          {/* Badge aparece apenas se tiver itens no carrinho */}
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </Link>
      </S.CartButton>
    </S.Nav>
  )
}
