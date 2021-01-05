// قم بحل السؤال الأول هنا

let pets = [`cat`, `dog`, `bird`, `fish`, `girrafe`]

let newpet = prompt(`Whats your pet?`)

pets.pop();

pets.push(newpet)

pets.splice(2, 1)

console.log(pets)

let object = {
    name:`kitty`,
    age:`2`,
    type:`mammal`,
    emoji: `🐱`
}

console.log(object)

alert(object.age)