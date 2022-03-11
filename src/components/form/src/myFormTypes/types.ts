// element-plus校验基于async-validator，从github上粘贴rule的类型
import { RuleItem } from "./rule";

import { CSSProperties } from "vue";

export interface FormItemOption {
  type:
    | "cascader"
    | "checkbox"
    | "checkbox-group"
    | "checkbox-button"
    | "color-picker"
    | "date-picker"
    | "input"
    | "input-number"
    | "radio"
    | "radio-group"
    | "radio-button"
    | "rate"
    | "select"
    | "option"
    | "slider"
    | "switch"
    | "time-picker"
    | "time-select"
    | "transfer"
    | "upload"
    | "editor";
  value: any;
  label?: string;
  prop?: string;
  rules?: RuleItem[];
  placeholder?: string;
  attrs?: {
    style?: CSSProperties;
    clearable?: boolean;
    disabled?: boolean;
    "label-width"?: string | number;
  };
  children?: FormItemOption[];
}
