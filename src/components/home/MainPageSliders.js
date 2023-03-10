import React, { useContext, useState } from 'react'

import { category, arrowBottomFull, mouse, toBottom, markets, adidas, chanel, dolce, gucci, hm, locate, lacoste, louis, nike, prada, puma, tommy, zara, SpringSquare, SummerSquare, AutummSquare, WinterSquare, } from '../../assets/imgs'
import { GrNext, GrPrevious } from 'react-icons/gr';
import Slider from "react-slick";


import { dressMainData } from '../../ContextHook/ContextMenu';
// import required modules``
export default function MainPageSliders() {
    const [dressInfo, setDressInfo] = useContext(dressMainData)

    let dataStyle = ''

    if (dressInfo?.type == 1111) {
        dataStyle = "border-borderSpring"

    }
    if (dressInfo?.type == 2222) {
        dataStyle = "border-borderSummer"

    }
    if (dressInfo?.type == 3333) {
        dataStyle = "border-borderAutumm"

    }
    if (dressInfo?.type == 4444) {
        dataStyle = "border-borderWinter"

    } 

    const [clothesToggle, setClothesToggle] = useState(true)
    const [carosuelData, setCarosuelData] = useState([
        {
            Category: [
                { id: 1, type: "Student", count: 123, img: "" },
                { id: 2, type: "Businiess", count: 223, img: "" },
                { id: 3, type: "Muslim", count: 80, img: "" },
                { id: 4, type: "Travel", count: 453, img: "" },
                { id: 5, type: "Sport", count: 320, img: "" },
                { id: 6, type: "Classic", count: 40, img: "" },
                { id: 7, type: "Relaxed", count: 180, img: "" },
                { id: 8, type: "Dramatic", count: 250, img: "" },
                { id: 9, type: "Creative", count: 190, img: "" },
            ],

            campany: [
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
            ],
            service: [
                { id: 1111, type: "Spring", imgFull: SpringSquare },
                { id: 2222, type: "Summer", imgFull: SummerSquare },
                { id: 3333, type: "Autumm", imgFull: AutummSquare },
                { id: 4444, type: "Winter", imgFull: WinterSquare },
            ]

        },

    ])
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[40%] z-10	right-[10px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard	`} onClick={onClick}>
                <button className="next">
                    <GrNext />
                </button>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[40%] z-10	left-[10px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard	`} onClick={onClick}>
                <button className="prev">
                    <GrPrevious />
                </button>
            </div>
        );
    };
    const NextArrow1 = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[30%] z-10	right-[10px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard	`} onClick={onClick}>
                <button className="next">
                    <GrNext />
                </button>
            </div>
        );
    };

    const PrevArrow1 = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[30%] z-10	left-[10px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard	`} onClick={onClick}>
                <button className="prev">
                    <GrPrevious />
                </button>
            </div>
        );
    };
    let settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        dots: false,

        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    let settings1 = {
        nextArrow: <NextArrow1 />,
        prevArrow: <PrevArrow1 />,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };


    return (
        <div className='box-border flex flex-col justify-center	 my-6'>
            <div className='w-full 	 ss:hidden xs:block'>
                <Slider {...settings} className='w-[100%] flex xs:justify-between flex-wrap  '
                >
                    {
                        carosuelData?.map(data => {
                            return (
                                data.Category.map(data => {
                                    return (
                                        <div key={data?.id} className='!w-[100%]  h-[260px] rounded  '>
                                            <div className='w-full h-[230px] bg-btnBgColor p-2  rounded-lg'>
                                                <div className={`w-full h-full border border-solid	${dataStyle} rounded`} >

                                                    {data?.img ? <img className='h-full w-full' src={data?.img} alt="student" /> : null}
                                                </div>
                                            </div>
                                            <div className='h-12.5 flex items-center justify-start'>
                                                <p className='not-italic font-medium text-base leading-4 text-black mt-3 mr-2   ml-2'>{data?.type || "type"}
                                                    <span className='not-italic font-normal text-xs leading-4 text-gray-500'>({data?.count || "0"})</span></p>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        })
                    }

                </Slider>
            </div>
            {/* carosuel hidden bloack */}
            <div className="w-full h-fit ss:block xs:hidden ss:flex  flex-wrap gap-y-1	 justify-between   	my-5 py-7 ">
                {
                    carosuelData?.map(data => {
                        return (
                            data.Category.map(data => {
                                return (
                                    <div key={data?.id} className='ll:w-[100px] ss:w-[80px]' >
                                        <div className='w-[100%] h-[80px] rounded bg-bgColor  border border-solid border-borderColorCard'>
                                            <img className='h-full w-full' src={data?.img} alt="" />
                                        </div>
                                        <div className='w-full py-1 flex items-center'>
                                            <p className='not-italic  mr-2 font-medium text-sm leading-6 text-black'>{data?.type || "type"}
                                                <span className='not-italic font-normal text-xs leading-4 text-gray-500'>({data?.count || "0"})</span></p>
                                        </div>
                                    </div>
                                )

                            })
                        )
                    })
                }

            </div>
            <div className='w-full 	mt-[64px]   ss:hidden xs:block'>
                <Slider {...settings1} className='w-[100%] flex xs:justify-between'
                >
                    {
                        carosuelData?.map(data => {
                            return (
                                data.campany.map(data => {
                                    return (
                                        <div key={data?.id} className='!w-[100%] h-[100px]  rounded-lg bg-catalogBg flex items-center justify-center select-none border border-solid border-searchBgColor'>
                                            {/* <p className='w-full h-full flex items-center justify-center not-italic font-medium text-xl leading-6 text-center text-black '>{data?.type || "0"}</p> */}
                                            <div className=' h-full flex items-center justify-center'>
                                                <img className='h-[70px] w-[80%] ' src={data?.imgFull} alt="" />
                                            </div>
                                        </div>

                                    )
                                })

                            )
                        })
                    }


                </Slider>
            </div>


            {carosuelData?.map(data => {
                return (
                    data?.service?.filter(data => data.id === dressInfo?.type).map(data => {
                        return (
                            <div key={data?.id} className='flex 	mt-[64px] flex-wrap justify-between items-center  gap-y-5    ss:hidden xs:block xs:flex'>
                                {/* 1 */}
                                <div className={`lg:w-[23%]  sm:w-[47%] ss:w-[100%] ss:h-20 py-[20px] px-[16px] xs:h-[100px] bg-bgColor rounded-lg  flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard `}>
                                    <div className='w-full'>
                                        <p className={`not-italic font-normal ss:text-sm xs:text-base leading-4 text-black `}>Strengthen Health</p>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <p className='nnot-italic font-medium text-xl leading-6 text-black'>Sports clothes</p>
                                        <p><img src={data?.imgFull} alt="next" className='ss:w-[70%] xs:w-[100%]' /></p>
                                    </div>
                                </div>
                                {/* 2 */}

                                <div className='lg:w-[23%] sm:w-[47%] ss:w-[100%] ss:h-20 xs:h-[100px] py-[20px] px-[16px] bg-bgColor rounded-lg  flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard'>
                                    <div className='w-full'>
                                        <p className='not-italic font-normal ss:text-sm xs:text-base leading-4 text-black'>Based on your Interests</p>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <p className='not-italic font-medium text-xl leading-6 text-black'>Muslim clothes</p>
                                        <p><img src={data?.imgFull} alt="next" className='ss:w-[70%] xs:w-[100%]' /></p>
                                    </div>
                                </div>
                                {/* 3*/}

                                <div className='lg:w-[23%] sm:w-[47%] ss:w-[100%] ss:h-20 xs:h-[100px] py-[20px] px-[16px] bg-bgColor rounded-lg  flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard'>
                                    <div className='w-full'>
                                        <p className='not-italic font-normal ss:text-sm xs:text-base leading-4 text-black'>Sort by your Money</p>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <p className='flex items-end'><span className='not-italic font-normal text-base text-gray-500 mr-2'>????????</span><span className='not-italic font-medium text-xl leading-6 text-black'>40$</span><span><img src={arrowBottomFull} alt="arrowBottomFull" /></span></p>
                                        <p><img src={data?.imgFull} alt="next" className='ss:w-[70%] xs:w-[100%]' /></p>
                                    </div>
                                </div>
                                {/* 4*/}

                                <div className='lg:w-[23%] sm:w-[47%] ss:w-[100%] ss:h-20 xs:h-[100px] py-[20px] px-[16px] bg-bgColor rounded-lg  flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard'>
                                    <div className='w-full'>
                                        <p className='not-italic font-normal ss:text-sm xs:text-base leading-4 text-black'>???????????????? ?????????? ?? ??????</p>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <p className='flex mr-2 items-center'><span><img src={markets} alt="arrowBottomFull" className='mr-2' /></span><span className='not-italic font-medium ss:tex-tlg ll:text-xl leading-6 text-black'>?????????? ????????????????</span></p>
                                        <p><img src={data?.imgFull} alt="next" /></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                )
            })
            }


        </div>
    )
}
