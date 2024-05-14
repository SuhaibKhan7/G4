
"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Search } from "../Sections/Search";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>


      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img src="/buy.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">OrderIt</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard<i class="bi bi-kanban text-rose-600"></i> </Dropdown.Item>
            <Dropdown.Item>Orders <i class="bi bi-list-stars text-rose-600"></i> </Dropdown.Item>
            <Dropdown.Item>Settings<i className="bi bi-gear-wide-connected text-rose-600"></i> </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out <i class="bi bi-box-arrow-right "></i></Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#" >Products</Navbar.Link>
          <Navbar.Link href="#" >wishlist <i className="bi bi-heart-fill text-rose-600"></i></Navbar.Link>
          <Navbar.Link href="#">Cart <span><i className="bi bi-cart-dash text-rose-600 "></i><span> <i className="bi bi-0-circle-fill"></i></span> </span></Navbar.Link>

        </Navbar.Collapse>

      </Navbar>
      <Search />

    </header>
  )
}
