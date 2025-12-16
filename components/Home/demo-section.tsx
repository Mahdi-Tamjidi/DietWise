import Title from "@/components/common/title";
import MeasurementInfo from "@/components/common/measurement-info";
import MacroCounter from "@/components/common/macro-counter";

const DemoSection = () => {
  return (
    <section id="demo-section" className="py-15">
      <div className="container">
        <Title
          title="See how it works"
          subTitle="Experience the power of our metabolic engine. Adjust the parameters below to see how DietWise adapts the plan in real-time."
        />
        <div className=" flex flex-col lg:flex-row items-center border border-white/10 rounded-2xl overflow-hidden">
          <div className=" w-full flex bg-secondary-dark flex-col items-center justify-center flex-1 gap-8 p-4 sm:p-10 lg:p-15 border-b md:border-r border-white/10 ">
            <MeasurementInfo demo={true} />
          </div>
          <div className=" w-full bg-text-dark flex flex-col items-center justify-center flex-1 gap-10 p-10 sm:p-15  ">
            <MacroCounter cals={2475} protein={180} carbs={220} fat={30} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DemoSection;
