import { ActionBtn } from '@/types/actionbtn';
import EntityActionBtn from '@/app/components/form/EntityActionBtn';

interface IDeleteOfficeBtns {
  onClose: () => void;
}

export default function DeleteOfficeBtns({ onClose }: IDeleteOfficeBtns) {
  // TODO: store state of buttons with actions

  // fetch actions from store -> db

  const deleteBtnsInfo: ActionBtn[] = [
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
        return <EntityActionBtn key={index} {...item} />;
      })}
    </div>
  );
}
