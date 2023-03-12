import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { adduser, arrowBottomBlack, arrowBottomRight, autummBrand, baby, business, call, categoryContact, children, dashborad, downIcons, englishFlag, error, feedbackIcon, femaleContact, footer, girls, homeTrend, list, locate, location, logo, logoo, man, map, maps, markets, message, privateCheck, ru, russiaFlag, shop, springBrand, summerBrand, toRightIcons, upload, uzbekFlag, winterBrand } from "../../assets/imgs";
import { styles } from "../../util/style";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { RiFacebookCircleLine, RiMessengerLine } from "react-icons/ri";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { BiChevronDown } from "react-icons/bi";

const catalogTypes = [
    { id: 1, name: 'Students' },
    { id: 2, name: 'Business' },
    { id: 3, name: 'Classic' },
    { id: 4, name: 'Sport' },
    { id: 5, name: 'Free Style' },
    { id: 6, name: 'Muslim' },
    { id: 7, name: 'Travel' },
    { id: 8, name: 'Military' },
    { id: 9, name: 'Home' },
    { id: 10, name: 'Hero' },
    { id: 11, name: 'Children' },
    { id: 12, name: 'Party' },
]
const clothingTypes = [
    { id: 1, name: 'T-Shorts' },
    { id: 2, name: 'Shorts' },
    { id: 3, name: 'Jeans' },
    { id: 4, name: 'Shirts' },
    { id: 5, name: 'Sweater' },
    { id: 6, name: 'Hoodies' },
    { id: 7, name: 'Shoes' },
    { id: 8, name: 'Jackets' },
    { id: 9, name: 'Sneakers' },
    { id: 10, name: 'Boots' },
    { id: 11, name: 'Dress' },
    { id: 12, name: 'Skirts' },
]

const Footer = () => {
    const [dressInfo, setDressInfo] = useContext(dressMainData)

    const BrandTypeArray = [
        { id: 1111, type: "Spring", icons: springBrand },
        { id: 2222, type: "Summer", icons: summerBrand },
        { id: 3333, type: "Autumm", icons: autummBrand },
        { id: 4444, type: "Winter", icons: winterBrand },
    ]
    // -----Language Change-------------------
    const [selectLang, setselectLang] = useState(1);
    const handleLangValue = (value) => {
        setselectLang(value)
    }
    const LanguageList = [
        { id: 1, type: "Uzbekcha", icons: uzbekFlag },
        { id: 2, type: "Russian", icons: russiaFlag },
        { id: 3, type: "English", icons: englishFlag }
    ]
    const [openLanguage, setOpenLanguage] = useState(false);
    let dataStyle = ''
    if (dressInfo?.type == 1111) {
        dataStyle = " hover:text-borderSpring "
    }
    if (dressInfo?.type == 2222) {
        dataStyle = " hover:text-borderSummer"
    }
    if (dressInfo?.type == 3333) {
        dataStyle = " hover:text-borderAutumm "
    }
    if (dressInfo?.type == 4444) {
        dataStyle = " hover:text-borderWinter "
    }


    // -------City Change -------------
    const [selectCity, setselectCity] = useState("Tashkent");
    const handleCityValue = (value) => {
        setselectCity(value)
    }


    const CityList = [
        { id: 1, type: "Samarqand" },
        { id: 2, type: "Sirdaryo" },
        { id: 3, type: "Jizzax" },
        { id: 4, type: "Andijon" },
        { id: 5, type: "Xorazm" },
        { id: 6, type: "Navoiy" },
    ]
    const [openCity, setOpenCity] = useState(false);


    // Price
    const [selectPrice, setselectPrice] = useState("Under 100$");
    const handlePriceValue = (value) => {
        setselectPrice(value)
    }
    const priceList = [
        { id: 1, type: "At all prices" },
        { id: 2, type: "More than 500 $" },
        { id: 3, type: "Under 500$" },
        { id: 4, type: "Under 200$" },
        { id: 5, type: "Under 100$" },
        { id: 6, type: "Under 50$" },
    ]
    const [openPrice, setOpenPrice] = useState(false);
    return (

        <div className="">
            <div className='w-full h-full m-auto max-w-[1440px] ss:px-[16px]  md:mb-[60px] md:px-[80px] ss:bg-btnBgColor md:bg-white'>

                <div className='rounded-lg ss:px-4 ss:py-6 md:p-10 md:border md:border-searchBgColor '>

                    {/* Footer LOGO and Fedback form */}
                    <div className="flex items-center justify-between mb-4 ss:px-4 md:px-0">
                        <Link to='#'>
                            {
                                BrandTypeArray.filter(data => data.id == dressInfo.type).map(data => {
                                    return (
                                        <img src={data?.icons} alt="logo" className="ss:w-[85%] ll:w-[90%] sm:w-full"/>
                                    )
                                })
                            }
                        </Link>
                        
                        <Link to="#" className="hidden items-center bg-bgColor pl-16 py-[15px] border border-searchBgColor rounded md:flex">
                            <img src={feedbackIcon} alt="" />
                            <span className="text-base font-medium leading-4 ml-[12.5px] mr-[32.37px]">Форма для обратной связи</span>
                            <img src={arrowBottomRight} alt="arrow-right-black" className="mr-5" />
                        </Link>
                        <Link to='#' className="flex items-center md:hidden">
                            <img src={homeTrend} alt="" />
                            <span className="ml-2 font-medium text-sm">Дашборд</span>
                        </Link>

                    </div>

                    {/* Address */}
                    <div className="flex flex-col ss:w-full md:w-[306px] ss:px-4 md:px-0">
                        <div className="text-textColor mb-[18px] text-sm">Юридический адрес :</div>
                        <div className="flex items-center mb-[46px]">
                            <div className="border border-searchBgColor flex items-center justify-center rounded mr-3 w-24 h-12 ss:bg-white md:bg-transparent">
                                <img src={location} alt="location" />
                            </div>
                            <div className="font-normal text-sm underline underline-offset-4">Мирзо-Улугбекский район, проспект Амира Темура, 60 - Ташкент, 100017</div>
                        </div>
                    </div>

                    {/* Categories, menu, social networks */}
                    <div className="flex-wrap flex-row justify-between mb-[104px] ss:hidden md:flex">

                        {/* Categories */}
                        <div className="md:w-1/5">

                            <div className="font-medium w-fit text-base cursor-pointer ss:mb-4 md:mb-[30px]">
                                Категории
                            </div>
                            <ul className="text-sm font-normal">
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={man} alt="" className="ml-[2px]" />
                                        <span className="ml-[14px]">Мужчины</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={femaleContact} alt="" className="ml-[2px]" />
                                        <span className="ml-[14px]">Женщины</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={children} alt="" />
                                        <span className="ml-3">Мальчикы</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={girls} alt="" />
                                        <span className="ml-3">Девочкы</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={baby} alt="" />
                                        <span className="ml-3">Младенцы</span>
                                    </Link>
                                </li>
                            </ul>

                        </div>

                        {/* Menu */}
                        <div className="md:w-3/5 ">

                            <div className="font-medium w-fit cursor-pointer text-base ss:mb-2 md:mb-[30px]">Меню</div>
                            <ul className="flex flex-row text-sm">
                                <div className="basis-1/3">
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={error} alt="" />
                                            <span className="font-normal ml-2">О нас</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={adduser} alt="" />
                                            <span className="font-normal ml-2">Вакансия</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={list} alt="" />
                                            <span className="font-normal ml-2">Наш блог</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={categoryContact} alt="" />
                                            <span className="font-normal ml-2">Каталог</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={maps} alt="" />
                                            <span className="font-normal ml-2">Карта сайта</span>
                                        </Link>
                                    </li>
                                </div>
                                <div className="basis-1/3">
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={shop} alt="" />
                                            <span className="font-normal ml-2">Магазины</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={homeTrend} alt="" />
                                            <span className="font-normal ml-2">Бизнес</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={map} alt="" />
                                            <span className="font-normal ml-2">Карта</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={list} alt="" />
                                            <span className="font-normal ml-2">Мои заказы</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={privateCheck} alt="" />
                                            <span className="font-normal ml-2">Политика конфиденциальности</span>
                                        </Link>
                                    </li>
                                </div>
                                <div className="basis-1/3">
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={homeTrend} alt="" />
                                            <span className="font-normal ml-2">Дашборд</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={message} alt="" />
                                            <span className="font-normal ml-2">Помощь</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={call} alt="" />
                                            <span className="font-normal ml-2">Контакты</span>
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        {/* Social networks */}
                        <div className="md:basis-1/5">

                            <div className="font-medium w-fit cursor-pointer text-base ss:mb-2 md:mb-[30px]">
                                Социальная сеть
                            </div>

                            <div className="flex flex-col items-center w-full ss:flex lg:block">
                                <ul className="ss:w-6/12 lg:w-full text-sm">
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <FiInstagram className="text-[20px]" />
                                            <span className="font-normal ml-2">Instagram</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <RiFacebookCircleLine className="text-[20px]" />
                                            <span className="font-normal ml-2">Facebook</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <RiMessengerLine className="text-[20px]" />
                                            <span className="font-normal ml-2">Message</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <TbBrandTelegram className="text-[20px]" />
                                            <span className="font-normal ml-2">Telegram</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <AiOutlineYoutube className="text-[20px]" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">You Tube</span>
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    {/* Categories, menu, social networks for MOBILE*/}
                    <div className="flex flex-row items-center md:hidden ss:px-4 md:px-0 mb-[34px] md:mb-0">

                        {/* Menu */}
                        <div className="basis-1/2 ">

                            <div className="font-medium w-fit cursor-pointer ss:mb-4 md:mb-[30px]">
                                Меню
                            </div>
                            <ul className="text-sm">
                                <li className="mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={error} alt="" />
                                        <span className="font-normal ml-2">О нас</span>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={adduser} alt="" />
                                        <span className="font-normal ml-2">Вакансия</span>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={list} alt="" />
                                        <span className="font-normal ml-2">Наш блог</span>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={categoryContact} alt="" />
                                        <span className="font-normal ml-2">Каталог</span>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={maps} alt="" />
                                        <span className="font-normal ml-2">Карта сайта</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        {/* Categories */}
                        <div className="basis-1/2 pl-4">

                            <div className="font-medium w-fit cursor-pointer ss:mb-4 md:mb-[30px]">
                                Категории
                            </div>
                            <ul className="text-sm font-normal">
                                <li className="mb-[14px] md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={man} alt="" className="ml-[2px]" />
                                        <span className="ml-[14px]">Мужчины</span>
                                    </Link>
                                </li>
                                <li className="mb-[14px] md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={femaleContact} alt="" className="ml-[2px]" />
                                        <span className="ml-[14px]">Женщины</span>
                                    </Link>
                                </li>
                                <li className="mb-[14px] md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={children} alt="" />
                                        <span className="ml-3">Мальчикы</span>
                                    </Link>
                                </li>
                                <li className="mb-[14px] md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={girls} alt="" />
                                        <span className="ml-3">Девочкы</span>
                                    </Link>
                                </li>
                                <li className="mb-[14px] md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={baby} alt="" />
                                        <span className="ml-3">Младенцы</span>
                                    </Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                    
                    {/* Feedback for mobile */}
                    <Link to="#" className="flex items-center bg-bgColor pl-3 py-[15px] border border-searchBgColor rounded mb-[34px] ls:pl-6 md:pl-16 md:mb-0 md:hidden">
                        <img src={feedbackIcon} alt="" />
                        <span className="text-base font-medium leading-4 ml-[12.5px] mr-2 ls:mr-6 md:mr-[32.37px]">Форма для обратной связи</span>
                        <img src={arrowBottomRight} alt="arrow-right-black" className="mr-2 ls:mr-3 md:mr-5" />
                    </Link>

                    {/* Menu for Mobile */}
                    <div className="flex w-full md:hidden px-4 md:px-0 mb-[40px] md:mb-0">

                        <ul className="flex flex-row text-sm">
                            <div className="basis-1/2">
                                <li className="mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={shop} alt="" />
                                        <span className="font-normal ml-2">Магазины</span>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={homeTrend} alt="" />
                                        <span className="font-normal ml-2">Бизнес</span>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={map} alt="" />
                                        <span className="font-normal ml-2">Карта</span>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={list} alt="" />
                                        <span className="font-normal ml-2">Мои заказы</span>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={privateCheck} alt="" />
                                        <span className="font-normal ml-2">Политика конфиденциальности</span>
                                    </Link>
                                </li>
                            </div>
                            <div className="basis-1/2 pl-4">
                                <li className="mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={message} alt="" />
                                        <span className="font-normal ml-2">Помощь</span>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={call} alt="" />
                                        <span className="font-normal ml-2">Контакты</span>
                                    </Link>
                                </li>
                            </div>
                        </ul>

                    </div>

                    {/* Location and Language for mobile */}
                    <div className="flex flex-row justify-between w-full items-center mb-8 text-sm md:hidden">
                        <Link to="#" className="basis-[48%] h-[44px] flex items-center py-[8px] px-[14px]  justify-between  bg-bgColor  border border-searchBgColor rounded">
                            <div className=" font-medium   flex items-center">
                                <img src={location} alt="" className="mr-3"/>
                                <div
                                    onClick={() => setOpenCity(!openCity)}
                                    className={`  font-medium  text-black      ${!selectCity && "text-gray-700"
                                        }`}
                                >
                                    {selectCity}
                                </div>
                                <ul
                                    className={`bg-white w-[150px] ml-[-1%] overflow-y-auto absolute
                                                        z-50 rounded shadow-lg 	 ${openCity ? "max-h-60" : "max-h-0"
                                        } `}
                                >
                                    {CityList.map(data => {
                                        return (
                                            <li
                                                key={data?.id}
                                                className={`p-2 pl-7 text-start hover:bg-bgColor ${dataStyle}`}
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
                                </ul>
                            </div>
                            <BiChevronDown size={25} style={{ color: "#c2c2c2" }} className={`${openCity && "rotate-180"} `} />

                            {/* <span className="text-base font-medium leading-4 ml-[12.5px] mr-[32.37px]">Ташкент</span> */}
                            {/* <img src={arrowBottomBlack} alt="arrow-right-black" className="mr-[18px]" /> */}
                        </Link>
                        <div className="basis-[48%] h-[44px] flex items-center py-[8px] px-[14px]  justify-between  bg-bgColor  border border-searchBgColor rounded">

                            <div className="w-full h-[100%] flex items-center rounded  font-medium select-none cursor-pointer">
                                {
                                    LanguageList.filter(data => data.id === selectLang).map(data => {
                                        return (
                                            <div
                                                onClick={() => setOpenLanguage(!openLanguage)}
                                                className={` w-full flex   items-center  ${!selectLang && "text-gray-700"
                                                    }`}
                                            >
                                                <span className="mr-3"><img src={data?.icons} alt="" /></span>
                                                <span className="font-medium not-italic">{data?.type}</span>
                                            </div>
                                        )
                                    })}
                                <ul
                                    className={`bg-white w-[150px] absolute mt-2 overflow-y-auto 
                                            z-50 rounded shadow-lg 	 ${openLanguage ? "max-h-60" : "max-h-0"
                                        } `}
                                >
                                    {LanguageList.map(data => {
                                        return (
                                            <li
                                                key={data?.id}
                                                className={`p-2 text-sm hover:bg-bgColor flex items-center justify-center ${dataStyle}`}
                                                onClick={() => {
                                                    handleLangValue(data?.id)
                                                    setOpenLanguage(false)
                                                }
                                                }
                                            >
                                                <span className="mr-1"><img src={data?.icons} alt="" /></span>
                                                <span>{data?.type}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <BiChevronDown size={25} style={{ color: "#c2c2c2" }} className={`${openLanguage && "rotate-180"} `} />
                        </div>
                    </div>

                    {/* Social networks */}
                    <div className="block px-4 md:hidden">

                        <div className="w-full font-medium cursor-pointer text-base mb-6">
                            Социальная сеть
                        </div>

                        <div className="w-full">
                            <ul className="w-full flex items-center text-sm">
                                <div className="basis-1/2">
                                    <li className="mb-4">
                                        <Link to='#' className="flex items-center">
                                            <FiInstagram className="text-[20px]" />
                                            <span className="font-normal ml-2">Instagram</span>
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to='#' className="flex items-center">
                                            <RiFacebookCircleLine className="text-[20px]" />
                                            <span className="font-normal ml-2">Facebook</span>
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to='#' className="flex items-center">
                                            <RiMessengerLine className="text-[20px]" />
                                            <span className="font-normal ml-2">Message</span>
                                        </Link>
                                    </li>
                                </div>
                                <div className="basis-1/2 mb-9 pl-4">              
                                    <li className="mb-4">
                                        <Link to='#' className="flex items-center">
                                            <TbBrandTelegram className="text-[20px]" />
                                            <span className="font-normal ml-2">Telegram</span>
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to='#' className="flex items-center">
                                            <AiOutlineYoutube className="text-[20px]" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">You Tube</span>
                                        </Link>
                                    </li>
                                </div>
                            </ul>

                        </div>

                    </div>
                    
                </div>
                
                <div className="w-full border-b border-gray-200"></div>

                <div className='rounded-lg ss:px-4 ss:py-6 md:p-10 md:border md:border-searchBgColor'>
                    {/* Catalog and Clothes types */}
                    <div className="mb-[60px] md:hidden">
                        {/* Catalog Types */}
                        <div className="w-full block mb-7 md:hidden">
                            <div className="text-base font-medium mb-5 flex">Каталоги одежды</div>
                            <ul className="flex flex-row items-center flex-wrap">
                                {catalogTypes.map((catalog,index) => (
                                    <li key={index} className="mr-[6px] mb-3 text-sm font-medium">
                                        <button className="bg-searchBgColor rounded px-4 py-[10px]">{catalog.name}</button>
                                    </li>    
                                ))}
                            </ul>
                        </div>
                        
                        {/* CLothing Types */}
                        <div className="w-full block md:hidden">
                            <div className="text-base font-medium mb-5 flex">Типы одежды</div>
                            <ul className="flex flex-row items-center flex-wrap">
                                {clothingTypes.map((catalog,index) => (
                                    <li key={index} className="mr-[6px] mb-3 text-sm font-medium">
                                        <button className="bg-searchBgColor rounded px-4 py-[10px]">{catalog.name}</button>
                                    </li>    
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* footer bottom section */}
                    <div className="w-full flex items-center justify-between">
                        <div className="w-full block justify-between">
                            <div className="w-full flex items-center justify-between text-sm font-medium lg:w-fit">

                                <div className="flex justify-between items-center ">
                                    <img src={footer} alt="" className="mr-2" />
                                    <span className="text-sm">2022 — Dress.me</span>
                                </div>
                                <div className="md:ml-4 md:mr-4">
                                    <span>All Rights reserved</span>
                                </div>
                                <div className="font-medium text-center mt-3 hidden lg:m-0 md:block">
                                    <span className="ml-auto">Designed by</span> 
                                    <Link to='#' className="text-fullBlue border-b border-fullBlue ml-2">Prince.UI</Link>
                                </div>

                            </div>
                            <div className="font-medium text-center mt-3 text-sm block md:hidden">
                                <span>Designed by</span> 
                                <Link to='#' className="text-fullBlue border-b border-fullBlue ml-2">Prince.UI</Link>
                            </div>

                        </div>
                        <div className="flex items-center text-sm">
                            <Link to="#" className="w-[175px] h-[44px] hidden items-center py-[8px] px-[14px]  justify-between  bg-bgColor  border border-searchBgColor rounded md:flex">
                                <div className=" font-medium  ">
                                    <div
                                        onClick={() => setOpenPrice(!openPrice)}
                                        className={`bg-bgColor   flex flex-col items-center justify-center ${!selectPrice && "text-gray-700"
                                            }`}
                                    >
                                        {selectPrice}
                                    </div>
                                    <ul
                                        className={`bg-white w-[170px] ml-[-1%] overflow-y-auto absolute
                            z-50 rounded shadow-lg	 ${openPrice ? "max-h-60" : "max-h-0"
                                            } `}
                                    >
                                        {priceList.map(data => {
                                            return (
                                                <li
                                                    key={data?.id}
                                                    className={`p-2 text-sm hover:bg-bgColor ${dataStyle}`}
                                                    onClick={() => {
                                                        handlePriceValue(data?.type)
                                                        setOpenPrice(false)
                                                    }
                                                    }
                                                >
                                                    {data?.type}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <BiChevronDown size={25} style={{ color: "#c2c2c2" }} className={`${openPrice && "rotate-180"} `} />
                            </Link>
                            <Link to="#" className="w-[175px] h-[44px] hidden items-center py-[8px] px-[14px]  justify-between  bg-bgColor  border border-searchBgColor rounded ml-3 md:flex">
                                <img src={location} alt="" />
                                <div className=" font-medium   flex items-center">
                                    <div
                                        onClick={() => setOpenCity(!openCity)}
                                        className={`  font-medium  text-black      ${!selectCity && "text-gray-700"
                                            }`}
                                    >
                                        {selectCity}
                                    </div>
                                    <ul
                                        className={`bg-white w-[150px] ml-[-1%] overflow-y-auto absolute
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
                                    </ul>
                                </div>
                                <BiChevronDown size={25} style={{ color: "#c2c2c2" }} className={`${openCity && "rotate-180"} `} />

                                {/* <span className="text-base font-medium leading-4 ml-[12.5px] mr-[32.37px]">Ташкент</span> */}
                                {/* <img src={arrowBottomBlack} alt="arrow-right-black" className="mr-[18px]" /> */}
                            </Link>
                            <div className="hidden items-center w-[175px] h-[44px] py-[8px] px-[14px] rounded  ml-3 bg-bgColor border border-solid border-searchBgColor md:flex">

                                <div className="w-full h-[100%] flex items-center rounded  font-medium select-none cursor-pointer">
                                    {
                                        LanguageList.filter(data => data.id == selectLang).map(data => {
                                            return (
                                                <div
                                                    onClick={() => setOpenLanguage(!openLanguage)}
                                                    className={` w-full flex   items-center  ${!selectLang && "text-gray-700"
                                                        }`}
                                                >
                                                    <span className="mr-1"><img src={data?.icons} alt="" /></span>
                                                    <span className="text-sm font-medium not-italic">{data?.type}</span>
                                                </div>
                                            )
                                        })}
                                    <ul
                                        className={`bg-white w-[150px] absolute mt-2 overflow-y-auto 
                                              z-50 rounded shadow-lg 	 ${openLanguage ? "max-h-60" : "max-h-0"
                                            } `}
                                    >
                                        {LanguageList.map(data => {
                                            return (
                                                <li
                                                    key={data?.id}
                                                    className={`p-2 text-sm hover:bg-bgColor flex items-center justify-center ${dataStyle}`}
                                                    onClick={() => {
                                                        handleLangValue(data?.id)
                                                        setOpenLanguage(false)
                                                    }
                                                    }
                                                >
                                                    <span className="mr-1"><img src={data?.icons} alt="" /></span>
                                                    <span>{data?.type}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <BiChevronDown size={25} style={{ color: "#c2c2c2" }} className={`${openLanguage && "rotate-180"} `} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer