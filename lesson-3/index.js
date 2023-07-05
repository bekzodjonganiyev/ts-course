// type Book = {
//     readonly author: string, // readonly bu qiymatni ozgartirib bolmaydigan holatga keltradi
//     title: string,
//     pages?: number, // optional holatga keltirish (❓) belgisi bilan qilinadi 
//     price: number
// }
var sum = function (x, a, k /** k bu yerda optional parametr va doim oxirida kelishi shart */) {
    console.log(x + a); // vu holatni o'zi qolsa function void bo'ladi yani qiymat qaytarmaydi
    if (typeof k !== undefined)
        console.log(k);
    // nimadirni return qilsa bunday funksiyani qatiy tipi boladi va o'sha tipdagi qiymatni qaytaradi
    return x + a;
};
sum(1, 4);
