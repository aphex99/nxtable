'use client';

import { AppStore, makeStore } from '@/src/shared/store/store';
import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>(makeStore());

  return <Provider store={storeRef.current}>{children}</Provider>;
}
