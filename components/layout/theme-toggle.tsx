'use client';

import * as React from 'react';
import { Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
   const { theme, setTheme } = useTheme();

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
               {theme === 'light' ? (
                  <Sun className="h-4 w-4" />
               ) : theme === 'dark' ? (
                  <Moon className="h-4 w-4" />
               ) : (
                  <Laptop className="h-4 w-4" />
               )}
               <span className="sr-only">Toggle theme</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
               <Sun className="mr-2 h-4 w-4" />
               <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
               <Moon className="mr-2 h-4 w-4" />
               <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
               <Laptop className="mr-2 h-4 w-4" />
               <span>System</span>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
