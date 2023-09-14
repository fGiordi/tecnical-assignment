import { IInput } from '@/types/input';
import Input from '@/app/components/form/Input';
import Image from 'next/image';

export default function Search({
  type,
  placeholder,
  styles,
  value,
  required,
  onChange,
  icon
}: IInput) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <label className="flex relative w-full mt-6">
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        required
      />

      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <Image src={icon} width={20} height={20} alt="Search Icon" />
      </span>
    </label>
  );
}
