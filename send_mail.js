document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }

  fetch('https://formspree.io/f/xanwwqdb', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      _replyto: email,
      message: message
    })
  }).then(response => {
    if (response.ok) {
      alert('Message sent successfully');
      document.getElementById('contact-form').reset();
    } else {
      alert('Failed to send message');
    }
  }).catch(error => {
    console.error('Error:', error);
    alert('Error sending message');
  });
});
