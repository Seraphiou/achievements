import * as React from 'react';
import Slide from './Slide';

const MenuSlide = () => (
    <Slide>
        <div>
            <h1>Departments</h1>

            <div className="menu-puzzle">
                <div className="bottom">Regions</div>
                <div className="left right">OSD</div>
                <div>LTL</div>
                <div>RPP</div>
                <div className="left right">CSY</div>
                <div className="top">PRD</div>
                <div>DIR</div>
            </div>
        </div>
    </Slide>
);

export default MenuSlide;
