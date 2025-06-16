import {SidebarInset, SidebarProvider} from '@/components/ui';
import DashboardSidebar from './components/sidebar/DashboardSidebar';
import DashboardHeader from './components/DashboardHeader';

function DashboardMainLayout({children}: {children: React.ReactNode}) {
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
export default DashboardMainLayout;
