import data from '../data/csvjson.json';

const getAllStaticPaths = () => {
  return data.map((item) => ({
   item
  }));
};

export default getAllStaticPaths;