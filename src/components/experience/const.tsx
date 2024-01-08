import raona from "../../../public/img/raona.png";
import hiberus from "../../../public/img/hibe.png";
import falabella from "../../../public/svg/falabella.svg";
import asesoftware from "../../../public/img/asesoftware.png";

export interface Experience {
  title: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  image: any;
  right: boolean;
  experiences: string[];
  link: string;
  color: string;
  border?: boolean;
}

export const experiences: Experience[] = [
  {
    title: "Raona",
    location: "Valencia - España",
    role: "Front End Developer",
    startDate: "02/2022",
    endDate: "Currently",
    right: true,
    border: true,
    image: raona,
    color: "#030712",
    experiences: [
      "raonaExperience1",
      "raonaExperience2",
      "raonaExperience3",
      "raonaExperience4",
      "raonaExperience5",
    ],
    link: "https://www.raona.com/",
  },
  {
    title: "Hiberus",
    location: "Valencia - España",
    role: "Full Stack Developer",
    startDate: "08/2019",
    endDate: "02/2022",
    image: hiberus,
    right: false,
    border: true,
    color: "#3b82f6",
    experiences: [
      "hiberusExperience1",
      "hiberusExperience2",
      "hiberusExperience3",
      "hiberusExperience4",
      "hiberusExperience5",
    ],
    link: "https://www.hiberus.com/",
  },
  {
    title: "Banco Falabella",
    location: "Bogotá - Colombia",
    role: "Full Stack Developer",
    startDate: "04/2018",
    endDate: "07/2019",
    image: falabella,
    right: true,
    border: true,
    color: "#bbf7d0",
    experiences: [
      "falabellaExperience1",
      "falabellaExperience2",
      "falabellaExperience3",
      "falabellaExperience4",
      "falabellaExperience5",
    ],
    link: "https://www.bancofalabella.com.co/",
  },

  {
    title: "Asesoftware",
    location: "Bogotá - Colombia",
    role: "Full Stack Developer",
    startDate: "01/2017",
    endDate: "04/2018",
    image: asesoftware,
    right: false,
    border: false,
    color: "#f8fafc",
    experiences: [
      "asesoftwareExperience1",
      "asesoftwareExperience2",
      "asesoftwareExperience3",
    ],
    link: "https://asesoftware.com/",
  },
];
