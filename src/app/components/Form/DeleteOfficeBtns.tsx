import { IActionBtn } from '@/types/actionbtn';
import ActionBtn from '@/app/components/form/ActionBtn';

interface IDeleteOfficeBtns {
  onClose: () => void;
}

export default function DeleteOfficeBtns({ onClose }: IDeleteOfficeBtns) {
  // TODO: store state of buttons with actions
  // fetch actions from store -> db
  const deleteBtnsInfo: IActionBtn[] = [
    {
      name: 'Delete Office',
      // TODO: to come from DB
      action: () => {},
      fill: true,
      danger: true
    },
    {
      name: 'Keep Office',
      action: onClose,
      fill: false,
      danger: false
    }
  ];

  return (
    <div className="flex flex-col items-center gap-[12px] justify-center mb-[78px]">
      {deleteBtnsInfo.map((item, index) => {
        return <ActionBtn key={index} {...item} />;
      })}
    </div>
  );
}