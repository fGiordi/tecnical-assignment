import ActionFabBtn from '@/app/components/Buttons/ActionFabBtn';
import LandingOffices from '@/pageClientViews/LandingOffices';

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-[90vh] 2xl:min-h-[50vh] w-full  py-14">
      <div className="flex flex-col h-full">
        <LandingOffices />
      </div>
      <ActionFabBtn page="new-office" />
    </main>
  );
}
