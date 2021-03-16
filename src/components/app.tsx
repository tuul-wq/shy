import React from 'react';
import Routes from './routes';

interface Props {
  store: string;
}

function App({ store }: Props) {
  return (
    // <Provider store={store}>
    // </Provider>
    <Routes />
  );
}

export default App;
