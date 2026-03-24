export default function Friend ({ friend }) {
    console.log(friend);
    const { name, email ,id, phone } = friend;

    return (
        <div className="card">
            <h4>Name: {name}</h4>
            
            <p>Email: {email} </p>

            <p>ID: {id} </p>

            <p>Phone : {phone} </p>
        </div>
    )
}