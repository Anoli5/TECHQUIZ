const data = {
  HTML: [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyperlinking Text Management Language"
      ],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which tag is used to create a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      answer: "<a>"
    },
    {
      question: "What is the correct HTML element for the largest heading?",
      options: ["<h6>", "<h1>", "<heading>", "<head>"],
      answer: "<h1>"
    },
    {
      question: "Which element is used to insert an image?",
      options: ["<img>", "<picture>", "<image>", "<src>"],
      answer: "<img>"
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image?",
      options: ["alt", "title", "src", "text"],
      answer: "alt"
    },
    {
      question: "Which tag is used to create a table row?",
      options: ["<tr>", "<td>", "<th>", "<row>"],
      answer: "<tr>"
    },
    {
      question: "Which tag is used to make a numbered list?",
      options: ["<ol>", "<ul>", "<li>", "<dl>"],
      answer: "<ol>"
    },
    {
      question: "Which attribute is used to open a link in a new tab?",
      options: ["target", "href", "rel", "newtab"],
      answer: "target"
    },
    {
      question: "How do you create a checkbox in HTML?",
      options: ["<input type='checkbox'>", "<checkbox>", "<input checkbox>", "<check>"],
      answer: "<input type='checkbox'>"
    },
    {
      question: "Which tag is used to define a paragraph?",
      options: ["<p>", "<para>", "<paragraph>", "<text>"],
      answer: "<p>"
    }
  ],

  CSS: [
    {
      question: "Which CSS property is used to change text color?",
      options: ["font-color", "color", "text-color", "fgcolor"],
      answer: "color"
    },
    {
      question: "How do you make each word start with a capital letter?",
      options: ["text-transform: capitalize;", "text-style: capital;", "font-variant: capital;", "text-decoration: capitalize;"],
      answer: "text-transform: capitalize;"
    },
    {
      question: "Which property is used to change the background color?",
      options: ["background-color", "bgcolor", "color", "background"], 
      answer: "background-color"
    },
    {
      question: "Which property controls the element's font size?",
      options: ["font-size", "text-size", "size", "font-style"],
      answer: "font-size"
    },
    {
      question: "Which property is used for rounded corners?",
      options: ["border-radius", "corner-radius", "border-round", "radius"],
      answer: "border-radius"
    },
    {
      question: "How do you select an element with id 'header'?",
      options: ["#header", ".header", "header", "*header"],
      answer: "#header"
    },
    {
      question: "How do you select all <p> elements?",
      options: ["p", ".p", "#p", "*p"],
      answer: "p"
    },
    {
      question: "Which property is used to control spacing between letters?",
      options: ["letter-spacing", "word-spacing", "text-spacing", "spacing"],
      answer: "letter-spacing"
    },
    {
      question: "Which property makes text bold?",
      options: ["font-weight", "text-bold", "weight", "bold"],
      answer: "font-weight"
    },
    {
      question: "Which property is used to underline text?",
      options: ["text-decoration", "text-underline", "underline", "decoration"],
      answer: "text-decoration"
    }
  ],

  JavaScript: [
    {
      question: "Which keyword declares a variable?",
      options: ["var", "int", "let", "const"],
      answer: "var"
    },
    {
      question: "Which keyword declares a block-scoped variable?",
      options: ["let", "var", "const", "function"],
      answer: "let"
    },
    {
      question: "Which method converts JSON to a JS object?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
      answer: "JSON.parse()"
    },
    {
      question: "Which function writes output to the console?",
      options: ["console.log()", "print()", "alert()", "document.write()"],
      answer: "console.log()"
    },
    {
      question: "How do you create a function in JS?",
      options: ["function myFunc() {}", "def myFunc() {}", "func myFunc() {}", "function: myFunc() {}"],
      answer: "function myFunc() {}"
    },
    {
      question: "Which symbol is used for comments in JS?",
      options: ["//", "#", "/* */", "<!-- -->"],
      answer: "//"
    },
    {
      question: "Which operator is used for equality check?",
      options: ["==", "=", "===", "!"],
      answer: "=="
    },
    {
      question: "Which method adds an element to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: "push()"
    },
    {
      question: "Which object represents the browser window?",
      options: ["window", "document", "navigator", "screen"],
      answer: "window"
    },
    {
      question: "Which event occurs when the user clicks on an element?",
      options: ["onclick", "onhover", "onchange", "onmouseover"],
      answer: "onclick"
    }
  ],

  Python: [
    {
      question: "Which keyword defines a function in Python?",
      options: ["def", "function", "func", "declare"],
      answer: "def"
    },
    {
      question: "Which symbol is used for comments?",
      options: ["#", "//", "/* */", "<!-- -->"],
      answer: "#"
    },
    {
      question: "Which data type is immutable?",
      options: ["tuple", "list", "dict", "set"],
      answer: "tuple"
    },
    {
      question: "How do you import a module?",
      options: ["import module", "require module", "include module", "using module"],
      answer: "import module"
    },
    {
      question: "How do you output text in Python?",
      options: ["print()", "echo()", "console.log()", "write()"],
      answer: "print()"
    },
    {
      question: "Which operator is used for exponentiation?",
      options: ["**", "^", "exp()", "pow()"],
      answer: "**"
    },
    {
      question: "Which statement is used for loops?",
      options: ["for", "loop", "whileloop", "repeat"],
      answer: "for"
    },
    {
      question: "Which data type holds key-value pairs?",
      options: ["dict", "list", "tuple", "set"],
      answer: "dict"
    },
    {
      question: "How do you handle exceptions?",
      options: ["try-except", "catch", "handle", "throw"],
      answer: "try-except"
    },
    {
      question: "Which operator is used to check equality?",
      options: ["==", "=", "===", "!"],
      answer:
      
      
      
      "=="
    }
  ]
};

export default data;
