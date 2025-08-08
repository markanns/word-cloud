import type { Word } from "./word";

export type Layout = {
  size(): [number, number];
  size(size: [number, number]): Layout;
  words(): Word[];
  words(words: Word[]): Layout;
  padding(): number;
  padding(padding: number): Layout;
  rotate(): (d: Word) => number;
  rotate(rotate: (d: Word) => number): Layout;
  font(): (d: Word) => string;
  font(font: (d: Word) => string): Layout;
  fontSize(): (d: Word) => number;
  fontSize(fontSize: (d: Word) => number): Layout;
  on(type: string, listener: (words: Word[]) => void): Layout;
  start(): Layout;
  stop(): Layout;
};
