interface IInput {
  type: string;
  placeholder: string;
  styles?: string;
  value?: string | number;
  required?: boolean;
  onChange?: (value: string) => void;
  icon?: any;
}

export default function Input({
  type,
  placeholder,
  styles,
  value,
  required,
  onChange
}: IInput) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={handleChange}
      className={`w-full h-[48] rounded-[8px] px-4 py-3 bg-white text-black ${styles}`}
    />
  );
}
