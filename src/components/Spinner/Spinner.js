import React, {Component} from 'react';
import { Spinner } from 'reactstrap';

class MySpinner extends Component {
    render() {
        return (
            <div style={{  display: this.props.show ? 'block' : 'none'  ,background: '#000', position: 'fixed', width: '100%', height: '100%', left: '0', top: '0', opacity: '0.5', zIndex: '1000' }}>
                <Spinner color='white' style={{margin: '20% 0',right: '47%', width: '100px', height: '100px', fontSize: '25px', position: 'fixed'}} />
            </div>
        );
    }
}

export default MySpinner;