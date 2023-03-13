import React, { useContext, useState, useMemo } from "react";
import { arrowBottom, AutummFemale, AutummMale, clothing, colors, dollarLogo, plus, SpringBoy, SpringChild, SpringFemale, SpringGirl, SpringMale, SummerFemale, SummerMale, WinterFemale, WinterMale } from "../../assets/imgs";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { styles } from "../../util/style";
import { Dropdown } from 'antd';
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Button, Divider, Popover, Segmented } from 'antd';
const BottomHeader = () => {
    const [dressInfo, setDressInfo] = useContext(dressMainData)

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

    const [personItems, setPersonItems] = useState([
        // { id: 1111, male: SpringMale, female: SpringFemale, boy: SpringBoy, girls: SpringGirl, childs: SpringChild },
        { id: 1111, man: SpringMale, woman: SpringFemale },
        { id: 2222, man: SummerMale, woman: SummerFemale },
        { id: 3333, man: AutummMale, woman: AutummFemale },
        { id: 4444, man: WinterMale, woman: WinterFemale },
    ])


    // ----------------Wear state management----------------------------
    const [openwear, setOpenwear] = useState(false);

    const handleOpenChangeWear = (newOpen) => {
        setOpenwear(newOpen);
    };
    const [selectWear, setselectWear] = useState("Clothing type");
    const handleWearValue = (value) => {
        setselectWear(value)
        setOpenwear(false);

    }
    const wearList = [
        { id: 1, type: "All Clothing types" },
        { id: 2, type: "Headwear" },
        { id: 3, type: "Outwear" },
        { id: 4, type: "Underwear" },
        { id: 5, type: "Legwear" },
        { id: 6, type: "Accessory" },
    ]
    const contentWear = (
        <div className="w-[190px] h-fit m-0 p-0">
            {
                wearList.map(data => {
                    return (
                        <p
                            key={data?.id}
                            onClick={() => {
                                handleWearValue(data?.type)
                            }
                            }
                            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-medium text-sm leading-4 text-center hover:bg-bgColor ${dataStyle}`}>{data?.type}</p>
                    )
                })
            }
        </div>
    );


    // --------------------------------------------
    // ----------------------Price State Management----------------------
    const [openPrice, setOpenOrice] = useState(false);

    const handleOpenChangePrice = (newOpen) => {
        setOpenOrice(newOpen);
    };
    const [selectPrice, setselectPrice] = useState("Under 100$");
    const handlePriceValue = (value) => {
        setselectPrice(value)
        setOpenOrice(false)
    }
    const priceList = [
        { id: 1, type: "At all prices" },
        { id: 2, type: "More than 500 $" },
        { id: 3, type: "Under 500$" },
        { id: 4, type: "Under 200$" },
        { id: 5, type: "Under 100$" },
        { id: 6, type: "Under 50$" },
    ]
    const contentPrice = (
        <div className="w-[190px] h-fit m-0 p-0">
            {
                priceList.map(data => {
                    return (
                        <p
                            key={data?.id}
                            onClick={() => {
                                handlePriceValue(data?.type)
                            }
                            }
                            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-medium text-sm leading-4 text-center hover:bg-bgColor ${dataStyle}`}>{data?.type}</p>
                    )
                })
            }
        </div>
    );


    // --------------------------------------------

    return (
        <div className={`bottom w-full max-w-[1440px] md:px-[80px] mx-auto my-3 hidden md:block`}>

            <div className="flex items-center justify-between text-sm">

                <Popover
                    open={openwear}
                    onOpenChange={handleOpenChangeWear}
                    className="w-[190px] px-[17px] h-12  rounded bg-bgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group"
                    trigger="click"
                    options={['Hide']}
                    placement="bottom"
                    content={contentWear} >
                    <span><img src={clothing} alt="clothing" className="" /> </span>
                    <span className="not-italic font-medium text-center text-sm leading-4 text-black">{selectWear}</span>
                    <span><BiChevronDown size={25} style={{ color: "#c2c2c2" }} className={`group-focus:rotate-[-180deg] duration-200`} /> </span>
                </Popover>
                <Popover
                    open={openPrice}
                    onOpenChange={handleOpenChangePrice}
                    className="w-[210px]  h-12  rounded bg-bgColor  border-searchBgColor border  flex items-center justify-between  cursor-pointer select-none group "
                    trigger="click"
                    options={['Hide']}
                    placement="bottom"
                    content={contentPrice} >
                    <p className="w-[56px] h-full flex items-center justify-center border-r border-borderColorCard"><img src={dollarLogo} alt="dollar full" /> </p>
                    <p className=" w-[154px] h-full flex justify-between items-center px-3">
                        <span className="not-italic font-medium text-center text-sm leading-4 text-black ">{selectPrice}</span>
                        <span className=""><BiChevronDown size={25} style={{ color: "#c2c2c2" }} className='group-focus:rotate-[-180deg] duration-200' /> </span>
                    </p>
                </Popover>


                <div className="flex items-center justify-between bg-bgColor rounded border-searchBgColor border h-12">
                    <img src={colors} alt="" className="px-[18px] py-[14px] border-r h-full mr-3" />
                    <label className="rounded-full w-6 h-6 bg-black cursor-pointer border border-solid mr-3 border-borderColorCard" htmlFor="Color1">
                        <input className="hidden" type="checkbox" id="Color1" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-white cursor-pointer border border-solid mr-2	border-borderColorCard" htmlFor="Color2">
                        <input className="hidden" type="checkbox" id="Color2" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-zinc-500 cursor-pointer  border border-solid mr-3	border-borderColorCard" htmlFor="Color3">
                        <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-purple-500 cursor-pointer border border-solid mr-2 border-borderColorCard" htmlFor="Color4">
                        <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-sky-600 cursor-pointer border border-solid mr-2 border-borderColorCard" htmlFor="Color1">
                        <input className="hidden" type="checkbox" id="Color1" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-amber-400 cursor-pointer border border-solid mr-2	border-borderColorCard" htmlFor="Color2">
                        <input className="hidden" type="checkbox" id="Color2" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-green-700 cursor-pointer border border-solid mr-2	border-borderColorCard" htmlFor="Color3">
                        <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-amber-600 cursor-pointer border border-solid mr-2 border-borderColorCard" htmlFor="Color4">
                        <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-red-700 cursor-pointer border border-solid mr-3 border-borderColorCard" htmlFor="Color1">
                        <input className="hidden" type="checkbox" id="Color1" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-purple-800 cursor-pointer border border-solid mr-2 border-borderColorCard" htmlFor="Color2">
                        <input className="hidden" type="checkbox" id="Color2" name="colors" value="1" />
                    </label>
                    <label className="rounded-full  w-6 h-6 bg-blue-900 cursor-pointer border border-solid mr-2 border-borderColorCard" htmlFor="Color3">
                        <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-yellow-900 cursor-pointer border border-solid mr-3	border-borderColorCard" htmlFor="Color4">
                        <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                    </label>
                </div>
                <div className="line h-6 border text-textColor mx-3"></div>
                {
                    personItems?.filter(value => value.id === dressInfo?.type).map(data => {
                        return (
                            <div key={data?.id} className="w-fit flex items-center ">
                                <button className={`mr-1 ${genderStyle} font-medium w-[136px] h-12 px-[16px] justify-between flex items-center border border-searchBgColor rounded`}>
                                    <img src={data?.woman} alt="female" /><span> Женщинам</span>
                                </button>
                                <button className={` font-medium ${genderStyle} w-[136px] h-12 border px-[16px] justify-between flex items-center  border-searchBgColor mr-1 rounded`}>
                                    <img src={data?.man} alt="male" />    <span>Мужчинам</span>
                                </button>
                            </div>
                        )
                    })
                }
                <button className="bg-bgColor font-medium w-12 h-12 flex items-center justify-center border border-searchBgColor rounded">
                    <img src={plus} alt="" />
                </button>
            </div >

        </div >
    )
}

export default BottomHeader