import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { business, eng, englishFlag, glasses, help, location, order, ru, russiaFlag, shop, uzbekFlag } from "../../assets/imgs";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { styles } from "../../util/style";
// import { Select, Space } from 'antd';
import { Button, Divider, Popover, Segmented } from 'antd';

const TopHeader = () => {
    const [dressInfo, setDressInfo] = useContext(dressMainData)

    const SeasonTypeArray = [
        { id: 1, type: "Uzbekcha", icons: uzbekFlag },
        { id: 2, type: "Russian", icons: russiaFlag },
        { id: 3, type: "English", icons: englishFlag }
    ]

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    let dataStyle = ''
    let genderStyle = ''
    if (dressInfo?.type == 1111) {
        dataStyle = " hover:text-borderSpring "
        genderStyle = "focus:text-borderSpring focus:bg-bgSpring focus:border-borderSpring focus:text-borderSpring"
    }
    if (dressInfo?.type == 2222) {
        dataStyle = " hover:text-borderSummer"
        genderStyle = "focus:text-borderSummer focus:bg-bgSummer focus:border-borderSummer focus:text-borderSummer"
    }
    if (dressInfo?.type == 3333) {
        dataStyle = " hover:text-borderAutumm "
        genderStyle = "focus:text-borderAutumm focus:bg-bgAutumm focus:border-borderAutumm focus:text-borderAutumm"
    }
    if (dressInfo?.type == 4444) {
        dataStyle = " hover:text-borderWinter "
        genderStyle = "focus:text-borderWinter focus:bg-bgWinter focus:border-borderWinter focus:text-borderWinter"
    }
    // -----Language Change-------------------
    const [selectLang, setselectLang] = useState(1);

    const LanguageList = [
        { id: 1, type: "Uzbekcha", icons: uzbekFlag },
        { id: 2, type: "Russian", icons: russiaFlag },
        { id: 3, type: "English", icons: englishFlag }
    ]

    const [openLang, setOpenLang] = useState(false);

    const handleOpenChangeWear = (newOpen) => {
        setOpenLang(newOpen);
    };

    const handleLangValue = (value) => {
        setselectLang(value)
        setOpenLang(false);
    }


    const contentLang = (
        <div className="w-[132px] h-fit m-0 p-0">
            {
                LanguageList.map(data => {
                    return (
                        <div
                            key={data?.id}
                            className={`p-2 text-sm cursor-pointer hover:bg-bgColor flex items-center justify-center ${dataStyle}`}
                            onClick={() => {
                                handleLangValue(data?.id)
                            }
                            }
                        >
                            <span className="mr-1"><img src={data?.icons} alt="" /></span>
                            <span className={`not-italic font-normal text-sm leading-4 text-black ${dataStyle}`}>{data?.type}</span>
                        </div>
                    )
                })
            }
        </div>
    );


    // -------City Change -------------
    const [selectCity, setSelectCity] = useState("Tashkent");
    const [openRegion, setOpenRegion] = useState(false);

    const handleOpenChangeCity = (newOpen) => {
        setOpenRegion(newOpen);
    };

    const handleCityValue = (value) => {
        setSelectCity(value)
        setOpenRegion(false);
    }


    const CityList = [
        { id: 1, type: "Samarqand" },
        { id: 2, type: "Sirdaryo" },
        { id: 3, type: "Jizzax" },
        { id: 4, type: "Andijon" },
        { id: 5, type: "Xorazm" },
        { id: 6, type: "Navoiy" },
    ]


    const contentCity = (
        <div className="w-[132px] h-fit m-0 p-0">
            {
                CityList.map(data => {
                    return (
                        <div
                            key={data?.id}
                            className={`p-2 pl-7 text-sm text-start hover:bg-bgColor cursor-pointer ${dataStyle}`}
                            onClick={() => {
                                handleCityValue(data?.type)
                            }
                            }
                        >
                            {data?.type}
                        </div>
                    )
                })
            }
        </div>
    );

    return (
        <div className="top bg-bgColor hidden md:block">
            <div className="w-full max-w-[1440px] ss:px-4 md:px-[80px] mx-auto ">
                <div className={`${styles.container} mx-auto  text-[15px]`}>
                    <div className={`${styles.flexBetween} py-[2px] text-[13px]`}>
                        <div className="left flex items-center">
                            <Link to="/" className="flex items-center ">
                                <img src={location} alt="location" className="mr-2" />
                                <span className="text-textColor mr-[6px] font-medium">Город:</span>
                                {/* <span className="font-medium border-b border-slate-900 text-black mr-[45px]">Ташкент</span> */}
                                <div className="w-[70px] font-medium   flex items-center ">

                                    <Popover
                                        open={openRegion}
                                        onOpenChange={handleOpenChangeCity}
                                        className=" flex  items-center  "
                                        trigger="click"
                                        options={['Hide']}
                                        placement="bottom"
                                        content={contentCity} >
                                        <a className="border-b border-slate-900" href="#">{selectCity}</a>
                                    </Popover>

                                    {/* <div
                                        onClick={() => setOpenCity(!openCity)}
                                        className={`w-[120px]  font-medium  text-black mr-[45px]      ${!selectCity && "text-gray-700"
                                            }`}
                                    >
                                        <a className="border-b border-slate-900" href="#">{selectCity}</a>
                                    </div>
                                    <ul
                                        className={`bg-white w-[150px] ml-[-5%] mt-[20%] overflow-y-auto absolute
                                                          z-50 rounded shadow-lg 	 ${openCity ? "max-h-60" : "max-h-0"
                                            } `}
                                    >
                                        {CityList.map(data => {
                                            return (
                                                <li
                                                    key={data?.id}
                                                    className={`p-2 pl-7 text-sm text-start hover:bg-bgColor ${dataStyle}`}
                                                    onClick={() => {
                                                        handleCityValue(data?.type)
                                                        setOpenCity(false)
                                                    }
                                                    }
                                                >
                                                    {data?.type}
                                                </li>
                                            )
                                        })}
                                    </ul> */}
                                </div>
                            </Link>

                            <div className="w-[100px] rounded bg-white ml-[58px]  mr-3 font-medium select-none cursor-pointer">

                                {
                                    LanguageList.filter(data => data.id === selectLang).map(data => {
                                        return (
                                            <Popover
                                                key={data?.id}
                                                open={openLang}
                                                onOpenChange={handleOpenChangeWear}
                                                className="w-full flex  py-[5px] px-3 items-center "
                                                trigger="click"
                                                options={['Hide']}
                                                placement="bottom"
                                                content={contentLang} >
                                                <span className="mr-1"><img src={data?.icons} alt="" /></span>
                                                <span>{data?.type}</span>
                                            </Popover>
                                        )
                                    })
                                }

                            </div>


                            <div className="flex items-center bg-white rounded px-3 py-[6px] cursor-pointer mr-3">
                                <img src={glasses} alt="glasses" className="mr-2" />
                                <span className="font-medium">Спец. возможности</span>
                            </div>
                        </div>
                        <div className="right flex items-center">
                            <Link to="#" className="flex items-center mr-[25.5px]">
                                <img src={help} alt="help" className="mr-2" />
                                <span className="text-textColor text-[13px] font-medium">Помощь</span>
                            </Link>
                            <Link to="#" className="flex items-center">
                                <img src={business} alt="business" className="mr-2" />
                                <span className="text-textColor text-[13px] font-medium">Бизнес</span>
                            </Link>
                            <div className="line h-5 border text-textColor ml-6"></div>
                            <Link to="#" className="flex items-center ml-[26.25px]">
                                <img src={order} alt="my orders" className="mr-2" />
                                <span className="text-textColor font-medium">Мои заказы</span>
                            </Link>
                            <button className="flex items-center bg-white rounded px-3 py-[6px] cursor-pointer ml-6">
                                <img src={shop} alt="shop" className="mr-2" />
                                <span className="font-medium">Магазины</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopHeader