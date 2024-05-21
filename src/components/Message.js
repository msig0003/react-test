export default function Message() {
    const user = {
        name: "your username",
        imageUrl: "https://c8.alamy.com/comp/REE8YG/cheerful-young-man-waving-hand-and-smiling-at-camera-isolated-on-white-REE8YG.jpg",
        imageSize: 90
    }
    const array = [
        {title: "first", id: 1},
        {title: "second", id: 2},
        {title: "third", id: 3}
    ]

    const arrayItems = array.map(array =>
        <li key={array.id}>
            {array.title}
        </li>
    )
    return (
        <>
            <h1>{user.name}</h1>
            <ul>{arrayItems}</ul>
        </>
    )
}