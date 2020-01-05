import React, {Component} from 'react';
import axios from 'axios'

class RandomCats extends Component {
    state = {
        url: ''
    };

    addCat = async () => {
        let url = await axios.get('https://aws.random.cat/meow');
        url = url.data.file;
        this.setState({url});
    };

    componentDidMount() {
        this.addCat();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default RandomCats;