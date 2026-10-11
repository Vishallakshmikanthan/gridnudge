import { getFlexibilityData } from "@/lib/data";
import { FlexibilityView } from "@/components/FlexibilityView";

export default async function FlexibilityPage() {
  const flexibilityData = await getFlexibilityData();
  return <FlexibilityView flexibilityData={flexibilityData} />;
}
