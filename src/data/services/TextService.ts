export const TextService = {
  spliceText(text: string, maxSize: number): string {
    if (text.length < maxSize) {
      return text
    } else {
      return text.slice(0, maxSize) + '...'
    }
  },
}

// essa função reduz o tamanho de textos com base no tamanho máximo definido.
