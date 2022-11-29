// // @flow

// import * as React from 'react';

// type Props = {
//   foo: number,
//   bar?: string,
// };

// function MyComponent(props: Props) {
//   props.doesNotExist; // Error! You did not define a `doesNotExist` prop.

//   return <div>{props.bar}</div>;
// }

// <MyComponent foo={42} />\\


// "dev": "concurrently -k \"cross-env BROWSER=none yarn start\" \"yarn electron\"",
// "electron": "wait-on tcp:3000 && electron ."