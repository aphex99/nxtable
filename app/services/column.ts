"use client";

import {User} from "@/app/types";
import {ColumnDef} from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phone",
        header: "Phone Number",
    },
    {
        accessorKey: "name",
        header: "Name"
    }
];