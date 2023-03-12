import React, { useContext, useState } from 'react'
import { next, category, arrowBottomFull, nextItem, prevItem, star } from '../../assets/imgs'
import { discount, bucket, video, delivery, heart, shirt, addBag, cardImg, shortik, kastyum } from '../../assets/imgs'
import { CiHeart } from 'react-icons/ci';

import { GrNext, GrPrevious } from 'react-icons/gr';
import Slider from "react-slick";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from './clothers.module.css'
import { dressMainData } from '../../ContextHook/ContextMenu';
export default function ClothesSlider() {
    const [productList, setProductList] = useState([
        {
            id: 1,
            discount: "-30%",
            video: "video",
            diliver: true,
            buy: true,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            discount: "",
            video: "video",
            diliver: false,
            buy: true,

            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            discount: "",
            video: "video",
            diliver: true,
            buy: false,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            video: "video",
            diliver: true,
            buy: true,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            video: "video",
            diliver: false,
            buy: true,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            discount: "",
            video: "",
            diliver: true,
            buy: true,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            video: "video",
            diliver: true,
            buy: true,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            video: "video",
            diliver: false,
            buy: true,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            discount: "",
            video: "",
            diliver: true,
            buy: true,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            video: "video",
            diliver: false,
            buy: true,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            video: "video",
            diliver: true,
            buy: true,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            discount: "",
            video: "video",
            diliver: true,
            buy: true,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            discount: "",
            video: "video",
            diliver: true,
            buy: true,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            discount: "",
            video: "",
            diliver: true,
            buy: true,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
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
            discount: "",
            video: "",
            diliver: true,
            buy: false,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cfcdvh0l08k0o9qiqgcg/t_product_540_high.jpg#1677855423619",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "",
            price: "70.000",
        },
        {
            id: 16,
            discount: "-40%",
            video: "video",
            diliver: false,
            buy: true,

            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cf9ldv0v1htd23aljs7g/t_product_540_high.jpg#1677855423555",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompress futbolka-longsliv ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "35.000",
            price: "70.000",
        },

    ])

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
                { id: 10, type: "Rebellious", count: 310, img: "" },
                { id: 11, type: "Feminine", count: 479, img: "" },

            ],

            campany: [
                { id: 1, type: "All", name: "All" },
                { id: 2, type: "icons", name: "Cotegory 1" },
                { id: 3, type: "icons", name: "Cotegory2" },
                { id: 4, type: "icons", name: "Cotegory3" },
                { id: 5, type: "icons", name: "Cotegory4" },
                { id: 6, type: "icons", name: "Cotegory5" },
                { id: 7, type: "icons", name: "Cotegory6" },
                { id: 8, type: "icons", name: "Cotegory7" },
                { id: 9, type: "icons", name: "Cotegory8" },
                { id: 10, type: "icons", name: "Cotegory9" },
                { id: 11, type: "icons", name: "Cotegory10" },
                { id: 12, type: "icons", name: "Cotegory11" },
                { id: 13, type: "icons", name: "Cotegory12" },
                { id: 14, type: "icons", name: "Cotegory13" },
                { id: 15, type: "icons", name: "Cotegory14" },


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
    let settings1 = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: false,
        speed: 500,
        dots: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 4,
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
    let settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: false,
        speed: 500,
        dots: false,

        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [dressInfo, setDressInfo] = useContext(dressMainData)
    let dataStyle = ''
    let genderStyle = ''
    if (dressInfo?.type == 1111) {
        dataStyle = " hover:text-borderSpring "
        genderStyle = "hover:text-borderSpring hover:bg-bgSpring hover:border-borderSpring hover:text-borderSpring"
    }
    if (dressInfo?.type == 2222) {
        dataStyle = " hover:text-borderSummer"
        genderStyle = "hover:text-borderSummer hover:bg-bgSummer hover:border-borderSummer hover:text-borderSummer"
    }
    if (dressInfo?.type == 3333) {
        dataStyle = " hover:text-borderAutumm "
        genderStyle = "hover:text-borderAutumm hover:bg-bgAutumm hover:border-borderAutumm hover:text-borderAutumm"
    }
    if (dressInfo?.type == 4444) {
        dataStyle = " hover:text-borderWinter "
        genderStyle = "hover:text-borderWinter hover:bg-bgWinter hover:border-borderWinter hover:text-borderWinter"
    }

    return (
        <div className='flex flex-col  box-border mt-[64px] ss:hidden xs:block border border-solid border-red-700 '>
            {/* <div className='max-w-[1440px]  h-fit md:px-[80px] flex justify-center  sm:px-[50px] ss:px-[16px]  box-border'> */}

            <div className='w-full h-fit   '>
                <div className=' flex ss:flex-col xs:flex-row xs:justify-between ss:justify-center items-center h-fit '>
                    <div className="flex items-center ss:justify-center md:justify-start ss:w-full xs:w-[48%] md:w-fit border ss:border-solid  md:border-none ss:border-borderColorCard ss:h-[44px] rounded ">
                        <p className='flex items-center cursor-pointer select-none'>
                            <span className='not-italic font-normal xs:text-base md:text-base ss:text-base leading-7 text-black'>Deals under:</span>
                            <span className='flex items-center not-italic font-medium text-xl leading-6 text-black'>100$<img className='mt-1' src={arrowBottomFull} alt="next" /></span> </p>
                    </div>
                    <div className="flex items-center ss:justify-center md:justify-end ss:w-full xs:w-[48%]  md:w-fit ss:mt-4 xs:mt-0 border ss:border-solid  md:border-none ss:border-borderColorCard ss:h-[44px] rounded">
                        <p className='flex items-center cursor-pointer select-none'>
                            <span className='not-italic font-medium mr-2 md:text-base ss:text-base xs:text-sm leading-4 text-right text-black'>Stores closest to you</span>
                            <span><img src={next} alt="next" /></span> </p>
                    </div>

                </div>
                <div className='w-full h-fit mt-12  '>
                    <Slider {...settings1} className='w-[100%] flex xs:justify-between  xs:pl-0 border border-solid border-green-500'
                    >
                        {
                            carosuelData?.map(data => {
                                return (
                                    data.campany.map(data => {
                                        return (
                                            <div key={data.id} className='!w-[100%]   h-full border border-solid border-red-600'>
                                                <div className={`${genderStyle} w-full h-[110px]  m-auto ss:py-5  ls:p-0 bg-gray-100 rounded-lg flex justify-center items-center cursor-pointer  border border-searchBgColor  `}>
                                                    <p className='not-italic font-medium text-xs leading-4 text-center text-black'>{data?.type || "0"}</p>
                                                </div>
                                                <div >
                                                    <p className='not-italic font-medium ss:text-sm xs:text-xs leading-4 text-center ls:mt-5 ss:mt-2 text-black '>{data?.name || "type"}</p>
                                                </div>
                                            </div>

                                        )
                                    })

                                )
                            })
                        }

                    </Slider>
                </div>
            </div>
            {/* </div> */}

            <div className='w-full h-fit flex flex-col   border-y	border-solid	border-borderColorCard mt-12 '>
                {/* <div className='h-fit md:px-[80px]    max-w-[1440px] sm:px-[50px] ss:px-[16px]  box-border '> */}
                <div className='w-full flex items-center py-12  '>
                    <Slider {...settings} className='w-[100%] flex xs:justify-between xs:pl-0 '
                    >
                        {
                            productList.map(data => {
                                return (
                                    <div key={data.id} id={styles.forwidt} className="!w-[100%] ss:m-0  ll:ml-1 cursor-pointer transition ease-in-out delay-150 hover:shadow-md ss:h-[320px]  xs:h-[456px] border border-solid	borderColorCard overflow-hidden rounded-t-lg	"   >
                                        <div className='relative w-full  ss:h-[206px] xs:h-[309px] bg-white flex flex-wrap content-between items-center overflow-hidden border-b border-solid	border-borderColorCard'>
                                            {
                                                data.ProducImg ?
                                                    <img className='w-full h-full m-auto' src={data.ProducImg} alt="ProducImg" />
                                                    :
                                                    <img className='w-full h-fit' src={data.noProductImg} alt="noProductImg" />
                                            }
                                            <div className='w-full flex justify-between absolute top-px p-2'>
                                                <p className='w-8 h-8 rounded bg-white flex items-center justify-center border border-solid border-searchBgColor'><img src={delivery} alt="" /></p>
                                                <p className='w-8 h-8 rounded bg-white flex items-center justify-center border border-solid border-searchBgColor'><CiHeart className='text-[20px] text-black hover:text-slate-800 	' /></p>
                                            </div>
                                            <div className="absolute w-full xs:h-[38px] ss:h-[30px] flex justify-between items-center ss:px-1 xs:px-2 md:px-4 bg-white bottom-0  border-t	 border-solid	border-borderColorCard">
                                                <label className='rounded-full  xs:w-5 xs:h-5 ss:w-4 ss:h-4 bg-purple-500 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color1">
                                                    <input className="hidden" type="radio" id="Color1" name="colors" value="1" />
                                                </label>
                                                <label className='rounded-full  xs:w-5 xs:h-5 ss:w-4 ss:h-4 bg-black cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color2">
                                                    <input className="hidden" type="radio" id="Color2" name="colors" value="1" />
                                                </label>
                                                <label className='rounded-full  xs:w-5 xs:h-5 ss:w-4 ss:h-4 bg-white cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color3">
                                                    <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                                                </label>
                                                <label className='rounded-full  xs:w-5 xs:h-5 ss:w-4 ss:h-4 bg-zinc-500 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color4">
                                                    <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                                                </label>
                                                <label className='rounded-full  xs:w-5 xs:h-5 ss:w-4 ss:h-4 bg-sky-600 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color5">
                                                    <input className="hidden" type="radio" id="Color5" name="colors" value="1" />
                                                </label>
                                                <label className='rounded-full  xs:w-5 xs:h-5 ss:w-4 ss:h-4 bg-amber-400 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color6">
                                                    <input className="hidden" type="radio" id="Color6" name="colors" value="1" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="w-full xs:h-[147px] ss:h-[114px] xs:py-3 ss:py-2 xs:px-2 ss:px-1 rounded-b-1xl bg-white  flex flex-wrap content-between ">
                                            <div className='w-full'>

                                                <div className="w-full  not-italic font-normal ss:text-[10px] xs:text-[11px] md:text-[14px] leading-4 text-black">
                                                    {data?.title || "NoData"}
                                                </div>
                                                <div className="w-full flex justify-between items-center mt-3">
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

                                            <div className="w-full flex items-center justify-between">
                                                <div >
                                                    <p className='text-black not-italic ss:text-sm font-medium md:text-base lg:text-lg leading-7'>{data?.price}</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className='overflow-hidden '><img src={addBag} alt="user" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
