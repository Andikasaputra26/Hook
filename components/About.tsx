import React from "react";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Andika Saputra",
  },
  {
    icon: <MailIcon size={20} />,
    text: "acyandika2@gmail.com",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "082347609006",
  },
  {
    icon: <Calendar size={20} />,
    text: "26 Nov 1999",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Makassar",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Universitas Dipa Makassar",
        qualification: "Bachelor of Science",
        years: "2018- 2022",
      },
      {
        university: "Universitas Dipa Makassar",
        qualification: "Bachelor of Science",
        years: "2018- 2022",
      },
      {
        university: "Universitas Dipa Makassar",
        qualification: "Bachelor of Science",
        years: "2018- 2022",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "ABC Inc",
        qualification: "Software Engineer",
        years: "2018-2022",
      },
      {
        company: "ABC Inc",
        qualification: "Software Engineer",
        years: "2018-2022",
      },
      {
        company: "ABC Inc",
        qualification: "Software Engineer",
        years: "2018-2022",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, JAVASCRIPT",
      },
      {
        name: "HTML, CSS, JAVASCRIPT",
      },
      {
        name: "HTML, CSS, JAVASCRIPT",
      },
      {
        name: "HTML, CSS, JAVASCRIPT",
      },
      {
        name: "HTML, CSS, JAVASCRIPT",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/assets/about/vscode.svg",
      },
      {
        imgPath: "/assets/about/vscode.svg",
      },
      {
        imgPath: "/assets/about/vscode.svg",
      },
      {
        imgPath: "/assets/about/vscode.svg",
      },
      {
        imgPath: "/assets/about/vscode.svg",
      },
    ],
  },
];

interface DataItem {
  title: string;
  data: any[];
}
export default function About() {
  const getData = ({
    arr,
    title,
  }: {
    arr: DataItem[];
    title: string;
  }): DataItem | undefined => {
    return arr.find((item) => item.title === title);
  };
  const experienceData = getData({
    arr: qualificationData,
    title: "experience",
  });

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
      </div>
      <div className="">
        <div className="">
          <DevImg
            containerStyles="bg-about_shape_light dark:bg-about-shape_dark w-[505px] h-[505px] bg-no-repeat relative"
            imgSrc="/assets/about/developer.png"
          />
        </div>
      </div>
    </section>
  );
}
