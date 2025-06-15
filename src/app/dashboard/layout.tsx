import SidebarComp from '@/components/Dashboard/Sidebar';
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui';
import DashboardHeader from '@/components/Dashboard/Header';

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
        <div className='bg-accent p-10'>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
