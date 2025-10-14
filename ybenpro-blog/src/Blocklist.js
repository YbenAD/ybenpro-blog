const Bloglist = ({ blogs, title, Handledelete }) => {

    return (
        <div className="bloglist">
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog" key={blog.id}>
                        <a href="" className="blog-title">{blog.title}</a>
                        <small className="blog-desciption-date">publié le {blog.date}</small>
                        <p className="blog-author">{blog.author}</p>
                        <button onClick={() => Handledelete(blog.id)}>Supprimer un article</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Bloglist;