document.addEventListener('DOMContentLoaded', function() {
    // Handle artwork gallery
    document.getElementById('browse-collections-btn').addEventListener('click', function(event) {
        event.preventDefault();
        const artworkGallery = document.getElementById('artwork-gallery');
        const artworks = [
            'Artwork/1.JPG',
            'Artwork/2.png',
            'Artwork/3.jpg',
            'Artwork/4.png',
            'Artwork/5.png',
            'Artwork/6.png',
            'Artwork/7.png',
            'Artwork/8.png',
            'Artwork/9.jpeg',
            'Artwork/10.jpeg',
            'Artwork/11.jpeg',
            'Artwork/12.png',
            'Artwork/13.png',
            'Artwork/14.png',
            'Artwork/15.png',
            'Artwork/16.png',
            'Artwork/17.png'
        ];

        artworkGallery.innerHTML = ''; // Clear any existing content

        artworks.forEach(function(artwork) {
            const img = document.createElement('img');
            img.src = artwork;
            img.alt = 'Artwork';
            artworkGallery.appendChild(img);
        });

        window.location.href = '#collections'; // Scroll to collections section
    });

    // Handle artist profiles
    const artists = [
        {
            name: 'Damkor Kershima',
            profile: `
                <h3>Damkor Kershima</h3>
                <p>Date of Birth: SEP 27 1992</p>
                <p>Hometown: Yander, Gboko, Benue State, Nigeria</p>
                <p>Damkor Kershima is a prolific artist whose works capture the sociological effects of human existence across diverse races. His art addresses issues pertaining to our socio-cultural, political, economic, and socio-religious barriers.</p>
                <p>Kershima’s artistic journey began in his early years, growing up under the guidance of Baba Igbalan Ubi, a traditional Nigerian artist. It was Baba Igbalan’s tutelage that inspired Kershima to pursue art as a course in higher education. He graduated with a Second Class Upper Division in Fine Arts from Ahmadu Bello University, Zaria in 2016, and was recognized as the best graduating student in Art History.</p>
                <p>Kershima has evolved into a multimedia artist, creating artworks by repurposing waste materials found in his environment. This approach not only sanitizes the environment but also manages waste resources, turning refuse into beauty and wealth while promoting a healthy environment. His vision is to impart knowledge and transform lives through art, and his mission is to train and nurture upcoming young artists to transform human lives with genuine love using found objects.</p>
                <p>Quote: "Every child is a genius."</p>
                <p>Kershima's dedication to his craft and his innovative use of materials make him a significant figure in contemporary art, committed to both artistic excellence and environmental sustainability.</p>
            `
        },
        {
            name: 'Jude Luper Ngoholtamen',
            profile: `
                <h3>Jude Luper Ngoholtamen</h3>
                <p>Date of Birth: 19 September 1990</p>
                <p>Jude Luper Ngoholtamen is a passionate artist and dedicated educator hailing from Kaduna State, Nigeria. With a deep-rooted love for art that began in his childhood, Jude has honed his skills to become a prominent figure in the local art community. His artistic journey is characterized by a commitment to cultural preservation and educational empowerment, aiming to inspire young minds through the beauty and value of creative expression.</p>
            `
        },
        {
            name: 'Elijah Snoz',
            profile: `
                <h3>Elijah Snoz</h3>
                <p>Elijah Snoz has poured his passion onto the canvas, producing over 60 unique and captivating pieces. His commitment is evident in the intricate details and thought-provoking themes that permeate each creation.</p>
                <p>Link to portfolio: <a href="https://www.artconnect.com/elijah-ajayi-0Ro6Yv0YrbZTkZa6LqCRF?tab=portfolio" target="_blank">View Portfolio</a></p>
            `
        }
    ];

    const artistList = document.getElementById('artist-list');
    artistList.innerHTML = '';

    artists.forEach(function(artist) {
        const artistButton = document.createElement('button');
        artistButton.innerText = artist.name;
        artistButton.classList.add('artist-btn');
        artistButton.addEventListener('click', function() {
            const artistProfile = document.createElement('div');
            artistProfile.classList.add('artist-profile');
            artistProfile.innerHTML = artist.profile;
            artistList.innerHTML = ''; // Clear existing content
            artistList.appendChild(artistProfile);
        });
        artistList.appendChild(artistButton);
    });
});
