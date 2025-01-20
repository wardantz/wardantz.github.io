const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/articles', (req, res) => {
    res.sendFile(__dirname + '/articles.json');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
document.getElementById('refresh-button').addEventListener('click', () => {
    fetch('/api/articles')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = ''; // Bersihkan konten sebelum menambahkan baru
            data.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
                contentDiv.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Error fetching articles:', error));
});
