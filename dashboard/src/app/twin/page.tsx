import { getTwinSnapshot, getStations } from "@/lib/data";
import { TwinView } from "@/components/TwinView";

export default async function TwinPage() {
  const [twinSnapshot, stations] = await Promise.all([
    getTwinSnapshot(),
    getStations(),
  ]);

  return <TwinView twinSnapshot={twinSnapshot} stations={stations} />;
}
