import type { InputHTMLAttributes, ReactNode } from "react";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export type AuthFooterProps = {
  className?: string;
};

export type MainProps = {
  sidebarHandle: boolean;
  setSidebarHandle: React.Dispatch<React.SetStateAction<boolean>>;
};
