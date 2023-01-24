/*
//belirtilen ms den sonra bir kere çalışır
setTimeout(
    () => {console.log('İki saniye geçti')}
,2000)
*/


/*
setInterval(()=>{
    console.log('Girilen sürede sıklığında sürekli çalışır');
},1000)
*/


//sayHello isimli fonksiyon bir callback olarak fonksiyon parametresi alıyor. Aldığı fonksiyonla beraber çalışıyor
/*
const sayHello = (cb) => {
    cb();
};

sayHello(()=>{
    console.log('Hello');
});
*/

import fetch from "node-fetch";
import axios from "axios";


//sırasıyla fetch işlemleri yapılırken kullanılabilir 
//ilk fetch bitince diğeri çalışır sırayla çalışırlar
/*
fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => data.json())
    .then((users) => {
        console.log("Users Yüklendii");

        fetch('https://jsonplaceholder.typicode.com/posts/1').then(
            (data) => data.json()
        ).then((posts) => {
            console.log("post1 Yüklendii");
            console.log(posts)
            fetch("https://jsonplaceholder.typicode.com/posts/2").then(
                (data)=>data.json()
                .then((posts)=>{
                    console.log("post2 Yüklendii");
                    console.log(posts)
                })
            )
        })
        
    });
*/

//await işlemleri bekletir. yukarıdaki sırayı await kullanarak da sağlayabiliriz
//await kullanılmazsa sonucun dönmesini beklemeden kod bloğu çalışmaya devam eder.
//await kullanıldığında kod bloğu bekletilir ve sonucun dönmesini bekler.
//fetchleri sırasıyla yapmak bu şekilde de mümkündür. Yukarıdaki yerine aşağıdaki kullanılabilir.
/*async function getData (){
    const users = await(await fetch("https://jsonplaceholder.typicode.com/users")).json();
   // console.log(users);

    const posts = await (await fetch ("https://jsonplaceholder.typicode.com/posts/1")).json();
    console.log(posts);

    const {data : post2} = await axios("https://jsonplaceholder.typicode.com/posts/2"); //axios kullanımı data döndürür
    console.log("post2",post2);
}
getData();*/

//fetch gibi axios da kullanılabilir axios kullanımı daha rahattır. Daha çok tercih edilir.
const getComments = () => {
    return new Promise(async (resolve, reject) => {
        //resolve işlem başarılı olduğunda çalışır
        //reject işlem başarısız olduğunda çalışır

        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts/2"); //axios kullanımı data döndürür
        resolve(posts);
    })
}
getComments().then(
    (data) => {
        console.log(data); //resolve ile dönen değer data olarak alınır
    }
).catch((e) => { console.log(e) });