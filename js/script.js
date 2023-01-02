const peoples = [
    {
      name: 'Alina',
      money: 2700.32,
      cities: 'Lviv, Kyiv, Ternopil',
      children: [
        {
          name: 'Oliver',
          age: 6,
        }
      ]
    },
    {
      name: 'Andrii',
      money: 9301.32,
      cities: 'Paris, Madrid, Rivne',
      children: []
    },
    {
      name: 'George',
      money: '35000',
      cities: 'Stambul',
      children: [
        {
          name: 'Olha',
          age: 8,
        },
        {
          name: 'Olena',
          age: 2,
        }
      ]
    }
  ];

function arrayModifications (array) {
    if (Array.isArray(array)) {
        for (i = 0; i < array.length; i++) {
            const people = peoples[i];
            const nameUpperCase = people.name.toUpperCase();
            console.log(nameUpperCase);
        }
        for (i = 0; i < array.length; i++) {
            const people = peoples[i];
            const cityToArray = people.cities.split(',');
            console.log(cityToArray);
        }
        for (i = 0; i < array.length; i++) {
            const people = peoples [i];
            if (typeof people.money === 'number') {
                const moneyRound = Math.round(people.money);
                console.log(moneyRound);
            }
            else if (typeof people.money === 'string') {
                people.money = Number(people.money);
                console.log(people.money);
                if (isNaN(people.money)) {
                    console.log('The value is NaN');
                }
            }
        }
        for (i = 0; i < array.length; i++) {
            const people = peoples[i];
            const newChild = {
                name: 'Stepan',
                age: Math.floor((Math.random()*18))};
            people.children.push(newChild);
            console.log(people.children);
        }

    } else {
        console.log('The input is not an array');
    }
};

console.log(arrayModifications(peoples));
