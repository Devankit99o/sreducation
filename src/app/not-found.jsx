import Link from "next/link";


const NotFound=()=>{
    return (
        <div>
            <p>this page does't exist </p>
            <Link href='/Home'> Back to Home</Link>
        </div>
    )
}

export default NotFound;