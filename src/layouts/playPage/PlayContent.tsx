import { Layout, Space } from 'antd';
import React, { useState, useEffect } from "react";
import { images } from "../../assets/img";
import { useHistory, useParams } from "react-router-dom";
import back_icon from '../../assets/img/back.svg';
import { ShowSiderContext } from '../../contexts/ShowSiderContextProvider';
import { arrayObjCourse } from '@mockdata/hashdata';
import { Oval } from 'react-loader-spinner'
const { Content } = Layout;
const PlayContent = () => {
    const arrayPlay = [images.img_two, images.img_three, images.img_four]
    const { isShowSider } = React.useContext(ShowSiderContext)
    let { id }: any = useParams()
    let history = useHistory()
    console.log("id", id);
    const handleOnclickBack = () => {
        history.push('/')
    }
    const [checkPosition, setCheckPosition] = useState(true)

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, [])

    return (
        <div className={isShowSider ? 'content-wrapper w-[100%] p-8 mx-10' : 'content-wrapper w-[80%] p-8 mx-40 '}>
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
                    <div className="content-title font-bold mb-8 flex items-center justify-start gap-2">
                        <img src={back_icon} className="cursor-pointer" alt="" onClick={() => handleOnclickBack()} />
                        {arrayObjCourse && arrayObjCourse.length > 0 &&
                            arrayObjCourse.map((item, index) => {
                                if (item.key === id) {
                                    return <span>
                                        {item.label} / {item.title}: Nhặc rác
                                    </span>
                                }
                            })
                        }
                        {/* <img src={router_icon} alt="" /> */}
                    </div>
                    <div className="content-play flex justify-between  gap-4">
                        <div className="content-play-display basis-3/4">
                            <div className="play-video w-[100%] h-[454px] border-2 border-cyan-600 relative flex cursor-pointer " >
                                {/* <img src={arrayPlay[0]} alt="" className='bg-auto w-[100%] ' />
                            <img src={images.play_icon} className="w-[65px] h-[65px] m-auto absolute top-[50%] left-[50%] " alt="" /> */}
                                <iframe className='w-[100%]' src="https://www.youtube.com/embed/4gC6otyEEKw" title="Tiếng Nhật giao tiếp N5-1: nhặt rác cho đường phố sạch sẽ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                            <div className=' w-[100%] h-[184px] grid grid-cols-3 grid-rows-1 gap-1 mt-2 text-center '>
                                {arrayPlay && arrayPlay.length > 0 &&
                                    arrayPlay.map((item, index) => {
                                        return (
                                            <div className="play-video w-[254px] h-[184px] flex relative cursor-pointer " key={index}>
                                                <img src={item} className="bg-contain w-[100%] h-[100%]" alt="" />
                                                <img src={images.play_icon} className="w-[40px] h-[40px] m-auto mt-2 absolute top-[40%] left-[50%] " alt="" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="btn-control flex justify-end items-center mt-2 gap-2">
                                <button className='btn-control_item  '><img src={images.camera_icon} alt="" /> Trải nghiệm</button>
                                <button className='btn-control_item  '><img src={images.head_phone_icon} alt="" /> Nge nói</button>
                                <button className='btn-control_item  '><img src={images.book_icon} alt="" /> Đọc viết</button>
                            </div>
                        </div>
                        <div className="content-play-control basis-1/4 p-4 bg-[#F2F5F7]">
                            <img src={images.btn_exp} alt="" />
                            <Space className="mt-4">
                                <img src={images.camera_icon} alt="" />
                                <span>30 Trải Nghiệm</span>
                            </Space>
                            <Space className="mt-4">
                                <img src={images.head_phone_icon} alt="" />
                                <span>Nghe nói mọi lúc mọi nơi</span>
                            </Space>
                            <Space className="mt-4">
                                <img src={images.book_icon} alt="" />
                                <span>Tài liệu trọn bộ</span>
                            </Space>
                            <Space className="mt-4">
                                <img src={images.exp_full_icon} alt="" />
                                <span>Truy cập trọn đời</span>
                            </Space>
                            <Space className="mt-4">
                                <img src={images.cup_icon} alt="" />
                                <span>Chứng chỉ hoàn tất</span>
                            </Space>
                        </div>
                    </div>
                    <div className="content-wrapper-seccond flex justify-between">
                        <div className="content-listen-pratice basis-1/2  ">
                            <div className="content-title font-bold text-[1.2rem] mt-8  mb-8 flex items-center justify-start gap-2">
                                <span>Luyện nghe nói</span>
                            </div>
                            <div className="conversation border-2 border-blue-400">
                                <img src={images.conversation} alt="" />
                            </div>
                        </div>
                        <div className="new basis-1/2 bg-contain p-4 pt-6">
                            <img src={images.newone} alt="" />
                            <img src={images.newtwo} alt="" />
                        </div>
                    </div>

                </div>
            }
        </div>
    )

}

export default PlayContent