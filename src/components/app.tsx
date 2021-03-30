import React from 'react';
import Routes from './routes';

import Container from '@layout/container/container';
import { stores, StoresContext } from '@/store/types';
import { controllers, ControllersContext } from '@/controllers/types';

function App() {
  return (
    <StoresContext.Provider value={stores}>
      <ControllersContext.Provider value={controllers}>
        <Container>
          <Routes />
        </Container>
      </ControllersContext.Provider>
    </StoresContext.Provider>
  );
}

export default App;
