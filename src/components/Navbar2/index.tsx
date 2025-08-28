import categories from 'items.json'
import { useState, useEffect } from 'react'
import { Nav, LinkItem } from './styled'

export default function Navbar2() {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // cria os ids das seções baseado no nome das categorias
    const sectionIds = categories.map(c =>
      c.name.toLowerCase().replace(/\s+/g, '-')
    )

    // cria o observer pra observar quando a seção entra na tela
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.6 } // só ativa quando 60% da seção aparece
    )

    // conecta o observer a cada seção
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // cleanup (desconecta o observer quando desmonta)
    return () => observer.disconnect()
  }, [])

  return (
    <Nav>
      {categories.map((category, i) => {
        const id = category.name.toLowerCase().replace(/\s+/g, '-')
        return (
          <LinkItem
            key={i}
            href={`#${id}`}
            data-active={activeId === id} // marca qual está ativa
            onClick={() => setActiveId(id)} // seta manualmente no clique
          >
            {category.name}
          </LinkItem>
        )
      })}
    </Nav>
  )
}
