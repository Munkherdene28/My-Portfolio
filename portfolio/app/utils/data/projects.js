import Blog from "@/public/image/Blog.png";
import Leaving from "@/public/image/Leaving-service.png";
import Food from "@/public/image/Food.png";
import Ecommerce from "@/public/image/Ecom.png";

const projects = [
  {
    name: "Food delivery",
    image: Food,
    technology: [
      "React",
      "Next JS",
      "Typescript",
      "Express",
      "MongoDB",
      "Material UI",
      "Cloudinary",
    ],
    link: "https://food-delivery-mo.vercel.app/",
  },
  {
    name: "Ecommerce website",
    technology: [
      "React",
      "Next JS",
      "Typescript",
      "Express",
      "Tailwind",
      "AWS S-3",
      "MongoDB",
    ],
    image: Ecommerce,
    link: "https://ecommerce-mo.vercel.app/",
  },
  {
    name: "Leaving-service",
    technology: [
      "React",
      "Next JS",
      "Apollo server",
      "GraphQL",
      "Tailwind",
      "Monorepo",
      "Cypress",
      "Jest",
    ],
    image: Leaving,
    link: "https://intern-hrms-dashboard-prod-pinecone-studio.vercel.app/",
  },
  {
    name: "Blog Website",
    technology: [
      "React",
      "Next JS",
      "Javascript",
      "Tailwind",
      "Dev.to API",
      "Carousel",
    ],
    image: Blog,
    link: "https://munkherdene.vercel.app/",
  },
];

export default projects;
