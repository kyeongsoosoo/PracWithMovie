import { string } from 'yargs';

export type ItemProp = ImgProp & TitleProp & ExtraProp;

export type ImgProp = {
  bgUrl: string;
};

export type TitleProp = {
  title: string;
};

export type ExtraProp = {
  rating: number;
  year: Date;
};
