import {
  Text,
  createEditor,
  Node,
  Element,
  Editor,
  Descendant,
  BaseEditor,
} from "slate";
import { ReactEditor } from 'slate-react'

export type CustomEditor = BaseEditor & ReactEditor;

export type ParagraphElement = { type: "paragraph"; children: Descendant[] };

export type CustomElement = ParagraphElement;

export type CustomText = {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  text: string;
};

export type EmptyText = {
  text: string;
};

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText | EmptyText;
  }
}
