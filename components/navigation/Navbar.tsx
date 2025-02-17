/**
    * @description      : 
    * @author           : rrome
    * @group            : 
    * @created          : 17/02/2025 - 09:01:56
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/02/2025
    * - Author          : rrome
    * - Modification    : 
**/
import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-100">
            <Link href="/dashboard">
                <span className="text-xl font-bold">Slick Solutions</span>
            </Link>
            <SignOutButton />
        </nav>
    );
};