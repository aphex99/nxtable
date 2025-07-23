"use client";

import {User} from "@/app/types";
import {ColumnDef} from "@tanstack/react-table";

export type ColumnDefUser = ColumnDef<User>[]

export const columns: ColumnDefUser = [
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
        header: "Number",
    },
    {
        accessorKey: "name",
        header: "Name"
    }
];