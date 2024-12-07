import { motion } from "framer-motion";
import { Education } from "@/app/_lib/constants";
import Image from "next/image";

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className="flex items-start space-x-4"
  >
    {/* Timeline circle with logo */}
    <div className="border border-gray-800 relative w-12 h-12 md:w-16 md:h-16 bg-white rounded-full overflow-hidden mt-2 -ml-10 flex-shrink-0 p-1">
      <div className="relative w-full h-full">
        <Image
          src={education.logo}
          alt={`${education.institution} logo`}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>

    {/* Education box */}
    <div className="p-3 w-full">
      <div>
        <p className="text-sm">{education.dates}</p>
        <h3 className="text-lg font-bold">{education.institution}</h3>
        <p className="text-sm font-semibold">{education.degree}</p>
      </div>
      <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700 dark:text-gray-100">
        {education.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default EducationCard;
