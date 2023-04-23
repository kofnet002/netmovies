import Image from "next/image";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Image
        src="/loading.gif"
        height={800}
        width={800}
        priority
        alt="preloader gif"
      />
    </div>
  );
};

export default LoadingPage;
