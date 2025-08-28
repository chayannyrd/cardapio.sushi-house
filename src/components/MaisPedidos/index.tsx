import React from 'react';
import * as S from './styled';              // Importa os estilos criados no styled.ts
import categories from '../../items.json';  // Importa as categorias e itens do JSON
import Link from 'next/link';               // Componente do Next.js para navegação sem recarregar a página

export default function MaisPedidos() {
  // Procura dentro do JSON a categoria chamada "Mais Pedidos"
  const categoriaMaisPedidos = categories.find(cat => cat.name === "Mais Pedidos");

  // Caso não exista essa categoria, não renderiza nada (evita erro)
  if (!categoriaMaisPedidos) return null;

  return (
    <S.MaisPedidosSection>
      {/* Título da seção */}
      <S.SectionTitle>Mais Pedidos</S.SectionTitle>

      {/* Container com rolagem horizontal (estilizado no styled) */}
      <div className="mais-pedidos-scroll">
        {/* Mapeia todos os itens da categoria "Mais Pedidos" */}
        {categoriaMaisPedidos.items.map(item => (
          // Cada item é um link que leva para a página individual do produto (/item/uid)
          <Link key={item.uid} href={`/item/${item.uid}`}>
            <div className="card">
              {/* Imagem do item */}
              <img src={item.image} alt={item.description} />

              {/* Nome/descrição do item */}
              <h3>{item.description}</h3>

              {/* Preço formatado em Real com 2 casas decimais */}
              <p>
                R$ {item.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </S.MaisPedidosSection>
  );
}
