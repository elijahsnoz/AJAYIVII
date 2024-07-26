const mongoose = require('mongoose');
const Artist = require('./models/Artist'); // Adjust the path as necessary

mongoose.connect('mongodb://localhost:27017/ajayiVII', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const seedArtists = [
    {
        name: 'Damkor Kershima',
        dateOfBirth: 'SEP 27 1992',
        hometown: 'Yander, Gboko, Benue State, Nigeria',
        info: 'Damkor Kershima is a prolific artist whose works capture...',
        quote: 'Every child is a genius.',
        portfolioLink: ''
    },
    // Add more artists as needed
];

const seedDB = async () => {
    await Artist.deleteMany({});
    await Artist.insertMany(seedArtists);
    console.log('Database seeded!');
};

seedDB().then(() => {
    mongoose.connection.close();
});
