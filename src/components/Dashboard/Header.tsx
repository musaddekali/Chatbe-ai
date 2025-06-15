import {Moon, Sun} from '@/components/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  Button,
  SidebarTrigger,
} from '../ui';

export default function DashboardHeader() {
  return (
    <header className="bg-background sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex w-full items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1 size-8" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ms-auto">
          <Button variant={'ghost'} size={'icon'}>
            <Moon /> <Sun />
          </Button>
        </div>
      </div>
    </header>
  );
}
