import { cn } from "@/lib/utils";

const Title = ({
  title,
  subTitle,
  alignment,
}: {
  title: string;
  subTitle?: string;
  alignment?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center mb-14 items-center text-center",
        alignment && "md:items-baseline md:text-left mb-7"
      )}
    >
      <h2 className="mb-7">{title}</h2>
      <p className="text-text-secondary max-w-lg md:max-w-2xl">{subTitle}</p>
    </div>
  );
};
export default Title;
