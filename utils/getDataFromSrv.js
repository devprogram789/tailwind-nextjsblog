import axios from "axios"


export const getDataFromSrv = async () => {
    const config = {
        baseURL: 'https://buu.dooball-ufax365.com/list',
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    try {
        const { data: response } = await axios.request(config)
        console.log(response)
        return response
        //res.statusCode = 200





    } catch (error) {
        return { error: error.message || error.toString() }
    }
}