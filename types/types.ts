export interface ButtonInterface {
  children: React.ReactNode;
  callFunction?: (para?: any) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disable?: boolean;
}
export interface DropDownInterface {
  label: string;
  options: string[];
  className?: string;
}

export interface TextCheckBoxInterface {
  label: string;
  toggleChecked?: () => void;
  className?: string;
  checked?: boolean;
  hideCheckIcon?: boolean;
  showDownArrow?: boolean;
}
