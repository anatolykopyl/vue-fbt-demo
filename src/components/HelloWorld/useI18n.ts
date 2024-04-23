import fbt from 'fbt'

export const useI18n = () => {
  const msg = fbt('Hello, world!', 'Hello world message')

  return {msg}
}
