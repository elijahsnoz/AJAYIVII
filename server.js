const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.post('/api/signup', upload.fields([{ name: 'profile-picture', maxCount: 1 }, { name: 'artwork', maxCount: 1 }]), (req, res) => {
    const { name, phone, email, dob, biography, artMedium } = req.body;
    const profilePicture = req.files['profile-picture'][0];
    const artwork = req.files['artwork'][0];

    const artistData = {
        name,
        phone,
        email,
        dob,
        biography,
        artMedium,
        profilePicture: profilePicture.path,
        artwork: artwork.path
    };

    fs.writeFileSync(`data/${name.replace(/ /g, '_')}.json`, JSON.stringify(artistData, null, 2));

    res.send('Artist profile submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
