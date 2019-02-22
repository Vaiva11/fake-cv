import React from 'react';
import './index.scss';

// komponentus rasome is didziosios raides
// kad nesumaisyti su html tag'ais
function Header() {
  return (
    <header className="Header">
      <h1>Vaiva Gr</h1>
      <hr />
      <p className="Header--contact">Phone: +370123456</p>
      <p className="Header--contact">
        Email:
        <a
          href="mailto: vaiva.gri@gmail.com"
          target="blank_"
          rel="noopener norefferer"
        >
          vaiva.gribauskaite@gmail.com
        </a>
      </p>
      <p className="Header--summary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsumm.
      </p>
      <img
        className="Header--profile-pic"
        alt="kittyy"
        src="https://static1.squarespace.com/static/5a26bc7451a584c4421507c7/t/5a28b3f8652deabe5e26f57c/1512780740388/1d83e0f607b7b1de607fff558a573b6c--cat-smile-smile-smile.jpg"
      />
    </header>
  );
}

export default Header;
