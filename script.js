let btn = document.getElementById('btn-1');
let btn2 =  document.getElementById('btn-2');

// let element = document.getElementById('hobby');
    

let output = document.getElementById('output');

btn.addEventListener('click', function(){
    alert('Walking Reading encouraging books Listning spiritual music')
    
})

const list = ["What brings me the most joy is spending time with my family", "Cooking for my family is my favourite activity to do", "Taking Walks with my children makes me happy"];

function addToList() {
    var newFavouriteText = document.getElementById('newFavourite').value;
    list.push(newFavouriteText);
  
    console.log(list);
    updateHTMLList();
  }
  
  document.getElementById('btn2').addEventListener('click', clickherefavourite);


// let output = document.getElementById
// const list = ["What brings me the most joy is spending time with my family", "Cooking for my family is my favourite activity to do", "Taking Walks with my children makes me happy"];

// window.onload = function(){
//     updateHTMLList();
// }
// btn2.addEventListener('click', function() {
    
    
//     var newFavouriteText = list.value;
//     list.push(newFavouriteText.innerHTML);
  
//     // console.log(list);
//     // updateHTMLList();
//   })
  
// document.getElementById('addToListButton').addEventListener('click', addToList);

// //   addToFavourite