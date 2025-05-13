import {Breadcrumb} from 'antd';
import {useMatches} from "react-router";

function MyBreadcrumb() {
    const matches = useMatches()
    console.log(matches)

    return (
        <Breadcrumb
            items={[
                {
                    title: 'Home',
                },
                {
                    title: <a href="">Application Center</a>,
                },
                {
                    title: <a href="">Application List</a>,
                },
                {
                    title: 'An Application',
                },
            ]}
        />
    )
}

export default MyBreadcrumb