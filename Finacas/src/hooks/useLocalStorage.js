import { useState, useEffect } from 'react';

/**
 * Hook customizado para persistir estados no localStorage do navegador
 * @param {string} key - A chave que será usada no localStorage
 * @param {any} initialValue - O valor inicial caso não exista nada salvo
 */
export function useLocalStorage(key, initialValue) {
  // Busca o valor inicial do localStorage ou usa o valor passado
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Erro ao ler o localStorage:", error);
      return initialValue;
    }
  });

  // Sempre que o storedValue mudar, atualiza o localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}