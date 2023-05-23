// data for navbar
import { FaMoneyCheckAlt, FaThumbsUp } from "react-icons/fa";
import { TfiTimer } from "react-icons/tfi";
import Service1 from "../assets/service1.jpg";
import Service2 from "../assets/service2.jpg";
import Service3 from "../assets/service3.jpg";
import { FaTshirt, FaTruck, FaFan } from "react-icons/fa";
import img1 from "../assets/blog1.jpg";
import img2 from "../assets/blog2.jpg";
import img3 from "../assets/blog3.jpg";
import member1 from "../assets/Team 1.jpg";
import member2 from "../assets/Team 2.jpg";
import member3 from "../assets/Team 3.jpg";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
export const NavData = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About Us",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];

// data for features
export const FeaturesData = [
  {
    icon: <TfiTimer />,
    heading: "Save Time and Money",
    text: "Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    heading: "Pay Online in Seconds",
    text: "Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
  },
  {
    icon: <FaThumbsUp />,
    heading: "Satisfaction Guarantee",
    text: "Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
  },
];

// data for services
export const ServicesData = [
  {
    img: Service1,
    heading: "laundry services",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua labore et dolore magna.",
  },
  {
    img: Service2,
    heading: "dry cleaning",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua labore et dolore magna.",
  },
  {
    img: Service3,
    heading: "steam iron",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua labore et dolore magna.",
  },
];

// data for works
export const WorksDAta = [
  {
    id: 1,
    icon: <FaTshirt />,
    heading: "pick up your clothes",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  },
  {
    id: 2,
    icon: <FaFan />,
    heading: "laundry & dry clean",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  },
  {
    id: 3,
    icon: <FaTruck />,
    heading: "fold clothes & deliver",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  },
];

// data for blogs
export const BlogsData = [
  {
    date: "JAN 13, 2022",
    heading: "Dry cleaning saves money in the long run",
    id: 4,
    image: img1,
  },
  {
    date: "JAN 16, 2022",
    heading: "Power laundry service at it's best!",
    id: 3,
    image: img2,
  },
  {
    date: "JAN 22, 2022",
    heading: "Wedding suit deserves special treatment",
    id: 6,
    image: img3,
  },
];

// data for stats
export const Stats = [
  {
    number: 6370,
    text: "clothes washed",
  },
  {
    number: 9716,
    text: "happy customers",
  },
  {
    number: 4600,
    text: "dry cleaned",
  },
  {
    number: 667,
    text: "stem & ironed",
  },
];
// data for team members
export const Team = [
  {
    id: 1,
    name: "aida bugg",
    fb: <SlSocialFacebook />,
    insta: <SlSocialInstagram />,
    twitter: <SlSocialTwitter />,
    img: member1,
  },
  {
    id: 2,
    name: "jamic nasium",
    fb: <SlSocialFacebook />,
    insta: <SlSocialInstagram />,
    twitter: <SlSocialTwitter />,
    img: member2,
  },
  {
    id: 3,
    name: "henry itondo",
    fb: <SlSocialFacebook />,
    insta: <SlSocialInstagram />,
    twitter: <SlSocialTwitter />,
    img: member3,
  },
];
