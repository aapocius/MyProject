export type Item = {
  id: string,
  info: string,
  title: string,
  about: string,
  img: string,
  price: number,
  amount: number,
  additionalProps?: {
    [key in string]: string
  }
};
