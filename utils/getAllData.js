import { getAllDataX,getDatacollectionSet,getCollectionData } from "./getDataSet";
import testData from '@/data/testData.json'

//http://buu.dooball-ufax365.com/list
console.log(testData)


const getAllData = async () => {
  //const getAll = testData
  return testData
};

export default getAllData;