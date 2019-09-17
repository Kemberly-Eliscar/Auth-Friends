import React from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        Friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/data')
        .then(res => {
            this.setState({
                Friend: res.data.data.filter(
                    
                )
            })
        })
        .catch(err => console.log(err));
    }
}

export default Friends;