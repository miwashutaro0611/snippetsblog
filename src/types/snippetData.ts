export type SnippetData = {
  id: number
  title: string
  link: string
  referencLink?: {
    name: string
    url: string
    image: string
  }
  codepenId: string
}
