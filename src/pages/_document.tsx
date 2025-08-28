// Importa React e JSX para tipagem
import React, { JSX } from 'react'

// Importa o Document do Next.js e tipos auxiliares para SSR
import Document, {
  DocumentInitialProps, // Props iniciais do Document
  DocumentContext,      // Contexto de renderização no servidor
  Html,                 // Componente <html>
  Head,                 // Componente <head>
  Main,                 // Onde o conteúdo principal da página será injetado
  NextScript            // Scripts necessários para Next.js
} from 'next/document'

// Importa ServerStyleSheet do styled-components para coletar estilos no SSR
import { ServerStyleSheet } from 'styled-components'

// Classe que substitui o Document padrão do Next.js
export default class MyDocument extends Document {

  // Executado no servidor antes de gerar o HTML
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet() // Cria coletor de estilos
    const originalRenderPage = ctx.renderPage // Salva a renderização original

    try {
      // Sobrescreve a renderização para coletar estilos do styled-components
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx) // Pega props iniciais
      return {
        ...initialProps,
        styles: [
          initialProps.styles,     // Mantém estilos existentes
          sheet.getStyleElement()  // Adiciona estilos do styled-components
        ],
      }
    } finally {
      sheet.seal() // Garante que o coletor seja fechado
    }
  }

  // Estrutura base do HTML do projeto
  render(): JSX.Element {
    return (
      <Html lang="pt"> {/* Define idioma como português */}
        <Head>
          <meta charSet="utf-8" /> {/* Codificação de caracteres */}

          {/* Pré-conexão com Google Fonts para otimizar carregamento */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

          {/* Importa a fonte Montserrat com várias variações */}
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main /> {/* Conteúdo principal das páginas */}
          <NextScript /> {/* Scripts do Next.js */}
        </body>
      </Html>
    )
  }
}
