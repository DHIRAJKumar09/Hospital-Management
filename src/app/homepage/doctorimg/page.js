import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const doctorProfiles = [
    {
      src: "/images/ai-generated-8795644_1920.jpg",
      name: "Dr. Jane Smith",
      specialization: "Cardiologist",
      description: "Expert in cardiovascular surgeries and treatments.",
      experience: "15+",
      rating: "4.9",
      captions: "State-of-the-Art Dental Care",
    },
    {
      src: "/images/nurse-2019420_1920.jpg",
      name: "Dr. John Doe",
      specialization: "Dentist",
      description: "Pioneer in cosmetic dentistry and orthodontics.",
      experience: "10+",
      rating: "4.8",
      captions: "Expert Dentists at Your Service",
    },
    {
      src: "/images/spine-center-in-fremont-8167473_1920.jpg",
      name: "Dr. John Doe",
      specialization: "Dentist",
      description: "Pioneer in cosmetic dentistry and orthodontics.",
      experience: "10+",
      rating: "4.8",
      captions: "Expert Dentists at Your Service",
    },
    {
      src: "/images/doctor-5710152_1920.jpg",
      name: "Dr. Sarah Lee",
      specialization: "Oncologist",
      description: "Dedicated to comprehensive cancer care.",
      experience: "12+",
      rating: "4.9",
      captions: "World-Class Hospital Facilities",
    },
    {
      src: "/images/spine-surgeon-7839395_1920.jpg",
      name: "Dr. Emily Brown",
      specialization: "General Physician",
      description: "Compassionate care for families and individuals.",
      experience: "8+",
      rating: "4.7",
      captions: "Comprehensive Primary Care",
    },
    {
      src: "/images/doctor-5997511_1920.jpg",
      name: "Dr. Liam Adams",
      specialization: "Pharmacologist",
      description: "Ensuring safe and effective medication therapies.",
      experience: "9+",
      rating: "4.8",
      captions: "24/7 Pharmacy Support",
    },
  ];



 const DoctorHomepage = ({ doctor }) => {
  return (


    <Card className="w-full max-w-md shadow-md">
      <CardHeader>
        <CardTitle>{doctor.name}</CardTitle>
        <CardDescription>{doctor.specialization}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={doctor.src}
          alt={doctor.name}
          width={500}
          height={400}
          className="w-full h-48 object-cover rounded-lg"
        />
        <p className="mt-4 text-sm text-gray-600">{doctor.description}</p>
        <div className="mt-2 flex justify-between text-sm">
          <span className="text-blue-600">Experience: {doctor.experience} years</span>
          <span className="text-yellow-500">Rating: {doctor.rating} ★</span>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-center text-gray-500">{doctor.captions}</p>
      </CardFooter>
    </Card>

  );
}
const DoctorSection =()=>{
    return (
        <section className="py-16 bg-gray-300">
          <div className="container mx-auto max-w-screen-lg px-4">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
              Meet Our Doctors
            </h2>
          </div>
          <div className="p-6 flex flex-1 gap-6 flex-wrap justify-center align-center">
            {doctorProfiles.map((doctor, index) => (
              <DoctorHomepage key={index} doctor={doctor} />
            ))}
          </div>
        </section>
      );
    }



export default  DoctorSection;



// Main Component to Render All Profiles



