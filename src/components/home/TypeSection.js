import React, { useState } from 'react'
import { category, next } from '../../assets/imgs'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GrNext, GrPrevious } from 'react-icons/gr';
import Slider from "react-slick";
import styles from './clothers.module.css'
export default function TypeSection() {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const [typeSectionData, setTypeSectionData] = useState([
        {
            id: 1,
            type: "Sport Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 2,
            type: "Business Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 3,
            type: "Classic Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 4,
            type: "Muslim Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 5,
            type: "Student Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 6,
            type: "Travel Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 7,
            type: "Relaxed Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },

    ])

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={styles.NextArrow} onClick={onClick}>
                <button className="next">
                    <GrNext />
                </button>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={styles.PrevArrow} onClick={onClick}>
                <button className="prev">
                    <GrPrevious />
                </button>
            </div>
        );
    };
    let settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: false,
        speed: 500,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='flex flex-col'>
            {/* <div className='h-[full] md:px-[80px]   max-w-[1440px] sm:px-[50px] ss:px-[16px] xs:py-7 ss:p-3 my-2'> */}
            <div className='w-[100%] h-fit flex flex-col justify-center py-8'>
                <div className='w-full h-[60px]  ss:block xs:hidden ss:flex items-center justify-center text-center  rounded cursor-pointer  bg-bgColor border border-solid border-borderColorCard cursor-pointer'>
                    <span className='mr-3 not-italic font-medium text-base leading-4 text-center'>Одежды, которые вам подходят</span><span><img src={category} alt="market" /></span>
                </div>
            </div>
            <div className='w-[100%] h-full flex justify-between  ss:hidden sm:block '>
                <Slider {...settings} className='w-[100%] flex xs:justify-between xs:pl-0'
                >
                    {
                        typeSectionData?.map(data => {
                            return (
                                <div >
                                    <div key={data.id} className='w-[98%] lg:h-[426px] ll:h-[400px] md:h-[390px] ss:h-[350px] bg-white border border-solid	border-borderColorCard	rounded-lg ss:p-3 lg:ml-1  xl:p-8 flex flex-wrap ss:content-between sm:content-between  '>
                                        <div className='w-full flex items-center justify-between ss:h-fit sm:h-1/10  '>
                                            <p className='not-italic font-medium md:text-lg ss:text-base ll:text-xl lg:text-xl xl:text-2xl leading-7 text-black'>{data?.type || "type"}</p>
                                            <p className='flex items-center'><span className='not-italic font-medium md:text-sm xl:text-base lg:text-xs ss:text-xs  ll:text-base leading-4 text-right mr-2 text-black'>See more</span><img src={next} alt="next" /></p>

                                        </div>
                                        <div className='w-full flex flex-wrap rounded h-4/5'>

                                            {
                                                data?.group?.map(data => {
                                                    return (
                                                        <div key={data.id} className='w-6/12 h-1/2 p-2  border border-solid	border-borderColorCard  bg-white flex flex-wrap content-between'>
                                                            <div className='w-full h-3/4 bg-bgColor'>
                                                                {data.img ? <img src={data?.img} alt="data" /> : null}

                                                            </div>
                                                            <div className='w-full h-1/5 flex items-center not-italic font-medium text-base leading-4 text-black justify-start'>
                                                                {data?.title || "title"}
                                                            </div>

                                                        </div>

                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className='w-[100%] h-full flex flex-wrap justify-between  ss:block sm:hidden gap-y-2'>
                {
                    typeSectionData?.map(data => {
                        return (
                            <div key={data.id} className='w-[98%] lg:h-[426px] ll:h-[400px] md:h-[390px] mt-2 ss:h-[350px] bg-white border border-solid	border-borderColorCard	rounded-lg ss:p-3 lg:ml-1  xl:p-8 flex flex-wrap ss:content-between sm:content-between  '>
                                <div className='w-full flex items-center justify-between ss:h-fit sm:h-1/10  '>
                                    <p className='not-italic font-medium md:text-lg ss:text-base ll:text-xl lg:text-xl xl:text-2xl leading-7 text-black'>{data?.type || "type"}</p>
                                    <p className='flex items-center'><span className='not-italic font-medium md:text-sm xl:text-base lg:text-xs ss:text-xs  ll:text-base leading-4 text-right mr-2 text-black'>See more</span><img src={next} alt="next" /></p>

                                </div>
                                <div className='w-full flex flex-wrap rounded h-4/5'>

                                    {
                                        data?.group?.map(data => {
                                            return (
                                                <div key={data.id} className='w-6/12 h-1/2 p-2  border border-solid	border-borderColorCard  bg-white flex flex-wrap content-between'>
                                                    <div className='w-full h-3/4 bg-bgColor'>
                                                        {data.img ? <img src={data?.img} alt="data" /> : null}

                                                    </div>
                                                    <div className='w-full h-1/5 flex items-center not-italic font-medium text-base leading-4 text-black justify-start'>
                                                        {data?.title || "title"}
                                                    </div>

                                                </div>

                                            )
                                        })
                                    }

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* </div> */}
        </div>
    )
}
