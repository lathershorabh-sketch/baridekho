import banani from "../../assets/Images/banani.png";
import banasaree from "../../assets/Images/banasaree.png";
import baridhara from "../../assets/Images/baridhara.png";
import germanyflag from "../../assets/Images/germanyflag.png";
import house1 from "../../assets/Images/house1.png";
import house2 from "../../assets/Images/house2.png";
import house3 from "../../assets/Images/house3.png";
import house4 from "../../assets/Images/house4.png";
import indiaflag from "../../assets/Images/indiaflag.png";
import khilgaon from "../../assets/Images/khilgaon.png";
import mohammadpur from "../../assets/Images/mohammadpur.png";
import niketan from "../../assets/Images/niketan.png";
import purbachal from "../../assets/Images/purbachal.png";
import rampura from "../../assets/Images/rampura.png";
import Uk from "../../assets/Images/uk.png";
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
  {
    img: banani,
    name: "Banani",
  },
  { img: baridhara, name: "Baridhara" },
  { img: niketan, name: "Niketan" },
  { img: mohammadpur, name: "Mohammadpur" },
  { img: banasaree, name: "Banasaree" },
  { img: khilgaon, name: "Khilgaon" },
  { img: rampura, name: "Rampura" },
  { img: purbachal, name: "Purbachal" },
];

export const Houselist = [
  {
    img: house1,
    tag: "For Sale",
    title: "Dhaka Neighborhoods: Gulshan, Banani & Dhanmondi",
    description:
      "A stunning 4-bedroom 3 bathroom villa in a peaceful suburban neighborhood.",

    features: {
      bedroom: 4,
      villa: 1,
      bathroom: 3,
      pool: 1,
      breakfast: true,
    },

    duration: "1 Year",
    price: "$754,250.00",
  },
  {
    img: house2,
    tag: "For Sale",
    title: "Dhaka Neighborhoods: Gulshan, Banani & Dhanmondi",
    description:
      "A stunning 4-bedroom 3 bathroom villa in a peaceful suburban neighborhood.",

    features: {
      bedroom: 5,
      villa: 1,
      bathroom: 4,
      pool: 1,
      breakfast: true,
    },

    duration: "1 Year",
    price: "$820,000.00",
  },
  {
    img: house3,
    tag: "For Sale",
    title: "Dhaka Neighborhoods: Gulshan, Banani & Dhanmondi",
    description:
      "A stunning 4-bedroom 3 bathroom villa in a peaceful suburban neighborhood.",

    features: {
      bedroom: 3,
      villa: 1,
      bathroom: 2,
      pool: 1,
      breakfast: false,
    },

    duration: "1 Year",
    price: "$640,000.00",
  },
  {
    img: house4,
    tag: "For Sale",
    title: "Dhaka Neighborhoods: Gulshan, Banani & Dhanmondi",
    description:
      "A stunning 4-bedroom 3 bathroom villa in a peaceful suburban neighborhood.",

    features: {
      bedroom: 4,
      villa: 1,
      bathroom: 3,
      pool: 1,
      breakfast: true,
    },

    duration: "1 Year",
    price: "$900,000.00",
  },
];

export const Useful = [
  "About Us",
  "Sell Your property",
  "Services",
  "Buy Property",
  "Contact Us",
]


export const FotterList = [
  "The information provided on this website is for informational purposes only and does not constitute financial, investment, or legal advice. Nothing on this site should be construed as an offer to sell or a solicitation to purchase any securities or financial products.",
  "Past performance is not indicative of future results. Investments in financial markets, cryptocurrencies, and real estate carry risks, including the potential loss of principal. Before making any investment decisions, consult with a qualified financial advisor or conduct your own independent research.",
  "All content on this website is confidential and may not be reproduced, distributed, or shared without prior written consent from Chaudhary Capital Management LLC. By accessing this site, you agree to these terms.",
]





