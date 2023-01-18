export enum Color {
  Red,
  Black,
  Blue,
  Green,
}

export interface Hero {
  name: string;
  fly: boolean;
  color: Color;
}

export type FilterOrder = 'name' | 'fly' | 'color';
