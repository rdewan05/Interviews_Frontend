// // console.log(5 < 6 < 7); //true
// // console.log(7 > 6 > 5); //false

// let me = { 
//     name: "Ashutosh Verma", 
//     thisInArrow:() => { 
//     nameFunc = () =>{
//         console.log("name func inside arrow func : ", this);
//     }    
//     console.log(this);    
//     console.log("My name is " + this.name); // no 'this' binding here 
//     nameFunc();
//     }, 
//     thisInRegular(){ 
//     console.log("My name is " + this.name); // 'this' binding works here 
//     } 
//    };
//    me.thisInArrow(); 
//    me.thisInRegular();

var my_name={
    name: "Richa",
    
    }
    
    var func = getName.bind(my_name);
    func();
    getName.call(my_name, 'a');
    getName.apply(my_name, [1,2]);
    
    function getName() {
      console.log("Hi, my name is : ",this.name);
      console.log(arguments[0]);
      // arguments[0] = 'a'; call
      // arguments[0] = 1; apply
    }
    
