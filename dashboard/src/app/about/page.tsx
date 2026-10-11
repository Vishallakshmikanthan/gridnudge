import { getAssumptions, getSources, getPolicies } from "@/lib/data";
import { AboutView } from "@/components/AboutView";

export default async function AboutPage() {
  const [assumptions, sources, policies] = await Promise.all([
    getAssumptions(),
    getSources(),
    getPolicies(),
  ]);

  return (
    <AboutView
      assumptions={assumptions}
      sources={sources}
      policies={policies}
    />
  );
}
