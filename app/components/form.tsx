import { ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={classNames(
        "flex px-3 p-2 rounded-md justify-center",
        className
      )}
    >
      {children}
    </button>
  );
}

export function PrimaryButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      className={classNames(
        "bg-primary text-white hover:bg-primary-light",
        className
      )}
    />
  );
}