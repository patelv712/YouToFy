const express = require('express');
const app = express();
const SpotifyWebApi = require('spotify-web-node');


app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
      redirectUri: 'http://localhost:3000',
      clientId: 'b60f9fa389e64c0a89774d66fd2dc6f3',
      clientSecret: '054df06b187041058a022a520d858fc3',
    })


    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})


