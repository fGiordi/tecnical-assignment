import Image from 'next/image';
const Header = () => {
  return (
    <div className="flex justify-between w-full max-w-[1000px] mx-auto py-4 px-2">
      <div className="flex items-center justify-center gap-3">
        <h2>19:00</h2>
        <Image
          src="https://user-images.githubusercontent.com/27930281/133587891-12ae14c2-77b5-45a9-966c-4c086b767dda.png"
          alt="speechIcon"
          width={20}
          height={20}
        />
      </div>
      <div className="flex gap-10">
        <Image
          src="https://user-images.githubusercontent.com/27930281/133588459-a8bd40b4-c120-42f3-b48c-02ec1962a170.png"
          alt="volumeIcon"
          width={20}
          height={10}
        />
        <Image
          src="https://user-images.githubusercontent.com/27930281/133588589-13a66ba6-99b5-4e32-83da-5c09d5caf537.png"
          alt="navigationIcon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Header;
