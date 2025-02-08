export interface Project {
  thumbnail: string;
  title: string;
  date: string;
  content: {
    概要: string;
    想定クライアント: string;
    目的: string;
    目標: string;
  };
  links: {
    [key: string]: string;
  };
}
