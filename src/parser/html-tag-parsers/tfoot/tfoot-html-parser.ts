import { HTMLElement } from "../../base-html-parser/base-html-parser";
import type { HTMLElementStruct } from "../../types";

export class TfootHTMLParser extends HTMLElement {
  static readonly tag = "tfoot";

  static attributes: Record<string, string> = {};

  static toStruct(template: JSX.Element): HTMLElementStruct {
    return this.resolveElement(template);
  }
}
