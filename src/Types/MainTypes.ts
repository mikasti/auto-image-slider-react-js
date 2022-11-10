export interface IImageTitle {
  img: string,
  title: string
}

export interface ISliderContext {
  items: IImageTitle[]
  currentSlideNumber: number,
  changeSlide: (num: number) => void,
}
