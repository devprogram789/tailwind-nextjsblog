import { Fragment, useEffect, useId, useRef, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { useSelector } from 'react-redux'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
import Link from 'next/link'
import CardBarChart from '@/components/CardBarChart'
import CardLineChart from '@/components/CardLineChart'
import getAllStaticPaths from 'utils/getAllStaticPaths'
import getAllData from 'utils/getAllData'
import Chart from 'chart.js'
import { Listbox, Transition, Combobox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
// import Select from "react-select";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

export default function DataServices(props) {
  // const filters = useSelector((state) => state.filter)
  const [query, setQuery] = useState('')
  // const [filterTags, setFilterTags] = useState([])
  // const [SelectedAreaCode, setSelectedAreaCode] = useState(null)
  // const filteredType = useSelector((state) => state.filter.type)
  // const filteredProduct = useSelector((state) => state.filter.product)
  // const filteredDistrict = useSelector((state) => state.filter.district)
  // const [selectedRegion, setSelectedRegion] = useState('กรุณาเลือก')

  const [selectedProduct, setSelectedProduct] = useState('กรุณาเลือกผลิตภัณฑ์')
  const [selectedTypeX, setSelectedTypeX] = useState('กรุณาเลือกประเภท')
  const [selectedFrom_Year, setSelectedFrom_Year] = useState('เริ่มจากปี')
  const [selectedTo_Year, setSelectedTo_Year] = useState('เลือกถึงปี')
  const [selectedDistrict, setSelectedDistrict] = useState('เลือกจังหวัด')

  // const [selectedPerson, setSelectedPerson] = useState(null)

  // const filteredPeople =
  //   query === '' ? props.buudata : props.buudata.filter((person) => {
  //     return person.Product.toLowerCase().includes(query.toLowerCase())
  //   })

  //const [selectedOptions, setSelectedOptions] = useState()

  //const filteredTypeX = selectedTypeX === '' ? props.buudata.filter((DATAC) => { return DATAC.TypeX === selectedTypeX }):props.buudata
  //const filteredProduct = selectedProduct === '' ? props.buudata.filter((DATAC) => { return DATAC.Product === selectedProduct }):props.buudata
  // const filteredFrom_Year =
  //   selectedFrom_Year === ''
  //     ? props.buudata.filter((DATAC) => {
  //         return DATAC.From_Year === selectedFrom_Year
  //       })
  //     : props.buudata
  // const filteredTo_Year =
  //   selectedTo_Year === ''
  //     ? props.buudata.filter((DATAC) => {
  //         return DATAC.To_Year === selectedTo_Year
  //       })
  //     : props.buudata
  // const filteredDistrict = selectedDistrict === '' ? props.buudata.filter((DATAC) => { return DATAC.District === selectedDistrict }):props.buudata

  // let filteredData
  // filteredData =
  //   selectedTypeX.length > 0
  //     ? [...props.buudata].filter((value) => selectedTypeX.includes(value.TypeX))
  //     : [...props.buudata]

  //filteredData = selectedTypeX.length > 0 ? props.buudata.filter((value) => selectedTypeX.includes(value.TypeX)):props.buudata
  // filteredData =
  //   selectedProduct.length > 0
  //     ? [...props.buudata].filter((value) => selectedProduct.includes(value.Product))
  //     : [...props.buudata]
  //const filteredDistrict = selectedDistrict.length > 0 ? [...props.buudata].filter((value) => selectedDistrict.includes(value.District)):[...props.buudata]
  // filteredData =
  //   selectedDistrict.length > 0
  //     ? [...props.buudata].filter((value) => selectedDistrict.includes(value.District))
  //     : [...props.buudata]
  // filteredData = selectedFrom_Year.length > 0 && selectedTo_Year.length > 0 ? props.buudata.filter((value) => selectedFrom_Year ):props.buudata

  const GGProduct = props.buudata.filter((value) => {
    return (
      value.Type.includes(selectedTypeX) &&
      value.Product.includes(selectedProduct) &&
      value.District.includes(selectedDistrict) &&
      value.Year >= selectedFrom_Year &&
      value.Year <= selectedTo_Year
    )
  })

  // const cfg = {
  //   type: 'bar',
  //   data: {
  //     datasets: [{
  //       data: GGProduct
  //     }]
  //   }
  // }
  // console.log(cfg)
  const GGXAProduct = groupBy(GGProduct, 'Product')
  const groupProduct = Object.keys(GGXAProduct).map((Product) => {
    return Product
  })

  const ggx = groupBy(GGProduct, 'Year')
  const groupVcate = Object.keys(ggx).map((category) => {
    return category
  })

  // const ssdata = GGXAProduct.map((itdm) => {
  //   console.log(itdm.Product)
  //   return  {
  //     label: "มัน",
  //     data: [50, 70,],
  //     borderColor: "rgba(20, 38, 154, 0.5)",
  //     borderWidth: "1",
  //     backgroundColor: "rgba(20, 38, 154)",
  //     stack: 'พืชไร่',
  //   }
  // })

  //console.log(GGXAProduct)

  // const maocs = filteredData.map((itemx) => {
  //   return {
  //     label: itemx.Year,
  //     backgroundColor: '#4a5568',
  //     borderColor: '#4a5568',
  //     data: [itemx.Value],
  //     fill: false,
  //     barThickness: 8,
  //   }
  // })

  //console.log(groupVcate);
  //console.log(groupByCategory)
  // console.log(filteredDistrict)

  // const filterHandler = (event) => {
  //   if (event.target.checked) {
  //     setFilterTags([...filterTags, event.target.value])
  //   } else {
  //     setFilterTags(filterTags.filter((filterTag) => filterTag !== event.target.value))
  //   }
  // }
  //console.log()

  // const getItemById = (itemId) => {
  //   return props.buudata.find((item) => item.id === itemId);
  // };

  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Image
        className="w-full h-auto object-contain rounded-2xl"
        src={'/static/images/DataServic/data-center.webp'}
        alt="Banner-Contact"
        width="1920"
        height="1080"
      />
      <div className="bg-[url('/static/images/Contact_Us/bg_contact_3.png')] bg-cover py-8 rounded-2xl">
        <div className="mx-auto max-w-4xl bg-gradient-to-b from-gray-100 rounded-2xl">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-lg text-center font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
              DATA CENTER
            </h1>
            <p className="text-lg text-center leading-7 text-[#004DB3] dark:text-gray-400">
              ศูนย์ข้อมูลเทคโนโลยีสารสนเทศและการสื่อสาร
            </p>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div>
          {selectedTypeX && selectedTypeX} {selectedProduct && selectedProduct}{' '}
          {selectedDistrict && selectedDistrict} พบ {GGProduct.length} รายการ
        </div>
        <div className="flex gap-4">
          <div>
            <Listbox value={selectedTypeX} onChange={setSelectedTypeX}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    Type
                  </Listbox.Label>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                      <span className="block truncate">{selectedTypeX}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {props.TypeX.map((persoXn, indx) => (
                          <Listbox.Option
                            key={indx}
                            className={({ active }) =>
                              classNames(
                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-8 pr-4'
                              )
                            }
                            value={persoXn}
                          >
                            {({ selectedTypeX, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selectedTypeX ? 'font-semibold' : 'font-normal',
                                    'block truncate'
                                  )}
                                >
                                  {persoXn}
                                </span>

                                {selectedTypeX ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
            {/* พบ {selectedTypeX.length} รายการ */}
          </div>

          <div>
            <Listbox value={selectedProduct} onChange={setSelectedProduct}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    Product
                  </Listbox.Label>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                      <span className="block truncate">{selectedProduct}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {props.Product.map((persoXn, indx) => (
                          <Listbox.Option
                            key={indx}
                            className={({ active }) =>
                              classNames(
                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-8 pr-4'
                              )
                            }
                            value={persoXn}
                          >
                            {({ selectedProduct, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selectedProduct ? 'font-semibold' : 'font-normal',
                                    'block truncate'
                                  )}
                                >
                                  {persoXn}
                                </span>

                                {selectedProduct ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
            {/* พบ {selectedProduct.length} รายการ */}
          </div>
          <div>
            <Listbox value={selectedFrom_Year} onChange={setSelectedFrom_Year}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    From Year
                  </Listbox.Label>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                      <span className="block truncate">{selectedFrom_Year}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {props.Year.map((persoXn, indx) => (
                          <Listbox.Option
                            key={indx}
                            className={({ active }) =>
                              classNames(
                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-8 pr-4'
                              )
                            }
                            value={persoXn}
                          >
                            {({ selectedFrom_Year, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selectedFrom_Year ? 'font-semibold' : 'font-normal',
                                    'block truncate'
                                  )}
                                >
                                  {persoXn}
                                </span>

                                {selectedFrom_Year ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
            {/* พบ {selectedFrom_Year.length} รายการ */}
          </div>
          <div>
            <Listbox value={selectedTo_Year} onChange={setSelectedTo_Year}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    To Year
                  </Listbox.Label>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                      <span className="block truncate">{selectedTo_Year}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {props.Year.map((persoXn, indx) => (
                          <Listbox.Option
                            key={indx}
                            className={({ active }) =>
                              classNames(
                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-8 pr-4'
                              )
                            }
                            value={persoXn}
                          >
                            {({ selectedTo_Year, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selectedTo_Year ? 'font-semibold' : 'font-normal',
                                    'block truncate'
                                  )}
                                >
                                  {persoXn}
                                </span>

                                {selectedTo_Year ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
            {/* พบ {selectedTo_Year.length} รายการ */}
          </div>
          <div>
            <Listbox value={selectedDistrict} onChange={setSelectedDistrict}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    District
                  </Listbox.Label>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                      <span className="block truncate">{selectedDistrict}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {props.District.map((persoXn, indx) => (
                          <Listbox.Option
                            key={indx}
                            className={({ active }) =>
                              classNames(
                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-8 pr-4'
                              )
                            }
                            value={persoXn}
                          >
                            {({ selectedDistrict, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selectedDistrict ? 'font-semibold' : 'font-normal',
                                    'block truncate'
                                  )}
                                >
                                  {persoXn}
                                </span>

                                {selectedDistrict ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
            {/* พบ {filteredDistrict.length} รายการ */}
          </div>

          <div className="w-full flex items-center ">
            {/* {filteredData.length > 0 ? (
              <p className='flex'>พบทั้งหมด {filteredData.length} รายการ</p>
            ):null} */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
        <dov>{/* <CardBarChart dtax={ggx} LXla={groupVcate} /> */}</dov>
        <div>
          <CardLineChart />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const items = await getAllData()
  const { carbrand, carmodel, min, max } = context.query

  const Region = items.reduce((previous, current) => {
    if (!previous.includes(current.Region)) {
      previous.push(current.Region)
    }
    return previous
  }, [])

  const TypeX = items.reduce((previous, current) => {
    if (!previous.includes(current.Type)) {
      previous.push(current.Type)
    }
    return previous
  }, [])

  const Product = items.reduce((previous, current) => {
    if (!previous.includes(current.Product)) {
      previous.push(current.Product)
    }
    return previous
  }, [])

  const District = items.reduce((previous, current) => {
    if (!previous.includes(current.District)) {
      previous.push(current.District)
    }

    return previous
  }, [])

  const Year = items.reduce((previous, current) => {
    if (!previous.includes(current.Year)) {
      previous.push(current.Year)
    }
    previous.sort()
    return previous
  }, [])

  const Source = items.reduce((previous, current) => {
    if (!previous.includes(current.Source)) {
      previous.push(current.Source)
    }

    return previous
  }, [])

  // const categorie_id = items.reduce((previous, current) => {
  //   if (!previous.includes(current.categorie_id)) {
  //     previous.push(current.categorie_id)
  //   }

  //   return previous
  // }, [])

  // const odometerReading = items.reduce((previous, current) => {
  //   if (!previous.includes(current.odometerReading)) {
  //     previous.push(current.odometerReading)
  //   }

  //   return previous
  // }, [])

  // const year = items.reduce((previous, current) => {
  //   if (!previous.includes(current.year)) {
  //     previous.push(current.year)
  //   }

  //   return previous
  // }, [])

  //console.log(result)

  return {
    props: {
      buudata: items,
      Region,
      TypeX,
      Product,
      Year,
      District,
      Source,
      // categorie_id,
    },
  }
}
