import { Layout } from "antd"
import SideBarPage from "../SideBarPage"
import CategoryContent from "./CategoryContent"


const CategoryPage: React.FC = () => {

    return (
        <Layout>
            <SideBarPage />
            <CategoryContent />
        </Layout>
    )
}
export default CategoryPage