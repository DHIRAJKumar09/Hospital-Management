// app/page.js
import Accordionhome from "./accordionhome/page";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import DoctorSection from "./doctorimg/page";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/ui/navbar";
import HomeChart from '@/app/homepage/homecharts/page'
import Dialoghome from '../homepage/dialoguehome/page'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Drawerhome from "./drawer/page";
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


const images = [
  {
    src: "/images/dental-8797255_1920.png",
    captions: "State-of-the-Art Dental Care",
  },
  {
    src: "/images/dentist-8576790_1920.png",
    captions:"Expert Dentists at Your Service",
  },
  {
    src:  "/images/hospital-6700680_1920.png",
    captions: "World-Class Hospital Facilities",
  },
  {
    src:  "/images/national-cancer-institute-7DIcTm6AkKE-unsplash.jpg",
    captions: "Comprehensive Cancer Care",
  },
  {
    src:  "/images/pharmacist-7502987_1920.png",
    captions:"24/7 Pharmacy Support",
  }, 
  {
    src: "/images/ai-generated-8685102_1920.jpg",
    captions: "State-of-the-Art Dental Care",
  },
  {
    src: "/images/ai-generated-8775433_1920.png",
    captions: "State-of-the-Art Dental Care",
  },
  {
    src: "/images/ai-generated-8795644_1920.jpg",
    captions: "State-of-the-Art Dental Care",
  },
  {
    src: "/images/baby-2387637_1920.jpg",
    captions: "State-of-the-Art Dental Care",
  },
  {
    src: "/images/treatment-4099432_1920.jpg",
    captions: "State-of-the-Art Dental Care",
  },
  {
    src: "/images/surgery-1822458_1920.jpg",
    captions: "State-of-the-Art Dental Care",
  },


];




export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <Navbar >
        <div className="flex items-center justify-between max-w-screen-lg mx-auto">
          

          {/* Navigation Buttons */}
          <div className="space-x-2">
            <Button variant="outline">
              <Dialoghome />
            </Button>
            <Button>
              <Drawerhome />
            </Button>
          </div>
        </div>
      </Navbar>
      </nav>

      {/* Hero Section */}
      <header className=" relative bg-fixed bg-hero-pattern bg-cover  flex flex-col   items-center justify-center  text-white h-screen">
        <div className="absolute  inset-0 bg-black/80"></div>
        <div className="relative text-center space-y-6 px-4">
          <h1 className="text-4xl font-bold">Your Health, Our Priority</h1>
          <p className="text-lg">
            High-quality medical services delivered with compassion and care.
          </p>
          <Button className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-100">
            Book an Appointment
          </Button>
        </div>
      </header>

      <section
        className="relative bg-white z-10 -mt-24 pt-32 pb-16"
        style={{
          boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
            Our Facilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="shadow-lg relative overflow-hidden bg-clinic bg-cover bg-center">
              <div className="absolute inset-0 bg-black/70"></div>{" "}
              {/* Overlay */}
              <CardHeader className="relative z-10 text-white">
                <CardTitle className="text-xl font-bold">
                  Advanced ICU
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-white">
                <p>
                  State-of-the-art intensive care units to handle critical cases
                  with care.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="shadow-lg relative overflow-hidden bg-advance-icu bg-cover bg-center">
              <div className="absolute inset-0 bg-black/70"></div>{" "}
              {/* Overlay */}
              <CardHeader className="relative z-10 text-white">
                <CardTitle className="text-xl font-bold">
                  Specialized Clinics
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-white">
                <p>
                  Dedicated departments for Cardiology, Neurology, and
                  Orthopedics.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="shadow-lg relative overflow-hidden bg-pharmacy bg-cover bg-center">
              <div className="absolute inset-0 bg-black/70"></div>{" "}
              {/* Overlay */}
              <CardHeader className="relative z-10 text-white">
                <CardTitle className="text-xl font-bold">
                  24/7 Pharmacy
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-white">
                <p>
                  Round-the-clock pharmacy for patient convenience and
                  accessibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* facilities carousel */}
      <section className="relative bg-gray-800 z-10 pt-32 pb-16">
      <div className="p-4 text-center">
      <h2 className="text-3xl font-bold pb-9 text-white">Appointment & Emergencies</h2>
      <HomeChart/>
      </div>
      <div className="flex justify-center items-center pb-4">
        <Carousel className="w-full max-w-3xl pt-9">
        <h2 className="text-3xl text-center font-bold pb-9 pt-9 text-white">Gallary</h2>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <Card>
                    <CardContent className="flex items-center justify-center p-4">
                      <Image
                        src={image.src}
                        alt={`carousel image ${index + 1}`}
                        width={500}
                        height={300}
                        className="object-cover rounded-lg"
                      />
                    </CardContent>
                   
                  </Card>
                </div>
                <div className="text-center font-bold text-slate-100  "
                    >{image.captions}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
     
    </section>
    <DoctorSection/>
    {/* doctor profile */}
    {/* <section className="py-16 bg-gray-300 " >
      <div className="container mx-auto max-w-screen-lg px-4" >
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">Meet Our Doctors</h2>
      </div>
      <div className="p-6 flex flex-1 gap-6 flex-wrap justify-center align-center">
     
        {doctorProfiles.map((doctor,index)=>(
          <DoctorHomepage key={index} doctor={doctor}/>
        ))}
      </div>
    </section> */}

      {/* Achievements Section */}
      <section className="py-16 bg-gray-100">
     
        <div className="container mx-auto max-w-screen-lg px-4">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-blue-600 text-xl font-bold">10k+</h3>
              <p>Surgeries Performed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-blue-600 text-xl font-bold">5k+</h3>
              <p>Happy Patients</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-blue-600 text-xl font-bold">20+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-blue-600 text-xl font-bold">50+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* accordion */}
      <section className="py-16 bg-blue-600 text-white">
       <h2 className="text-3xl font-bold text-center text-gray-100">Branches Near You </h2>
        <div className="container p-9">
          <Accordionhome/>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto max-w-screen-lg px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-8">
            Contact us for appointments or inquiries about our services.
          </p>
          <form className="space-y-6">
            <Input type="text" placeholder="Your Name" className="w-full" />
            <Input type="email" placeholder="Your Email" className="w-full" />
            <Input type="text" placeholder="Your Message" className="w-full" />
            <Button className="bg-white text-blue-600 w-full hover:bg-blue-100">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-gray-400 text-center">
        <p>&copy; 2024 HealthCare+. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
