import * as React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && <label className="text-sm font-medium">{label}</label>}
        <input className={`input ${className || ""}`} ref={ref} {...props} />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
