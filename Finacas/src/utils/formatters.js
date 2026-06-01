/**
 * Formata um número para o padrão de moeda Brasileira (R$)
 * @param {number} value - O valor a ser formatado
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

/**
 * Formata uma data no padrão AAA-MM-DD para DD/MM/AAAA
 * @param {string} dateString - A data em formato de string
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
};