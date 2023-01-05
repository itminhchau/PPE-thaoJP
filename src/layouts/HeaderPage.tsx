import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { useState } from 'react';
import facebook from '../assets/img/facebook.svg';
import instagram from '../assets/img/instagram.svg';
import mail from '../assets/img/mail.svg';
import miccrphone_icon from '../assets/img/miccrophone.svg';
import phone from '../assets/img/phone.svg';
import { images } from '../assets/img/index';
import twitter from '../assets/img/twitter.svg';
import { useHistory } from 'react-router-dom';
const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['Trang Chủ', 'Giới Thiệu', 'Liên Hệ'].map(key => ({
  key,
  label: `${key}`,
}));
interface IHeaderPage {
  title: string
}

const HeaderPage = ({ title }: IHeaderPage) => {
  const [size, setSize] = useState<SizeType>('large');
  let history = useHistory()
  const handleBackHome = () => {
    history.push('/')
  }
  console.log("check ", title);

  return (


    <Layout>
      <Header className="header h-24">
        <div className='top-header flex justify-between border-b w-full h-8 items-center mr-6 '>
          <div className="contact flex  ">
            <img src={mail} alt="" className='  h-4  w-item-header' />
            <img src={phone} alt="" className='  h-4  w-item-header' />
          </div>
          <div className="social flex">
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className='bot-header '>
          <div className='logo-header cursor-pointer basis-2/6   mx-auto my-auto flex items-center gap-4'>
            <img src={images.logo_smile} alt="logo" onClick={() => handleBackHome()} />
            <img src={images.menu} alt="" />
          </div>
          <div className="search-header basis-2/6">
            <div className="wrap-input relative h-[40px] w-[385px] ml-7">
              <input type="text" className='h-[100%] w-[100%] text-[14px]  p-2' placeholder='Search' />
              <img src={miccrphone_icon} className='absolute p-2 top-[14px] right-[15px] z-1' alt="" />
            </div>


          </div>
          <Menu className='nav-header basis-1.5/6 flex justify-between' defaultSelectedKeys={['2']} items={items1} />
        </div>

      </Header>
    </Layout>
  )

}


  ;

export default HeaderPage;