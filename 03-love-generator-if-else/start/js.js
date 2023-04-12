const firstName = prompt("Напишите первое имя: ");
const secondName = prompt("Напишите второе имя: ");

const randomNumber = Math.floor(math.random() * 100);

alert(
  `Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber}`
);

if (randomNumber < 33) {
  alert(
    `Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} вам нужен поискать человека с другим именем!`
  );
} else if (randomNumber >= 33 && randomNumber < 66) {
  alert(
    `Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} совместимость хорошая, но может быть и лучше!`
  );
} else if (randomNumber >= 66) {
  alert(
    `Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} вы идеально подходите друг к другу!`
  );
} else {
  alert(`Упс... Что-то пошло не так, попробуйте еще раз!`);
}
