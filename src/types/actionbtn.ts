export interface ActionBtn {
  name: string;
  action: () => void;
  fill: boolean;
  danger?: boolean;
}
