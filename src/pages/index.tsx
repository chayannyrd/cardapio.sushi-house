'use client' // Indica que este componente é renderizado no cliente (React Client Component)
import { NextPage } from 'next'
import * as S from 'styles/index' // Importa componentes estilizados da pasta styles
import categories from 'items.json' // Importa categorias e itens do cardápio
import Link from 'next/link' // Componente de navegação do Next.js
import Navbar2 from 'components/Navbar2' // Navbar personalizada horizontal
import BackToTop from 'components/BackToTop' // Botão para voltar ao topo da página
import MaisPedidos from 'components/MaisPedidos' // Seção de itens mais pedidos

// Formato de moeda para preços
const currency_format: Intl.NumberFormatOptions = {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2
}

const IndexPage: NextPage = () => {
  return (
    <>
      {/* Barra simples no topo com horários de funcionamento */}
      <div
        style={{
          background: '#029b19',
          color: 'white',
          padding: '8px',
          textAlign: 'center',
        }}
      >
        QUI, SEX e DOM dás 18h às 23h.
      </div>

      {/* Navbar horizontal com rolagem lateral */}
      <Navbar2 />

      {/* Botão flutuante para voltar ao topo da página */}
      <BackToTop />

      {/* Seção com os itens mais pedidos */}
      <MaisPedidos />

      {/* Container principal do cardápio */}
      <S.Container>
        {/* Itera pelas categorias do cardápio, exceto "Mais Pedidos" */}
        {categories
          .filter((category) => category.name !== 'Mais Pedidos')
          .map((category, i) => (
            <S.Section
              id={category.name.toLowerCase().replace(/\s+/g, '-')} // ID para navegação via âncora
              key={i}
            >
              {/* Título da categoria */}
              <h2>{category.name}</h2>

              {/* Container dos itens da categoria */}
              <S.SectionItems>
                {/* Itera pelos itens de cada categoria */}
                {category.items.map((item, i) => (
                  <Link href={`/item/${item.uid}`} key={i}>
                    {/* Cartão do item */}
                    <S.ItemCard>
                      <S.TextInfo>
                        {/* Descrição do item */}
                        <S.ItemDescription>{item.description}</S.ItemDescription>
                        {/* Preço do item formatado */}
                        <S.ItemPrice>
                          {item.price.toLocaleString('pt-br', currency_format)}
                        </S.ItemPrice>
                      </S.TextInfo>
                      {/* Imagem do item */}
                      <S.ItemImage src={item.image} />
                    </S.ItemCard>
                  </Link>
                ))}
              </S.SectionItems>
            </S.Section>
          ))}
      </S.Container>
    </>
  )
}

export default IndexPage

