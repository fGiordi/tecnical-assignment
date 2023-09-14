import Image from 'next/image';

interface IAvatar {
  index: number;
  avatar: string;
  setPreselectedAvatar: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
  preselectedAvatar: null | string | undefined;
}

export default function Avatar({
  index,
  avatar,
  preselectedAvatar,
  setPreselectedAvatar
}: IAvatar) {
  const isSelected = preselectedAvatar === avatar;

  const toggleSelected = () => {
    setPreselectedAvatar(avatar);
  };

  return (
    <Image
      src={avatar}
      alt={`Avatar ${index}`}
      width={48}
      height={48}
      onClick={toggleSelected}
      className={`cursor-pointer w-[48px] h-[48px] rounded-full ${
        isSelected ? 'border-4 border-selected' : ''
      }`}
    />
  );
}
