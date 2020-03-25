 //items identifed
 
 const aaa = {name: "AAA", size: "small" , amount: 40};
 const b = {name: "b", size: "small" , amount: 13};
 const c = {name: "c", size: "medum" , amount: 22};
 const d = {name: "d", size: "big" , amount: 4};
 const a = {name: "a", size: "small" , amount: 5};


 function logOutThings(){
    console.log('Here are your ' + bateries.length + ' things!!!!!!' );  
 }

 //name of the varable
 const bateries = [aaa, b, c, d, a];

 //nuber of items in the varable
 logOutThings();


 for( let i = 0; i < bateries.length; i++){
       console.log(bateries[i]);
       if(bateries[i].amount <= 10){
        console.log("you need to get " + bateries[i].name);
    }
}