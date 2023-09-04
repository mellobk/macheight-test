import "./input.css";

interface InputProps {
  onChange?: (data: string) => void;
  className?: string;
  placeholder?: string;
  label?: string;
  value: string;
}

export const Input = ({
  onChange,
  className,
  placeholder,
  label,
  value,
}: InputProps) => {
  return (
    <div className={`input-container ${className}`}>
      {label}
      <input
        value={value}
        className={`input `}
        placeholder={placeholder}
        onChange={(event) => {
          if (onChange) onChange(event.target.value);
        }}
      />
    </div>
  );
};
