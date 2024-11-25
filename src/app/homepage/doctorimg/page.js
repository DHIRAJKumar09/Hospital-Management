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

// Doctor data
// Doctor Profile Card Component

export const DoctorHomepage = ({ doctor }) => {
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
};



// Main Component to Render All Profiles



