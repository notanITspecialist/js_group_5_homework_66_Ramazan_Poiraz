import React, {Component} from 'react';
import axios from 'axios'

import { Button } from 'reactstrap';

class RandomCats extends Component {
    state = {
        url: ''
    };

    addCat = async () => {
        let url = await axios.get('https://random.dog/woof.json');
        url = url.data.url;
        console.log(url)
        this.setState({url});
    };

    componentDidMount() {
        this.addCat();
    }

    render() {
        return (
            <div className='text-center pt-4'>
                <Button onClick={this.addCat} color="secondary">ADD NEW CAT</Button>
                <div className='w-50 pt-4 h-auto overflow-auto' style={{maxHeight: '800px', margin: '0 25% 0 25%'}}>
                    <img className='d-block w-100 rounded' src={this.state.url} alt='Dog' />
                </div>
            </div>
        );
    }
}

export default RandomCats;