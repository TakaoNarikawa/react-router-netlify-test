# react-router-dom + netlify

## Tips

All we need to do is to create `public/_redirects` containing below.

```
/*    /index.html   200
```

## Install

```
yarn add react-router-dom
yarn add --dev gh-pages
```

## Build

```
yarn react-scripts build
```

## Routing

```
{
  path: "/",
  View: Page1,
},
{
  path: "/page2",
  View: Page2,
},
{
  path: "/page3",
  View: Page3,
},
```

## URL

Page1

`https://react-router-netlify-test.netlify.app/`

Page2

`https://react-router-netlify-test.netlify.app/page2`

Page3

`https://react-router-netlify-test.netlify.app/page3`
