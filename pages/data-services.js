// import { Fragment, useEffect, useId, useRef, useState } from 'react'
// import siteMetadata from '@/data/siteMetadata'
// // import { useSelector } from 'react-redux'
// import { PageSEO } from '@/components/SEO'
// import Image from 'next/image'
// // import Link from 'next/link'
// // import CardBarChart from '@/components/CardBarChart'
// // import { CardLineChart } from '@/components/CardLineChart'
// import { Bar, Line } from 'react-chartjs-2'
// import { Listbox, Transition, Combobox } from '@headlessui/react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
// import { getDataFromSrvXXX } from 'utils/getDataFromSrvXXX'
// import { Picky } from 'react-picky'
// import 'react-picky/dist/picky.css'

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js'

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// const groupBy = function (xs, key) {
//   return xs.reduce(function (rv, x) {
//     ;(rv[x[key]] = rv[x[key]] || []).push(x)
//     return rv
//   }, {})
// }

// export default function DataServices(props) {
//   // const filters = useSelector((state) => state.filter)
//   const [multiValue, setMultiValue] = useState([])
//   // const [SelectedAreaCode, setSelectedAreaCode] = useState(null)
//   // const filteredType = useSelector((state) => state.filter.type)
//   // const filteredProduct = useSelector((state) => state.filter.product)
//   // const filteredDistrict = useSelector((state) => state.filter.district)
//   // const [selectedRegion, setSelectedRegion] = useState('กรุณาเลือก')
//   // const [selectedProduct, setSelectedProduct] = useState('กรุณาเลือกผลิตภัณฑ์')
//   const [selectedTypeX, setSelectedTypeX] = useState('กรุณาเลือกประเภท')
//   const [selectedFrom_Year, setSelectedFrom_Year] = useState('เริ่มจากปี')
//   const [selectedTo_Year, setSelectedTo_Year] = useState('เลือกถึงปี')
//   const [selectedDistrict, setSelectedDistrict] = useState('เลือกจังหวัด')
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//   })
//   const [chartOptions, setChartOptions] = useState({})

//   const GGProduct = props.buudata.filter((value) => {
//     return (
//       value.Type.includes(selectedTypeX) &&
//       value.District.includes(selectedDistrict) &&
//       value.Year >= selectedFrom_Year &&
//       value.Year <= selectedTo_Year
//     )
//   })

//   const ProductJ = GGProduct.reduce((previous, current) => {
//     if (!previous.includes(current.Product)) {
//       previous.push(current.Product)
//     }
//     return previous
//   }, [])

//   const lxProd = ProductJ.map((ProductX) => {
//     return { value: ProductX, label: ProductX }
//   })

//   const mapfixPro = multiValue.map((iui) => iui.value)
//   const mastfiltered = GGProduct.filter(function (item) {
//     return mapfixPro.includes(item.Product) ? true : false
//   })

//   // console.log(mastfiltered)

//   const GGXAProduct = groupBy(mastfiltered, 'Product')
//   const groupProduct = Object.keys(GGXAProduct).map((Product) => {
//     return Product
//   })

//   const ggx = groupBy(mastfiltered, 'Year')
//   const groupVcate = Object.keys(ggx).map((Year) => {
//     return Year
//   })

//   const setxdata = groupProduct.map((itex) => {
//     let darxF = mastfiltered.filter((data) => {
//       return data.Product == itex
//     })
//     return {
//       label: darxF[0].Product,
//       data: darxF.map((vdx) => vdx.Value),
//       borderColor: '#F1F5F9',
//       backgroundColor: '#7B75FF',
//     }
//   })

//   useEffect(() => {
//     if (!selectedTypeX && !groupVcate && !setxdata) {
//       return
//     }
//     const getCCCC = async () => {
//       setChartData({
//         labels: groupVcate,
//         datasets: setxdata,
//       })
//       setChartOptions({
//         plugins: {
//           legend: {
//             position: 'top',
//           },
//           title: {
//             display: true,
//             text: `L=ปี V=ผลิตภัณฑ์ G=ผลิตภัณฑ์ ข้อมูลพื้นที่`,
//           },
//         },
//         maintainAspectRatio: false,
//         responsive: true,
//       })
//     }

//     getCCCC()

//     return () => {}
//   }, [])

//   return (
//     <>
//       <PageSEO title={`Contact - ${siteMetadata.author}`} description={siteMetadata.description} />
//       <Image
//         className="w-full h-auto object-contain rounded-2xl"
//         src={'/static/images/DataServic/data-center.webp'}
//         alt="Banner-Contact"
//         width="1920"
//         height="1080"
//       />
//       <div className="bg-[url('/static/images/Contact_Us/bg_contact_3.png')] bg-cover py-8 rounded-2xl">
//         <div className="mx-auto max-w-4xl bg-gradient-to-b from-gray-100 rounded-2xl">
//           <div className="space-y-2 pb-8 pt-6 md:space-y-5">
//             <h1 className="text-lg text-center font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
//               DATA CENTER
//             </h1>
//             <p className="text-lg text-center leading-7 text-[#004DB3] dark:text-gray-400">
//               ศูนย์ข้อมูลเทคโนโลยีสารสนเทศและการสื่อสาร
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="py-4 md:py-8">
//         <div className="text-center">
//           <p>
//             ประเภท {selectedTypeX && selectedTypeX} จากปี {selectedFrom_Year && selectedFrom_Year}{' '}
//             ถึง {selectedTo_Year && selectedTo_Year} <br />
//             พื้นที่ {selectedDistrict && selectedDistrict}
//           </p>
//         </div>
//         <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4">
//           <div>
//             <Listbox value={selectedTypeX} onChange={setSelectedTypeX}>
//               {({ open }) => (
//                 <>
//                   <Listbox.Label className="block text-sm font-medium text-gray-700">
//                     Type
//                   </Listbox.Label>
//                   <div className="relative mt-1">
//                     <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
//                       <span className="block truncate">{selectedTypeX}</span>
//                       <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                         <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                       </span>
//                     </Listbox.Button>

//                     <Transition
//                       show={open}
//                       as={Fragment}
//                       leave="transition ease-in duration-100"
//                       leaveFrom="opacity-100"
//                       leaveTo="opacity-0"
//                     >
//                       <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                         {props.TypeX.map((persoXn, indx) => (
//                           <Listbox.Option
//                             key={indx}
//                             className={({ active }) =>
//                               classNames(
//                                 active ? 'text-white bg-indigo-600' : 'text-gray-900',
//                                 'relative cursor-default select-none py-2 pl-8 pr-4'
//                               )
//                             }
//                             value={persoXn}
//                           >
//                             {({ selectedTypeX, active }) => (
//                               <>
//                                 <span
//                                   className={classNames(
//                                     selectedTypeX ? 'font-semibold' : 'font-normal',
//                                     'block truncate'
//                                   )}
//                                 >
//                                   {persoXn}
//                                 </span>

//                                 {selectedTypeX ? (
//                                   <span
//                                     className={classNames(
//                                       active ? 'text-white' : 'text-indigo-600',
//                                       'absolute inset-y-0 left-0 flex items-center pl-1.5'
//                                     )}
//                                   >
//                                     <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                                   </span>
//                                 ) : null}
//                               </>
//                             )}
//                           </Listbox.Option>
//                         ))}
//                       </Listbox.Options>
//                     </Transition>
//                   </div>
//                 </>
//               )}
//             </Listbox>
//           </div>

//           <div>
//             <Listbox value={selectedFrom_Year} onChange={setSelectedFrom_Year}>
//               {({ open }) => (
//                 <>
//                   <Listbox.Label className="block text-sm font-medium text-gray-700">
//                     From Year
//                   </Listbox.Label>
//                   <div className="relative mt-1">
//                     <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
//                       <span className="block truncate">{selectedFrom_Year}</span>
//                       <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                         <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                       </span>
//                     </Listbox.Button>

//                     <Transition
//                       show={open}
//                       as={Fragment}
//                       leave="transition ease-in duration-100"
//                       leaveFrom="opacity-100"
//                       leaveTo="opacity-0"
//                     >
//                       <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                         {props.Year.map((persoXn, indx) => (
//                           <Listbox.Option
//                             key={indx}
//                             className={({ active }) =>
//                               classNames(
//                                 active ? 'text-white bg-indigo-600' : 'text-gray-900',
//                                 'relative cursor-default select-none py-2 pl-8 pr-4'
//                               )
//                             }
//                             value={persoXn}
//                           >
//                             {({ selectedFrom_Year, active }) => (
//                               <>
//                                 <span
//                                   className={classNames(
//                                     selectedFrom_Year ? 'font-semibold' : 'font-normal',
//                                     'block truncate'
//                                   )}
//                                 >
//                                   {persoXn}
//                                 </span>

//                                 {selectedFrom_Year ? (
//                                   <span
//                                     className={classNames(
//                                       active ? 'text-white' : 'text-indigo-600',
//                                       'absolute inset-y-0 left-0 flex items-center pl-1.5'
//                                     )}
//                                   >
//                                     <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                                   </span>
//                                 ) : null}
//                               </>
//                             )}
//                           </Listbox.Option>
//                         ))}
//                       </Listbox.Options>
//                     </Transition>
//                   </div>
//                 </>
//               )}
//             </Listbox>
//           </div>
//           <div>
//             <Listbox value={selectedTo_Year} onChange={setSelectedTo_Year}>
//               {({ open }) => (
//                 <>
//                   <Listbox.Label className="block text-sm font-medium text-gray-700">
//                     To Year
//                   </Listbox.Label>
//                   <div className="relative mt-1">
//                     <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
//                       <span className="block truncate">{selectedTo_Year}</span>
//                       <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                         <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                       </span>
//                     </Listbox.Button>

//                     <Transition
//                       show={open}
//                       as={Fragment}
//                       leave="transition ease-in duration-100"
//                       leaveFrom="opacity-100"
//                       leaveTo="opacity-0"
//                     >
//                       <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                         {props.Year.map((persoXn, indx) => (
//                           <Listbox.Option
//                             key={indx}
//                             className={({ active }) =>
//                               classNames(
//                                 active ? 'text-white bg-indigo-600' : 'text-gray-900',
//                                 'relative cursor-default select-none py-2 pl-8 pr-4'
//                               )
//                             }
//                             value={persoXn}
//                           >
//                             {({ selectedTo_Year, active }) => (
//                               <>
//                                 <span
//                                   className={classNames(
//                                     selectedTo_Year ? 'font-semibold' : 'font-normal',
//                                     'block truncate'
//                                   )}
//                                 >
//                                   {persoXn}
//                                 </span>

//                                 {selectedTo_Year ? (
//                                   <span
//                                     className={classNames(
//                                       active ? 'text-white' : 'text-indigo-600',
//                                       'absolute inset-y-0 left-0 flex items-center pl-1.5'
//                                     )}
//                                   >
//                                     <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                                   </span>
//                                 ) : null}
//                               </>
//                             )}
//                           </Listbox.Option>
//                         ))}
//                       </Listbox.Options>
//                     </Transition>
//                   </div>
//                 </>
//               )}
//             </Listbox>
//           </div>
//           <div>
//             <Listbox value={selectedDistrict} onChange={setSelectedDistrict}>
//               {({ open }) => (
//                 <>
//                   <Listbox.Label className="block text-sm font-medium text-gray-700">
//                     District
//                   </Listbox.Label>
//                   <div className="relative mt-1">
//                     <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
//                       <span className="block truncate">{selectedDistrict}</span>
//                       <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                         <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                       </span>
//                     </Listbox.Button>

//                     <Transition
//                       show={open}
//                       as={Fragment}
//                       leave="transition ease-in duration-100"
//                       leaveFrom="opacity-100"
//                       leaveTo="opacity-0"
//                     >
//                       <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                         {props.District.map((persoXn, indx) => (
//                           <Listbox.Option
//                             key={indx}
//                             className={({ active }) =>
//                               classNames(
//                                 active ? 'text-white bg-indigo-600' : 'text-gray-900',
//                                 'relative cursor-default select-none py-2 pl-8 pr-4'
//                               )
//                             }
//                             value={persoXn}
//                           >
//                             {({ selectedDistrict, active }) => (
//                               <>
//                                 <span
//                                   className={classNames(
//                                     selectedDistrict ? 'font-semibold' : 'font-normal',
//                                     'block truncate'
//                                   )}
//                                 >
//                                   {persoXn}
//                                 </span>

//                                 {selectedDistrict ? (
//                                   <span
//                                     className={classNames(
//                                       active ? 'text-white' : 'text-indigo-600',
//                                       'absolute inset-y-0 left-0 flex items-center pl-1.5'
//                                     )}
//                                   >
//                                     <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                                   </span>
//                                 ) : null}
//                               </>
//                             )}
//                           </Listbox.Option>
//                         ))}
//                       </Listbox.Options>
//                     </Transition>
//                   </div>
//                 </>
//               )}
//             </Listbox>
//           </div>

//           <div className="col-span-2 w-full md:w-60">
//             <h3>Multi Product</h3>
//             <Picky
//               options={lxProd}
//               className="relative cursor-default rounded-md border border-gray-300 bg-white text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
//               labelKey="label"
//               valueKey="value"
//               multiple={true}
//               includeFilter
//               includeSelectAll
//               value={multiValue}
//               onChange={setMultiValue}
//               renderList={({ items, selected, multiple, selectValue, getIsSelected }) =>
//                 items.map((item, ixos) => {
//                   const label = `${item.label}` //เลือก? ${item.value % 2 === 0 ? 'ใช่' : 'ไม่'}
//                   return (
//                     <li key={ixos} onClick={() => selectValue(item)}>
//                       {getIsSelected(item) ? <strong>{label}</strong> : label}
//                     </li>
//                   )
//                 })
//               }
//             />
//           </div>
//           <div>
//             <p className="py-4 text-center text-xl font-semibold">
//               {mastfiltered && `พบ ${mastfiltered.length} รายการ`}{' '}
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
//         <div>
//           <div className="bh-white m-auto h-[50vh] w-full rounded-lg border p-4 md:col-span-2 lg:h-[70vh] py-8">
//             <div className="text-center">
//               <p>{`กราฟแท่ง ${selectedTypeX} จาก ${selectedFrom_Year} ถึง ${selectedTo_Year} พื้นที่ ${selectedDistrict}`}</p>
//             </div>
//             <Bar data={chartData} options={chartOptions} />
//           </div>
//         </div>
//         <div>
//           <div className="bh-white m-auto h-[50vh] w-full rounded-lg border p-4 md:col-span-2 lg:h-[70vh] py-8">
//             <div className="text-center">
//               <p>{`กราฟเส้น ${selectedTypeX} จาก ${selectedFrom_Year} ถึง ${selectedTo_Year} พื้นที่ ${selectedDistrict}`}</p>
//             </div>
//             <Line data={chartData} options={chartOptions} />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export async function getServerSideProps(context) {
//   const items = await getDataFromSrvXXX()
//   const { carbrand, carmodel, min, max } = context.query

//   // const Region = items.reduce((previous, current) => {
//   //   if (!previous.includes(current.Region)) {
//   //     previous.push(current.Region)
//   //   }
//   //   return previous
//   // }, [])

//   const TypeX = items.reduce((previous, current) => {
//     if (!previous.includes(current.Type)) {
//       previous.push(current.Type)
//     }
//     return previous
//   }, [])

//   const Product = items.reduce((previous, current) => {
//     if (!previous.includes(current.Product)) {
//       previous.push(current.Product)
//     }
//     return previous
//   }, [])

//   const District = items.reduce((previous, current) => {
//     if (!previous.includes(current.District)) {
//       previous.push(current.District)
//     }

//     return previous
//   }, [])

//   const Year = items.reduce((previous, current) => {
//     if (!previous.includes(current.Year)) {
//       previous.push(current.Year)
//     }
//     previous.sort()
//     return previous
//   }, [])

//   // const Source = items.reduce((previous, current) => {
//   //   if (!previous.includes(current.Source)) {
//   //     previous.push(current.Source)
//   //   }

//   //   return previous
//   // }, [])

//   // const categorie_id = items.reduce((previous, current) => {
//   //   if (!previous.includes(current.categorie_id)) {
//   //     previous.push(current.categorie_id)
//   //   }

//   //   return previous
//   // }, [])

//   // const odometerReading = items.reduce((previous, current) => {
//   //   if (!previous.includes(current.odometerReading)) {
//   //     previous.push(current.odometerReading)
//   //   }

//   //   return previous
//   // }, [])

//   // const year = items.reduce((previous, current) => {
//   //   if (!previous.includes(current.year)) {
//   //     previous.push(current.year)
//   //   }

//   //   return previous
//   // }, [])

//   //console.log(result)

//   return {
//     props: {
//       buudata: items,
//       TypeX,
//       Product,
//       Year,
//       District,
//     },
//   }
// }

import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import NewsletterForm from '@/components/NewsletterForm'
import banner_1920x980 from '@/data/img/banner/banner_1920x980.jpg'
import bg_data_center_2 from '@/data/img/banner/bg_data_center_2.png'
import { useSelector, useDispatch } from 'react-redux'
import { footerActions } from '../store/footerData'

const MAX_DISPLAY = 12

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const resxz = await fetch(`https://baansuanpui.com/api/categories`)
  const DataCategories = await resxz.json()
  const resxza = await fetch(`https://baansuanpui.com/api/generals`)
  const DataGenerals = await resxza.json()
  // const jdata = DataCategories.json()
  //console.log(DataGenerals)
  return { props: { DataCatego: DataCategories, DataGene: DataGenerals } }
}

export default function DataServices({ DataCatego, DataGene }) {
  const dispatch = useDispatch()
  const languageSW = useSelector((state) => state.language)
  //console.log(languageSW.Language)
  if (DataGene['footer'][0]) {
    dispatch(footerActions.setfooterData(DataGene['footer'][0]))
  }
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="py-0">
          <Image
            className="w-full h-auto object-contain rounded-none"
            src={'https://baansuanpui.com/' + DataGene['data'][0].index_cover_path}
            alt={DataGene['data'][0].index_title_content}
            width="1920"
            height="1080"
          />
        </div>

        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-lg font-extrabold leading-9 text-center tracking-tight text-[#0966D5] dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            ข้อมูลให้บริการ
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 text-center dark:text-gray-400">
            {siteMetadata.description}
          </p> */}
        </div>
        <ul className="px-0 md:px-52 md:px-10 bg-[url('/static/images/bg_home_ข้อมูลให้บริการ.png')] object-cover">
          <li className="py-4 md:py-12 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 items-baseline">
            {!DataCatego.length && 'No posts found.'}
            {DataCatego.slice(0, MAX_DISPLAY).map((frontMatter, indxs) => {
              //const { slug, date, title, summary, tags, images } = frontMatter
              const {
                id,
                title_th,
                title_en,
                cover_path,
                alt_cover,
                banner_path,
                alt_banner,
                des_th,
                slug,
                des_en,
                enable,
              } = frontMatter.data
              return (
                <article
                  key={indxs}
                  className="bg-white drop-shadow-lg rounded-md md:rounded-2xl px-2 py-2 md:px-4 md:py-4"
                >
                  <div className="space-y-2 ">
                    <div>
                      <Image
                        className="w-full h-[250px] object-cover rounded-md md:rounded-2xl"
                        src={'https://baansuanpui.com/' + cover_path}
                        alt={alt_cover}
                        width="500"
                        height="500"
                      />
                      <div className="py-4">
                        <div className="text-center">
                          <h2 className="text-lg md:text-2xl font-bold leading-8 tracking-tight line-clamp-1">
                            <Link href={`/${slug}`} className="text-[#0F8787] dark:text-gray-100">
                              {languageSW.Language == 'th' ? title_th : title_en}
                            </Link>
                          </h2>
                          {/* <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>{formatDate(date)}</time>
                          </dd>
                        </dl> */}
                          {/* <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div> */}
                        </div>
                        <p className="text-xs md:text-base text-center prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-1">
                          {des_th}
                        </p>
                      </div>
                      {/* <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          อ่านต่อ &rarr;
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </article>
              )
            })}
          </li>
        </ul>
      </div>
      {DataCatego.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}

//getHomeCategories
