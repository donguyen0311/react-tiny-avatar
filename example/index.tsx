import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Avatar } from '../.';

const App = () => {
  return (
    <div>
      <Avatar name="Foo" />
      <Avatar name="Foo" size={30} />
      <Avatar name="Bar" size={50} circle={true} src="https://gravatar.com/avatar/f915b933ad989fac603c0c8315afd6f8?s=400&d=robohash&r=x" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
