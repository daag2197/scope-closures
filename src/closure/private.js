const person = () => {
    var Name = 'Nombre';
    return {
        setName: (name) => {
            Name = name;
        },
        getName: () => {
            return Name;
        }
    };
};

var newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Diego')
console.log(newPerson.getName());