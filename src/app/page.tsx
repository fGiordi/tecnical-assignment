import ActionFabBtn from '@/app/components/ActionFabBtn';
import LandingOffices from '@/pageClientViews/LandingOffices';

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-[98vh] w-full  py-14">
      {/* Display all Offices here on landing page */}
      <div className="flex flex-col h-full">
        <LandingOffices />
        {/* display all the office spaces here */}
      </div>
      <ActionFabBtn page="new-office" />
    </main>
  );
}
