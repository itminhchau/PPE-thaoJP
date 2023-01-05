
import { arrayObjCourse, arrayPlay, arrayPlayExp } from '@mockdata/hashdata';
import { Layout } from 'antd';
import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import back_icon from '../../assets/img/back.svg';
import Course from '../couser/Course';
const { Content } = Layout;

const CategoryContent: React.FC = () => {
    let { id }: any = useParams()
    let history = useHistory()
    console.log("id", id);
    const handleOnclickBack = () => {
        history.push('/')
    }
    return (

        <div className='content-wrapper w-[100%] p-8 mx-10'>
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
                                <div className="content  grid grid-cols-3 gap-4 ">
                                    {arrayPlay && arrayPlay.length > 0 &&
                                        arrayPlay.map((item1, index) => {
                                            return (
                                                <Course key={index}
                                                    title={item.title}
                                                    imgPlay={item1}
                                                />
                                            )
                                        })
                                    }
                                </div>
                                <div className="content-title mt-8 font-bold mb-8 flex items-center justify-start gap-2">
                                    <img src={back_icon} className="cursor-pointer" alt="" onClick={() => handleOnclickBack()} />
                                    <span>{item.title}: Trải nghiệm người dùng</span>
                                    {/* <img src={router_icon} alt="" /> */}
                                </div>
                                <div className="content  grid grid-cols-3 gap-4 ">
                                    {arrayPlayExp && arrayPlayExp.length > 0 &&
                                        arrayPlayExp.map((item1, index) => {
                                            return (
                                                <Course key={index}
                                                    title={item.title}
                                                    imgPlay={item1}
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
    )
};

export default CategoryContent;



