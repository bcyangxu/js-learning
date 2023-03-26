var person = {
    firstName:'xu',
    lastName:'yang',
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}

console.log(person.fullName())