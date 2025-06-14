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
} from '../ui';
import {NavMain} from './NavMain';
import {sidebarData} from './sidebar-data';
import { NavUser } from './NavUser';

export default function SidebarComp({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
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
        <NavMain items={sidebarData.navMain} />
      </SidebarContent>
      <SidebarFooter><NavUser user={sidebarData.user} /></SidebarFooter>
    </Sidebar>
  );
}
