import { getDecisionsIndex } from "@/lib/data";
import { DecisionBrowserView } from "@/components/DecisionBrowserView";

export default async function DecisionsPage({
  searchParams,
}: {
  searchParams?: { status?: string };
}) {
  const decisions = await getDecisionsIndex();
  const initialFilter = searchParams?.status
    ? searchParams.status.toUpperCase()
    : "ALL";

  return (
    <DecisionBrowserView
      decisions={decisions}
      initialStatusFilter={initialFilter}
    />
  );
}
