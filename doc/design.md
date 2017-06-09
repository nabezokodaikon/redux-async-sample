# Design
## GitHub API
### Command
```
$ curl https://api.github.com/users/nabezokodaikon/repos

res.status
Sucess: 200
Failed: 404

res.statusText
Sucess: "OK"
Failed: "Not Found"
```

### Sample code
```
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
```


## State Shape
```
{
  lastUpdated: 1439478405547  // new Date(lastUpdated).toLocaleTimeString()
  isFetching: false,
  errorMessage: "Not Found",  // Error only.
  repos: [                    // Sucess only.
    {
      "name": "1password-docker",
      "url": "https://github.com/nabezokodaikon/1password-docker",
    },
    {
      "name": "AppDomainSample",
      "url": "https://github.com/nabezokodaikon/AppDomainSample",
    }
  ]
}
```
