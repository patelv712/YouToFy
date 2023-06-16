import {useState, useEffect} from 'react'
import UseAuth from './UseAuth'
import {Container, Form} from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'
export default function DashBoard({code}) {
    const spotifyApi = new SpotifyWebApi({
        clientId: "b60f9fa389e64c0a89774d66fd2dc6f3"
    })
    const accessToken = UseAuth(code)
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=> {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(()=> {
        if (!search) return setSearchResults([])
        if (!accessToken) return
        spotifyApi.searchTracks(search).then(res=>{
            console.log(res)
        })
    }, [search, accessToken])

    return <Container className = "d-flex flex-column py-2" style = {
        {
            height: "100%",
        }
    }>
        <Form.Control type = "search" placeholder = "Search Songs" 
        value = {search} onChange={e=> setSearch(e.target.value)}/>
    <div className = "flex-grow-1 my-2" style={{overflowY:"auto"}}>Songs </div>
    <div>Bottom</div>
    </Container>
}
 