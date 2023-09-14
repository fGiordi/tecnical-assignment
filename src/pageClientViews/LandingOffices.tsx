'use client';
import OfficeCard from '@/app/components/OfficeCard';
import { useOfficeStore } from '@/store/offices.store';

export default function LandingOffices() {
  const { offices } = useOfficeStore();

  return (
    <div>
      <h2 className="text-center font-semibold text-[28px] leading-[34px] tracking-[-2px]">
        There are currently no offices added to the application
      </h2>
      <OfficeCard />
    </div>
  );
}
