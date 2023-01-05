import { Layout } from "antd"
import React from "react"
import SideBarPage from "../SideBarPage"
import HomeContent from "./HomeContent"


const HomePage: React.FC = () => {
    return (
        <>
            <Layout>
                <SideBarPage />
                <HomeContent />
            </Layout>
        </>
    )

}

export default HomePage