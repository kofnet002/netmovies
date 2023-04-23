import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/loading.gif" height={800} width={800} priority alt="preloader gif"/>
    </div>
  );
};

export default LoadingPage;
