# simple-react-smooth-scroller

> Minimalistic react component to achieve smooth scrolling with anchored links (e.g. /Home#HowItWorks)

[![NPM](https://img.shields.io/npm/v/simple-react-smooth-scroller.svg)](https://www.npmjs.com/package/simple-react-smooth-scroller) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-react-smooth-scroller
```

## Usage
Just wrap the component you want to have the smooth scrolling and add IDs to the divs you want to navigate to.

Basic Setup.
```jsx
import React from 'react'
import Scroller from 'simple-react-smooth-scroller'

const Example = () => {
    return (<Scroller>
      <div id="Main">
      </div>
      <div id="HowItWorks">
      </div>
    </Scroller>);
}
```

You can use react links but it will work with any link that has an anchor (hash)
```jsx
import {Link} from "react-router-dom";

const TopBar = () =>  {
  return (<header>
            <Link to={'/#Main'}>
                <img src={logo} alt="Logo"/>
            </Link>
            <Link to={'/#HowItWorks'}>
                HowItWorks
            </Link>

  </header>)
}
```

Recommended Setup on app.js within router.
```jsx
/// import ...;
import Scroller from 'simple-react-smooth-scroller'

export default function BasicExample() {
    return (
        <Router>
            <Switch>
                <Scroller>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={SignUp}/>
                </Scroller>
            </Switch>
        </Router>
    );
}

```

## License

MIT © [z3phyro](https://github.com/z3phyro)
