
// 1.

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('text'));

// 2.
var patiesiba = false;
var a = 1;
var b = 4;
a = parseInt(a);
b = parseInt(b);
c = a +b;
if (a == 5 ) {
    patiesiba = true;
  } 
  else if (b == 5) {
      patiesiba = true;
  }
else if (c == 5) {
 patiesiba = true;
}
else {
    patiesiba = false;
}
console.log(patiesiba);

// 3.

var array = [5, 3, 2, 7, 8];
var sum;
function masivs(array) {
    for (
      var
        index = 0,              // The iterator
        length = array.length,  // Cache the array length
        sum = 0;                // The total amount
        index < length;         // The "for"-loop condition
        sum += array[index++]   // Add number on each iteration
    );
    return sum;
  }

  console.log("SUMMA IR: "+masivs(array));

   console.log("-------------------- ");
     console.log("--------------------");
	   console.log("---------------------");
// 4.

var arrayz = [5, 3, "ABDF"];
var sum;
  var pat2 = !arrayz.some(i => !Number.isInteger(i));
function masivs2(arrayz) {
    if(arrayz.length == 3 && arrayz.length > 0 && pat2 == true){
    for (
      var
        index = 0,              // The iterator
        length = arrayz.length,  // Cache the array length
        sum = 0;                // The total amount
        index < length;         // The "for"-loop condition
        sum += arrayz[index++]   // Add number on each iteration
    );
    return sum;
  }
  else {
      if(arrayz.length == 0) {
      console.log("arraya nav elementu");
      }
      else if (arrayz.length !== 3) {
      console.log("arraya nav tiesi 3 elementi")
      }
      else if (pat2 == false) {
     console.log("arraya nav skaitlu")  
    }
  }
}


// 5.

var cipars1 = 6;
var cipars2 = 3;
var summa;

function summer(cipars1,cipars2) {
if (cipars1 == cipars2) {
	summa = (cipars1 + cipars2)*3;
	return summa;
	}
	else {
		summa = cipars1+cipars2;
		return summa;
	}
	
}
 console.log("-------------------- ");
     console.log("--------------------");
	   console.log("---------------------");
	   console.log(summer(cipars1,cipars2));

 // 6. uzd
const authInput = (login, password) => {
  if (login === "" || login === null) return "lieotajvards tuksh";
  if (password === "" || password === null) return "parole tuksha";
  if (password.length < 12) return "vismaz 12 simboli";
  return "Success";
}
const res6 = authInput("admin", "admin123");
console.log(res6)

// 7. uzd
const getLastAndFirsElFromArray = array => {
  if(array === null) return "Array is empty";
  if(array.length === 0) return "Array is empty";
  if(array.length === 1 || array.length === 2) return array;
  return [array[0], array[array.length - 1]];
}
const res7 = getLastAndFirsElFromArray([1, 3, ,4, 5]);
console.log(res7)

// 8. uzd
let Raksts = {
  virsraksts: "Title",
  autors: "Author",
  saturs: "Content content content",
  patik: [],
  lasisanasIlgums: () => {
      return Raksts.saturs.length / 1500
  },
  pieskirtPatik: id => {
      Raksts.patik.push(id);
      return Raksts.patik;
  },
  nonemtPatik: id => {
      const idx = Raksts.patik.indexOf(id)
      Raksts.patik.splice(idx, 1);
      return Raksts.patik
  }
}

console.log(Raksts.lasisanasIlgums())
console.log(Raksts.pieskirtPatik(1))
console.log(Raksts.pieskirtPatik(2))
console.log(Raksts.pieskirtPatik(3))
console.log(Raksts.pieskirtPatik(2))
console.log(Raksts)

// 9. uzd
class Uznemums {
  constructor(data) {
      this.title = data.title;
      this.form = data.form;
      this.regData = {
          numurs: data.regData.number,
          datums: data.regData.date
      };
      this._address = {
          street: data.address.street,
          number: data.address.number,
          city: data.address.city,
          region: data.address.region,
          index: data.address.index
      };
      this._phone = data.phone;
      this._taxesDebt = data.taxes;
      this._updateDate = data.updateDate;
  }

  get Debt () {
      return {date: this._updateDate, debt: this._taxesDebt};
  }

  set Debt ({date, updatedTaxes}) {
      this._updateDate = date;
      this._taxesDebt = updatedTaxes;
  }

}
const dataToSend = {
  title: "Title",
  form: "SIA",
  regData: {
      number: 12,
      date: new Date(),
  },
  address: {
      street: "Liela iela",
      number: 1,
      city: "Jelgava",
      region: "Zemgale",
      index: "LV-3001"
  },
  phone: 29705401,
  taxes: 500,
  updateDate: new Date()
}
const uzn = new Uznemums(dataToSend);
uzn.Debt = {date: new Date(), updatedTaxes: 100};
console.log(uzn.Debt);

// 10. uzd
class SIA extends Uznemums {
  constructor(uznData, SIAdata) {
      super(uznData, SIAdata);
      this.form = "SIA";
      this._capital = SIAdata.capital;
      this._founder = SIAdata.founder;
  }

  pievienotDibinataju (data) {
      this._founder.push(data)
  }

  dibinatajuSaraksts() {
      return {
          title: this.title,
          date: this.regData,
          founder: this._founder
      }
  }
}

const dataToSendSIA = {
  capital: 100500,
  founder: [
      {
          name: "Adris",
          surname: "Koks",
          code: "021296-10010"
      },
      {
          name: "ALEX",
          surname: "OVECHKIN",
          code: "111197-10060"
      }
  ]
}
const sia = new SIA(dataToSend, dataToSendSIA);
sia.pievienotDibinataju(
  {
      name: "Elvis",
      surname: "Merzly",
      code: "060493-20007"
  }
)
console.log(sia.dibinatajuSaraksts())