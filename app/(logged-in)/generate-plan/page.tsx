import MeasurementInfo from "@/components/common/measurement-info";
import Title from "@/components/common/title";

const GeneratePlan = () => {
  return (
    <div className="container py-15 mt-20">
      <Title
        title="Enter Your Information"
        subTitle="Enter your information and body measurements so that our AI could generate a dedicated diet for you."
      />
      <div className="flex items-center justify-center">
        <div className="flex-1/5"></div>
        <div className="flex-3/5 w-full flex bg-secondary-dark flex-col items-center justify-center  gap-8 p-4 sm:p-10 lg:p-15 border-b md:border-r border-white/10 rounded-xl">
          <MeasurementInfo demo={false} />
        </div>
        <div className="flex-1/5"></div>
      </div>
    </div>
  );
};
export default GeneratePlan;
