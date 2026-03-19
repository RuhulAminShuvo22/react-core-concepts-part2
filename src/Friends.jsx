import { use } from "react"

export default function Friends({friendsPromise}) {

    const friends = use(friendsPromise);
    console.log(friends);

    return (
        <div className="card">
            <h3>friends:{friends.length} </h3>
        </div>
    )
}