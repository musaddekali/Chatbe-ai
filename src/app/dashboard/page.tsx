import {OverviewInsightPanel, WorkspaceStats} from '@/features/dashboard';

export default function DashboardPage() {
  return (
    <section className="@container/card-wrapper">
      <p className="text-muted-foreground mb-2">My workspace</p>
      <h3 className="text-2xl font-medium">Welcome, Khalid</h3>
      <WorkspaceStats />
      <OverviewInsightPanel />
    </section>
  );
}
