# Design
## GitHub API
### Command
```
$ curl https://api.github.com/users/nabezokodaikon/repos
```

### Sucess
```
[
  {
    "id": 61000608,
    "name": "1password-docker",
    "html_url": "https://github.com/nabezokodaikon/1password-docker",
  },
  {
    "id": 17136214,
    "name": "AppDomainSample",
    "html_url": "https://github.com/nabezokodaikon/AppDomainSample",
  }
]
```

### Failed
```
{
  "message": "Not Found",
  "documentation_url": "https://developer.github.com/v3"
}
```


## State Shape
```
{
  lastUpdated: 1439478405547  // new Date(lastUpdated).toLocaleTimeString()
  isFetching: false,
  errorMessage: "Not Found",  // Error only.
  items: [                    // Sucess only.
    {
      "id": 61000608,
      "name": "1password-docker",
      "html_url": "https://github.com/nabezokodaikon/1password-docker",
    },
    {
      "id": 17136214,
      "name": "AppDomainSample",
      "html_url": "https://github.com/nabezokodaikon/AppDomainSample",
    }
  ]
}
```
