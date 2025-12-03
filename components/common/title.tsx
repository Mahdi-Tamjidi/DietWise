const Title = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-14">
      <h2 className="mb-7">{title}</h2>
      <p className="text-text-secondary max-w-lg md:max-w-2xl">{subTitle}</p>
    </div>
  );
};
export default Title;
