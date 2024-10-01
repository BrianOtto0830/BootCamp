import React from 'react';
import { Title } from './Title';
import { Description } from './Description';
import { UserProfile } from './UserProfile';

export const Header = (props) => {
  return (
    // soal nomer 4 buat header di header
    <header>

      {/* nomer1 */}
      <Title appTitle="Koding Akademi" />

      {/* soal nomer4 isi dari description */}
      <Description>
        <h3 className='text-xl font-bold'>Description : </h3>
        <p>Pusat Belajar Coding dan Robotic</p>
        <p className='mb-4'>Technology</p>
      </Description>
      {props.children}

    </header>    
  );
};
