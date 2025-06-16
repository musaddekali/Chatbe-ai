import { DashboardMainLayout } from "@/features/dashboard";

export default function DashboardLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardMainLayout>{children}</DashboardMainLayout>;
}
