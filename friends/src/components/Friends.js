import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friends = () => {
    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => console.log)
    })

    return (
        <div>SUCESS</div>
    )
}
export default Friends;