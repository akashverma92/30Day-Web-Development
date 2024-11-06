let people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jack", age: 35 }
];

people.forEach(function(person) {
    console.log(person.name + " is " + person.age + " years old.");
    let { name, age } = person;
    console.log(name);

    let newPerson = { ...person, profession: "Developer" };
    console.log(newPerson);
});
