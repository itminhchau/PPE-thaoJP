import { images } from '../../assets/img';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { IsExpContext } from '../../contexts/IsExpContextProvider';

interface ICourse {
    title: string,
    id: string,
    imgPlay: any,

}
const Course = ({ title, imgPlay, id }: ICourse) => {

    const { isExp, isExpFun } = React.useContext(IsExpContext)
    let titlea = title
    const arrayPlay = [images.img_two, images.img_three, images.img_four]
    const history = useHistory()
    const handlePlayVideo = () => {

        history.push(`/play/${id}`)

    }

    return (
        <div className=' bg-gray-300 w-[316px] h-[339px] mx-auto '>
            <div className="play-video w-[100%] h-[184px] border-2 border-cyan-600 relative flex cursor-pointer " onClick={() => handlePlayVideo()}>
                <img src={imgPlay} alt="" className='bg-auto w-[100%] ' />
                <div className='tilte-free absolute top-0 right-0 w-[64px] h-[38px] bg-white text-red-400 uppercase border-2 border-red-400 text-center p-1 '><span>Free</span></div>
                <img src={images.play_icon} className="w-[65px] h-[65px] m-auto absolute top-[50px] left-[120px] " alt="" />
            </div>

            <div className=' w-[100%] h-[60px] grid grid-cols-3 grid-rows-1 gap-1 mt-2 text-center '>

                {arrayPlay && arrayPlay.length > 0 &&
                    arrayPlay.map((item, index) => {
                        return (
                            <div className="play-video w-[103px] h-[60px] flex relative cursor-pointer " key={index} onClick={() => handlePlayVideo()}>
                                <img src={item} className="bg-contain w-[100%] h-[100%]" alt="" />
                                <img src={images.play_icon} className="w-[40px] h-[40px] m-auto mt-2 absolute top-0 left-[36%] " alt="" />
                            </div>
                        )
                    })
                }

            </div>

            <div className='title_video flex justify-between items-center mt-2'>
                <span>{titlea}: Nấu cơm</span>
                <div className="text-user flex justify-end items-center">
                    <img src={images.user_icon} alt="" />
                    <span>1.400</span>
                </div>


            </div>
            <div className="btn-control flex justify-between items-center mt-2">
                <button className='btn-control_item  '><img src={images.camera_icon} alt="" /> Trải nghiệm</button>
                <button className='btn-control_item  '><img src={images.head_phone_icon} alt="" /> Nge nói</button>
                <button className='btn-control_item  '><img src={images.book_icon} alt="" /> Đọc viết</button>

            </div>
        </div>
    )
}

export default Course