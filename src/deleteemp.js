import axios from 'axios';
var querystring = require('querystring');




axios.post(window.httpURL + '/employee/delete',
    queryString.stringify({ "empId": empId }), {
    headers: { 'tokenid': '' },
    withCredentials: true,
    }).then((response) => {
           console.log(response.data);
            if (response.data.SvcStatus === 'Success') {
                console.log(response.data.SvcMsg);
            } else {
                console.error(response.data.SvcMsg);
            }
    }).catch((e) => {
        console.error('Service failed: ' + e);
    });
    //via hardcoded
    //via passing list
    //via by calling service 