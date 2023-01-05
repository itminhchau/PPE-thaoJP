
import { arrayObjCourse, arrayPlay, arrayPlayExp } from '@mockdata/hashdata';
import { Layout } from 'antd';
import React from 'react';
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import router_icon from '../../assets/img/router.svg';
import Course from '../couser/Course';
const { Content } = Layout;

const HomeContent: React.FC = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    let history = useHistory()
    const handleOnclick = (id: string) => {
        history.push(`/category/${id}`)
    }

    return (

        <div className='content-wrapper w-[100%] p-8 mx-10 '>
            {arrayObjCourse && arrayObjCourse.length > 0
                && arrayObjCourse.map((item, index) => {
                    return (
                        <>
                            <div className="content-title font-bold mb-8 flex items-center justify-start gap-2">
                                <span>{item.label}</span>
                                <img src={router_icon} className="cursor-pointer" alt="" onClick={() => handleOnclick(item.key)} />
                            </div>
                            <div className="content-home  my-10 grid grid-cols-1 ">
                                <Slider  {...settings}>
                                    {arrayPlay && arrayPlay.length > 0 &&
                                        arrayPlay.map((item1, index) => {
                                            return (
                                                <>
                                                    <Course key={index}
                                                        title={item.title}
                                                        imgPlay={item1}
                                                    />
                                                </>

                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                            <div className="content-title font-bold mb-8 flex items-center justify-start gap-2">
                                <span>{item.title}: Trải nghiệm người dùng</span>
                                <img src={router_icon} className="cursor-pointer" alt="" onClick={() => handleOnclick(item.key)} />
                            </div>
                            <div className="content-home  my-10 grid grid-cols-1 ">
                                <Slider  {...settings}>
                                    {arrayPlayExp && arrayPlayExp.length > 0 &&
                                        arrayPlayExp.map((item1, index) => {
                                            return (
                                                <>
                                                    <Course key={index}
                                                        title={item.title}
                                                        imgPlay={item1}
                                                    />
                                                </>

                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </>
                    )
                })
            }

        </div>
    )
};

export default HomeContent;



