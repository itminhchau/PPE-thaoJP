
import { arrayObjCourse, arrayPlay, arrayPlayExp } from '@mockdata/hashdata';
import { Layout } from 'antd';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import router_icon from '../../assets/img/router.svg';
import Course from '../couser/Course';
import { ShowSiderContext } from '../../contexts/ShowSiderContextProvider';
import { Oval } from 'react-loader-spinner'
const { Content } = Layout;

const HomeContent: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, [])

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    const { isShowSider } = React.useContext(ShowSiderContext)

    if (isShowSider) {
        settings.slidesToShow = 3
    } else {
        settings.slidesToShow = 4
    }

    console.log("check setting", settings);

    let history = useHistory()
    const handleOnclick = (id: string) => {
        history.push(`/category/${id}`)
    }

    return (

        <div className='content-wrapper w-[100%] p-8  '>
            {isLoading ? <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}

            /> :

                <div>
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
                                                                id={item.key}
                                                            />
                                                        </>
                                                    )
                                                })
                                            }
                                        </Slider>
                                    </div>
                                    <div className="content-title font-bold mb-8 flex items-center justify-start gap-2">
                                        <span>{item.labelexp}</span>
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
                                                                id={item.key}
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
            }


        </div>
    )
};

export default HomeContent;



