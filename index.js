const element = document.createElement('style')


// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
element.innerHTML = `
address, blockquote, dd, dt, fieldset, figcaption, h1, h2, h3, h4, h5, h6, li, p {
  line-height: 1.5;
  max-width: 40em;
}

/* https://www.desmos.com/calculator/3elcf5cwhn */
h1 { font-size: 150%; }
h2 { font-size: 127%; }
h3 { font-size: 119%; }
h4 { font-size: 115%; }
h5 { font-size: 112%; }
h6 { font-size: 110%; }
`

const firstChild = document.head.firstChild
document.head.insertBefore(element, firstChild)

