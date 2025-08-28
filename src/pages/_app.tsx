import React from 'react' // Importa React
import { NextPage } from 'next' // Tipo para página Next.js
import { AppProps } from 'next/app' // Tipo para props do App
import GlobalStyle from 'styles/global' // Importa estilos globais (styled-components)
import Navbar from 'components/Navbar' // Importa a barra de navegação
import Head from 'next/head' // Permite modificar o <head> do HTML

// Componente principal do App que engloba todas as páginas
const App: NextPage<AppProps> = ({ Component }) => {
  return (
    <>
      {/* Configurações do <head> da página */}
      <Head>
        <link rel="icon" href="/logo.jpg" /> {/* Ícone da aba do navegador */}
      </Head>

      {/* Navbar fixa em todas as páginas */}
      <Navbar />

      {/* Área principal onde cada página será renderizada */}
      <main>
        <Component /> {/* Componente da página atual */}
      </main>

      {/* Aplica os estilos globais */}
      <GlobalStyle />
    </>
  )
}

export default App // Exporta o App como padrão
