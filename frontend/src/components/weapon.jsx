import React from "react";
import '../App.css';
import logo from '../assets/logo.svg';
import user from '../assets/user.png';

const Weapon = () => {
    return (
        <>
        <div className="weaponHeader">
        <img src={logo} alt="weapon" className="weaponImage"/>
        <h1 className="weaponName">Weapon Inventory</h1>
        <div>
            <h5>Varsha Gaur</h5>
            <p>DL22SWA9675550</p>
        </div>
        <img id='usericon' src={user} alt="weapon" className="weaponImage"/>

        </div>

        <div className="inventoryMain">
            <div className="weaponInventory">
            <h4>Weapons</h4>
            <div className="weaponList">
            <div className="weaponItem">
                <img src={logo} alt=""/>
                <div>
                    <h5>Weapon Name</h5>
                    <p>Weapon ID</p>
                    <button>View Details</button>
                </div>
            </div>
            <div className="weaponItem">
                <img src={logo} alt=""/>
                <div>
                    <h5>Weapon Name</h5>
                    <p>Weapon ID</p>
                    <button>View Details</button>
                </div>
            </div>
            <div className="weaponItem">
                <img src={logo} alt=""/>
                <div>
                    <h5>Weapon Name</h5>
                    <p>Weapon ID</p>
                    <button>View Details</button>
                </div>
            </div>

            </div>
            </div>
            
            <div className="otherInventory">
                <div>

                </div>
                <div>

                </div>
            </div>
        
        </div>
        </>
    );
    }

export default Weapon;
