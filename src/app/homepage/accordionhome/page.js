import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Drawerhome from '../drawer/page'
const HospitalAccordion = () => {
  const hospitals = [
    {
      name: "City Hospital",
      details: "City Hospital specializes in cardiology and neurology.",
      address: "123 Main Street, Cityville",
      contact: "123-456-7890",
    },
    {
      name: "Green Valley Medical Center",
      details: "Comprehensive services including pediatrics and orthopedics.",
      address: "456 Elm Street, Green Valley",
      contact: "987-654-3210",
    },
    {
      name: "Sunrise Hospital",
      details: "Renowned for advanced cancer treatments and research.",
      address: "789 Oak Street, Sunnytown",
      contact: "555-123-4567",
    },
  ];

  return (
    <section className="max-w-2xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
    <Drawerhome/>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Hospitals</h2>
      <Accordion type="single" collapsible className="w-full">
        {hospitals.map((hospital, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="text-lg font-medium text-gray-900">
              {hospital.name}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-2">{hospital.details}</p>
              <p className="font-semibold">Address:</p>
              <p>{hospital.address}</p>
              <p className="mt-2 font-semibold">Contact:</p>
              <p>{hospital.contact}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default HospitalAccordion;
