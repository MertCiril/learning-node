//const users = ["Ali","Veli","Ayşe"];

const users =[{
    name:"Ali",
    age:20
},{
    name:"Veli",
    age:30
},{
    name:"Ayşe",
    age:40
}]

//push diziye eleman ekler
/*users.push("Ahmet");
console.log(users);*/

//map foreach gibi çalışır
/*users.map((index)=>{
    console.log(index.name);
})*/

//find ilk bulduğu elemanı döndürür
/*const result = users.find((index)=> index.name==="Ali");
console.log(result);*/

//filter dizi içindeki elemanları filtreler
/*const filtered = users.filter((index)=> index.age>25);
console.log(filtered);*/

//some dizi içindeki elemanlardan bir tanesi koşulu sağlıyorsa true döndürür
/*const some = users.some((index)=> index.age>25);
console.log(some);*/

//every dizi içerisindeki bütün elemanların koşulu sağlamasını bekler hepsi sağlıyorsa true döndürür
/*const every = users.every((index)=> index.age>15);
console.log(every);*/

