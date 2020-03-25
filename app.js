 //items identifed
 
 const aaa = {name: "AAA", size: "small" , amount: 40};
 const b = {name: "b", size: "small" , amount: 13};
 const c = {name: "c", size: "medum" , amount: 22};
 const d = {name: "d", size: "big" , amount: 4};
 const a = {name: "a", size: "small" , amount: 5};


 function logOutThings(array){
    console.log('Here are your ' + array.length  + ' things!!!!!!' );  
 }

 //name of the varable
 const bateries = [aaa, b, c, d, a];
 const amoutNeed = 23; 
 //nuber of items in the varable
 logOutThings(bateries);
 shopingList(bateries, amoutNeed);


 function shopingList(array, a){
        for( let i = 0; i < array.length; i++){
            console.log(array[i]);
            if(array[i].amount <= a ){
                console.log("you need to get " + array[i].name);
            }
        }
 }


 