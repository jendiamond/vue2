### Fill the <p> below with your Name and Age using Interpolation
`<p>{{ name }} {{ age }}</p>`

### Output your age, multiplied by 3
`<p></p>`

### Call a function to output a random float between 0 and 1 (Math.random())
`<p></p>`

### Search any image on Google and output it here by binding the "src" attribute

*index.html*
```html
<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <title>Assignment 4</title>
    <script src='https://unpkg.com/vue/dist/vue.js'></script>
    <link href="https://fonts.googleapis.com/css?family=Overpass+Mono" rel="stylesheet">
    <link rel='stylesheet' href='styles.css'/>
  </head>
    <div id='app' class='container'>
      <body>

        <div id="exercise">
              <h3>Add your Name and Age - using Interpolation</h3>
              <p v-once>{{ name }} {{ age }}</p>

              <h3> Output your age, multiplied by 3 </h3>
              <p>Age, multiplied by 3 = {{ multipyByThree(age) }}</p>

              <h3>Call a function to output a random number</h3>
              <p v-once>{{ getRandomNum(1,100) }}</p>
        </div>
      </body>
  </div>
  <script src="main.js"></script>
</html>

```
*main.js*
```js
new Vue({
  el: '#app',
  data: {
    name: 'Jen Diamond',
    age: 33,
    dataAndMethodsLink: "<a href ='https://youtu.be/2MAoq2-2nnE'>Data and Methods Tutorial</a>",
    peep: 'https://i.pinimg.com/736x/8c/50/4c/8c504c6758edfab2e84fa1fbf129ba31--peep-show-happy-happy-happy.jpg',
  },
  methods: {
    multipyByThree: function(num) {
      return parseInt(num) * 3;
    },
    getRandomNum: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max)+ 1;
      return Math.floor(Math.random() * (max - min)) + min;
    },
    changeName: function(argument) {
      this.name = event.target.value;
    },
    changeAge: function(argument) {
      this.age = event.target.value;
    },
  }
});
```
