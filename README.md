# @bostoken/waifu-gatcha

![](https://raw.githubusercontent.com/BosToken/waifu-gatcha/master/Banner.png)

## About
Warning : grade rating is only based on the author's subjective

This Package Not Using API

## Install
How To Install?

```javascript
npm i @bostoken/waifu-gatcha
```

## Usage

```javascript
//Example 
const bostoken = require('@bostoken/waifu-gatcha');

    //get {name, anime, picture, star}
    console.log(bostoken.waifuGatcha());

    
    //get looping {name, anime, picture, star}
    console.log(bostoken.waifuGRefresh());

```

## Output

```javascript
/*{
    name : (name_character),
    anime : (anime_name),
    picture : (picture_link),
    star : (3-5 star),
}*/
```

## Contributing

[@BosToken](https://github.com/BosToken)
[@alfarise](https://github.com/alfarise)
