document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('dob', document.getElementById('dob').value);
    formData.append('profile-picture', document.getElementById('profile-picture').files[0]);
    formData.append('biography', document.getElementById('biography').value);
    formData.append('art-medium', document.getElementById('art-medium').value);
    formData.append('artwork', document.getElementById('artwork').files[0]);

    axios.post('/api/signup', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(function(response) {
        alert('Artist profile submitted successfully!');
        document.getElementById('signup-form').reset();
    })
    .catch(function(error) {
        console.error('There was an error submitting the form!', error);
    });
});
