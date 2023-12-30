function greeting (name, language){
  if (language === "Indonesia" || language === "indonesia"){
    console.log (`Selamat Pagi ${name} !`)
  }
  else if (language === "English" || language === "english"){
    console.log (`Good Morning ${name} !`)
  }
  else if (language === "Japanese" || language === "japanese"){
    console.log (`Ohayou ${name} !`)
  }
  else {
    console.log ("Sorry, I don't understand your language")
  }
}
greeting ("Elfa","Indonesia")

const sayName = name => {
  console.log(`Nama saya ${name}`);
}

sayName("Elfa");


// Fungsi findIndex
function findIndex(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1; // Mengembalikan -1 jika angka tidak ditemukan dalam array
}

const index = findIndex
console.log(findIndex)

function alertUser() {
  alert("Hello!");
}
