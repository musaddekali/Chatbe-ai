import {SidebarInset, SidebarProvider} from '@/components/ui';
import {DashboardHeader, DashboardSidebar} from './components';

function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="p-6 lg:p-10">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
export default DashboardLayout;
