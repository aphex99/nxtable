'use client';

import {ColumnDefUser} from "@/app/services/column";
import {User} from "@/app/types";
import {flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";

type TablePropsType = {
    data: User[]
    columns: ColumnDefUser
}

export default function BasicTable({data, columns}: TablePropsType) {

    const table = useReactTable({
        data, columns, getCoreRowModel: getCoreRowModel()
    });

    return (
        <div className={"mt-10"}>
            <table>
                <thead className={"border-2"}>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        <th></th>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} colSpan={header.colSpan}
                                className={"p-2"}>
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody className={"border-2"}>
                {table.getRowModel().rows.map((row, i) => (
                    <tr key={row.id} className={`border-2 ${i % 2 === 0 && "bg-gray-100"}`}>
                        <th className={"pl-2 pt-0.5 text-xs font-light"}>
                            {i+1}
                        </th>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className={"px-5 py-2"}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

}