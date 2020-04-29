import Link from 'next/link';

import styled from 'styled-components';
import Logo from '../Logo';
import Meta from '../Meta';

const StyledHeader = styled.header`
  align-items: center;
  background: linear-gradient(to left, rgb(184, 56, 240), rgb(255, 136, 102));
  border-color: white;
  display: flex;
  height: 64px;
  justify-content: space-between;
  left: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  .logo {
    padding: 0;
  }
  a {
    color: white;
    text-transform: uppercase;
    font-size: 0.75em;
    letter-spacing: 1px;
    padding: 3.25rem 2rem 2rem 2rem;
    text-decoration: none;
    &:hover {
      color: white;
      text-shadow: 1px 1px 0 rgba(255,255,255, 0.25), 1px 1px 0 black, 3px 3px 0 orange, -1px 1px 10px #1c2b6d, 2px 2px 1px #1c2b6d;
      font-weight: 800;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Meta />
      <Link href="/">
        <a className="logo">
          <Logo />
        </a>
      </Link>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/components">
          <a>Components</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
