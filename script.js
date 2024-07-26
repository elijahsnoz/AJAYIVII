document.addEventListener('DOMContentLoaded', () => {
    const artistList = document.getElementById('artist-list');

    axios.get('http://localhost:5000/artists')
        .then(response => {
            const artists = response.data;
            artists.forEach(artist => {
                const artistLink = document.createElement('a');
                artistLink.href = `artist.html?id=${artist._id}`;
                artistLink.textContent = artist.name;
                artistList.appendChild(artistLink);
                artistList.appendChild(document.createElement('br'));
            });
        })
        .catch(error => {
            console.error('There was an error fetching the artist data!', error);
        });
});
