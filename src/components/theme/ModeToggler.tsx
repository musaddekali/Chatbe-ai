'use client';

import {type LucideIcon, Monitor, MoonStar, Sun} from '@/components/icons';
import {useTheme} from 'next-themes';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import {cn} from '@/lib/utils';

export function ModeToggle() {
  const {theme, setTheme} = useTheme();

  const themes: {
    label: string;
    icon: LucideIcon;
  }[] = [
    {
      label: 'Light',
      icon: Sun,
    },
    {
      label: 'Dark',
      icon: MoonStar,
    },
    {
      label: 'System',
      icon: Monitor,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <MoonStar className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map(t => (
          <DropdownMenuItem
            key={t.label}
            className={cn({
              'bg-accent': t.label.toLowerCase() === theme,
            })}
            onClick={() => setTheme(t.label.toLowerCase())}>
            <t.icon /> {t.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
