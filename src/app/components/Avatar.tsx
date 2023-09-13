import Image from 'next/image';

interface IAvatar {
  avatar: string;
  setPreselectedAvatar: React.Dispatch<React.SetStateAction<string | null>>;
  preselectedAvatar: null | string;
}

export default function Avatar({
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
      alt="Avatar Img"
      width={48}
      height={48}
      onClick={toggleSelected}
      className={`cursor-pointer w-[48px] h-[48px] rounded-full ${
        isSelected ? 'border-4 border-selected' : ''
      }`}
    />
  );
}
