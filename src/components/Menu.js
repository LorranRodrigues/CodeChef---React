import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

function Menu(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [paginaAtual, mudaPaginaAtual] = useState('/');
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Link to="/" className={paginaAtual === 'home' ? 'nav-link active navbar-brand' : 'nav-link navbar-brand'} onClick={() => mudaPaginaAtual('home')}>CodeChef</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto gap-5 justify-content-center w-100" navbar>
            <NavItem>
              <Link to="/" className={paginaAtual === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => mudaPaginaAtual('home')}>
                Início
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/cardapio" className={paginaAtual === 'cardapio' ? 'nav-link active' : 'nav-link'} onClick={() => mudaPaginaAtual('cardapio')}>
                Cardápio
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contato" className={paginaAtual === 'contato' ? 'nav-link active' : 'nav-link'} onClick={() => mudaPaginaAtual('contato')}>
                Contato
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Menu;