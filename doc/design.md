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
