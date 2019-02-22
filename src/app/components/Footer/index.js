import React from 'react';
import './index.scss';
import data from './data';
import IconLink from './IconLinks';

function Footer() {
  return (
    <footer className="Footer">
      {data.map(({ href, icon }) => (
        <IconLink href={href} target="_blank" icon={icon} />
      ))}
    </footer>
  );
}

export default Footer;
