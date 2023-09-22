export interface ButtonInterface {
  children: React.ReactNode;
  callFunction?: (para?: any) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disable?: boolean;
  id?: string
}
export interface DropDownInterface {
  label: string;
  options: string[];
  className?: string;
  showTextInput?: boolean;
  showSelectDeselectAll?: boolean;
}
export interface SelectOptionsInterface {
  className?: string;
  options: string[];
  showTextInput?: boolean;
  placeHolder: string;
  exportChosenValue: (returnedValue: string | null) => void;
}

export interface TextCheckBoxInterface {
  label: string;
  toggleChecked?: () => void;
  className?: string;
  checked?: boolean;
  hideCheckIcon?: boolean;
  showDownArrow?: boolean;
}

export interface SlidesInterface {
  name: string;
  description: string;
  date: string;
  avatarUrl?: string | undefined | null;
}
export interface SliderInterface {
  slides: SlidesInterface[];
  className?: string;
}
