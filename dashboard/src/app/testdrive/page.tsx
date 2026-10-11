import { getTestDriveProfiles } from "@/lib/data";
import { TestDriveView } from "@/components/TestDriveView";

export default async function TestDrivePage() {
  const data = await getTestDriveProfiles();
  return <TestDriveView samples={data?.samples || []} />;
}
