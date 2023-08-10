//https://13.200.28.82/api/backend/categories

import axiosClient from "utils/axiosConfig";

const getHomeCategories = async () => {
    const {data:respon} = await axiosClient("categories")
    console.log(respon)
    // return data.map((item) => ({
    //   item,
    // }));
  };
  
  export default getHomeCategories;