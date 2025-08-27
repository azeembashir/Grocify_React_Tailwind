import { FaLeaf, FaIndustry, FaAward, FaTruck } from "react-icons/fa";

const processSteps = [
  {
    id: 1,
    title: "Sourcing",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: FaLeaf,
  },
  {
    id: 2,
    title: "Manufacturing",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: FaIndustry,
  },
  {
    id: 3,
    title: "Quality Control",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: FaAward,
  },
  {
    id: 4,
    title: "Logistics",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: FaTruck,
  },
];

export default function ProcessContent() {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Timeline line - hidden on mobile, visible on md+ */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full"></div>

      <div className="space-y-12 md:space-y-24">
        {processSteps.map((step, index) => {
          const isEven = index % 2 === 1;
          const IconComponent = step.icon;

          return (
            <div
              key={step.id}
              className={`relative flex flex-col md:flex-row items-center ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Step content */}
              <div
                className={`w-full md:w-5/12 ${isEven ? "md:text-right" : ""}`}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  {/* Number circle - positioned differently on desktop */}
                  <div
                    className={`flex-shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2 ${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center bg-white">
                      <span className="text-lg md:text-xl font-bold text-gray-700">
                        {step.id}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isEven ? "md:justify-end" : ""
                      }`}
                    >
                      {/* Icon */}
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Spacer for desktop layout */}
              <div className="hidden md:block w-2/12"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
