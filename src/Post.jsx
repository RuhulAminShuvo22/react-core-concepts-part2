

export default function Post({Post}) {
    return(
        <div className="card">

            <h5> {Post.title} </h5>

            <p> {Post.body}</p>

        </div>
    )
}