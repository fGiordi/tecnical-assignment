import Image from 'next/image';

interface IconText {
  icon: any;
  imgName: string;
  text: string;
}

export default function IconText({ icon, text, imgName }: IconText) {
  return (
    <div className="flex items-center gap-3 justify-center">
      <Image
        src={icon}
        alt={imgName}
        width={24}
        height={24}
      />
      <h3 className="text-specno-gray-text font-normal text-[12px]">{text}</h3>
    </div>
  );
}
