export interface CardTop {
    name: string;
    artist: {
      name: string;
      url: string;
    };
    image: string;
}

export interface CardSearch {
  name: string;
  artist: string;
  image: string;
  url: string;
}