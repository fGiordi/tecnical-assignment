interface OfficeColor {
  color: string;
  setPreselectedColor: React.Dispatch<React.SetStateAction<string | null>>;
  preselectedColor: null | string;
}

export default function OfficeColor({
  color,
  preselectedColor,
  setPreselectedColor
}: OfficeColor) {
  const isSelected = preselectedColor === color;

  const toggleSelected = () => {
    setPreselectedColor(color);
  };

  return (
    <button
      onClick={toggleSelected}
      className={`cursor-pointer w-[36px] h-[36px] rounded-full ${color} ${
        isSelected ? 'border-4 border-selected' : ''
      }`}
    />
  );
}
