import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Website Analyzer" },
    { name: "description", content: "Analyze (and fix) your websites!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
