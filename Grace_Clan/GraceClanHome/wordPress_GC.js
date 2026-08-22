const wordpressAPI = {
  siteURL: 'http://www.wordpress-api.com', // This is just a sample url
  getPosts: (perPage = 3) => {
    return fetch(`${siteURL}/perPage?_embed`)
      .then(response => {
      if (response.ok) {
        const posts = response.json();
        return posts;
      }
    })
    .catch(error => {
      console.error(error.message);
    });
  },
  extractHTML: function(html) {
    const extractTool = new DOMParser();
    const doc = extractTool.parseFromString(html, 'text/html');
    const element = doc.body.innerHTML;
    return element;
  },
  formatDate: (dateTimeStamp) => {
    const date = new Date(dateTimeStamp);
    return date.toLocaleString('en-uk', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}