import { Fragment, useEffect, useId, useRef, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { useSelector } from 'react-redux'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
import Link from 'next/link'
import CardBarChart from '@/components/CardBarChart'
import CardLineChart from '@/components/CardLineChart'
import getAllStaticPaths from 'utils/getAllStaticPaths'

export default function DataServices(props) {
  const [query, setQuery] = useState('')
  const [filterTags, setFilterTags] = useState([])
  const [SelectedAreaCode, setSelectedAreaCode] = useState(null)
  const filteredArea = useSelector((state) => state.filter.area)
  const filteredAreaCode = useSelector((state) => state.filter.AreaCode)

  const filteredDATA =
    query === ''
      ? props.buudata
      : props.buudata.filter((Area) => {
          console.log(Area.item.AreaCode)
          return Area.item.AreaCode.toLowerCase().includes(filterTags.toLowerCase())
        })

  console.log(filterTags)
  // const filteredDATA = props.buudata.filter((node) =>
  //   filterTags.length > 0 ? filterTags.every((filterTag) => node.AreaCode.map((tag) => tag.slug).includes(filterTag)) : props.buudata
  // )

  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value])
    } else {
      setFilterTags(filterTags.filter((filterTag) => filterTag !== event.target.value))
    }
  }

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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8">
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-4">
          <div>
            {/* {Object.keys(props.buudata).map((databuu, inkey) => ( */}
            {props.Area.map((databuu, inkey) => {
              // console.log(databuu)
              return (
                <div key={inkey}>
                  <label htmlFor={databuu}>
                    <input type="checkbox" onChange={filterHandler} value={databuu} id={databuu} />
                    <span>{databuu}</span>
                  </label>
                </div>
              )
            })}
          </div>
          <div>
            {/* {Object.keys(props.buudata).map((databuu, inkey) => ( */}
            {props.ItemCode.map((databuuItemCode, inkeyItemCode) => {
              // console.log(databuu)
              return (
                <div key={inkeyItemCode}>
                  <label htmlFor={databuuItemCode}>
                    <input
                      type="checkbox"
                      onChange={filterHandler}
                      value={databuuItemCode}
                      id={databuuItemCode}
                    />
                    <span>{databuuItemCode}</span>
                  </label>
                </div>
              )
            })}
          </div>

          <div>
            {/* {Object.keys(props.buudata).map((databuu, inkey) => ( */}
            {props.Item.map((dataItembuu, inkeyItem) => {
              // console.log(databuu)
              return (
                <div key={inkeyItem}>
                  <label htmlFor={dataItembuu}>
                    <input
                      type="checkbox"
                      onChange={filterHandler}
                      value={dataItembuu}
                      id={dataItembuu}
                    />
                    <span>{dataItembuu}</span>
                  </label>
                </div>
              )
            })}
          </div>

          <div>
            {/* {Object.keys(props.buudata).map((databuu, inkey) => ( */}
            {props.AreaCode.map((databuuAreaCode, inARkey) => {
              // console.log(databuu)
              return (
                <div key={inARkey}>
                  <label htmlFor={databuuAreaCode}>
                    <input
                      type="checkbox"
                      onChange={filterHandler}
                      value={databuuAreaCode}
                      id={databuuAreaCode}
                    />
                    <span>{databuuAreaCode}</span>
                  </label>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <ul>
            {filterTags.map((nodeX, kxn) => (
              <li key={kxn}>{nodeX}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
        <div>
          <CardBarChart />
        </div>
        <div>
          <CardLineChart />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const items = getAllStaticPaths()
  const { carbrand, carmodel, min, max } = context.query

  const Area = items.reduce((previous, current) => {
    if (!previous.includes(current.item.Area)) {
      previous.push(current.item.Area)
    }
    return previous
  }, [])

  const AreaCode = items.reduce((previous, current) => {
    if (!previous.includes(current.item.AreaCode)) {
      previous.push(current.item.AreaCode)
    }
    return previous
  }, [])

  const ItemCode = items.reduce((previous, current) => {
    if (!previous.includes(current.item.ItemCode)) {
      previous.push(current.item.ItemCode)
    }
    return previous
  }, [])

  const Item = items.reduce((previous, current) => {
    if (!previous.includes(current.item.Item)) {
      previous.push(current.item.Item)
    }

    return previous
  }, [])

  const ElementCode = items.reduce((previous, current) => {
    if (!previous.includes(current.item.ElementCode)) {
      previous.push(current.item.ElementCode)
    }

    return previous
  }, [])

  const XElement = items.reduce((previous, current) => {
    if (!previous.includes(current.item.Element)) {
      previous.push(current.item.Element)
    }

    return previous
  }, [])

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
      Area,
      AreaCode,
      ItemCode,
      Item,
      ElementCode,
      XElement,
    },
  }
}
