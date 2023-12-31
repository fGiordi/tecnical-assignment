import { IActionBtn } from '@/types/actionbtn';
import ActionBtn from '@/app/components/Buttons/ActionBtn';

interface IDeleteOfficeBtns {
  onClose: () => void;
  deleteOffice: () => void;
}

export default function DeleteOfficeBtns({
  onClose,
  deleteOffice
}: IDeleteOfficeBtns) {
  const deleteBtnsInfo: IActionBtn[] = [
    {
      name: 'Delete Office',
      action: deleteOffice,
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
