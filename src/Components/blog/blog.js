
//import css
import "./blog.css"


//import BlogMain
import BlogMain from "./Components/blog-main/blog-main"

//import Creator
import Creator from "./Components/creator/creator"

//import Facts
import Facts from "./Components/facts/facts"

//import Examples
import Examples from "./Components/examples/examples"

//import Insights
import Insights from "./Components/insights/insights"

const Blog = () => {

    return(
        <div className="blog section-padding">
            <BlogMain />
            <Creator />
            <Facts />
            <Examples />
            <Insights />
        </div>
    )
}

export default Blog