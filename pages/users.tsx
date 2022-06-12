import {User} from "../types"
import UsersRouter from "../components/UsersRouter"

interface Props{
    data:User[];
}

export default function UsersPage ({data}:Props):JSX.Element{

console.log(data)

    return(<>

    <UsersRouter
    users={data}
    />
    
    </>)
}




export async function getServerSideProps(){


    const response = await fetch("https://open-study-college-application.herokuapp.com/users")
    const data:User[] = (await response.json()).payload


    return {props:{data}}
}