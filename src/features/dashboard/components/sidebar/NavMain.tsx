'use client';

import {ChevronRight} from '@/components/icons';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui';
import {Fragment} from 'react';
import Link from 'next/link';
import {NavMenu} from '../useDashboard';
import {usePathname} from 'next/navigation';
import {cn} from '@/lib/utils';

export default function NavMain({menu}: {menu: NavMenu[]}) {
  const currentPath = usePathname();

  function isCurrentPage(url: string) {
    if (!url) return;
    return url == currentPath;
  }

  // Active dropdown when submenu is active by page url
  function hasActiveSubRoute(menuItem: NavMenu): boolean {
    if (!menuItem || !menuItem?.items?.length) return false;
    const isActiveSubItem = menuItem.items?.some(subItem =>
      isCurrentPage(subItem.url)
    );
    return !!isActiveSubItem;
  }

  return (
    <>
      <SidebarGroup>
        <SidebarMenu>
          {menu.map(item => (
            <Fragment key={item.title}>
              {/* For submenu  */}
              {item.items?.length ? (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={hasActiveSubRoute(item) || item.isActive}
                  className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map(subItem => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              className={cn('leading-snug',{
                                'bg-sidebar-accent': isCurrentPage(subItem.url),
                              })}
                              asChild>
                              <Link href={subItem.url}>
                                {subItem.title}
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={cn({
                      'bg-sidebar-accent': isCurrentPage(item.url),
                    })}
                    asChild
                    tooltip={item.title}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </Fragment>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
