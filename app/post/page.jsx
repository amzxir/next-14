async function PostPage() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 5 }
    });

    let data = await res.json()

    data = data.splice(0,10)

    return (
        <div>
            <h2>post page</h2>
            {
                data.map((i) => (
                    <div key={i.id}>
                        <p>{i.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default PostPage;