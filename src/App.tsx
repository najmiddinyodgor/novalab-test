import React from 'react';
import { AppLayout } from './layout/AppLayout'
import { AppRoutes } from './router'
import { GlobalStyle } from './utils/styles/GlobalStyle'
import { useInitRedux } from './hooks/useInitRedux'

function App () {
  useInitRedux()

  return (
    <AppLayout>
      <GlobalStyle />
      <AppRoutes />
    </AppLayout>
  );
}

export default App;
