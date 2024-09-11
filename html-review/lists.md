# Unordered lists

<ul></ul> -- indicates unordered list
<li></li> -- list item
```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

# Ordered lists

<ol></ol> -- indicates ordered list
```html 
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```
- output has numbers instead of bullet points.  
- you can change it from numbers to letters, or roman numerals with the `type` attribute.

```html
<ol type="1"></ol>
<ol type="a"></ol>
<ol type="A"></ol>
<ol type="i">
  lowercase Roman numerals
</ol>
<ol type="I">
  Roman numerals
</ol>
```

# Definition lists

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

- <dd></dd> elements are indented

# Nesting lists

```html
<ul>
  <li>Item 1</li>
  <li>
    Item 2
    <ul>
      <li>Sub-item 1</li>
      <li>Sub-item 2</li>
    </ul>
  </li>
  <li>Item 3</li>
</ul>
```
