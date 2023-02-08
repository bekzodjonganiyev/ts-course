// let x:number
// // x = "282" // type faqat number bolishi kerak ❌
// x = 282 // ✅

//*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

// let x:any // bu tip TypeScriptni kuchini yo`qoytadi 👀
// x = "aka yaxshimisiz"
// x = 98
// x = ["jj", 939, "jsj"]

//*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

// constant type haqida

//*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

// Tulpe, fixed length array
// let arr: [10, 12]
// arr = [10, 12, 23] // arr ni elementlari faqatgina 10 va 12 bo'la oladi chuni type 10 va 12 dan iborat 1️⃣0️⃣ va 1️⃣2️⃣

// let roles: [0, 1, 2, 3] // userni "role"ini aniqlash uchun ishlatish mumkin lekin yaxshu usul emas
// roles = [0, 1, 2, 3]

//*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

// Enum (Enuminated Number)
// enum ROLES {USER, MODERATOR, ADMIN, OWNER} // default holatda enum elementlari 0 dan boshlanadi
// console.log(ROLES.ADMIN) // 2

// enum ROLES {USER = 20, MODERATOR, ADMIN, OWNER} // bu holatda birinchi qiymatga o`zimiz qiymat berdik
// console.log(ROLES.ADMIN) // 22

// enum ROLES {USER = 20, MODERATOR=1, ADMIN =3, OWNER} // qiymatlarni o`zimiz xoxlaganday bersak ham bo`ladi
// console.log(ROLES.MODERATOR)

//*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

// ADVANCED TYPES

// Union types 1️⃣
// let input: boolean | number | string;
// input = 12;
// input = "aka yaxshimisiz";
// input = true;

// let input:
//   | (string | number)[]
//   | boolean
//   | { name: string; age: number; id: number | string };

// input = {name: "Bek", age: 21, id:"id21"} // union typlelarda object🔴
// input = ["Bekzod", 21, "id21"] // union typlelarda array🔴
// input = false
// input = "Aka" // berilgan typelar ichida string yo`q

// Literal types 2️⃣
// let greeting: "Hello" | "Hi" | "Ok"
// // greeting = "Qalaysan" // bu mumkin emas
// greeting = "Hello" // faqat korsatilgan valuelarni oladi xolos

// let value: {name: string} | {age: number} | {name: string, age: number}
// value = {name: "Bekzod"}
// // value = {address: "Toshkent"} // objectni key va valuelari konkret bolishi kerak

// Type aliases 3️⃣ // o`zimizni typelarimizni yasaymiz
type withName = {name: string}
type withAge = {age: number}
type withFull = withAge & withName

let value: withFull // name and age
// let value: withName // name
// let value: withAge // age
value = {name: "John", age: 20}
// value = {name: "John"} 
// value = { age: 20}
