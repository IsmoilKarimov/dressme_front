import React, { useContext, useEffect, useState } from 'react'
import { discount, bucket, video, delivery, heart, shirt, addBag, cardImg, shortik, kastyum, star, category } from '../../assets/imgs'
import { CiHeart } from 'react-icons/ci';
import { dressMainData } from '../../ContextHook/ContextMenu';
import { BsCheck2Square } from "react-icons/bs";
export default function CollectionCards() {
    const [productList, setProductList] = useState([
        {
            id: 1,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cfrous7hj8j9g698ann0/t_product_540_high.jpg#1677854670106",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 2,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cfvjvm7hj8j9g698q1qg/t_product_540_high.jpg#1677854670118",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 3,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cee9lmov1htd23aj6gjg/t_product_540_high.jpg#1677855157929",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "",
            price: "70.000",
        },
        {
            id: 4,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cfh16dd40v9uauhi42hg/t_product_540_high.jpg#1677855222081",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 5,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cfmebc7hgiopn8lcdoh0/t_product_540_high.jpg#1677855264045",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 6,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cf557s8l08k0o9qi31gg/t_product_540_high.jpg#1677855329602",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 7,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cfmebc7hgiopn8lcdoh0/t_product_540_high.jpg#1677855264045",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 8,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cf2h9jqvtie1lhbgt6mg/t_product_540_high.jpg#1677855329588",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 9,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cf53ng0v1htd23al4sqg/t_product_540_high.jpg#1677855423341",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "15.000",
            price: "70.000",
        },
        {
            id: 10,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cf5vfb2vtie1lhbh7h50/t_product_540_high.jpg#1677855423352",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 11,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cf53ng0v1htd23al4sqg/t_product_540_high.jpg#1677855423341",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "",
            price: "75.000",
        },
        {
            id: 12,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cf8g3tivtie1lhbhf1p0/t_product_540_high.jpg#1677855423420",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 13,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cfcdqlavtie1lhbhs490/t_product_540_high.jpg#1677855423521",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 14,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cfcgam8l08k07f16n0ag/t_product_540_high.jpg#1677855423623",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "",
            price: "140.000",
        },
        {
            id: 15,
            discount: "-30%",
            video: true,
            diliver: true,
            like: true,
            buy: true,
            ProducImg: "https://images.uzum.uz/cfcdvh0l08k0o9qiqgcg/t_product_540_high.jpg#1677855423619",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",

            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "",
            price: "70.000",
        },


    ])
    const [dressInfo, setDressInfo] = useContext(dressMainData)
    let dataStyle = ''
    if (dressInfo?.type == 1111) {
        dataStyle = "focus:text-borderSpring "
    }
    if (dressInfo?.type == 2222) {
        dataStyle = "focus:text-borderSummer"
    }
    if (dressInfo?.type == 3333) {
        dataStyle = "focus:text-borderAutumm"
    }
    if (dressInfo?.type == 4444) {
        dataStyle = "focus:text-borderWinter"
    }

    const [changeColor, setChangeColor] = useState([
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },

    ])
    const handleGetChecked = (info) => {
        const newState = changeColor.map(obj => {
            if (obj.id === info) {
                if (obj.action) {
                    return { ...obj, action: false }
                } else {
                    return { ...obj, action: true }
                }
            }
            return obj
        })
        setChangeColor(newState)
    }

    return (
        <div className="flex flex-col box-border mt-[86px] border border-solid border-red-700">
            {/* <div className='max-w-[1440px] m-auto h-fit md:px-[80px]  sm:px-[50px] ss:px-[16px] pt-16 pb-4 '> */}
            <div className="w-full ss:block sm:flex justify-between items-center  md:px-0">
                <div className="not-italic font-medium lg:w-fit lg:text-2xl xl:text-3xl flex items-center leading-8 text-black">
                    <span>Коллекции одежды,</span> <span className='ss:hidden sm:block'>которые вам подходят</span>
                </div>
                <div className="rounded  h-[42px] md:h-[52px] ss:w-full md:w-[308px] md:mx-0 flex justify-between bg-slate-50 border border-solid ss:mt-5 md:mt-0 mx-auto ">
                    <button className={`ss:w-1/2 md:w-[152px] md:h-[50px]  h-[42px] text-base text-black text-center font-normal not-italic focus:bg-white focus:border focus:border-solid	focus:border-inheri focus:rounded ${dataStyle}`}>Карты одежды</button>
                    <button className={`ss:w-1/2 md:w-[152px] md:h-[50px]  h-[42px] text-base text-black text-center font-normal not-italic focus:bg-white focus:border focus:border-solid	focus:border-inheri focus:rounded ${dataStyle}`}>Наборы</button>
                </div>
            </div>
            <div className="flex justify-between flex-wrap  md:mx-0 md:mt-[50px] gap-y-3 ">
                {productList.map(data => {
                    return (
                        <div key={data.id} className="group ss:w-[48%] md:w-[24%] lg:w-[19%]   cursor-pointer transition ease-in-out delay-50 hover:shadow-md   xs:h-[456px] border border-solid	borderColorCard overflow-hidden rounded-t-lg	"   >
                            <div className='relative w-full  ss:h-[206px] xs:h-[309px] bg-white flex flex-wrap content-between items-center overflow-hidden border-b border-solid	border-borderColorCard'>
                                {
                                    data.ProducImg ?
                                        <img className='w-full ss:h-[85%] ls:h-full h-full m-auto hover:scale-105 transition duration-700 ease-in-out' src={data.ProducImg} alt="ProducImg" />
                                        :
                                        <img className='w-full h-fit' src={data.noProductImg} alt="noProductImg" />
                                }
                                <div className='w-full flex xs:justify-between ss:justify-end absolute top-px p-[5px] ' >
                                    <div className='ss:hidden xs:block xs:flex flex-col gap-y-1'>

                                        <div className='w-fit group-hover:w-fit  px-1 h-8 rounded  bg-white flex items-center  border border-solid border-borderColorCard'>
                                            <span className='!w-5'><img className='w-5' src={discount} alt="" /></span>
                                            <span className='px-[0px] text-[14px]  ml-[-200px] group-hover:ml-0 duration-200  '>Discount <span className='text-red-800'>{data?.discount}</span></span>
                                            {/* <span className='text-red-800'>{data?.discount}</span> */}
                                        </div>
                                        <p className='w-fit px-1 h-8 ml-[-200px] group-hover:ml-0 duration-300  rounded bg-white flex items-center justify-center border border-solid border-borderColorCard'>
                                            <span><img className='w-5' src={video} alt="" /></span>
                                            <span className=' text-[14px] pl-[2px] '>Video</span>
                                        </p>
                                        <p className='w-fit px-1 h-8   ml-[-200px] group-hover:ml-0 duration-500 rounded bg-white flex items-center justify-center border border-solid border-borderColorCard'>
                                            <span><img className='w-5' src={delivery} alt="" /></span>
                                            <span className=' text-[14px] pl-[2px] '>Delivery</span>
                                        </p>
                                    </div>
                                    <div className='flex flex-col gap-y-1 '>
                                        <p className='w-8 h-8  rounded bg-white flex items-center justify-center border border-solid border-borderColorCard'>
                                            <span><CiHeart className='text-[20px] text-black hover:text-slate-800 	' /></span>
                                        </p>
                                        <p className='w-8 h-8 ss:hidden xs:block   rounded bg-white xs:flex items-center justify-center border border-solid border-borderColorCard'>
                                            <img src={bucket} alt="" />
                                        </p>

                                    </div>
                                </div>
                                <div className="absolute w-full xs:h-[38px] ss:h-[30px] flex justify-between items-center ss:px-1 xs:px-2 md:px-4 bg-white bottom-0  border-t	 border-solid	border-borderColorCard">
                                    {
                                        changeColor.map(data => {
                                            return (
                                                <label onClick={() => handleGetChecked(data?.id)} className={`rounded-full flex items-center justify-center  ls:w-[22px] ls:h-[22px] ss:w-5 ss:h-5 ${data?.colors} cursor-pointer  border	 border-solid	border-borderColorCard mr-[3px]`} htmlFor="Color1">
                                                    {data?.action ? <BsCheck2Square size={15} className="text-white" /> : null}
                                                    <input className="hidden" type="radio" id="Color1" name="colors" value="1" />
                                                </label>

                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className="w-full xs:h-[147px] ss:h-[114px] xs:py-3 ss:py-2 xs:px-2 ss:px-1 rounded-b-1xl bg-white  flex flex-wrap content-between ">
                                <div className='w-full'>

                                    <div className="w-full  not-italic font-normal ss:text-[10px] xs:text-[11px] md:text-[14px] leading-4 text-black">
                                        {data?.title || "NoData"}
                                    </div>
                                    <div className="w-full flex justify-between items-center xs:mt-3 ss:mt-1">
                                        <div className='flex items-center justify-between'>
                                            <span>   <img src={star} alt="" /></span>
                                            {/* <span><img src={} alt=""/></span> */}
                                            <span className='not-italic font-normal ss:text-[10px] xs:text-xs  sm:text-xs leading-4 text-right text-gray-500 ml-1  flex items-center  '>
                                                <span className='font-medium ss:text-[10px] ll:text-xs not-italic mx-[1px] text-black'>5.0 </span>
                                                ({data?.starCount || 0} <span className='ss:hidden lg:block'>голосов</span>)
                                            </span>
                                        </div>
                                        <div className="not-italic xs:font-medium ss:font-normal  ss:text-[11px]  sm:text-xs  md:text-sm lg:text-base leading-4 text-black">
                                            <b><span>{data?.shirtSize || 0}</span></b>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full flex items-center justify-between ">
                                    <div>
                                        {
                                            data.sale ?
                                                <p className='flex ss:flex-col-reverse md:flex-row	text-start items-start '>
                                                    <p className='text-start m-0 p-0  not-italic font-medium ss:text[xs] xs:text-base xs:leading-4 ss:leading-1 text-red-700'>{data?.sale}</p>
                                                    <p className='text-start m-0 p-0  ss:text-[12px] mt-[3px] md:text-[14px] line-through not-italic font-normal leading-3 ss:leading-1 text-borderColorCard'>{data?.price}</p>
                                                </p>
                                                :
                                                <p className='not-italic font-medium text-base leading-4' style={{ color: "black" }}>{data?.price} </p>
                                        }
                                    </div>
                                    <div className="flex items-center">
                                        {
                                            data.sale ?
                                                <>  <span className='ss:w-[13px] xs:w-fit'><img className='w-full' src={shirt} alt="user" /></span>
                                                    <span className='px-1'>+</span></> : null
                                        }
                                        <span className='ss:w-[25px] xs:w-fit' ><img className='w-full' src={addBag} alt="user" /></span>
                                    </div>


                                </div>
                            </div>
                        </div>

                        // <div key={data.id} className="ss:w-[48%] md:w-[24%] lg:w-[19%]   cursor-pointer transition ease-in-out delay-50 hover:shadow-md   xs:h-[456px] border border-solid	borderColorCard overflow-hidden rounded-t-lg	"   >
                        //     <div className='relative w-full   xs:h-[309px] bg-white flex flex-wrap content-between items-center overflow-hidden border-b border-solid	border-borderColorCard'>
                        //         {
                        //             data.ProducImg ?
                        //                 <img className='w-full h-full m-auto' src={data.ProducImg} alt="ProducImg" />
                        //                 :
                        //                 <img className='w-full h-fit' src={data.noProductImg} alt="noProductImg" />
                        //         }
                        //         <div className='w-full flex xs:justify-between ss:justify-end absolute top-px p-[5px] ' >
                        //             <div className='ss:hidden xs:block flex flex-col gap-y-1'>

                        //                 <p className=' w-fit px-1 h-8 rounded  bg-white flex items-center justify-center border border-solid border-borderColorCard'>
                        //                     <span><img src={discount} alt="" /></span>
                        //                     <span className='px-[2px] text-[11px]'>Discount</span>
                        //                     <span className='text-red-800'>{data?.discount}</span>
                        //                 </p>
                        //                 <p className='w-fit h-8  px-1 rounded bg-white flex items-center justify-center border border-solid border-borderColorCard'>
                        //                     <span><img src={video} alt="" /></span>
                        //                     <span className=' text-[11px] pl-[2px]'>Video</span>
                        //                 </p>
                        //                 <p className='w-fit h-8  px-1 rounded bg-white flex items-center justify-center border border-solid border-borderColorCard'>
                        //                     <span><img src={delivery} alt="" /></span>
                        //                     <span className=' text-[11px] pl-[2px]'>Delivery</span>
                        //                 </p>
                        //             </div>
                        //             <div className='flex flex-col  gap-y-1'>
                        //                 <p className='w-8 h-8  rounded bg-white flex items-center justify-center border border-solid border-borderColorCard'>
                        //                     <span><CiHeart className='text-[20px] text-black hover:text-slate-800 	' /></span>
                        //                 </p>
                        //                 <p className='w-8 h-8 ss:hidden xs:block   rounded bg-white flex items-center justify-center border border-solid border-borderColorCard'>
                        //                     <span><img src={bucket} alt="" /></span>
                        //                 </p>

                        //             </div>
                        //         </div>
                        //         <div className="absolute w-full h-[38px] flex justify-between items-center ss:px-2 xs:px-4 bg-white bottom-0  border-t	 border-solid	border-borderColorCard">
                        //             <label className='rounded-full  w-5 h-5 bg-purple-500 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color1">
                        //                 <input className="hidden" type="radio" id="Color1" name="colors" value="1" />
                        //             </label>
                        //             <label className='rounded-full  w-5 h-5 bg-black cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color2">
                        //                 <input className="hidden" type="radio" id="Color2" name="colors" value="1" />
                        //             </label>
                        //             <label className='rounded-full  w-5 h-5 bg-white cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color3">
                        //                 <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                        //             </label>
                        //             <label className='rounded-full  w-5 h-5 ss:hidden xs:block bg-zinc-500 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color4">
                        //                 <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                        //             </label>
                        //             <label className='rounded-full  w-5 h-5 bg-sky-600 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color5">
                        //                 <input className="hidden" type="radio" id="Color5" name="colors" value="1" />
                        //             </label>
                        //             <label className='rounded-full  w-5 h-5 bg-amber-400 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color6">
                        //                 <input className="hidden" type="radio" id="Color6" name="colors" value="1" />
                        //             </label>
                        //         </div>
                        //     </div>
                        //     <div className="w-full xs:h-[147px] ss:h-[114px] py-3 px-2 rounded-b-1xl bg-white  flex flex-wrap content-between ">
                        //         <div className='w-full'>

                        //             <div className="w-full  not-italic font-normal ss:text-[10px] ll:text-xs xs:text-[14px] leading-4 text-black">
                        //                 {data?.title || "NoData"}
                        //             </div>
                        //             <div className="w-full flex justify-between items-center ss:mt-1 xs:mt-3">
                        //                 <div className='flex items-center justify-between'>
                        //                     <span className='ss:w-[13px] ll:w-[16px] '>   <img src={star} alt="" className='w-full' /></span>
                        //                     {/* <span><img src={} alt=""/></span> */}
                        //                     <span className='not-italic font-normal ss:text-[10px] xs:text-xs  sm:text-xs leading-4 text-right text-gray-500 ml-1  flex items-center  '>
                        //                         <span className='font-medium ss:text-[10px] ll:text-xs not-italic mx-[1px] text-black'>5.0 </span>
                        //                         ({data?.starCount || 0} <span className='ss:hidden xs:block'>голосов</span>)
                        //                     </span>
                        //                 </div>
                        //                 <div className="not-italic font-medium  ss:text-[11px]   xs:text-base leading-4 text-black">
                        //                     <b><span>{data?.shirtSize || 0}</span></b>
                        //                 </div>
                        //             </div>
                        //         </div>

                        //         <div className="w-full flex items-center justify-between">
                        //             <div>
                        //                 {
                        //                     data.sale ?
                        //                         <p className='flex ss:flex-col-reverse	text-start items-center'>
                        //                             <p className='not-italic font-medium ss:text[xs] xs:text-base leading-4 text-red-700'>{data?.sale}</p>
                        //                             <p className='ss:text-[10px] line-through not-italic font-normal leading-3 text-gray-500'>{data?.price}</p>
                        //                         </p>
                        //                         :
                        //                         <p className='not-italic font-medium text-base leading-4' style={{ color: "black" }}>{data?.price} </p>
                        //                 }
                        //             </div>


                        //             <div className="flex items-center">
                        //                 {
                        //                     data.sale ?
                        //                         <>  <span className='ss:w-[13px] ll:w-16px'><img className='w-full' src={shirt} alt="user" /></span>
                        //                             <span className='ss:mx-[3px] ll:mx-[5px]'>+</span></> : null
                        //                 }
                        //                 <span className='ss:w-[16px] ll:w-16px' ><img className='w-full' src={addBag} alt="user" /></span>
                        //             </div>


                        //         </div>
                        //     </div>
                        // </div>




                    )
                })
                }
            </div>
            <div className='w-[100%] h-fit flex flex-col justify-center xs:mt-14'>
                <div className='md:w-1/2 xs:w-[80%] m-auto h-[60px] text-center py-5 rounded cursor-pointer  ss:hidden xs:block  bg-bgColor border border-solid border-borderColorCard'>
                    <span className='not-italic font-medium text-base leading-4 text-center text-black'>
                        Показать ещё 20 товаров
                    </span>
                </div>

            </div>
            {/* </div> */}
        </div >
    )
}
