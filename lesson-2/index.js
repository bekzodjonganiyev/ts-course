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
var ROLES;
(function (ROLES) {
    ROLES[ROLES["USER"] = 20] = "USER";
    ROLES[ROLES["MODERATOR"] = 1] = "MODERATOR";
    ROLES[ROLES["ADMIN"] = 3] = "ADMIN";
    ROLES[ROLES["OWNER"] = 4] = "OWNER";
})(ROLES || (ROLES = {})); // bu holatda birinchi qiymatga o`zimiz qiymat berdik
console.log(ROLES.MODERATOR); // 22
