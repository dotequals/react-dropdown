import { Component, ReactNode } from 'react';

export interface Option {
  className?: string;
  disabled?: boolean;
  label: string;
  value: string;
}

export interface Group {
  items: Option[];
  key?: string;
  name: string;
  type: 'group';
}

export interface DropdownProps {
  arrowClassName?: string;
  arrowClosed: ReactNode;
  arrowOpen: ReactNode;
  baseClassName?: string;
  className?: string;
  controlClassName?: string;
  disabled?: boolean;
  menuClassName?: string;
  onChange?: (arg: Option) => void;
  onFocus?: (arg: boolean) => void;
  options: (Group | Option | string)[];
  placeholder?: string;
  placeholderClassName?: string;
  value?: Option | string;
  wrapperClassName?: string;
}

// State is internal, so `any` is an acceptable value here
declare class Dropdown extends Component<DropdownProps, any>  {}

export default Dropdown;
