import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/loading.gif" height={800} width={800} priority />
    </div>
  );
};

export default LoadingPage;
