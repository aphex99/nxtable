'use client';

import { Singers } from '@/src/entities/clients/types';

import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

const initialState: Singers = [
  {
    id: 1,
    name: 'Belov Roman',
    email: 'broman@gmail.com',
    type: 'individual',
  },
];

const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const clientsSlice = createAppSlice({
  name: 'singers',
  initialState,
  reducers: () => {
    return {};
  },
});

export const clientsReducer = clientsSlice.reducer;
