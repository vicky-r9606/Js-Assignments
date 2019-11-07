var colors=['red','green','yellow']; 
colors.forEach(x=>console.log(x));

var numbers= [1,2,3,4,5]; 
console.log(
  numbers.reduce((a, b) => a + b, 0)
)

cars.forEach(x=>console.log(x.price +" "+x.model))

var products=[

{name:'cucumber',type:'vegetable'},

{name:'banana',type:'fruit'},

{name:'celery',type:'vegetable'},

{name:'orange',type:'fruit'} ];

console.log(products.filter(o => o.type === 'fruit'));

var users= [{name: 'Rambo'},{name: 'Ram'},{name: 'Mahesh'}]
console.log(users.find(x=>x.name==='Rambo'));

 var computers= [

{name: 'Apple', Ram: '4'},

{name: 'HP', Ram: '24'},

{name: 'Dell', Ram: '16'}

];
var result=computers.filter(x=>x.Ram>16)