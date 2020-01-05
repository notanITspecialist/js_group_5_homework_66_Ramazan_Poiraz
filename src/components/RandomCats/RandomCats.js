import React, {Component} from 'react';


import { Player } from 'video-react';
import { Button } from 'reactstrap';
import axiosDog from "../../axios-orders";
import WithSpinner from "../../hoc/withSpinner";

class RandomCats extends Component {
    state = {
        url: '',
        format: ''
    };

    addCat = async () => {
        let url = await axiosDog.get();
        url = url.data.url;
        const format = url[url.length-3]+url[url.length-2]+url[url.length-1];
        this.setState({url,format});
    };

    componentDidMount() {
        this.addCat();
    }

    render() {
        return (
            <div className='text-center pt-4'>
                <Button onClick={this.addCat} color="secondary">ADD NEW DOG</Button>
                {this.state.format === 'mp4' || this.state.format === 'ebm' ?
                    <div className='pt-4' style={{maxHeight: '400px', margin: '0 25% 0 25%'}}>
                        <Player
                            playsInline
                            src={this.state.url}
                        />
                    </div>
                    :
                    <div className='w-50 pt-4 h-auto overflow-auto' style={{maxHeight: '800px', margin: '0 25% 0 25%'}}>
                        <img className='d-block w-100 rounded' src={this.state.url} alt='Dog' />
                    </div>
                }
            </div>
        );
    }
}

export default WithSpinner(RandomCats, axiosDog);