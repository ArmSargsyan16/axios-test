import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios"

function MoreDetails() {

    const { id } = useParams();
    const [detail, setDetails] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const onlyData = await axios.get(`https:/jsonplaceholder.typicode.com/posts/${id}`)
                setDetails(onlyData.data)
            } catch (error) {
                    console.log(error.message)
            }
        })()
    }, [])
    return (
        <>
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <h2 style={{ color: "green", marginTop: "50px", marginBottom: "50px" }}><b>Persons Details</b></h2>
                <table className="table table-striped table-hover table-bordered">
                    <thead >
                        <tr>
                            <th >Id</th>
                            <th >Title</th>
                            <th >Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{detail.id}</td>
                            <td>{detail.title}</td>
                            <td>{detail.body}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MoreDetails;