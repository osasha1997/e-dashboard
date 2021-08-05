import "./Sidebar.scss";
import React from 'react';

function Sidebar() {    
    return (
        <div>
            <div class="left-second-side">
                <div class="lef-side">
                    <div id="close">
                        <div class="bi bi-list"></div>
                    </div>
                </div>
                <div class="menu">
                    <div class="RemoteManager" id="left">
                        <p class="#">Remote Manager</p>
                    </div>
                    <div class="menu1">
                        <p>
                            BEFORE YOU START <br />
                            Your first step is training
                        </p>
                        <i class="bi bi-chevron-down" id="down-arrow"></i>
                    </div>
                    <div class="inner-menu">
                        <li>Your first steps in training</li>
                        <li>Your first steps in training</li>
                        <li>Your first steps in training</li>
                        <li>Your first steps in training</li>
                        <li>Your first steps in training</li>
                        <li>Your first steps in training</li>
                        <li>Your first steps in training</li>
                    </div>                    
                </div>
            </div>
        </div>
    );
}

export default Sidebar;