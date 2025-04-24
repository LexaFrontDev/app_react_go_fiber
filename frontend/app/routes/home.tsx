import type { Route } from "./+types/home";
import HomePage from "../pages/homePage/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tracer" },
    { name: "The Tracer app for developers" },
  ];
}

export default function Home() {
  return <HomePage />;
}
