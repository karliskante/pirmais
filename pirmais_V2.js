
// 1.

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('text'));
console.log("--------------------------------");
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
console.log("--------------------------------");

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

  console.log("--------------------------------");
// 4.

var arrayz = [5, 3];
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
console.log(masivs2(arrayz));
console.log("--------------------------------");
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

       console.log(summer(cipars1,cipars2));
       console.log("--------------------------------");

 // 6. uzd
const authInput = (login, password) => {
  if (login === "" || login === null) return "lieotajvards tuksh";
  if (password === "" || password === null) return "parole tuksha";
  if (password.length < 12) return "vismaz 12 simboli";
  return "Success";
}
const res6 = authInput("admin", "admin123456789");
console.log(res6)
console.log("--------------------------------");
// 7. uzd
var arrayx = [1, 2, 3, 4];
const getLastAndFirsElFromArray = array => {
  if(array === null) return "Array is empty";
  if(array.length === 0) return "Array is empty";
  if(array.length === 1 || array.length === 2) return array;
  return [array[0], array[array.length - 1]];
}
const res7 = getLastAndFirsElFromArray(arrayx);
console.log(res7)
console.log("--------------------------------");
// 8. uzd
let raksts = {
  virsraksts: "Virsraksts",
  autors: "Autors",
  saturs: "54352143524436543232432716",
  patik: [],
  lasisanasIlgums: function () {
      var lasisanasIlgums = raksts.saturs / 1500;
      var hours = Math.floor(lasisanasIlgums / 60);
      var minutes = lasisanasIlgums % 60;
      return hours + " stundas un " + minutes + " minutes";
  },
  pieskirtPatik: function (patik) {
      var uid = ('id' + (new Date()).getTime());
      this.patik.push(uid);
      return raksts.patik;
  },
  nonemtPatik: function () {
      return this.patik.splice(this.patik.length - 1);
  },
};

raksts.pieskirtPatik();
str = JSON.stringify(raksts, null, 4);
console.log(str);
raksts.nonemtPatik();
str = JSON.stringify(raksts, null, 4);
console.log(str);
lasisanasilgums = raksts.lasisanasIlgums();


console.log(lasisanasilgums);
console.log("--------------------------------");
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
      street: "Riharda Vagnera iela",
      number: 16,
      city: "Riga",
      region: "Riga",
      index: "LV-1018"
  },
  phone: 26212111,
  taxes: 800,
  updateDate: new Date()
}
const uzn = new Uznemums(dataToSend);
uzn.Debt = {date: new Date(), updatedTaxes: 100000};
console.log(uzn.Debt);
console.log("--------------------------------");
// 10. uzd
class SIA extends Uznemums
 {
  constructor(uznData, SIAdata) 
  {
      super(uznData, SIAdata);
      this.form = "SIA";
      this._capital = SIAdata.capital;
      this._founder = SIAdata.founder;
  }

  pievienotDibinataju (data)
   {
      this._founder.push(data)
  }

  dibinatajuSaraksts() 
  {
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
console.log("--------------------------------");

// 11.

let atzimes = (a,b,c) => {
    let atzimes = (a+b+c)/3;
    console.log("videja atzime:"+atzimes);
    if(atzimes >= 4){
        console.log("vertejums ieskaitits");
    }
    else {
        console.log("vertejums neieskaitits");
    }
} 
console.log(atzimes(5,2,7))