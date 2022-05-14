import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  Collapse, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, UncontrolledDropdown
} from 'reactstrap';
import { products } from "../libs/meta";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const router = useRouter();


  const isActive = (path) => {
    if (router.pathname.includes(path))
      return 'active';
    return '';
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/" tag={Link}>
            <a className="navbar-brand" style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src="/favicon/favicon.png" height={72} width={96} />
                <span>
                  Greenboard
                </span>
              </div>
            </a>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <UncontrolledDropdown>
                  <DropdownToggle nav caret style={{ color: 'black' }}>Services</DropdownToggle>
                  <DropdownMenu>
                    {products.map(item => (
                      <DropdownItem>
                        <Link key={item.slice(-5)} href={`/services/${item.toLowerCase().split(" ").join("-")}`}><a>{item}</a></Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <Link href="/pricing"><a className={isActive('/pricing')}>Pricing</a></Link>
              </NavItem>
              <NavItem>
                <Link href="/get-involved"><a className={isActive('/get-involved')}>Get Involved</a></Link>
              </NavItem>
              <NavItem>
                <Link href="/about"><a className={isActive('/about')}>About Us</a></Link>
              </NavItem>
            </Nav>
            <Link href="https://accounts.borumtech.com/login?redirect=Greenboard">
              <a className="get-started" target="_blank" rel="noreferrer noopener">Get Started</a>
            </Link>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;