"use client";
import { useState } from 'react';
import { Button } from '../ui/button';
import { ModeToggle } from '../ui/modeToggle';
import { Menu } from 'lucide-react';
import DrawerNav from './drawerNav';
import { fontMedium } from '../style';

export default function MobileNav() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <nav className="flex lg:hidden justify-between items-center py-5">
                <h2 className={`${fontMedium.className} text-purple-800 dark:text-purple-500 text-xl tracking-wide dark:tracking-wider`}>Bloria <span className='hidden sm:inline'>Corner</span></h2>

                <div className="flex items-center">
                    <ModeToggle />
                    <Button size="sm" onClick={toggleDrawer} aria-label="Toggle menu">
                        <Menu className="h-[1.5rem] w-[1.5rem]" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </nav>
            <DrawerNav open={isDrawerOpen} onClose={toggleDrawer} />
        </>
    );
}
