### Fill the <p> below with your Name and Age using Interpolation
`<p>{{ name }} {{ age }}</p>`

### Output your age, multiplied by 3
`<p></p>`

### Call a function to output a random float between 0 and 1 (Math.random())
`<p></p>`

### Search any image on Google and output it here by binding the "src" attribute

```js
        <div id="exercise">
              <h3>Add your Name and Age - using Interpolation</h3>
              <p v-once>{{ name }} {{ age }}</p>

              <h3> Output your age, multiplied by 3 </h3>
              <p>Age, multiplied by 3 = {{ multipyByThree(age) }}</p>

              <h3>Call a function to output a random number</h3>
              <p v-once>{{ getRandomNum(1,100) }}</p>
        </div>
```
