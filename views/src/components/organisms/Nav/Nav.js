import React, { useState } from "react";

import { 
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink, NavbarText,
    UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem
} from "reactstrap";

export default ({ posts }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/blog/dashboard">Dashboard</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto">
                    <UncontrolledDropdown>
                        <DropdownToggle nav caret>
                            Finance
                        </DropdownToggle>
                        <DropdownMenu right>
                            {posts.map(({ title, category, urlPath }) => {
                                if(category === "Finance") {
                                    return (
                                        <DropdownItem>
                                            <NavLink href={`/blog/${urlPath}`}>
                                                {title}
                                            </NavLink>
                                        </DropdownItem>
                                    );
                                } else return;
                            })}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Learnify
                        </DropdownToggle>
                        <DropdownMenu right>
                            {posts.map(({ title, category, urlPath }) => {
                                if(category === "Learnify") {
                                    return (
                                        <DropdownItem>
                                            <NavLink href={`/blog/${urlPath}`}>
                                                {title}
                                            </NavLink>
                                        </DropdownItem>
                                    );
                                } else return;
                            })}
                        </DropdownMenu> 
                    </UncontrolledDropdown>
                    <UncontrolledDropdown>
                        <DropdownToggle nav caret>
                            Projects
                        </DropdownToggle>
                        <DropdownMenu right>
                            {posts.map(({ title, category, urlPath }) => {
                                if(category === "Projects") {
                                    return (
                                        <DropdownItem>
                                            <NavLink href={`/blog/${urlPath}`}>
                                                {title}
                                            </NavLink>
                                        </DropdownItem>
                                    );
                                } else return;
                            })}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown>
                        <DropdownToggle nav caret>
                            Tutorials
                        </DropdownToggle>
                        <DropdownMenu right>
                            {posts.map(({ title, category, urlPath }) => {
                                if(category === "Tutorials") {
                                    return (
                                        <DropdownItem>
                                            <NavLink href={`/blog/${urlPath}`}>
                                                {title}
                                            </NavLink>
                                        </DropdownItem>
                                    );
                                } else return;
                            })}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavLink href="/blog/admin">Admin</NavLink>
            </Collapse>
        </Navbar>
    );
};