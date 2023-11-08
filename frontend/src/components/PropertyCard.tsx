import React from 'react';
import TableItem from './TableItem';
import PropertyMapIcon from './PropertyMapIcon';
import Button from './Button';

export type Property = {
  type: string;
  model: string;
  location: string;
  area: string;
  price: string;
  availability: string;
};

export default function PropertyCard({
  area,
  availability,
  location,
  model,
  price,
  type,
}: Property) {
  return (
    <div className='rounded-3xl overflow-hidden'>
      <div className='bg-white text-neutral-950 px-7 lg:px-14 py-7 grid gap-7'>
        <div className='lg:hidden grid grid-cols-2 capitalize'>
          <div className='grid gap-2'>
            <strong>property type</strong>
            <strong>model</strong>
            <strong>location</strong>
            <strong>area</strong>
            <strong>price</strong>
            <strong>availability</strong>
          </div>
          <div className='grid gap-2'>
            <div>{type}</div>
            <div>{model}</div>
            <div>{location}</div>
            <div>{area}</div>
            <div>{price}</div>
            <div className='normal-case text-secondary'>{availability}</div>
          </div>
        </div>

        <div className='justify-between gap-4 hidden lg:flex'>
          <TableItem title='property type'>{type}</TableItem>
          <TableItem title='model'>{model}</TableItem>
          <TableItem title='location'>{location}</TableItem>
          <TableItem title='area'>{area}</TableItem>
          <TableItem title='price'>{price}</TableItem>
          <TableItem title='availability'>
            <strong className='normal-case text-secondary'>
              {availability}
            </strong>
          </TableItem>
        </div>
      </div>

      <div
        aria-label='card actions'
        className='bg-secondary text-neutral-50 px-7 lg:px-14 py-7 flex flex-col lg:flex-row gap-7 justify-between lg:items-center'
      >
        <div className='flex items-center gap-6'>
          <PropertyMapIcon />
          <div className='capitalize font-medium'>view property map</div>
        </div>
        <Button className='capitalize'>view property full details</Button>
      </div>
    </div>
  );
}
