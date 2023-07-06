# GPT utils on Netlify

[![Deploy to
Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wojciech-kowalik/gpt-utils)

Count token function url: https://gpt-utils.netlify.app/.netlify/functions/count

```sh
curl --header "Content-Type: application/json" --request POST --data '{"text":"test"}' https://gpt-utils.netlify.app/.netlify/functions/count
```