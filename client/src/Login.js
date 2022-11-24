import React from "react"
import { Container } from "react-bootstrap"


const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=f47e9606aaec4d69b81f2b89d536cd70&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center ml-3"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg mt-3" href={AUTH_URL}>
        Login With Spotify
      </a>

      <a className="btn btn-success btn-lg mt-3" href={AUTH_URL}>
        Login With Google
      </a>
    </Container>
  )
}