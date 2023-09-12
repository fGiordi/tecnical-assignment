import ActionBtn from '@/app/components/ActionBtn';

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-[98vh] w-full  py-14">
      {/* Display all Offices here on landing page */}
      <div className="flex flex-col h-full">
        <h2 className="text-center font-semibold text-[28px] leading-[34px] tracking-[-2px]">
          There are currently no offices added to the application
        </h2>
        {/* display all the office spaces here */}
      </div>
      <ActionBtn page="new-office" />
    </main>
  );
}
