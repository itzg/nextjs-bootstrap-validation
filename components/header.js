import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import SourceCodeLink from "./sourceCodeLink";

export default function Header() {
  return (
      <Navbar>
        <Nav>
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/hook-form" passHref>
            <Nav.Link>Hook Form</Nav.Link>
          </Link>
          <Link href="/bs-native-html5" passHref>
            <Nav.Link>Bootstrap Native HTML5</Nav.Link>
          </Link>
        </Nav>
        <Nav className="ml-auto">
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <SourceCodeLink/>
            </Navbar.Text>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
  )
}
