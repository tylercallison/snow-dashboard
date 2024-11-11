import { PropsWithChildren } from 'react';

const Card = (props: PropsWithChildren) => {
  return (
    <div className='col-span-3 mx-auto flex flex-col w-full rounded border p-4 hover:shadow'>
      {props.children}
    </div>
  );
};

const Group = (props: PropsWithChildren) => {
  return (
    <div className='col-span-12 grid grid-cols-12 gap-4'>{props.children}</div>
  );
};

Card.Group = Group;

export { Card };
