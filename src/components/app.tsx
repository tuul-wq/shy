import React from 'react';
import Routes from './routes';

import Container from '@layout/container/container';

interface Props {
  store: string;
}

function App({ store }: Props) {
  return (
    <Container>
      <Routes />
    </Container>
  );
}

export default App;
