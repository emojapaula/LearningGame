export type BUTTON_TYPE = 'primary' | 'ternary' | 'secondary' | 'disabled';

export interface IMemoryCard {
  name: string;
  id?: number;
}

export const memoryCardPictures: IMemoryCard[] = [
  { name: 'pineapple' },
  { name: 'coconut' },
  { name: 'lemon' },
  { name: 'grapes' },
  { name: 'banana' },
  { name: 'avocado' },
];
