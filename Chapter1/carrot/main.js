const companies = [
  { name: "company one", category: "finance", start: 1980, end: 2003 },
  { name: "company two", category: "retail", start: 1911, end: 2008 },
  { name: "company three", category: "auto", start: 1950, end: 2001 },
  { name: "company four", category: "retail", start: 1981, end: 2000 },
  { name: "company five", category: "technology", start: 1986, end: 2009 },
  { name: "company six", category: "finance", start: 2011, end: 2011 },
  { name: "company seven", category: "mart", start: 1981, end: 2010 },
];


const submit = (event) => {
  innertext
  companise.push(value)

} 

const ages = [33, 12];
const companiess = companies.map((company) => company.name);

document.getElementById("demo").innerHTML = companiess;

function myFunction() {
  const companiesStart = document.getElementById("demo");
  companiesStart.innerHTML = companies.map((company) => company.start);
}




const 






// forEach

// const agesfilter = ages.map((age) => Math.sqrt(age)).map((age) => age * 3);

// const acculation = ages.reduce((total, age) => total + age, 5);

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// for (let i = 0; i <= companies.length; i++) {
//   console.log(companies[i].start);
// }

// companies.forEach((company) => {
//   console.log(company);
// });
// // filter

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const drink = ages.filter((age) => age >= 30);

// console.log(drink);

// const canDrink = ages.filter((age) => age >= 21);

// const retailCompanies = companies.filter(
//   (company) => company.category === "retail"
// );
// console.log(retailCompanies);

const eightiesCompanies = companies.filter(
  (company) => company.end - company.start < 10
);

console.log(eightiesCompanies);

// map

// const companyName = companies.map(
//   (company) => `${company.name}${company.start}`
// );
// console.log(companyName);

// sort
// reduce
