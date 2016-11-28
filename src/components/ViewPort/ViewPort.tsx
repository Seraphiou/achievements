import * as React from 'react';
import { StatelessComponent } from 'react';

interface IViewPort {
}

const ViewPort: StatelessComponent<IViewPort> = (props) => (
    <div className='view-port'>ViewPort</div>
);

export default ViewPort;
