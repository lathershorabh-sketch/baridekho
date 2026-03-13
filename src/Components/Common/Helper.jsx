import indiaflag from "../../assets/Images/indiaflag.png";
import germanyflag from "../../assets/Images/germanyflag.png";
import Uk from "../../assets/Images/uk.png";
import banani from "../../assets/Images/banani.png";
import baridhara from "../../assets/Images/baridhara.png";
import niketan from "../../assets/Images/niketan.png";
import mohammadpur from "../../assets/Images/mohammadpur.png";
import banasaree from "../../assets/Images/banasaree.png";
import khilgaon from "../../assets/Images/khilgaon.png";
import rampura from "../../assets/Images/rampura.png";
import purbachal from "../../assets/Images/purbachal.png";
import { Box, City, Hand, Runner } from "./Icons";

export const Navlist = [
  "About Us",
  "Sell Your property",
  "Services",
  "Buy Property",
  "Contact Us",
];

export const Flaglist = [
  { img: Uk, name: "EN" },
  { img: indiaflag, name: "INR" },
  { img: germanyflag, name: "EUR" },
];

const fields = [
  {
    label: "City",
    svg: <City />,
    options: ["Delhi", "Mumbai", "Gurgaon"],
  },
  {
    label: "Location",
    svg: <Runner />,
    options: ["Sector 14", "Sector 45", "DLF Phase 2"],
  },
  {
    label: "Property Type",
    svg: <Box />,
    options: ["Apartment", "Villa", "Plot"],
  },
  {
    label: "Budget",
    svg: <Hand />,
    options: ["10L - 20L", "20L - 50L", "50L+"],
  },
];

export const Gallerylist = [
  { img: banani, name: "Banani" },
  { img: baridhara, name: "Baridhara" },
  { img: niketan, name: "Niketan" },
  { img: mohammadpur, name: "Mohammadpur" },
  { img: banasaree, name: "Banasaree" },
  { img: khilgaon, name: "Khilgaon" },
  { img: rampura, name: "Rampura" },
  { img: purbachal, name: "Purbachal" },
];
