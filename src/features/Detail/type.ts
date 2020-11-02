export type ItemProp = ImgProp & TitleProp & ExtraProp;

export type ImgProp = {
  bgImage: string;
};

export type TitleProp = {
  title: string;
};

export type ExtraProp = {
  rating: number;
  year: Date;
};
