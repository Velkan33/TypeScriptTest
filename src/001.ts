export function test() {
 let user: Object = { name: "Kevin", age: 10 };
 // console.log(user.email) //NOTE - This will throw a compile error because email isn't a valid key ;
 console.log(user);

 let number1 = 3;

 let number2 = "3";

 let sum = number1 + number2;

 console.log(sum); //'33'
 //Is not an error
}
