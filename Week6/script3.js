// let list = [1, 2, 3, 4];

// // let listCopy = [];

// // Version 1: using for loop

// // for (let i = 0; i < list.length; i++) {
// //   let element = list[i];
// //   element += 3;
// //   listCopy.push(element);
// // }

// // Version 2: Using forEach()
// // list.forEach((element) => {
// //   listCopy.push(element + 3);
// // });

// // Version 3: using map() ..

// // let listCopy = list.map((element) => element + 3);

// // console.log(listCopy);

// let names = ["Alan", "Bob", "Abraham", "Chrsitina", "Tharani", "Kevin"];

// let newNames = names.filter((name) => name.startsWith("A"));

// let newNamesWithMap = names.map((name) => name.startsWith("A"));

// console.log(newNames);
// console.log(newNamesWithMap);

// Steps to solve this problem:

/*  
1.	Split the string into an Array of separate rows (i.e., an Array with rows separated by \n). Bonus: how could we deal with data that includes both Unix (\n) and Windows (\r\n) line endings?
*/

/* 
2.Each row contains information user info: ID, Name, Phone Number, and Height info all separated by commas. Split each row into an Array with all of its different fields. You need to deal with extra and/or no whitespace between the commas.


3.	Get rid of any extra spaces around the Name field


4.	Using a RegExp, extract the Area Code from the Phone Number field and update the field with that area code only. All Phone Numbers are in one of three formats: "555-555-5555" or "5555555555" or (555)1233445.
*/

var csvData = `1234, Alan Smith,519-123-4567, 62 inches
1235,                       Christina             Lee   ,2261234567, 149 cm
1236,         Kim      Thomas, (226)1234567, 138cm`;

function splitIntoRows(s) {
  return s.split(/\r?\n/g);
}

function rowToFields(row) {
  //   split on , with or wihout white spaces
  let fields = row.split(/\s*,\s*/g);

  // Remove extra whitespace from ..
  fields[1] = fields[1].replace(/\s+/g, " ");

  let phoneNumber = fields[2];
  let matches = phoneNumber.match(/(\(?\d{3}\)?)?[\s-]*\d{3}[\s-]*\d{4}/);
  if (matches) {
    fields[2] = `${matches[1]}`;
  }

  return fields;
}

function processCSV(csv) {
  // Step1: split into rows:
  let rows = splitIntoRows(csv);

  // Step2: SPlit all rows into array of fields
  //   let data = [];
  //   for (let i = 0; i < rows.length; i++) {
  //     let row = rows[i];
  //     let fields = rowToFields(row);
  //     data.push(fields);
  //   }

  //   for (let row of rows) {
  //     let fields = rowToFields(row);
  //     data.push(fields);
  //   }

  let data = rows.map((row) => rowToFields(row));

  console.log(data);
  return rows;
}

var processed = processCSV(csvData);
// console.log(processed);
