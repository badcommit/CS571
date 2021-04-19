const express = require('express')
const cors = require('cors')
const fetch = require("node-fetch");
const app = express()
app.use(cors())
const port = 8080
const html = __dirname + '/public/';
const API_KEY= "cdd6570292883c83e09b6038ea882e30"
app.use('/static', express.static('static'))
app.use('/public', express.static('public'))

app.get('/api/movie/playing', (req, res) => {
    const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/movie/popular', (req, res) => {
    const api_url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/movie/trendday', (req, res) => {
    const api_url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/movie/top_rated', (req, res) => {
    const api_url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/tv/top_rated', (req, res) => {
    const api_url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})


app.get('/api/tv/popular', (req, res) => {
    const api_url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/tv/trendday', (req, res) => {
    const api_url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/detail/movie/:id', (req, res) => {
    const id = req.params.id;

    const api_url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/detail/movie/:id/review', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/detail/movie/:id/credit', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/detail/movie/:id/video', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})


app.get('/api/detail/tv/:id', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/detail/tv/:id/review', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/detail/tv/:id/credit', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/detail/tv/:id/video', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})


app.get('/api/detail/person/:id', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/detail/person/:id', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})
app.get('/api/detail/person_external/:id', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/similar/movie/:id', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/similar/tv/:id', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/recommend/movie/:id', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/recommend/tv/:id', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.get('/api/query/:id', (req, res) => {
    const id = req.params.id;
    const api_url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=1&query=${id}`;
    fetch(api_url, {
        method: "GET"
    }).then(res => {
        return res.json()
    }).then(d => {
        res.send(d);
    })
})

app.use('/', (req, res)=>{
    res.sendFile(html+'index.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

