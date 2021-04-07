// import * as contentful from 'contentful'

// export const client = contentful.createClient({
//     space: process.env.REACT_APP_SPACE_ID ,
//     accessToken: process.env.REACT_APP_ACCESS_TOKEN
// })
import * as contentful from "contentful";

const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

console.log(process.env.REACT_APP_SPACE_ID)
console.log("testing");

export default client