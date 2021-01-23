// const swapiUrl = 'https://swapi.dev/api/'

// function getData(method,url) {
//     return new Promise((resolve,reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open(method,url)
//         xhr.onload = () => {
//         if(xhr.status < 400){
//             resolve(JSON.parse(xhr.response))
//         }else{
//             reject(JSON.parse(xhr.response))
//         }
//         }
//         xhr.send()
//     })
// }
// getData('GET',swapiUrl)
//                         .then(data => console.log(data))
//                         .catch(err => console.log(err))