alert("This site is for Experimental purpose only & for any misUse Developer shall not be responsible for that.")

let ss = document.getElementById('ss');
ss.style.display='none';
let heAcc = document.getElementById('he');
let myAcc = document.getElementById('me');
let amount = document.getElementById('amount');
let genrate = document.getElementById('genrate');
let ac = document.getElementById('ac');
let yac = document.getElementById('yac');
let money = document.getElementById('money');
let main = document.getElementById('main');
let ref = document.getElementById('ref');


genrate.addEventListener('click',()=>{
  if(heAcc.value=='' || myAcc.value==''|| amount.value==''){
    alert('Enter all fields..');
    }else{
  ac.innerHTML = heAcc.value;
    yac.innerHTML = myAcc.value;
    money.innerHTML = amount.value;
ref.innerHTML= Math.ceil((Math.random() + 1)*1000000000);
  ss.style.display = 'block';
   main.style.display = 'none';
}
})