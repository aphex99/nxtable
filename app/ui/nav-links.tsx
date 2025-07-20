'use client';

import {usePathname} from "next/navigation";

const links = [
    {name: 'Magazine', href: '/magazine', icon: 'Mag',},
    {name: 'Store', href: '/store', icon: 'Store',},
    {name: 'Notreadytowear', href: '/notreadytowear', icon: 'Not',},
];

export default function NavLinks() {

    const pathname = usePathname();


}