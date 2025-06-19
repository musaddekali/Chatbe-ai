import EscalationRateCard from './EscalationRateCard';
import TopPerformingAgentsCard from './TopPerformingAgentsCard';
import TotalActiveUsersCard from './TotalActiveUsersCard';

export default function OverviewInsightPanel() {
  return (
    <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <TotalActiveUsersCard />
      <EscalationRateCard />
      <TopPerformingAgentsCard />
    </section>
  );
}
