import { FC } from "react";

interface Feature {
  name: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    name: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    name: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    name: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

const Features: FC = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 lg:py-20 lg:px-28 text-center md:text-left">
      <div className="flex-1 space-y-5 p-5 md:p-0">
        <h2 className="text-3xl text-dark-blue font-bold max-w-[450px]">
          What&apos;s different about Manage?
        </h2>
        <p className="text-dark-grayish-blue max-w-[400px]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="flex-1 flex flex-col space-y-10 pl-5 md:p-0">
        {featuresData.map((feature, index) => (
          <div key={index} className="space-y-2 text-left">
            <div className="flex items-center space-x-4 bg-bright-red/10 md:bg-transparent rounded-l-full overflow-hidden md:overflow-auto">
              <p className="bg-bright-red text-white rounded-full px-7 py-[10px] font-medium w-fit h-fit">
                0{index + 1}
              </p>
              <p className="text-dark-blue font-semibold">{feature.name}</p>
            </div>
            <p className="text-dark-grayish-blue md:ml-24">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
