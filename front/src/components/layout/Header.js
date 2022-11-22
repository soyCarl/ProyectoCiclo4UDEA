import React, { Fragment } from 'react'
import "../../App.css"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <img src="./images/logo.png" alt="MangAnime Store logo" />
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <div class="input-group">
                        <input type="text" id="search_field" class="form-control" placeholder='Que producto buscas?'></input>
                        <div class="input-group-append">
                            <button id="search_btn" class="btn"><i class="fa fa-search-plus fa-lg" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button" id="dropDownMenu" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span>Panel de Control</span></Link>
                            <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                                <Link className='dropdown-item' to='/admin/dashboard'>Adm. Productos</Link>
                                <Link className='dropdown-item' to='/'>Pedidos</Link>
                                <Link className='dropdown-item' to='/'>Mi Cuenta</Link>
                                <Link className='dropdown-item' to='/'>Cerrar Sesión</Link>
                            </div>  
                    </div>

                    <Link to="/productList"><i class="fa fa-shopping-cart fa-2x text-white"></i></Link>
                    <span className="ml-1" id="cart_count">2</span>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header