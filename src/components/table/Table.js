import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Modal from "../modal/Modal";

function Table() {

    const [posts, setPosts] = useState([])
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [id, setId] = useState(null)

    useEffect(() => {
        async function fetchingData() {
            try {
                const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
                setPosts(data.data)
            } catch (error) {
                if (error.respons) {
                    console.log("something went wrong")
                }
            }
        }
        fetchingData();
    }, [])

    const toggleShow = () => setShow(!show);
    return (
        <div>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th >Id</th>
                        <th >Title</th>
                        <th >Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post, id) => {
                            return (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td >
                                        <button type="button" className="btn btn-secondary" onClick={() => navigate(`/${post.id}`)} >More Details</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" style={{ margin: "10px" }} onClick={() => {
                                            setId(post.id)
                                            toggleShow()
                                        }} >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Modal
                toggleShow={toggleShow}
                show={show}
                posts={posts}
                id={id}
                delFunction={(id) => setPosts(posts.filter((post) => post.id != id))}
            />
        </div>
    )
}

export default Table;