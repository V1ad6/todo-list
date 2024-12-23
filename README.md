# Запити, використані для написання доданку

Було використано 3 основні запити до Chat GPT, за допомогою яких була зроблена велика частина доданку

## Створення "картки" завдання
### Запит:
Я створюю react-додаток типу todo-list. Ось верстка додатку, яка вже є:
import './App.css';
import TaskCard from './components/TaskCard/TaskCard';

```
function App() {
   return (
    <div className="App">
      <h1 className="title">ToDo List</h1>
      <TaskCard/>
    </div>
  );
}

export default App;
```


Та вже написані стилі додатку:
```
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #root {
  height: 100%;
}

#root {
  background-color: rgb(0, 9, 49);
  padding: 15px 0;
}

.App {
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(1, 60, 189), rgb(0, 42, 133));
  border-radius: 15px;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 27px;
}

.title {
  font-family: "Josefin Sans", serif;
  color: rgb(216, 221, 253);
  text-align: center;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.192);
  padding: 20px 0 15px;
}

@media (max-width: 1024px) {
  .App {
    border-radius: 0;
  }
}
```

Потрібно зробити верстку та окремий файл стилів (врахувати, що файл стилів є МОДУЛЕМ: TaskCard.module.css. Тому стилі повинні підключатись відповідним способом) для TaskCard. Цей компонент є відображенням завдання, який користувач додав та планує зробити. Така "картка" повинна мати коротку назву, поле з більш детальним описом та кастомний чекбокс, за допомогою якого можна буде відмітити виконане завдання

### Результат:
В результаті даного запиту Chat GPT майже ідеально виконав поставлену задачу, а також додатково інтегрував даний компонент в створюваний доданок. Після аналізу результатів роботи ШІ з'ясувалось, що потрібно біло задати шрифт, виправити дещо в стилі самого чекбоксу та помилку, через яку при натисканні на чекбокс однієї картки реагував чекбокс іншої, при умові якщо в карток була однакова назва.


## Модальне вікно
### Запит:
```
<div className="App">
  <h1 className="title">ToDo List</h1>
  <button className="add-btn">+</button>
  {tasks.map((task) => (
    <TaskCard
      key={task.id}
      id={task.id}
      title={task.title}
      description={task.description}
      isCompleted={task.isCompleted}
      onToggle={() => toggleTask(task.id)}
    />
  ))}
</div>
```

Я додав елемент button. Треба зробити так, щоб при натисненні цієї кнопки відкривалось вікно для створення нового завдання. Вікно є окремим компонентом в окремому файлі зі своїм файлом .module.css. Воно повинно бути розташовано по центру, мати під собою напівпрозорий темний оверлей на весь екран, містити заголовок (яка вказує на те, що це вікно саме для додавання нового завдання), кнопку для закриття вікна на одному рівні з загловком, поле вводу назви завдання, поле вводу опису, кнопку очищення полів та кнопку додавання нового елементу в масив, який ти вже мені створив у файлі App

### Результат:
Результат виконання даного запиту відповідав усім вимогам та дизайну сторінки. Помилок не було. Потрібно виправити пару дрібних стилістичних недоліків.


## Local Storage
### Запит:
За допомогою хука useEffect треба зробити так, щоб при відкритті доданку масив брав дані з localStorage та додав нові дані туди при закритті доданку.

### Результат:
Зчитування даних з Local Storage у масив виконано без помилок. Замість оновлення Local Storage при закритті доданку Chat GPT реалізував оновлення при кожній зміні масиву, але було вирішено залишити це саме таким чином. Також в цій частині роботи з локальним сховищем ставалась помилка, через яку незважаючи на парвильне зчитування даних масив залишався порожнім. Дану помилку я вже виправив власноруч.