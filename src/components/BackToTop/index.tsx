import { useEffect, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Ícone de seta para cima
import { useRouter } from 'next/router'; // Para saber em qual página está
import { Button } from './styled'; // Botão estilizado com styled-components

export default function BackToTop() {
  const router = useRouter(); // Hook do Next para acessar a rota atual
  const buttonRef = useRef<HTMLButtonElement>(null); // Referência para o botão

  // ⚠️ Renderiza o componente somente se estiver na página inicial ("/")
  if (router.pathname !== '/') return null;

  useEffect(() => {
    // Função que será chamada quando houver rolagem
    const handleScroll = () => {
      if (!buttonRef.current) return; // Se o botão ainda não existe, sai
      if (window.scrollY > 200) {
        // Se o scroll passou de 200px, mostra o botão
        buttonRef.current.style.visibility = 'visible';
      } else {
        // Se estiver acima de 200px, esconde o botão
        buttonRef.current.style.visibility = 'hidden';
      }
    };

    // Adiciona o evento de rolagem ao carregar o componente
    window.addEventListener('scroll', handleScroll);

    // Remove o evento quando o componente for desmontado
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função que leva o usuário para o topo da página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolagem suave até o topo
  };

  return (
    // Botão que chama a função de voltar ao topo
    <Button ref={buttonRef} onClick={scrollToTop}>
      <FaArrowUp /> {/* Ícone de seta dentro do botão */}
    </Button>
  );
}
