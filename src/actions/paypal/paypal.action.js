import axios from 'axios'
export const paypal = (payload) => {
    return {
        type: 'PAYPAL',
        payload
    }
}

export const paypalAPI = (payment) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `http://localhost:3000/v1/paypal`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE2MDkzNDIxNDh9.oe20q_2JPX7XFF3r9xeeN3kfMRbfcO-7s3TRIggD6x0"
            },
            data: {
                payment
            }
        }).then(res => {
            dispatch(paypal(res.data))
        }).then(error => {
            console.log(error);
        }).catch(e => {
            return e;
        });
    }
}