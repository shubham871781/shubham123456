import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarstyleWrapperStyled } from './Sidebarstyle';

function Sidebar({ sidenav }) {
  return (
    <>
        <aside className='main-sidebar'>
          <section className='sidebar position-relative'>
            <div className='help-bt'>
              <a href='' className='d-flex align-items-center'>
                <div className='bg-danger rounded10 h-50 w-50 l-h-50 text-center me-15'>
                  <i data-feather='mic'></i>
                </div>
                <h4 className='mb-0'>
                  Emergency
                  <br />
                  help
                </h4>
              </a>
            </div>
            <div className='multinav'>
              <div className='multinav-scroll' style={{ height: '100%' }}>      
                <ul className='sidebar-menu' data-widget='tree'>
                  {sidenav.map(({ label, name, link }) => (
                    <li key={name}>
                      <Link className='nav-link collapsed' to={link}>
                      <i data-feather='users'></i>
                        <span>{label}</span>
                      </Link>
                      <hr className='sidebar-divider ' />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </aside>
    </>
  );
}

export default Sidebar;
