'use client';

import { Singer } from '@/src/entities/clients/types';
import { ColumnDef } from '@tanstack/react-table';

export type ColumnDefUser = ColumnDef<Singer>[];

export const columns: ColumnDefUser = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
];
