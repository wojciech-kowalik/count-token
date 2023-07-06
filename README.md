# Count GPT3 token function on Netlify

[![Deploy to
Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wojciech-kowalik/count-token)


```sh
curl https://count-token.netlify.app/.netlify/functions/count
curl --header "Content-Type: application/json" --request POST --data '{"text":"test"}' https://count-token.netlify.app/.netlify/functions/count
```