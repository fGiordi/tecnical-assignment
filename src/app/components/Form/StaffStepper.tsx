import { ActionBtn } from '@/types/actionbtn';
import EntityActionBtn from '@/app/components/form/EntityActionBtn';

export default function StaffStepper() {
  // TODO: store state of buttons with actions

  // fetch actions from store -> db

  return (
    <div className="flex flex-col items-center gap-[12px] justify-center mb-[78px]">
      <form className="flex flex-col">
        <Input type="text" placeholder="New Office" />
        <Input type="text" placeholder="Physical Address" />
      </form>
      <ul className="flex gap-2">
        <li className="w-5 h-5 bg-office-blue-normal rounded-full"></li>
        <li className="w-5 h-5 white border-4 border-office-blue-normal rounded-full"></li>
      </ul>
    </div>
  );
}
