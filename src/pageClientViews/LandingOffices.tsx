'use client';
import OfficeCard from '@/app/components/Office/OfficeCard';
import { useOfficeStore } from '@/store/offices.store';
import { useEffect } from 'react';

export default function LandingOffices() {
  // TODO to fetch from DB?
  const { offices, fetchAllOffices } = useOfficeStore();

  useEffect(() => {
    fetchAllOffices();
  }, []);

  return (
    <div>
      {offices.length == 0 && (
        <h2 className="text-center font-semibold text-[28px] leading-[34px] tracking-[-2px]">
          There are currently no offices added to the application
        </h2>
      )}
      <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 md:px-6  gap-7 w-full  ">
        {offices &&
          offices.map((office, index) => {
            return (
              <OfficeCard
                key={index}
                office={office}
                id={office.id}
                view="all-offices"
              />
            );
          })}
      </div>
    </div>
  );
}
