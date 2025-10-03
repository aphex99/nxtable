'use client';

import { Clients } from '@/src/entities/clients/types';
import { supabase } from '@/src/shared/supabase/client';
import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

const initialState: Clients = [
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
  name: 'clients',
  initialState,
  reducers: (create) => {
    const createAThunk = create.asyncThunk.withTypes<{
      rejectValue: { message: string; error?: any };
    }>();

    return {
      addClients: create.reducer((state, action) => {
        return action.payload;
      }),
      fetchClients: createAThunk<Clients, void>(
        async (arg: void, { rejectWithValue }) => {
          try {
            const res = await supabase.from('clients').select();
            return res.data
              ? res.data
              : rejectWithValue({
                  message: "Clients wasn't received",
                });
          } catch (error) {
            return rejectWithValue({
              message: 'Error is occurred',
              error,
            });
          }
        },
        {
          fulfilled: (state, action: PayloadAction<Clients>) => {
            return action.payload;
          },
        },
      ),
    };
  },
});

export const { fetchClients } = clientsSlice.actions;
export const clientsReducer = clientsSlice.reducer;
