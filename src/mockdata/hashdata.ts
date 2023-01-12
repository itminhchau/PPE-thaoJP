import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { images } from '../assets/img'

const siderBar_menu_title = [{
    icon: UserOutlined,
    label: "Tiếng Nhật",
    key: "menutn"
}, {
    icon: LaptopOutlined,
    label: "Kỹ Năng mềm",
    key: "menukn"
}].map(
    (element, index) => {
        const key = String(index + 1);
        if (element.key === "menutn") {
            return {
                key: `sub${key}`,
                icon: React.createElement(element.icon),
                label: ` ${element.label}`,
                children: [
                    { label: "N5: Tiếng nhật hàng ngày", key: "n5" },
                    { label: "N4: Tiếng Nhật trong cuộc sống", key: "n4" },
                    { label: "N3: Quản trị cảm xúc", key: "n3" },
                    { label: "N2: Tiếng Nhật business", key: "n2" },
                ].map((element, j) => {
                    if (element.key === "n5") {
                        return {
                            key: element.key,
                            label: `${element.label}`,
                            children: [
                                { label: "N5: Nấu cơm", key: "n5-nc" },
                                { label: "N5: Thể dục", key: "n5-td" },
                                { label: "N5: Quét nhà", key: "n5-qn" },

                            ].map((item, i) => {
                                return {
                                    key: item.key,
                                    label: `${item.label}`
                                }
                            })
                        };
                    } else {
                        return {
                            key: element.key,
                            label: `${element.label}`,
                        }
                    }

                }),
            };
        }
        if (element.key === "menukn") {
            return {
                key: `sub${key}`,
                icon: React.createElement(element.icon),
                label: ` ${element.label}`,
                children: [
                    { label: "Giao tiếp hàng ngày", key: "gthn" },
                    { label: "Giao tiếp trong công việc", key: "gttcv" },
                    { label: "Kỹ năng lãnh đạo", key: "knld" },
                    { label: "Kỹ năng start-up", key: "knst" },
                ].map((element, j) => {
                    return {
                        key: element.key,
                        label: `${element.label}`,
                        children: [
                            { label: "test", key: "a" }
                        ].map((item, i) => {
                            return {
                                key: `${i}-${item.key}`,
                                label: `${item.label}`
                            }
                        })
                    };
                }),
            };
        }

    },
);
const arrayPlay = [images.img_two, images.img_three, images.img_four, images.img_five, images.img_six, images.img_seven, images.img_eight, images.img_nine]
const arrayPlayExp = [images.img_one_exp, images.img_two_exp, images.img_three_exp, images.img_four_exp, images.img_five_exp, images.img_six_exp,]
// const arrayPlay: string[] = ["1", "2", "3", "1", "2", "3", "1", "2", "3",]
const arrayObjCourse = [
    {
        key: "n5",
        label: " N5: Tiếng nhật hàng ngày",
        title: "N5",
        labelexp: "N5: Trải nghiệm người dùng"
    },
    {
        key: "n4",
        label: " N4: Tiếng Nhật trong cuộc sống",
        title: "N4",
        labelexp: "N4: Trải nghiệm người dùng"
    },
    {
        key: "n3",
        label: " N3: Quản trị cảm xúc",
        title: "N3",
        labelexp: "N3: Trải nghiệm người dùng"
    },
    {
        key: "n2",
        label: " N2: Tiếng Nhật business",
        title: "N2",
        labelexp: "N2: Trải nghiệm người dùng"
    },

]
export {
    siderBar_menu_title,
    arrayPlay,
    arrayPlayExp,
    arrayObjCourse
} 