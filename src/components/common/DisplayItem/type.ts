export type ItemProp = ImgProp & TitleProp & ExtraProp & LinkProp;

export type ImgProp = {
  bgUrl: string;
};

export type TitleProp = {
  title: string;
};

export type ExtraProp = {
  rating: number;
};

export type LinkProp = {
  id: string;
};
