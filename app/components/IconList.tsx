import React from 'react';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { IoLogoFirebase } from 'react-icons/io5';
import { SiRedux } from 'react-icons/si';

const IconList = () => {
  return (
    <div className="flex gap-8 mx-auto text-3xl text-gray-900">
      <FaReact className="icon-hover" />
      <RiTailwindCssFill className="icon-hover" />
      <TbBrandFramerMotion className="icon-hover" />
      <IoLogoFirebase className="icon-hover" />
      <SiRedux className="icon-hover" />
    </div>
  );
};

export default IconList;
