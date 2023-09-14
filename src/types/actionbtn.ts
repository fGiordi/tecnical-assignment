export interface IActionBtn {
  name: string;
  action: () => void;
  fill: boolean;
  danger?: boolean;
  disabled?: boolean;
}
