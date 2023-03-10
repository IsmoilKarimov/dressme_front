import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { adidas, arrowBottomBlack, arrowBottomRight, autummBrand, AutummCategory, AutummFemale, AutummMale, autummSeason, autummVolume, blog, booking, brush, bucket, business, businessBlack, catalog, chanel, close, clothing, contact, dashboard, dolce, dollar, eng, female, gucci, heart, help, helpBlack, hm, lacoste, location, logo, logoo, louis, male, map, menu, nike, prada, puma, search, shop, springBrand, SpringCategory, SpringFemale, SpringMale, springSeason, springVolume, summerBrand, SummerCategory, SummerFemale, SummerMale, summerSeason, summerVolume, tommy, topBrands, user, voice, winter, winterBrand, WinterCategory, WinterFemale, WinterMale, winterSeason, winterVolume, zara, } from "../../assets/imgs";
import { styles } from "../../util/style";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { GrClose } from "react-icons/gr";
import { Popover, Modal, Button } from 'antd';

const MediumHeader = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(true);
  const [toggle, setToggle] = useState(false);

  const [clothesTypeMobile, setClothesTypeMobile] = useState(false)
  const [priceToggleMobile, setPriceToggleMobile] = useState(false)
  const [brandToggleMobile, setBrandToggleMobile] = useState(false)
  const [selectColorToggleMobile, setSelectColorToggleMobile] = useState(false)
  useEffect(() => {
    if (clothesTypeMobile || priceToggleMobile || brandToggleMobile || selectColorToggleMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [clothesTypeMobile, priceToggleMobile, brandToggleMobile, selectColorToggleMobile])




  // const [changeGenderColor, setChangeGenderColor] = useState(false)

  const [dressInfo, setDressInfo] = useContext(dressMainData)
  let dataStyle = ''

  let genderStyle = ''
  let hoverText = ''


  if (dressInfo?.type == 1111) {
    dataStyle = "bg-bgSpring bg-opacity-10	  text-borderSpring "
    hoverText = " hover:text-borderSpring "
    genderStyle = "focus:text-borderSpring focus:bg-bgSpring focus:border-borderSpring focus:text-borderSpring"
  }
  if (dressInfo?.type == 2222) {
    dataStyle = "bg-bgSummer  bg-opacity-10  text-borderSummer"
    hoverText = " hover:text-borderSummer "
    genderStyle = "focus:text-borderSummer focus:bg-bgSummer focus:border-borderSummer focus:text-borderSummer"
  }
  if (dressInfo?.type == 3333) {
    dataStyle = "bg-bgAutumm bg-opacity-10  text-borderAutumm"
    hoverText = " hover:text-borderAutumm "
    genderStyle = "focus:text-borderAutumm focus:bg-bgAutumm focus:border-borderAutumm focus:text-borderAutumm"
  }
  if (dressInfo?.type == 4444) {
    dataStyle = "bg-bgWinter bg-opacity-10  text-borderWinter"
    hoverText = " hover:text-borderWinter "
    genderStyle = "focus:text-borderWinter focus:bg-bgWinter focus:border-borderWinter focus:text-borderWinter"
  }


  const SeasonTypeArray = [
    { id: 1111, type: "Spring", icons: springSeason },
    { id: 2222, type: "Summer", icons: summerSeason },
    { id: 3333, type: "Autumm", icons: autummSeason },
    { id: 4444, type: "Winter", icons: winterSeason },
  ]
  const BrandTypeArray = [
    { id: 1111, type: "Spring", icons: springBrand },
    { id: 2222, type: "Summer", icons: summerBrand },
    { id: 3333, type: "Autumm", icons: autummBrand },
    { id: 4444, type: "Winter", icons: winterBrand },
  ]
  const VolumeTypeArray = [
    { id: 1111, type: "Spring", icons: springVolume },
    { id: 2222, type: "Summer", icons: summerVolume },
    { id: 3333, type: "Autumm", icons: autummVolume },
    { id: 4444, type: "Winter", icons: winterVolume },
  ]
  const CategoryTypeArray = [
    { id: 1111, type: "Spring", icons: SpringCategory },
    { id: 2222, type: "Summer", icons: SummerCategory },
    { id: 3333, type: "Autumm", icons: AutummCategory },
    { id: 4444, type: "Winter", icons: WinterCategory },
  ]
  const [personItems, setPersonItems] = useState([
    // { id: 1111, male: SpringMale, female: SpringFemale, boy: SpringBoy, girls: SpringGirl, childs: SpringChild },
    { id: 1111, man: SpringMale, woman: SpringFemale },
    { id: 2222, man: SummerMale, woman: SummerFemale },
    { id: 3333, man: AutummMale, woman: AutummFemale },
    { id: 4444, man: WinterMale, woman: WinterFemale },
  ])
  //------------------------------------------------------------------------------------------------
  const toggleHamburger = () => setHamburgerMenu((val) => !val);

  // Mobile Wear Brand Type
  const [selectWearMobile, setSelectWearMobile] = useState("Clothing type");
  const handleWearMobile = (value) => {
    setSelectWearMobile(value)
  }
  const wearMobileList = [
    { id: 1, type: "All Clothing types" },
    { id: 2, type: "Headwear" },
    { id: 3, type: "Outwear" },
    { id: 4, type: "Underwear" },
    { id: 5, type: "Legwear" },
    { id: 6, type: "Accessory" },
  ]
  // Mobile Price Brand Type
  const [selectPriceMobile, setSelectPriceMobile] = useState("Under 100$");
  const handlePriceMobile = (value) => {
    setSelectPriceMobile(value)
  }

  const PriceMobileList = [
    { id: 1, type: "At all prices" },
    { id: 2, type: "More than 500 $" },
    { id: 3, type: "Under 500$" },
    { id: 4, type: "Under 200$" },
    { id: 5, type: "Under 100$" },
    { id: 6, type: "Under 50$" },
  ]

  // Mobile Change color Type
  const [changeColor, setChangeColor] = useState([

    { id: 1, value: 1, action: false, colors: "bg-purple-700" },
    { id: 2, value: 2, action: false, colors: "bg-green-600" },
    { id: 3, value: 3, action: false, colors: "bg-red-700" },
    { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
    { id: 5, value: 5, action: false, colors: "bg-black" },
    { id: 6, value: 6, action: false, colors: "bg-white" },
    { id: 7, value: 7, action: false, colors: "bg-blue-500" },
    { id: 8, value: 8, action: false, colors: "bg-orange-600" },
    { id: 9, value: 9, action: false, colors: "bg-purple-400" },
    { id: 10, value: 10, action: false, colors: "bg-blue-900" },
    { id: 11, value: 11, action: false, colors: "bg-yellow-900" },
    { id: 12, value: 12, action: false, colors: "bg-gray-600" },

  ])


  // Mobile top Branding Data Lists
  const campany = [
    { id: 1, imgFull: adidas },
    { id: 2, imgFull: chanel },
    { id: 3, imgFull: dolce },
    { id: 4, imgFull: gucci },
    { id: 5, imgFull: hm },
    { id: 6, imgFull: lacoste },
    { id: 7, imgFull: louis },
    { id: 8, imgFull: nike },
    { id: 9, imgFull: prada },
    { id: 10, imgFull: puma },
    { id: 11, imgFull: tommy },
    { id: 12, imgFull: zara },

  ]
  // ------------------------------------------------------------------------------------------------

  // ----------------Wear state management----------------------------
  const [openwear, setOpenwear] = useState(false);

  const handleOpenChangeWear = (newOpen) => {
    setOpenwear(newOpen);
  };


  const handleSeason = (id) => {
    setDressInfo({
      type: id
    })
    setOpenwear(false);

  }

  const contentWear = (
    <div className="ss:w-fit md:w-[152px] h-fit m-0 p-0 ">
      {
        SeasonTypeArray.map(value => {
          return (
            <p key={value?.id}
              className='w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-medium text-sm leading-4 text-center hover:bg-bgColor' onClick={() => handleSeason(value.id)}>
              <span className='mr-3 '><img src={value?.icons} alt="" /></span>
              <span className={`ss:hidden md:inline-block font-medium text-base text-black not-italic ${hoverText}`}>{value?.type}</span>
            </p>
          )
        })
      }
    </div>
  );

  const [showModal, setShowModal] = useState(false);



  return (
    <div className="flex flex-col justify-center items-center m-0 p-0 box-border">
      <div className='max-w-[1280px] w-[100%] px-4 ss:block md:flex justify-center items-center m-auto '>
        <div>
          <div className="w-full flex justify-center items-center py-3 ">
            <div className=" w-full flex items-center ss:w-full md:w-fit justify-between ">
              {/* Menu section */}
              <div onClick={toggleHamburger} className={`flex items-center justify-center bg-bgColor border  ss:w-12 ss:h-12 rounded cursor-pointer md:hidden `}>

                <img src={!hamburgerMenu ? close : menu} alt="voice" className={`${close ? 'w-6 h-6' : ''} `} />

                {/*Starting of Opened Hamburger menu section */}
                <div className={`${!hamburgerMenu ? "hamburger flex flex-col ease-linear duration-500 overscroll-none" : "left-[-1000px] sm:left-[-1000px] ease-linear duration-500"}  top-[62px] left-0 fixed right-0 w-full bg-white z-10 h-full overflow-y-scroll ss:px-[15px] ll:flex-fit`}>

                  {/* Searching section */}
                  <div className="search flex items-center justify-between rounded font-medium h-10 mt-3 mb-3 border border-searchBg ss:mt-3 md:hidden w-full">
                    <img src={search} alt="search" className=" flex ss:pl-[11.65px] md:hidden" />
                    <input type="text" placeholder="Search products or brands" className="bg-transparent w-full px-3 h-10 text-[14px] border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-12" />
                  </div>
                  {/* Music and Map selection for Mobile */}
                  <div className="flex items-center justify-between h-11 mb-3">
                    <button className="left py-[9px] px-10 rounded flex items-center justify-center font-medium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                      {
                        VolumeTypeArray.filter(data => data?.id == dressInfo?.type).map(data => {
                          return (
                            <img key={data?.id} src={data?.icons} alt="misic" />
                          )
                        })}
                      <span className="ml-[10px]">Music</span>
                    </button>
                    <Link to="#" className="right px-10 py-[9px] rounded flex items-center justify-center font-medium border border-gray-300 bg-bgColor ss:w-[48%]">
                      <img src={map} alt="map" />
                      <span className="ml-[10px]">Map</span>
                    </Link>
                  </div>

                  {/* Categories */}
                  <ul className="flex flex-col">
                    <li>
                      <button className="flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 w-full">
                        <div className="flex items-center">
                          <span className="border-r border-gray-300 py-3 pr-5">
                            <img src={dashboard} alt="" />
                          </span>
                          <span className="ml-[11.67px]">Dashboard (demo)</span>
                        </div>
                        <img src={arrowBottomRight} alt="" className="arrowRotate ml-auto" />
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 w-full">
                        <div className="flex items-center">
                          <span className="border-r border-gray-300 py-3 pr-5">
                            <img src={businessBlack} alt="" />
                          </span>
                          <span className="ml-[11.67px]">Business</span>
                        </div>
                        <img
                          src={arrowBottomRight}
                          alt=""
                          className="arrowRotate ml-auto"
                        />
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 w-full">
                        <div className="flex items-center">
                          <span className="border-r border-gray-300 py-3 pr-5">
                            <img src={booking} alt="" />
                          </span>
                          <span className="ml-[11.67px]">My orders</span>
                        </div>
                        <img
                          src={arrowBottomRight}
                          alt=""
                          className="arrowRotate ml-auto"
                        />
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 w-full">
                        <div className="flex items-center">
                          <span className="border-r border-gray-300 py-3 pr-5">
                            <img src={shop} alt="" />
                          </span>
                          <span className="ml-[11.67px]">Shop</span>
                        </div>
                        <img
                          src={arrowBottomRight}
                          alt=""
                          className="arrowRotate ml-auto"
                        />
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 w-full">
                        <div className="flex items-center">
                          <span className="border-r border-gray-300 py-3 pr-5">
                            <img src={blog} alt="" />
                          </span>
                          <span className="ml-[11.67px]">My blog</span>
                        </div>
                        <img
                          src={arrowBottomRight}
                          alt=""
                          className="arrowRotate ml-auto"
                        />
                      </button>
                    </li>
                  </ul>

                  {/*Help and Contact selection for Mobile */}
                  <div className="flex items-center justify-between h-11 mb-3">
                    <button className="left py-[9px] px-10 rounded flex items-center justify-center font-medium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                      <img src={helpBlack} alt="misic" />
                      <span className="ml-[10px]">Help</span>
                    </button>
                    <Link to="#" className="left py-[9px] px-10 rounded flex items-center justify-center font-medium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                      <img src={contact} alt="map" />
                      <span className="ml-[10px]">Contact</span>
                    </Link>
                  </div>

                  {/* Line */}
                  <div className="line border-b w-[300px] border-gray-300 mb-3 ls:w-full"></div>

                  {/* Location and Language */}
                  <div className="flex items-center justify-between h-11 mb-3">
                    <button className="left py-[9px] px-10 rounded flex items-center justify-center font-medium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                      <img src={location} alt="music" />
                      <span className="ml-[10px] mr-5">Tashkent</span>
                      <img src={arrowBottomBlack} alt="" />
                    </button>
                    <Link to="#" className="left py-[9px] px-10 rounded flex items-center justify-center font-medium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                      <img src={eng} alt="map" />
                      <span className="ml-[10px] mr-5">English</span>
                      <img src={arrowBottomBlack} alt="map" />
                    </Link>
                  </div>
                </div>
                {/*Ending of Opened Hamburger menu section */}

              </div>

              {/* Logo section */}
              <div className=" flex justify-center items-center rounded h-12   ss:bg-bgColor border border-searchBgColor ss:px-5 ls:px-6 ll:px-10 ss:w-fit md:bg-white md:px-0 md:border-none ">
                {
                  BrandTypeArray.filter(data => data.id == dressInfo.type).map(data => {
                    return (
                      <img key={data?.id}
                        src={data?.icons} alt="logo" />
                    )
                  })
                }
              </div>
              {/* Voice section */}
              <div
                className={`${styles.flexCenter} bg-bgColor border border-searchBgColor px-4  ml-5 h-12 rounded-lg cursor-pointer hidden md:flex`}>
                {
                  VolumeTypeArray.filter(data => data.id == dressInfo.type).map(data => {
                    return (
                      <img key={data?.id}
                        src={data?.icons} alt="logo" />
                    )
                  })
                }
              </div>


              <div className=' ss:w-12 ss:h-12   md:w-[120px]  md:mx-4 bg-bgColor   rounded-lg ml-2'>

                {
                  SeasonTypeArray.filter(data => data.id == dressInfo.type).map(data => {
                    return (
                      <Popover
                        key={data?.id}
                        open={openwear}
                        onOpenChange={handleOpenChangeWear}
                        className="ss:w-full  h-full flex items-center justify-center border rounded-lg  ss:w-fit   cursor-pointer  "
                        trigger="click"
                        options={['Hide']}
                        placement="bottom"
                        content={contentWear} >
                        <p className='w-full h-full  sm:flex items-center  select-none cursor-pointer' >
                          <img src={data?.icons} alt="weather" className="mr-0 md:mr-[5px]" />
                          <span className="ss:hidden  font-medium hidden md:block text-[15px]">{data?.type}</span>
                        </p>
                      </Popover>
                    )
                  })
                }
              </div>





              {/* Searching section */}
              <div className="search flex items-center justify-center rounded-lg font-medium h-12 border border-red-600 md:border-transparent md:w-[624px] ss:hidden md:flex">
                {/* Catalog section */}
                <button className={`items-center  ${dataStyle}  pl-5 pr-7 h-12 rounded-l-lg cursor-pointer hidden md:flex`}>
                  {CategoryTypeArray.filter(data => data.id === dressInfo?.type).map(data => {
                    return (
                      <img key={data?.id} src={data?.icons} alt={data?.type} className="w-[18px]" />
                    )
                  })
                  }
                  <span className={` px-[9.5px] not-italic font-medium text-sm leading-4`}>??????????????</span>
                </button>
                <img src={search} alt="search" className="flex md:hidden" />
                <input type="text" placeholder="?????????? ?????????????????? ?????? ??????????????" className="bg-transparent w-full px-3 h-12 text-sm border border-transparent md:border-searchBgColor md:mx-0 md: md:px-3 md:h-12" />
                <button className="bg-searchBgColor w-[100px]  h-12 items-center justify-center rounded-r-lg border border-bgColor hidden md:flex -ml-[2px]">
                  <img src={search} alt="search" />
                </button>
              </div>

              {/* Line border */}
              <div className="line h-6 border-r-[1px] text-textColor ss:hidden md:block mx-3"></div>

              {/* Map section */}
              <Link to="#" className="flex items-center justify-center bg-bgColor border border-searchBgColor rounded-lg px-4 h-10  md:h-12 ss:text-sm md:w-[98px] md:mt-0 ss:hidden md:flex">
                <img src={map} alt="map" className="pr-[6px]" />
                <span className="font-medium text-sm">??????????</span>
              </Link>

              {/* Line border */}
              <div className="line h-6 border-r-[1px] text-textColor ss:hidden md:block mx-3"></div>

              {/* User section */}
              <button className=" items-center bg-bgColor border border-searchBgColor rounded-lg px-4 h-12 mr-2 hidden md:flex">
                <img src={user} alt="" />
              </button>

              {/* Heart section */}
              <button className="items-center bg-bgColor border border-searchBgColor rounded-lg px-4 h-12 mr-2 hidden md:flex">
                <img src={heart} alt="heart" />
              </button>

              {/* Bucket section */}
              <button className=" items-center bg-bgColor border border-searchBgColor rounded-lg px-4 h-12 relative md:flex ss:hidden">
                <img src={bucket} alt="bucket" />
                <span className="count bg-red-700 w-4 h-4 text-white text-[10px] rounded flex items-center justify-center absolute top-0 right-0 font-medium"> 4 </span>
              </button>
            </div>
          </div>
          {/* Ending of Full Screen page sesction */}

          <div className={`h-fit top-30  left-[16px] fixed  bg-white   shadow-lg duration-200 z-50 ${clothesTypeMobile ? "w-[92%]" : "w-0"
            }  `}>
            {clothesTypeMobile &&
              <div className="fixed inset-0 z-10 ">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-40"
                  onClick={() => setClothesTypeMobile(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex items-center justify-end ">
                      <button type="" onClick={() => setClothesTypeMobile(false)}><GrClose size={25} /></button>
                    </div>
                    <div className="py-4">
                      {
                        wearMobileList?.map(data => {
                          return (
                            <div onClick={() => {
                              handleWearMobile(data?.type)
                              setClothesTypeMobile(false)
                            }} className={`${hoverText} text-base font-medium hover:bg-bgColor w-full h-12 border border-solid border-searchBgColor flex items-center justify-center`}>
                              {data?.type}
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>

            }

          </div>
          <div className={`h-fit top-30  left-[16px] fixed  bg-white shadow-lg  duration-200 z-50 ${priceToggleMobile ? "w-[92%]" : "w-0"
            }  `}>
            {priceToggleMobile &&
              <div className="fixed inset-0 z-10 ">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-40"
                  onClick={() => setPriceToggleMobile(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex items-center justify-end ">
                      <button type="" onClick={() => setPriceToggleMobile(false)}><GrClose size={25} /></button>
                    </div>
                    <div className="py-4">
                      {
                        PriceMobileList?.map(data => {
                          return (
                            <div onClick={() => {
                              handlePriceMobile(data?.type)
                              setPriceToggleMobile(false)
                            }} className={` ${hoverText}  text-base font-medium hover:bg-bgColor w-full h-12 border border-solid border-searchBgColor flex items-center justify-center`}>
                              {data?.type}
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
              // <div className="p-3 rounded bg-white w-full h-full ">
              //   <div className="flex items-center justify-end ">
              //     <button type="" onClick={() => setPriceToggleMobile(false)}><GrClose size={25} /></button>
              //   </div>
              //   <div className="py-4">
              //     {
              //       PriceMobileList?.map(data => {
              //         return (
              //           <div onClick={() => {
              //             handlePriceMobile(data?.type)
              //             setPriceToggleMobile(false)
              //           }} className={` ${hoverText}  text-base font-medium hover:bg-bgColor w-full h-12 border border-solid border-searchBgColor flex items-center justify-center`}>
              //             {data?.type}
              //           </div>
              //         )
              //       })
              //     }

              //   </div>

              // </div>

            }
          </div>
          <div className={`h-fit top-30  left-[16px] fixed  bg-white shadow-lg  duration-200 z-50 ${brandToggleMobile ? "w-[92%]" : "w-0"
            }  `}>
            {brandToggleMobile &&
              <div className="fixed inset-0 z-10 ">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-40"
                  onClick={() => setBrandToggleMobile(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex items-center justify-end ">
                      <button type="" onClick={() => setBrandToggleMobile(false)}><GrClose size={25} /></button>
                    </div>
                    <div className="py-4 flex flex-wrap justify-between gap-y-5">
                      {
                        campany?.map(data => {
                          return (
                            <div className='w-[80px] h-[80px] rounded bg-bgColor  border border-solid border-borderColorCard'>
                              <img className='h-full w-full' src={data?.imgFull} alt="" />
                            </div>
                          )
                        })
                      }

                    </div>
                  </div>
                </div>
              </div>
            }

          </div>


          {/*Starting of Blocked  Hamburger Menu section */}
          <div className={`md:hidden `}>

            <div className="flex items-center justify-between w-full ">

              {/* Searching section */}
              <div className="search flex items-center rounded font-medium h-10  border ss:w-[65%] ls:w-[70%] ll:w-[72%]">
                <img src={search} alt="search" className="pl-[11.65px]" />
                <input type="text" placeholder="Search..." className="bg-transparent w-full h-full text-[14px] border border-transparent px-2  " />
              </div>

              {/* Map section */}
              <Link to="#" className="flex items-center w-full justify-center bg-bgColor border border-searchBgColor rounded ss:px-4 h-10  ss:w-[30%] ls:w-[25%] ll:w-[23%]" >
                <img src={map} alt="map" className="pr-[6px]" />
                <div className="font-medium">Map</div>
              </Link>

            </div>

            {/* Gender selection for Mobile */}
            <div className="flex flex-wrap items-center justify-between mt-3 rounded  mb-4 w-full">


              {
                personItems?.filter(value => value.id === dressInfo?.type).map(data => {
                  return (
                    <div key={data?.id} className="w-full flex items-center justify-between border border-bgColor">
                      <button className={`mr-1 ${genderStyle} font-medium w-[48%] h-12 px-[16px] justify-center flex items-center border border-searchBgColor rounded-lg`}>
                        <img src={data?.woman} alt="female" /><span className="ml-3"> ????????????????</span>
                      </button>
                      <button className={` font-medium ${genderStyle} w-[48%] h-12 border px-[16px] justify-center flex items-center  border-searchBgColor mr-1 rounded-lg`}>
                        <img src={data?.man} alt="male" /><span className="ml-3">????????????????</span>
                      </button>
                    </div>
                  )
                })
              }

              <button onClick={() => { setToggle(!toggle); }} className="flex items-center bg-btnBgColor font-medium h-12 rounded border border-gray-200 px-5 ss:w-full sm:w-[30%] ss:mt-4 sm:m-0">
                <div className="flex items-center ml-auto">
                  <img src={clothing} alt="" />
                  <span className="ml-[11.67px]">Clothing options</span>
                </div>
                <img src={arrowBottomBlack} alt="" className={`arrowRotate ml-auto ${toggle ? "rotate-180" : ""} duration-500`} />
              </button>

            </div>

            {/* Params for Mobile */}

            <div className={`${toggle ? "h-[300px]" : "h-0"} duration-500  overflow-hidden md:hidden`}>

              <ul className="ss:w-full my-4 bg-white">
                <li onClick={() => {
                  setClothesTypeMobile(!clothesTypeMobile)

                }}>
                  <button className="ss:w-full flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 md:hidden">

                    <div className="flex items-center" >
                      <span className="border-r border-gray-300 py-3 pr-5">
                        <img src={clothing} alt="" />
                      </span>
                      <span className="ml-[11.67px]">{selectWearMobile}</span>
                    </div>
                    <img src={arrowBottomRight} alt="" className="arrowRotate ml-auto" />

                  </button>
                </li>
                <li onClick={() => setPriceToggleMobile(!priceToggleMobile)}>
                  <button className="flex items-center w-full bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 md:hidden">

                    <div className="flex items-center" >
                      <span className="border-r border-gray-300 py-3 pr-5">
                        <img src={dollar} alt="" />
                      </span>
                      <span className="ml-[11.67px]">{selectPriceMobile}</span>
                    </div>
                    <img src={arrowBottomRight} alt="" className="arrowRotate ml-auto" />

                  </button>
                </li>

                <li >
                  <button className="w-full flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 md:hidden">

                    <span className="border-r w-[60px] border-gray-300 py-3 pr-5">
                      <img src={brush} alt="" />
                    </span>

                    <div className="flex items-center overflow-x-scroll">
                      <div className="ml-[11.67px] flex items-center">
                        <div className=" w-full h-[48px] flex justify-between items-center px-4   border-t	 border-solid	border-borderColorCard">
                          <label className="rounded-full mr-1 w-6 h-6 bg-purple-500 cursor-pointer  border border-solid border-borderColorCard" htmlFor="Color1">
                            <input className="hidden" type="checkbox" id="Color1" name="colors" value="1" />
                          </label>
                          <span className="mr-2">purple,</span>
                          <label className="rounded-full mr-2 w-6 h-6 bg-green-600 cursor-pointer  border	 border-solid	border-borderColorCard" htmlFor="Color2" >
                            <input className="hidden" type="checkbox" id="Color2" name="colors" value="1" />
                          </label>
                          <span className="mr-2">green,</span>
                          <label className="rounded-full mr-1 w-6 h-6 bg-red-700 cursor-pointer  border	 border-solid	border-borderColorCard" htmlFor="Color3" >
                            <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                          </label>
                          <span className="mr-2">red,</span>
                          <label className="rounded-full mr-1 w-6 h-6 bg-yellow-500 cursor-pointer  border	border-solid border-borderColorCard" htmlFor="Color4" >
                            <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                          </label>
                          <span className="mr-2">yellow,</span>
                        </div>
                      </div>
                    </div>

                    <span className="w-[40px]">
                      <img src={arrowBottomRight} alt="" className="arrowRotate ml-auto" />
                    </span>

                  </button>
                </li>
                <li onClick={() => setBrandToggleMobile(!brandToggleMobile)}>
                  <button className="w-full flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 md:hidden">

                    <div className="flex items-center">
                      <span className="border-r border-gray-300 py-3 pr-5">
                        <img src={topBrands} alt="" />
                      </span>
                      <span className="ml-[11.67px]">Top Brands</span>
                    </div>
                    <img src={arrowBottomRight} alt="" className="arrowRotate ml-auto" />

                  </button>
                </li>

              </ul>

            </div>

          </div>
          {/* Ending of Blocked  Hamburger Menu section  */}
        </div >
      </div>
    </div >

  );
};
export default MediumHeader;