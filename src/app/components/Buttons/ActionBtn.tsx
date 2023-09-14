import { IActionBtn } from '@/types/actionbtn';

export default function ActionBtn({
  name,
  action,
  fill,
  danger,
  disabled
}: IActionBtn) {
  const isDangerFill = fill && danger === true;
  const isNotDangerNoFill = !fill && !danger;
  const isNotDangerFill = fill && !danger;

  return (
    <button
      type="submit"
      onClick={action}
      disabled={disabled}
      className={`uppercase text-center w-[232px] h-[48px] rounded-[100px] ${
        isNotDangerFill
          ? 'bg-office-specno-blue-normal text-light-gray-text'
          : isDangerFill
          ? 'bg-danger text-light-gray-text'
          : 'bg-transparent text-office-specno-blue-normal'
      }  hover:opacity-[0.8] p-4  font-medium py-2 px-4 tracking-[1px] text-[14px]  leading-[16px]`}
    >
      {name}
    </button>
  );
}
