export type Tag = {
  name: string,
  color?: string
}

export interface Cloud {
  x: number
  y: number
  z: number
  text: string
  color?: string
}

export interface Article {
  title?: string,
  lang?: string,
  date?: string,
  editLink?: boolean,
  categories?: string[],
  tags?: string[],
  path?: string
}
