export interface IInput {
  type: string;
  placeholder: string;
  styles?: string;
  value?: string | number;
  required?: boolean;
  onChange?: (value: string) => void;
  icon?: any;
}
