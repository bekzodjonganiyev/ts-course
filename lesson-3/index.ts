// type Book = {
//     readonly author: string, // readonly bu qiymatni ozgartirib bolmaydigan holatga keltradi
//     title: string,
//     pages?: number, // optional holatga keltirish (❓) belgisi bilan qilinadi 
//     price: number
// }

// let data: Book[] = [];

// data.push({author: "string", title: "title", price: 100, pages: 200})

// data[0].title = "sqssqsqs"
// // data[0].author = "sqssqsqs" // author readonly propertys


//*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-


// function sum(x: number, n: string): void {
//     console.log(x, n)
// }
// sum(1, "dona")

type Sum = (x: number, a: number) => void | number;
let sum: Sum = function(x: number, a: number) {
    console.log(x + a) // bu holatni o'zi qolsa function void bo'ladi yani qiymat qaytarmaydi

    // function nimadirni return qilsa bunday funksiyani qatiy tipi boladi va o'sha tipdagi qiymatni qaytaradi
    return x+a
}
sum(1, 4)


function sum1<Sum>/* Generics*/(){
    // any codes
}

// never type used in ⚡unreachbe⚡ events
function throwErr():never {
    throw Error("Error")
}

