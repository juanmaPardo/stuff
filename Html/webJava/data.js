/*
The document object gives us acces to the content of the page

Browser Object Model (BOM) are additional objects provided by the browser 
(host environment) to work with everything except the document.alert/confirm/prompt are also a part of BOM

The navigator object provides background information about the browser and the operating system
navigator.userAgent – about the current browser, and navigator.platform – about the platform 
(can help to differ between Windows/Linux/Mac etc).

The location object allows us to read the current URL and can redirect the browser to a new one.
alert(location.href); // shows current URL
if (confirm("Go to wikipedia?")) {
  location.href = "https://wikipedia.org"; // redirect the browser to another URL
}


In real life document.getElementById is the preferred method.
 let articles = form.getElementsByClassName('article');

The call to elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector. 
That’s the most often used and powerful method.
Example:
<ul>
  <li>The</li>
  <li>test</li>
</ul>
<ul>
  <li>has</li>
  <li>passed</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML); // "test", "passed"
  }
</script>


Matches:
<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // can be any collection instead of document.body.children
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("The archive reference: " + elem.href );
    }
  }
</script>


The innerHTML property allows to get the HTML inside the element as a string.
Example:
<body>
  <p>A paragraph</p>
  <div>A div</div>

  <script>
    alert( document.body.innerHTML ); // read the current contents
    document.body.innerHTML = 'The new BODY!'; // replace it
  </script>

</body>

The outerHTML property contains the full HTML of the element. That’s like innerHTML plus the element itself.
<div id="elem">Hello <b>World</b></div>

<script>
  alert(elem.outerHTML); // <div id="elem">Hello <b>World</b></div>
</script>




<div id="elem1"></div>
<div id="elem2"></div>

<script>
  let name = prompt("What's your name?", "<b>Winnie-the-pooh!</b>");

  elem1.innerHTML = name;
  elem2.textContent = name;//Creo que es mejor esta manera, ya que es safe
</script>

<div>Both divs below are hidden</div>

<div hidden>With the attribute "hidden"</div>

<div id="elem">JavaScript assigned the property "hidden"</div>

<script>
  elem.hidden = true;
</script>




elem.hasAttribute(name) – to check for existence.
elem.getAttribute(name) – to get the value.
elem.setAttribute(name, value) – to set the value.
elem.removeAttribute(name) – to remove the attribute.
elem.attributes is a collection of all attributes.


</body>
HTML attributes have the following features:

Their name is case-insensitive (id is same as ID)(eso de data-target y todo eso son atributos).
Their values are always strings.


All attributes starting with “data-” are reserved for programmers’ use. 
They are available in the dataset property.
<body data-about="Elephants">
<script>
  alert(document.body.dataset.about); // Elephants
</script>
Multiword attributes like data-order-state become camel-cased: dataset.orderState.
*/

