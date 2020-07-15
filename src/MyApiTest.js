import React, { useEffect, useState } from 'react';
const axios = require('axios');


function Name(object) {
    console.log(object)
    return <>{object.object.age}</>
}


const App = () => {

    const [harveyData, setharveyData] = useState(null)

    useEffect(() => {
        axios.get('/user/harvey')
            .then(res => {
                setharveyData(res.data)
            })
            .catch(err => {
                setharveyData('uh oh error!')
            })
    }, [])



    return (
        <div>
            User data:
            {harveyData != null && <Name object={harveyData} />}
        </div>
    );
}

export default App;