export default function Button({count, onClick}) {
   

    return (
        <button onClick={onClick}>clicked {count}</button> 
    )
}