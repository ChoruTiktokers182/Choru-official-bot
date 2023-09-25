const url = `https://unique-name.nextgen0.repl.co/fb?fullName=${encodeURIComponent(fullName)}&firstName=${encodeURIComponent(firstName)}&middleName=${encodeURIComponent(middleName)}&lastName=${encodeURIComponent(lastName)}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Fetch request was not successful');
    }
    return response.json(); // Assuming the response is JSON data
  })
  .then(data => {
    console.log('Fetch request successful:', data);
  });
  .catch(error => {
    console.error('Fetch request error:', error);
  });
