const lol = `https://unique-name.nextgen0.repl.co/fb?fullName=${fullName}&firstName=${firstName}&middleName=${middleName}&lastName=${lastName}`;

fetch(lol)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetch request successful:', data);
  })
  .catch(error => {
    console.error('Fetch request error:', error);
  });
