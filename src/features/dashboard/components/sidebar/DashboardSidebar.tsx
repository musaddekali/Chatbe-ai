'use client';

import Image from 'next/image';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '../../../../components/ui';
import NavMain from './NavMain';
import NavUser from './NavUser';
import useDashboard from '../useDashboard';

export default function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const {navMenu, user} = useDashboard();

  return (
    <Sidebar variant="sidebar" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="cursor-auto hover:bg-transparent!"
              size="lg">
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Image
                  width={40}
                  height={40}
                  alt="Chatbe Logo"
                  src="/chatbe-logo.png"
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="text-lg font-medium tracking-tight">
                  Chatbe
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain menu={navMenu} />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
