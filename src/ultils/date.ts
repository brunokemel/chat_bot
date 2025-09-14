// Função para formatar timestamp em "HH:mm"
export const formatTime = (timestamp: Date): string => {
  return timestamp.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};