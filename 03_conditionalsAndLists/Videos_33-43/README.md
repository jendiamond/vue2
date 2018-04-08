# [Conditional Rendering](https://vuejs.org/v2/guide/conditional.html)

## `v-if`

`v-if` attached or detaches elements to the DOM


## `v-show`

`style = display: none`

The difference is that an element with v-show will always be rendered and remain in the DOM; `v-show` only toggles the display CSS property of the element.

Note that `v-show` doesn’t support the `<template>` element, nor does it work with v-else.

## v-if vs `v-show`

`v-if` is “real” conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.

`v-if` is also lazy: if the condition is false on initial render, it will not do anything - the conditional block won’t be rendered until the condition becomes true for the first time.

In comparison, `v-show` is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.

Generally speaking, `v-if` has higher toggle costs
while `v-show` has higher initial render costs.

Use `v-show` if you need to toggle something very often.

Use `v-if` if the condition is unlikely to change at runtime.

---

## `v-else-if`
New in 2.1.0+

The `v-else-if`, as the name suggests, serves as an “else if block” for `v-if`.

It can also be chained multiple times.

Similar to `v-else`, a `v-else-if` element must immediately follow a `v-if` or a `v-else-if` element.

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

---

template tags don't get rendered in the DOM - They are useful to group elements

---

## [v-for](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for)

#### `v-for="(item, index)`

We can use the `v-for` directive to render a list of items based on an array.
The `v-for` directive requires a special syntax in the form of `item in items`,
where `items` is the source data array and `item` is an alias for the array element being iterated on:

```html
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```

### v-for with an Object
```html
<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```

####  `v-for="(value, key)`
```html
<div v-for="(value, key) in object">
  {{ key }}: {{ value }}
</div>
```

---


## :key

When adding items to a list/array you need to specify the :key directive (v-bind:key) or it may not be added properly.

```html
<div v-for="item in items" :key="item.id">
  <!-- content -->
</div>
```

