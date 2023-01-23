export interface FavoriteGame {
  id: number;
  name: string;
}

export interface Person {
  name: string;
  favoriteGames: FavoriteGame[];
}
