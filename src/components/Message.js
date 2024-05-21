export default function Message() {
    const user = {
        name: "your username",
        imageUrl: "https://c8.alamy.com/comp/REE8YG/cheerful-young-man-waving-hand-and-smiling-at-camera-isolated-on-white-REE8YG.jpg",
        imageSize: 90
    }
    return (
        <>
            <h1>{user.name}</h1>
            <img
                src={user.imageUrl}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
                alt="alt text"
            />
        </>

    )
}