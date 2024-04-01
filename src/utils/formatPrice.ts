export function formatPrice(price: number): string {
  const options = {
    style: "currency",
    currency: "BRL",
  };
  return Intl.NumberFormat("pt-BR", options).format(price / 100);
}
