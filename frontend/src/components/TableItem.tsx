import { ReactNode } from 'react';

export default function TableItem({
  children,
  title,
}: {
  children: ReactNode;
  title: ReactNode;
}) {
  return (
    <div className='grid gap-8 capitalize text-center'>
      <strong>{title}</strong>
      <div>{children}</div>
    </div>
  );
}
