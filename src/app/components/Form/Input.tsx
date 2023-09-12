interface IInput {
  type: string;
  placeholder: string;
  styles?: string;
  value?: string;
  required?: boolean;
}
export default function Input({
  type,
  placeholder,
  styles,
  value,
  required
}: IInput) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      required={required}
      className="w-full h-[48] rounded-[8px] px-4 py-3 bg-white text-black"
    />
  );
}
