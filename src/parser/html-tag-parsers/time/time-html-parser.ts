import { HTMLElement } from "../../base-html-parser/base-html-parser";
import type { HTMLElementStruct } from "../../types";

export class TimeHTMLParser extends HTMLElement {
  static readonly tag = "time";

  static attributes: Record<string, string> = {};

  static toStruct(template: JSX.Element): HTMLElementStruct {
    return this.resolveElement(template);
  }
}
