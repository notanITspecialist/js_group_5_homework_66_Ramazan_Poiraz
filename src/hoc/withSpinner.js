import React, {Component, Fragment} from 'react';
import MySpinner from "../components/Spinner/Spinner";

const WithSpinner = (MyComponent, axios) => {
    return class AddSpinner extends Component {
        constructor(props) {
            super(props);

            this.state = {
                show: false
            };

            axios.interceptors.request.use(req=>{
                this.setState({show:true});
                return req
            });
            axios.interceptors.response.use(res=>{
                this.setState({show:false});
                return res
            });
        }
        render() {
            return  (
                <Fragment>
                    <MyComponent {...this.props}/>
                    <MySpinner show={this.state.show} />
                </Fragment>
            )
        }
    }
};

export default WithSpinner;