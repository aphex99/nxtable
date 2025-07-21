'use client';
import {lato} from "@/app/layout";
import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
    {name: 'Magazine', href: '/magazine', icon: 'Mag',},
    {name: 'Store', href: '/store', icon: 'Store',},
    {name: 'Notreadytowear', href: '/notreadytowear', icon: 'Not',},
];

export default function NavLinks() {

    const pathname = usePathname();

    return (
        <div className={"flex items-center w-full h-14 border-b-1 border-b-gray-200"}>
            <ul className={"flex w-fit gap-5 ml-5 text-lg"}>
                {links.map((link, i) => {
                    return (
                        <li key={i}>
                            <Link
                                href={link.href}
                                className={`font-bold underline decoration-dotted ${pathname === link.href && "text-red-600"} hover:text-red-600`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Link
                href={'/'}
                className={`absolute top-2 left-1/2 transform -translate-x-1/2 text-4xl hover:text-red-600 font-black ${lato.className}`}
            >NXTSEEN</Link>
        </div>
    );


}