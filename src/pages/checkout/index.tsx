import { useEffect, useState } from "react"; // Hooks do React para estado e efeito colateral
import {
  Container,
  Section,
  Title,
  Input,
  Textarea,
  Button,
  ModalOverlay,
  ModalContent,
  ModalButton
} from "../../styles/checkout"; // Componentes estilizados importados de outro arquivo

export default function CheckoutPage() {
  // Estado do carrinho
  const [cartItems, setCartItems] = useState<any[]>([]);
  // Estados dos campos do formulário
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [complement, setComplement] = useState("");
  const [payment, setPayment] = useState("Cartão");
  const [notes, setNotes] = useState("");
  // Estado para mostrar modal de sucesso
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Carregar itens do carrinho do localStorage ao montar o componente
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCartItems(JSON.parse(storedCart));
  }, []);

  // Cálculo de valores
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0); // Soma dos preços dos itens
  const deliveryFee = 2; // Taxa fixa de entrega
  const total = subtotal + deliveryFee; // Total final

  // Função para enviar o pedido
  const handleOrder = (e?: React.FormEvent) => {
    if (e) e.preventDefault(); // Prevenir reload da página

    const orderNumber = "001"; // Número do pedido fixo (pode ser dinâmico)
    // Lista de itens formatada
    const itemsList = cartItems
      .map((i) => `➡️ ${i.quantity ?? 1}x ${i.description}`)
      .join("\n");

    // Monta mensagem para WhatsApp
    const lines = [
      `*Pedido nº ${orderNumber}*`,
      ``,
      `*Itens:*`,
      itemsList,
      ``,
      `💳 ${payment}`,
      ``,
      `🛵 Delivery (taxa de: R$ ${deliveryFee.toFixed(2).replace(".", ",")})`,
      `🏠 Rua ${street}, Nº ${number} - ${neighborhood}, ${city}`,
      `(Estimativa: entre 30~60 minutos)`,
      ``,
      `*Total: R$ ${total.toFixed(2).replace(".", ",")}*`,
      ``,
    ];
    

    const message = lines.join("\n").normalize("NFC"); // Normaliza texto

    // Monta URL do WhatsApp com o número e mensagem
    const url = new URL("https://api.whatsapp.com/send");
    url.searchParams.set("phone", "5584987741907"); 
    url.searchParams.set("text", message);

    // Abre WhatsApp em nova aba
    window.open(url.toString(), "_blank");

    // Limpa o carrinho e os campos do formulário
    setCartItems([]);
    localStorage.removeItem("cart");
    setName(""); setPhone(""); setStreet(""); setNumber("");
    setNeighborhood(""); setCity(""); setComplement("");
    setPayment("Cartão"); setNotes("");

    // Exibe modal de sucesso
    setShowSuccessModal(true);
  };

  return (
    <Container>
      <h1>Finalizar pedido</h1>

      {/* Seção de dados do cliente */}
      <Section>
        <Title>Dados do cliente</Title>
        <Input
          name="name"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
        <Input
          name="phone"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
        />
      </Section>

      {/* Seção de endereço de entrega */}
      <Section>
        <Title>Endereço de entrega</Title>
        <Input
          name="street"
          placeholder="Rua"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          autoComplete="address-line1"
        />
        <Input
          name="number"
          placeholder="Número"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          autoComplete="address-line2"
        />
        <Input
          name="neighborhood"
          placeholder="Bairro"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          autoComplete="address-level3"
        />
        <Input
          name="city"
          placeholder="Cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          autoComplete="address-level2"
        />
        <Input
          name="complement"
          placeholder="Complemento (opcional)"
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
          autoComplete="address-line2"
        />
      </Section>

      {/* Seção de forma de pagamento */}
      <Section>
        <Title>Forma de pagamento</Title>
        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", width: "100%" }}
        >
          <option value="Cartão">Cartão</option>
          <option value="Pix">Pix</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>
      </Section>

      {/* Seção de observações */}
      <Section>
        <Title>Observações</Title>
        <Textarea
          rows={3}
          placeholder="Ex: entregar no portão..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Section>

      {/* Resumo do pedido */}
      <Section>
        <Title>Resumo</Title>
        <p>Subtotal: R$ {subtotal.toFixed(2).replace(".", ",")}</p>
        <p>Taxa de entrega: R$ {deliveryFee.toFixed(2).replace(".", ",")}</p>
        <h3>Total: R$ {total.toFixed(2).replace(".", ",")}</h3>
      </Section>

      {/* Botão para enviar pedido */}
      <Button onClick={handleOrder}>Fazer pedido</Button>

      {/* Modal de sucesso */}
      {showSuccessModal && (
        <ModalOverlay>
          <ModalContent>
            <h2>Pedido feito com sucesso! ✅</h2>
            <p>Seu pedido foi enviado para a SushiHouse.</p>
            <ModalButton onClick={() => window.location.href = "/"}>
              Voltar à tela inicial
            </ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}
