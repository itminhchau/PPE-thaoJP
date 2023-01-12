import { Layout } from "antd"
import SideBarPage from "../SideBarPage"
import PlayContent from "./PlayContent"

const PlayPage: React.FC = () => {

    return (
        <Layout >
            <SideBarPage />
            <PlayContent />
        </Layout>
    )
}
export default PlayPage