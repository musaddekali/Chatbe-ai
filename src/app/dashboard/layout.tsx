import {SidebarInset, SidebarProvider} from '@/components/ui';
import {
  SidebarComp,
  DsbHeader as DashboardHeader,
} from '@/components/Dashboard';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SidebarComp />
      <SidebarInset>
        <DashboardHeader />
        <div className="p-6 lg:p-10">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
