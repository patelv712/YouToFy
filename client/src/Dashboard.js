import {useState} from 'react'
import useAuth from './useAuth'
import { Container, Form } from "react-bootstrap"

function Dashboard({code}) {
    const access_token = useAuth(code)
    const [search, setSearch] = useState("")
    return (
        <Container className='d-flex flex-column py-2' style = {{height: "100vh"}}>
        <Form.Control type = "search" placeholder ="Search Songs/Artists" value = {search} onChange = {e => setSearch(e.target)}></Form.Control>
        <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}> </div>
        </Container>
    )
}

export default Dashboard