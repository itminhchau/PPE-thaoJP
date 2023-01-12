
import { arrayObjCourse, arrayPlay, arrayPlayExp } from '@mockdata/hashdata';
import { Layout } from 'antd';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import back_icon from '../../assets/img/back.svg';
import Course from '../couser/Course';
import { ShowSiderContext } from '../../contexts/ShowSiderContextProvider';
import { Oval } from 'react-loader-spinner'
const { Content } = Layout;

const CategoryContent: React.FC = () => {
    const { isShowSider } = React.useContext(ShowSiderContext)
    let { id }: any = useParams()
    let history = useHistory()
    console.log("id", id);
    const handleOnclickBack = () => {
        history.push('/')
    }

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, [])
    return (

        <div className='content-wrapper w-[100%] p-8 mx-10'>
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
                    {arrayObjCourse && arrayObjCourse.length &&
                        arrayObjCourse.map((item, index) => {
                            if (item.key === id) {
                                return (
                                    <>
                                        <div className="content-title font-bold mb-8 flex items-center justify-start gap-2">
                                            <img src={back_icon} className="cursor-pointer" alt="" onClick={() => handleOnclickBack()} />
                                            <span>{item.label}</span>
                                            {/* <img src={router_icon} alt="" /> */}
                                        </div>
                                        <div className={isShowSider ? "content  grid grid-cols-3 gap-4 " : "content  grid grid-cols-4 gap-4 "}>
                                            {arrayPlay && arrayPlay.length > 0 &&
                                                arrayPlay.map((item1, index) => {
                                                    return (
                                                        <Course key={index}
                                                            title={item.title}
                                                            imgPlay={item1}
                                                            id={item.key}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="content-title mt-8 font-bold mb-8 flex items-center justify-start gap-2">
                                            <img src={back_icon} className="cursor-pointer" alt="" onClick={() => handleOnclickBack()} />
                                            <span>{item.labelexp}</span>
                                            {/* <img src={router_icon} alt="" /> */}
                                        </div>
                                        <div className={isShowSider ? "content  grid grid-cols-3 gap-4 " : "content  grid grid-cols-4 gap-4 "}>
                                            {arrayPlayExp && arrayPlayExp.length > 0 &&
                                                arrayPlayExp.map((item1, index) => {
                                                    return (
                                                        <Course key={index}
                                                            title={item.title}
                                                            imgPlay={item1}
                                                            id={item.key}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            } else {
                                return;
                            }
                        })
                    }
                </div>
            }
        </div>
    )
};

export default CategoryContent;



