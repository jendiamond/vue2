https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/practice/28/instructor-solution

Make sure you really understand the different syntaxes you can use when binding to `class` and `style` .

`:class="{someClass: condition}"` allows you to specify under which condition someClass should be added to this element.

`:class="someClass"` on the other hand allows you to dynamically bind to some object working in the same way as in the first example (so you basically removed the logic from the template and put it into your JS code).

`:class="[someClass, anotherClass]"` allows you to add multiple classes to an element.

Here, `someClass`  CAN also be an object with the `name: condition` mapping

but it can also just be a class name (which then is always added, since it doesn't have a condition).

You can find the Code on JSFiddle: https://jsfiddle.net/smax/jhj8cqdm/
