let input_01=document.getElementById("input_01");
let input_02=document.getElementById("input_02");
let button_login=document.getElementById("button_login");

button_login.addEventListener("click",function(){
 let teks01 = input_01.value;
 let teks02 = input_02.value;

  // Validasi supaya tidak kosong
  if (teks01 === "" || teks02 === "") {
  
    return;
  }

  // 3. Simpan masing-masing nilai ke local storage
  localStorage.setItem("data_pertama", teks01);
  localStorage.setItem("data_kedua", teks02);

  // 4. Kosongkan kembali teks di kedua input (hilang otomatis)
  input_01.value = "";
  input_02.value = "";

  // 5. Buktikan lewat console.log
  console.log("Data 1 masuk:", localStorage.getItem("data_pertama"));
  console.log("Data 2 masuk:", localStorage.getItem("data_kedua"));
  
});


 