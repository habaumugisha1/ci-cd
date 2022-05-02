const blogs = [
    {
        id:"1",
        title:"first blog",
        content: "this is first content"
    },
    {
        id:"2",
        title:"second blog",
        content: "this is first content"
    },
    {
        id:"3",
        title:"third blog",
        content: "this is first content"
    },
]

class Blogs {
    static getAllBolgs(req, res) {
        // if(blogs.length === 0) return res.status(404).json({status:404, error:"No blog exists"})
        return res.status(200).json({status:200, message:"All blogs exist", blogs})
    }

    static getSingleBolg(req, res) {
        const blogId = req.params.blogId

        const blog = blogs.filter(blog => blog.id === blogId);
        if(!blog) return res.status(404).json({status:404, error:"No blog exists"});
        return res.status(200).json({status:200, message:"A blog exist", blog});
    }
}

module.exports = Blogs