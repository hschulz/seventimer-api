# Seventimer API

Interfaces and types for the 7Timer! API.

## Usage

Example in combination with axios

```typescript
import axios from "axios"
import { Api, CivilLightResponse } from "seventimer-api"

/* Use the api class to manage parameters and url */
const api = new Api()
api.lat = 52.520
api.lon = 13.404

/* Tell axios what to expect and use generated url */
axios.get<CivilLightResponse>(api.getRequestUrl())
.then(response => {
    for (const item of response.data.dataseries) {
        console.log(item.temp2m)
    }
})
```

## Todos
- [ ] The `two` api returns malformed json responses and is therefore not really functional
- [ ] Types should be moved to the `Types.ts` file
- [ ] Maybe implement the graphical API
- [ ] Improve quality of comments
