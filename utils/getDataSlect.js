import axios from "axios"




export const getDataSlect = async (tyxy) => {
    //console.log(tyxy)
    const config = {
        baseURL: 'https://buu.dooball-ufax365.com/dataservice',
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {key: tyxy}
    }
    try {
        const { data: response } = await axios.request(config)
        //const sxlic = response.filter((itrck) =>{return itrck.Type.includes(tyxy)})
        console.log(response)
        return response


    } catch (error) {
        return { error: error.message || error.toString() }
    }
}