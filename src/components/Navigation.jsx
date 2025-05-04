import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';



function Navigation() {
    const [activeItem, setActiveItem] = useState(0);
    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
    }
    return (
        <div className='sidebar d-flex flex-column justify-content-between mr-5'
            style={{ width: '345px', height: '100vh', backgroundColor: '#CED8E6' }}>
            <ul className='nav flex-column pt-3 px-2 m-2' style={{ color: '#0A3A84 !important' }}>
                <li className="nav-item m-1 {activeItem === 0 ? 'active' :''}" style={{
                    border: '1px solid #C1CAD7',
                    borderRadius: '9px',
                    padding: '8px',
                    color: '#0A3A84 !important'
                }} onClick={() => handleItemClick(0)}>
                    <a class="navlink nav-link px-2" href="/dashboard">
                        <span class="d-none d-sm-inline">Dashboard</span>
                    </a>
                </li>
                <li className='nav-item m-1' style={{
                    border: '1px solid #C1CAD7',
                    borderRadius: '9px',
                    padding: '8px',
                    color:'#0A3A84'
                }} onClick={() => handleItemClick(0)}>
                    <a className="navlink nav-link px-2" data-bs-toggle="collapse" href="#submenu1" role="button" aria-expanded="false" aria-controls='submenu1' >
                        <span className="d-none d-sm-inline">Settlement Management </span><FontAwesomeIcon icon={faChevronCircleDown} style={{lineHeight:'30px',color:'#0A3A84 !important'}}></FontAwesomeIcon>
                    </a>
                    <div className="collapse ps-3" id="submenu1">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small" >
                            <li ><a href="/settlements" className="nav-link"><span className="d-none d-sm-inline">Settlement </span></a></li>
                            <li ><a href="/settlements/addsettlement" className="nav-link"><span className="d-none d-sm-inline">Add Settlement </span></a></li>
                            <li ><a href="/settlements/editsettlement" className="nav-link"><span className="d-none d-sm-inline">Edit Settlement </span></a></li>
                        </ul>
                    </div>
                </li>
                <li className='nav-item m-1' style={{
                    border: '1px solid #C1CAD7',
                    borderRadius: '9px',
                    padding: '8px'
                }} onClick={() => handleItemClick(0)}>
                    <a class="navlink nav-link px-2">

                        <span class="d-none d-sm-inline">Transaction Report</span>
                    </a>
                </li>
                <li className='nav-item m-1' style={{
                    border: '1px solid #C1CAD7',
                    borderRadius: '9px',
                    padding: '8px'
                }} onClick={() => handleItemClick(0)}>
                    <a href="#" class="navlink nav-link px-2">
                        <span class="d-none d-sm-inline">Activity Log</span>
                    </a>
                </li>
                <li className='nav-item m-1' style={{
                    border: '1px solid #C1CAD7',
                    borderRadius: '9px',
                    padding: '8px'
                }} onClick={() => handleItemClick(0)}>
                    <a  class="navlink nav-link px-2" data-bs-toggle="collapse" href="#submenu2" role="button" aria-expanded="false" aria-controls='submenu1'>
                        <span class="d-none d-sm-inline">Bank Account Management </span><FontAwesomeIcon icon={faChevronCircleDown} style={{lineHeight:'30px',color:'#0A3A84 !important'}}></FontAwesomeIcon>
                    </a>
                    <div className="collapse ps-3" id="submenu2">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small" >
                            <li ><a href="/linkbank" className="nav-link"><span className="d-none d-sm-inline">Linked Bank </span></a></li>
                            <li ><a href="/linkbank/add" className="nav-link"><span className="d-none d-sm-inline">Add Bank </span></a></li>
                            <li ><a href="/linkbank/edit" className="nav-link"><span className="d-none d-sm-inline">Edit Bank </span></a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;