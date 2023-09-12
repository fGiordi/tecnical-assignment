import React from 'react';

interface ActionBtn {
  name: string;
  action: () => void;
  fill: boolean;
}
export default function EntityActionBtn({ name, action, fill }: ActionBtn) {
  return (
    <button
      type="submit"
      onClick={action}
      className={`w-[232px] h-[48px] rounded-[100px] ${
        fill
          ? 'bg-office-specno-blue-normal text-white'
          : 'bg-transparent text-office-specno-blue-normal'
      }  hover:opacity-[0.8] p-4  font-medium py-2 px-4 tracking-[1px] text-[14px]  leading-[16px]`}
    >
      {name}
    </button>
  );
}
