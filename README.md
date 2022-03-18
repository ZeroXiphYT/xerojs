# xeroJS
It is Work In Progress So There Is Going To be More added        
  
This is a jquery clone I made  
To add this to your project download or clone this repository then add lib.js to your editor and put in in your html file put <script src="path to lib.js"></script> BEFORE any your actual javascript.  

## How To Use

### Basics
Selecting an element
```javascript
//selecting an element
$('element')
//selecting an element with id
$('#id')
//selecting an element with class
$('.class')
//selecting an attribute
$('[class="class"]')
//You can combine them like how you do with querySelector
```
Hide and show
```javascript
//hide hides the element using display:none
$('element').hide()
//show shows the element by using display:block
$('element').show()

```
### HTML
HTML and setHTML
```javascript
//returns elements html
$('element').html()
//set html with setHTML(code)
$('element').setElement('<p>Example On Some Code</p>')
```

### Attributes
classes and id
```javascript
//class
$('element').addClass('class')
//id
$('element').addId('id)
```
src and style
```javascript
//src
$('element').src('src')
//style
$('element').style('color', 'cyan')
```
value
```javascript
//returns the value of an element
$('element').value()
```
attr
```javascript
$('element').attr('id', 'whatever')
//if the value is null it will use get an attribute instead of setting an attribute
```
### Other
on
```javascript
//basically addEventListener
$('button').on('click', function(){
console.log('something')
})
//or
$('button').on('click', doSomething)
function doSomething(){
console.log('something')
})
//you get the idea
```
createChld(It is createChld and not createChild, not a spelling mistake)
```javascript
//syntax is createChld(childElement, id, class, innerHTML)
$('div').createChld('p', 'id', 'class', 'Hello or <strong>Hello</strong>')
```

lg
```javascript
//just logs to a div with the id of log
lg('message')
```
