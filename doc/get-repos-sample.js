var github = require('octonode');
var client = github.client();
var ghsearch = client.search();
ghsearch.repos({
  q: 'user:nabezokodaikon',
  sort: 'created',
  order: 'asc'
}, function(err, data, headers) {
  if (err !== null) {
    console.log(`statusCode: ${err.statusCode}, message: ${err.message}`);
    return;
  }

  if (headers.status !== "200 OK") {
    console.log(headers.status);
    return;
  }

  const repos = data.items.map(a => { return { name: a.name, url: a.html_url }; });
  console.log(repos);
});
