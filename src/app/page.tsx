import ActionFabBtn from '@/app/components/Buttons/ActionFabBtn';
import LandingOffices from '@/pageClientViews/LandingOffices';

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen w-full  py-14">
      <div className="flex flex-col h-full">
        <LandingOffices />
      </div>
      <ActionFabBtn page="new-office" />
    </main>
  );
}
