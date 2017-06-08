# Design

## GitHub API
```
$ curl https://api.github.com/users/nabezokodaikon/repos

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

## State Shape
```
{
  lastUpdated: 1439478405547 // new Date(lastUpdated).toLocaleTimeString()
  isFetching: false,
  didInvalidate: false,
  items: [
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
