const reasonInput=document.querySelector('#input-reason');
const amountInput=document.querySelector('#input-amount');
const dateinput= document.querySelector('#input-date');

const cancelbtn=document.getElementById('btn-cancel');
const confirmbtn=document.getElementById('btn-confirm');
const expensesList=document.getElementById('expenses-list');
const totalexpensesoutput=document.getElementById('total-expenses');
let TotalExpenses=0;
const clear =() =>{
  reasonInput.value='';
  amountInput.value='';
}
confirmbtn.addEventListener('click', ()=> {
  const enteredReason =reasonInput.value;
  const enteredAmount =amountInput.value;
  const entereddate= dateinput.value; 


  if(
    enteredReason.trim().length <=0 ||
    enteredAmount <=0||
    enteredAmount.trim().length<=0)
   
  {
    presentAlert();
return;
  }

  const newItem1= document.createElement('ion-item');
  const newItem= document.createElement('ion-item');

    newItem1.textContent= 'Expenses date:'+entereddate;
    newItem.textContent= enteredReason+':' +enteredAmount+'dinars';

    expensesList.appendChild(newItem1);
    expensesList.appendChild(newItem);


    TotalExpenses+= +enteredAmount;
    totalexpensesoutput.textContent=TotalExpenses;
    clear();
  });

cancelbtn.addEventListener('click',clear);
function presentAlert(){
  const alert = document.createElement('ion-alert');
  alert.header ='Alert!';
  alert.message = 'Please enter valid reason and amount!';
  alert.buttons = [
    {
      text :'Yes',
      handler : () => {
        console.log('Yes')
      }

    },
    {
      text :'No',
      handler : () => {
        console.log('No')}
      }];
  
  document.body.appendChild(alert);
  alert.present();
}

