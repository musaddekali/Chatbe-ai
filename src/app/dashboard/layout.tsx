import DashboardLayout from '@/features/dashboard';

export default function DashboardLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
