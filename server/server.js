const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());



const COURSE_DATA = {

    id: "python-101",
    title: "Introduction To Python",
    topics: [
        { id: "1", title: "Introduction To Python" },
        { id: "2", title: "General Functions" },
        { id: "3", title: "Operators" },
        { id: "4", title: "Control Statements" },
        { id: "5", title: "Data Types and Methods" },
        { id: "6", title: "Types of Loops" },
        { id: "7", title: "Functions" },
        { id: "8", title: "Class and Constructor" },
        { id: "9", title: "OOP's - Inheritance" },
        { id: "10", title: "OOP's - Polymorphism" },
        { id: "11", title: "Multitasking" }
    ],
    content: {
        "1": {
            title: "Introduction To Python",
            sections: [
                {
                    type: "text",
                    heading: "History",
                    body: "Python is a high-level, interpreted, interactive, and object-oriented scripting language. It was developed by Guido van Rossum in the late 1980s and early 1990s at the National Research Institute for Mathematics and Computer Science in the Netherlands. Python is derived from several languages like C, C++, SmallTalk, Algol-68, and other scripting languages. It is general-purpose, versatile, concise, easy to read, and can be used in web development, software development, and scientific applications."
                },
                {
                    type: "list",
                    heading: "Features",
                    items: [
                        "Easy to read, learn, and maintain.",
                        "Comes with a standard library that is portable and cross-platform compatible.",
                        "Strong support for modules and packages.",
                        "Provides extensive support for major databases like MySQL and Oracle.",
                        "Suitable for developing Windows-based applications.",
                        "Supports functional, structured, and object-oriented programming paradigms.",
                        "Offers automatic garbage collection.",
                        "Supports dynamic type checking and conversion."
                    ]
                },
                {
                    type: "list-ordered",
                    heading: "Setting Up Python",
                    items: [
                        "Download the latest version of Python from: https://www.python.org/downloads/",
                        "Install the Python interpreter.",
                        "Execute Python code using IDLE (Integrated Development Environment) or via the command prompt."
                    ]
                },
                {
                    type: "text",
                    body: "Python code can be written and executed in several ways:\n1. Using the Python shell (IDLE): Type a line of Python code and press Enter. The interpreter processes it and returns the output.\n2. Writing Python scripts in a new file within IDLE and executing using 'Run' or pressing F5.\n3. Running saved Python files using the 'import' keyword in the shell or executing from the command prompt."
                },
                {
                    type: "code",
                    language: "python",
                    code: `# Example: test.py\nprint('Hello World!')`
                },
                {
                    type: "code",
                    language: "python",
                    code: `>>> import test\n# Output: Hello World!`
                },
                {
                    type: "code",
                    language: "python",
                    code: `# Example: test2.py\nprint('Program started')\nx = 10\ny = 20\nz = x + y\nprint(x, y, z)\nprint('Program ends')`
                },
                {
                    type: "code",
                    language: "python",
                    code: `>>> import test2\n# Output:\n# Program started\n# 10 20 30\n# Program ends`
                },
                {
                    type: "code",
                    language: "python",
                    code: `>>> print(test2.x, test2.y, test2.z)\n# Output: 10 20 30`
                },
                {
                    type: "code",
                    language: "python",
                    code: `# Importing specific variables\nfrom test2 import z\nprint(z)\n\nfrom test2 import x, y, z\nprint(x, y, z)`
                },
                {
                    type: "text",
                    body: "From the command prompt, type 'python' to open the shell or 'python filename.py' to run a script."
                },
                {
                    type: "text",
                    heading: "Identifiers",
                    body: "Naming conventions for identifiers:\n- Class names start with an uppercase letter.\n- Other identifiers start with a lowercase letter.\n- Single leading underscore: indicates a private identifier.\n- Double leading underscores: strongly private identifier.\n- Leading and trailing double underscores: language-defined special names."
                },
                {
                    type: "text",
                    heading: "Keywords",
                    body: "Python has 33 keywords, including:\nand, exec, not, assert, finally, or, break, for, pass, class, from, print, continue, global, raise, def, if, return, del, import, try, elif, in, while, else, is, with, except, lambda, yield\n\nPython uses indentation instead of braces to define blocks of code. All statements within a block must be indented consistently.\nUse the '#' symbol to write comments."
                },
                {
                    type: "code",
                    language: "python",
                    code: `# This is a comment\n# Written by TechLearn Solutions\nprint('Hello World')\nprint("Welcome to TechLearn!")\nprint("""Computer Training & Development\n2nd Floor, Surabhi Complex, AS Rao Nagar, ECIL, Hyderabad-500062.""")`
                },
                {
                    type: "text",
                    heading: "Variables",
                    body: "Variables are nothing but reserved memory locations to store values. This means, when you create a variable, you reserve some space in memory.\n\nBased on the data type of a variable, the interpreter allocates memory and decides what can be stored in the reserved memory. Therefore, by assigning different data types to variables, you can store integers, decimals, or characters in these variables."
                },
                {
                    type: "code",
                    heading: "Assigning Values",
                    language: "python",
                    code: `var = 100\nvar2 = 12.56\nvar3 = "techlearn solutions"\nvar4 = 'python programming'\n\nprint(var)\nprint(var2)\nprint(var3)\nprint(var4)`
                },
                {
                    type: "code",
                    heading: "Multiple Assignment",
                    language: "python",
                    code: `a = b = c = 1\nprint(a, b, c)\n\nx, y, z = 1, 'tech', 12.5\nprint(x)\nprint(y)\nprint(z)`
                },
                {
                    type: "list",
                    heading: "Standard Data Types",
                    items: [
                        "Numbers | (int, float, complex)",
                        "Strings | \"Hello World\"",
                        "List | ['item1', 'item2']",
                        "Tuple | ('fixed', 'immutable')",
                        "Set | {1, 2, 3}",
                        "Dictionary | {'key': 'value'}",
                        "Boolean | True or False",
                        "None | (No value)"
                    ]
                },
                {
                    type: "text",
                    heading: "Numbers",
                    body: "Integer examples:"
                },
                {
                    type: "code",
                    language: "python",
                    code: `# Integer formats:\nx = 0b1100      # Binary\ny = 0o14        # Octal\nz = 0xc         # Hexadecimal\n\nx = 1_23_450\nprint(type(x))  # Output: <class 'int'>`
                },
                {
                    type: "text",
                    body: "Float:"
                },
                {
                    type: "code",
                    language: "python",
                    code: `x = 5.01234567890123456789\nprint(x)  # Output: rounded to 15 decimal places`
                },
                {
                    type: "text",
                    body: "Complex Numbers:"
                },
                {
                    type: "code",
                    language: "python",
                    code: `a = 5 + 2j\nprint(a)\nprint(type(a))  # Output: <class 'complex'>`
                },
                {
                    type: "list",
                    heading: "Number Systems in Python",
                    items: [
                        "Binary (Base 2) – Uses only 0 and 1.",
                        "Octal (Base 8) – Uses digits from 0 to 7.",
                        "Decimal (Base 10) – Standard numeric system we use (uses digits 0–9).",
                        "Hexadecimal (Base 16) – Uses digits 0–9 and letters A–F (A=10, B=11, ..., F=15)."
                    ]
                },
                {
                    type: "text",
                    heading: "Binary Numbers",
                    body: "Prefix: 0b or 0B\nBase: 2\nDigits allowed: 0 and 1 only"
                },
                {
                    type: "code",
                    language: "python",
                    code: `x = 0b00001100\nprint(x)  # Output: 12`
                },
                {
                    type: "text",
                    heading: "Octal Numbers",
                    body: "Prefix: 0o or 0O\nBase: 8\nDigits allowed: 0 to 7 only"
                },
                {
                    type: "code",
                    language: "python",
                    code: `x = 0o12\nprint(x)  # Output: 10`
                },
                {
                    type: "text",
                    heading: "Hexadecimal Numbers",
                    body: "Prefix: 0x or 0X\nBase: 16\nDigits allowed: 0–9, A–F (or a–f)"
                },
                {
                    type: "code",
                    language: "python",
                    code: `a = 0xc\nprint(a)  # Output: 12`
                },
                {
                    type: "text",
                    heading: "Strings",
                    body: "Strings are sequences of characters enclosed in quotes (single or double). They are index-based."
                },
                {
                    type: "code",
                    language: "python",
                    code: `s1 = "TECHLEARN"\nprint(s1[5])  # Output: L\n\nprint(s1[0:4])   # Output: TECH\nprint(s1[-5:])   # Output: LEARN\n\nstr = "Hello World"\nprint(str)\nprint(str[0])\nprint(str[0:])\nprint(str[2:])\nprint(str*2)\nprint(str + " Welcome to TechLearn")`
                },
                {
                    type: "text",
                    heading: "Lists",
                    body: "Lists are mutable sequences enclosed in square brackets []."
                },
                {
                    type: "code",
                    language: "python",
                    code: `list = ['tech', 900066, 12.23, 'sujith', 70.2]\nlist2 = [3, 4, 5]\nprint(list)\nprint(list[0])\nprint(list[0:])\nprint(list[2:])\nprint(list*2)\nprint(list + list2)\nlist[0] = 'techlearn'\nprint(list)`
                },
                {
                    type: "text",
                    heading: "Tuples",
                    body: "Tuples are immutable sequences enclosed in parentheses ()."
                },
                {
                    type: "code",
                    language: "python",
                    code: `tup1 = (1, 2, "tech", 9676663136)\ntup2 = (3, 4, 5, 6, 7)\nprint(tup1)\nprint(tup2)\n# tup1[0] = "first"  # Error: tuples are immutable`
                },
                {
                    type: "text",
                    heading: "Dictionaries",
                    body: "Dictionaries are collections of key-value pairs enclosed in curly braces {}."
                },
                {
                    type: "code",
                    language: "python",
                    code: `dic = {1: 'one', 2: 'two', 3: 'three'}\nprint(dic)\nprint(dic[2])\nprint(dic.keys())\nprint(dic.values())\ndic[2] = 'second'\nprint(dic)`
                },
                {
                    type: "text",
                    heading: "Boolean Type",
                    body: "Boolean values are either True or False, often used in conditions."
                },
                {
                    type: "code",
                    language: "python",
                    code: `num = 12\nprint(num > 0)  # Output: True`
                },
                {
                    type: "text",
                    heading: "NoneType",
                    body: "Represents the absence of a value. Often used as a function return type when nothing is returned."
                },
                {
                    type: "code",
                    language: "python",
                    code: `x = None\nprint(type(x))  # Output: <class 'NoneType'>`
                }
            ]
        },
        "2": {
            title: "General Functions",
            sections: [
                {
                    type: "text",
                    heading: "print() Function",
                    body: "The print() function is one of the most commonly used built-in functions in Python. It is used to display data on the standard output device (i.e., the console or terminal). Whether you're debugging your code or presenting output to a user, print() is the go-to function."
                },
                {
                    type: "text",
                    heading: "a) Printing Different Data Types",
                    body: "The print() function can be used to display values of all fundamental Python data types:"
                },
                {
                    type: "code",
                    language: "python",
                    code: `print('Hello')                           # String (str) type
print(100)                               # Integer (int) type
print(3.14)                              # Floating-point (float) type
print([1, 2, 3, 4])                      # List (list) type
print((5, 6, 7))                         # Tuple (tuple) type
print({1, 2, 3, 10, 4})                  # Set (set) type
print({1: 'One', 2: 'Two', 3: 'Three'})  # Dictionary (dict) type
print(True)                              # Boolean (bool) type
print(3 + 4j)                            # Complex number (complex) type
print(None)                              # NoneType (None) – represents the absence of value`
                },
                {
                    type: "text",
                    heading: "b) Printing Variables",
                    body: "Python allows you to store data in variables and later print them. This is highly useful for dynamic and reusable code."
                },
                {
                    type: "code",
                    language: "python",
                    code: `name = 'Techlearn Solutions'
mobile = 9000663666
email = 'techlearnsolutions@gmail.com'
print(name)
print(mobile)
print(email)
# Output:
# Techlearn Solutions
# 9000663666
# techlearnsolutions@gmail.com`
                },
                {
                    type: "text",
                    heading: "c) Printing Multiple Values Together",
                    body: "You can use print() to display multiple values at once, separated by commas. Python will automatically insert a space between them."
                },
                {
                    type: "code",
                    language: "python",
                    code: `print(1, 2, 3, 4)
print('TechLearn', 9676663136, 'AS Rao Nagar')
# Output:
# 1 2 3 4
# TechLearn 9676663136 AS Rao Nagar`
                },
                {
                    type: "text",
                    heading: "d) Ways to Print Strings Along With Values",
                    body: "There are multiple ways to format strings with values using the print() function:"
                },
                {
                    type: "text",
                    heading: "1) Using Commas",
                    body: "Commas separate values in print() and automatically insert spaces."
                },
                {
                    type: "code",
                    language: "python",
                    code: `name = 'Techlearn Solutions'
mobile = 9000663666
print('Name :', name)
print('Mobile:', mobile)
# Output:
# Name : Techlearn Solutions
# Mobile: 9000663666`
                },
                {
                    type: "text",
                    heading: "2) Using String Concatenation (+)",
                    body: "The + operator is used to concatenate (combine) strings.\n\nNote: You can only concatenate strings with strings. If you try to add a string and an integer directly, Python will raise a TypeError. You need to explicitly convert other types to strings using str() before concatenation."
                },
                {
                    type: "code",
                    language: "python",
                    code: `name = 'Techlearn Solutions'
print('Name : ' + name)
# Output:
# Name : Techlearn Solutions`
                },
                {
                    type: "text",
                    heading: "e) Type Conversion / Type Casting",
                    body: "Python provides a set of built-in functions for type casting or type conversion, which allows you to convert one data type into another."
                },
                {
                    type: "text",
                    heading: "str() Function",
                    body: "The str() function converts any data type to its string representation."
                },
                {
                    type: "code",
                    language: "python",
                    code: `print(str(5))          # Output: '5'
print(str(5.6))        # Output: '5.6'`
                },
                {
                    type: "text",
                    heading: "int() Function",
                    body: "The int() function converts a string (that contains a valid integer) or a float (by truncating the decimal part) to an integer.\n\n⚠️ int('12.5') would raise a ValueError because '12.5' is not an integer."
                },
                {
                    type: "code",
                    language: "python",
                    code: `a = int('56')          # Converts string to int
b = int('60')          # Converts string to int
c = a + b
print(c)               # Output: 116`
                },
                {
                    type: "text",
                    heading: "float() Function",
                    body: "The float() function converts integers or numeric strings (with decimal) to floating-point numbers."
                },
                {
                    type: "code",
                    language: "python",
                    code: `a = 5
b = float(a)           # Converts integer to float
print(b)               # Output: 5.0
c = '12.3'
d = float(c)           # Converts string to float
print(d)               # Output: 12.3`
                },
                {
                    type: "text",
                    heading: "list() Function",
                    body: "The list() function is used to convert other iterable types (like strings, tuples, or sets) into a list."
                },
                {
                    type: "code",
                    language: "python",
                    code: `x = '[1,2,3]'         # This is a string, not a list
aList = list(x)       # Converts each character in the string into list elements
y = 'TECH'
bList = list(y)       # Output: ['T', 'E', 'C', 'H']
print(type(x))        # Output: <class 'str'>
print(type(aList))    # Output: <class 'list'>
print(type(bList))    # Output: <class 'list'>`
                },
                {
                    type: "text",
                    heading: "tuple() Function",
                    body: "The tuple() function converts other iterable types into tuples."
                },
                {
                    type: "code",
                    language: "python",
                    code: `x = '(1,2,3)'         # String type
aTuple = tuple(x)     # Converts each character into tuple elements
y = 'TECH'
bTuple = tuple(y)     # Output: ('T', 'E', 'C', 'H')
print(type(x))        # <class 'str'>
print(type(aTuple))   # <class 'tuple'>
print(type(bTuple))   # <class 'tuple'>`
                },
                {
                    type: "text",
                    heading: "f) Real-Life Example Using Type Conversion",
                    body: "Example 1: Printing the Gold Rate in Hyderabad\n\nExplanation: Since gold_rate is an integer, we need to convert it to a string using str() before concatenating it with another string."
                },
                {
                    type: "code",
                    language: "python",
                    code: `gold_rate = 6605
print('Gold rate today in Hyderabad is: ' + str(gold_rate))`
                },
                {
                    type: "text",
                    heading: "g) Using Format Specifiers",
                    body: "Format specifiers are placeholders used to embed values into strings:\n\n%d → for integers\n%f → for floats\n%s → for strings"
                },
                {
                    type: "code",
                    language: "python",
                    code: `length = 5
breadth = 3
area = length * breadth
print('Length = %d' % length)
print('Breadth = %d' % breadth)
print('Area = %d' % area)

name = 'India'
capital = 'Delhi'
population = 1449297353
print("Country: %s Capital: %s Population: %d" % (name, capital, population))`
                },
                {
                    type: "text",
                    heading: "h) Using f-Strings",
                    body: "Introduced in Python 3.6, f-strings are a modern and efficient way to embed expressions inside string literals using {}.\n\n✅ f-strings offer improved readability and performance compared to older formatting methods."
                },
                {
                    type: "code",
                    language: "python",
                    code: `x = 5
y = 3
print(f'value of x={x} and value of y={y}')
# Output: value of x=5 and value of y=3`
                },
                {
                    type: "text",
                    heading: "type() Function",
                    body: "The type() function in Python is used to determine the data type of a value or a variable. It returns a special object called <class 'type'>."
                },
                {
                    type: "code",
                    language: "python",
                    code: `a = 5
print(type(a)) # Output: <class 'int'>
print(type('Techlearn')) # Output: <class 'str'>`
                },
                {
                    type: "text",
                    heading: "input() Function",
                    body: "The input() function is used to accept user input from the console. It always returns the input as a string (str), regardless of what the user types."
                },
                {
                    type: "list",
                    items: [
                        "The input received is always of str type.",
                        "The function can take a prompt message as a parameter.",
                        "Only one value can be taken at a time through a single input() call.",
                        "If the input needs to be used as a number, explicit type conversion is required."
                    ]
                },
                {
                    type: "code",
                    language: "python",
                    code: `a = input('Enter a value: ')
print(type(a)) # Output: <class 'str'>`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example with Type Casting",
                    code: `x = input('Enter x value: ') # input as string
y = input('Enter y value: ') # input as string
z = input('Enter list of 3 values: ') # input as string

num1 = int(x) # converting x to int
num2 = float(y) # converting y to float
num3 = list(z) # converting z (string) to list of characters

print(type(x)) # str
print(type(num1)) # int`
                },
                {
                    type: "text",
                    heading: "id() Function",
                    body: "The id() function returns the unique memory address (identity) of an object.\n\nKey Observations:\n- If two variables store immutable data with the same value, they may point to the same memory location.\n- Mutable data types like lists and dictionaries always have unique IDs."
                },
                {
                    type: "code",
                    language: "python",
                    code: `a = 5
b = 5
print(id(a), id(b)) # Same ID (integers are immutable)

a = [1, 2, 3]
b = [1, 2, 3]
print(id(a), id(b)) # Lists are mutable → different ID`
                },
                {
                    type: "text",
                    heading: "sum() Function",
                    body: "The sum() function is used to calculate the total sum of all numeric elements in an iterable like a list or tuple."
                },
                {
                    type: "code",
                    language: "python",
                    code: `a = [1, 2, 3] # All integers
b = [1.2, 2.2, 3.2] # All floats
c = [3 + 4j, 5 + 2j, 6 + 3j] # All complex numbers
print(sum(a)) # Output: 6
print(sum(b)) # Output: 6.6
print(sum(c)) # Output: (14+9j)`
                },
                {
                    type: "text",
                    heading: "max() and min() Functions",
                    body: "max() finds the highest value, and min() finds the lowest. They work on numeric types and strings (ASCII based)."
                },
                {
                    type: "code",
                    language: "python",
                    code: `print(max(1, 10, 3, 5)) # Returns 10
x = [1, 12, 3]
print(max(x)) # Returns 12
y = 'LEARN'
print(max(y)) # Returns 'R' (ASCII comparison)

print(min(1, 10, 3, 5)) # Returns 1`
                },
                {
                    type: "text",
                    heading: "round() Function",
                    body: "The round() function is used to round a number to the nearest value at the desired decimal or integer place.\n\nround(number, ndigits): ndigits can be negative to round to tens, hundreds, etc."
                },
                {
                    type: "code",
                    language: "python",
                    code: `print(round(567.589)) # Rounds to 568
print(round(567.539, 2)) # Rounds to 567.54
print(round(567.582, -1)) # Rounds to nearest 10 → 570.0
print(round(4567.582, -2)) # Rounds to nearest 100 → 4600.0`
                },
                {
                    type: "text",
                    heading: "Other Useful Functions",
                    body: "Brief overview of other common functions:"
                },
                {
                    type: "list",
                    items: [
                        "len(): Returns the total number of elements in a collection.",
                        "abs(): Returns the absolute (non-negative) value.",
                        "any(): Returns True if ANY element is truthy.",
                        "all(): Returns True if ALL elements are truthy.",
                        "dir(): Returns a list of attributes/methods.",
                        "divmod(): Returns quotient and remainder tuple.",
                        "iter() / next(): Creates and steps through iterators.",
                        "range(): Generates a sequence of numbers.",
                        "chr() / ord(): Converts between characters and their ASCII codes.",
                        "zip(): Combines valid iterables into tuples."
                    ]
                },
                {
                    type: "code",
                    language: "python",
                    code: `import math
print(math.sqrt(625)) # 25.0

x = [11, 52, 30]
print(len(x)) # 3

print(abs(-45)) # 45

print(chr(65)) # A
print(ord('a')) # 97`
                }
            ]
        },
        "3": {
            title: "Operators",
            sections: [
                {
                    type: "text",
                    heading: "Operators in Python",
                    body: "In Python, operators are special symbols or keywords used to perform operations on variables and values. These operations can include arithmetic calculations, evaluations, logical comparisons, and more. Operators allow you to manipulate data and variables effectively, making them essential for any programming task.\n\nPython supports several types of operators, each designed for a specific category of tasks."
                },
                {
                    type: "list",
                    heading: "Types of Operators in Python",
                    items: [
                        "Arithmetic Operators",
                        "Comparison (Relational) Operators",
                        "Assignment Operators",
                        "Logical Operators",
                        "Bitwise Operators",
                        "Membership Operators",
                        "Identity Operators"
                    ]
                },
                {
                    type: "text",
                    heading: "Arithmetic Operators",
                    body: "Arithmetic operators are used to perform common mathematical operations such as addition, subtraction, multiplication, division, and more.\n\nAssume variable a holds 10 and variable b holds 20, then:"
                },
                {
                    type: "table",
                    headers: ["Operator", "Description", "Example", "Result"],
                    rows: [
                        ["+", "Addition", "a + b", "30"],
                        ["-", "Subtraction", "a - b", "-10"],
                        ["*", "Multiplication", "a * b", "200"],
                        ["/", "Division (float)", "a / b", "0.5"],
                        ["//", "Floor Division", "a // b", "0"],
                        ["%", "Modulus (Remainder)", "a % b", "10"],
                        ["**", "Exponentiation (Power)", "a ** 2", "100"]
                    ]
                },
                {
                    type: "text",
                    body: "Explanation:\n/ gives a floating-point result.\n// performs integer (floor) division, discarding the decimal part.\n% returns the remainder after division.\n** raises the number to the power of the right operand."
                },
                {
                    type: "text",
                    heading: "Comparison (Relational) Operators",
                    body: "These operators compare the values on either side of them and decide the relation among them. They are also called Relational operators.\n\nAssume variable a holds 10 and variable b holds 20, then:"
                },
                {
                    type: "table",
                    headers: ["Operator", "Description", "Example"],
                    rows: [
                        ["==", "If the values of two operands are equal, then the condition becomes true.", "(a == b) is not true."],
                        ["!=", "If values of two operands are not equal, then condition becomes true.", "(a != b) is true."],
                        [">", "If the value of left operand is greater than the value of right operand, then condition becomes true.", "(a > b) is not true."],
                        ["<", "If the value of left operand is less than the value of right operand, then condition becomes true.", "(a < b) is true."],
                        [">=", "If the value of left operand is greater than or equal to the value of right operand, then condition becomes true.", "(a >= b) is not true."],
                        ["<=", "If the value of left operand is less than or equal to the value of right operand, then condition becomes true.", "(a <= b) is true."]
                    ]
                },
                {
                    type: "code",
                    heading: "Usage Example",
                    language: "python",
                    code: `a = 10\nb = 20\nprint(a == b) # Output: False\nprint(a < b)  # Output: True`
                },
                {
                    type: "text",
                    heading: "Assignment Operators",
                    body: "Assignment operators are used to assign values to variables.\n\nAssume variable a holds 10 and variable b holds 20, then:"
                },
                {
                    type: "table",
                    headers: ["Operator", "Description", "Example"],
                    rows: [
                        ["=", "Assigns values from right side operands to left side operand", "c = a + b assigns value of a + b into c"],
                        ["+=", "It adds right operand to the left operand and assign the result to left operand", "c += a is equivalent to c = c + a"],
                        ["-=", "It subtracts right operand from the left operand and assign the result to left operand", "c -= a is equivalent to c = c - a"],
                        ["*=", "It multiplies right operand with the left operand and assign the result to left operand", "c *= a is equivalent to c = c * a"],
                        ["/=", "It divides left operand with the right operand and assign the result to left operand", "c /= a is equivalent to c = c / a"],
                        ["%=", "It takes modulus using two operands and assign the result to left operand", "c %= a is equivalent to c = c % a"],
                        ["**=", "Performs exponential (power) calculation on operators and assign value to the left operand", "c **= a is equivalent to c = c ** a"],
                        ["//=", "It performs floor division on operators and assign value to the left operand", "c //= a is equivalent to c = c // a"]
                    ]
                },
                {
                    type: "text",
                    heading: "Logical Operators",
                    body: "Logical operators are used to combine conditional statements.\n\nAssume variable a holds 10 and variable b holds 20 then:"
                },
                {
                    type: "table",
                    headers: ["Operator", "Description", "Example"],
                    rows: [
                        ["and", "If both the operands are true then condition becomes true.", "(a and b) is true."],
                        ["or", "If any of the two operands are non-zero then condition becomes true.", "(a or b) is true."],
                        ["not", "Used to reverse the logical state of its operand.", "Not(a and b) is false."]
                    ]
                },
                {
                    type: "text",
                    heading: "Bitwise Operators",
                    body: "Bitwise operators perform operations on the binary representation of integers.\n\nLet:\na = 10 # 1010 in binary\nb = 4  # 0100 in binary"
                },
                {
                    type: "table",
                    headers: ["Operator", "Description", "Example"],
                    rows: [
                        ["&", "Binary AND: Operator copies a bit to the result if it exists in both operands", "(a & b) (means 0000 1100)"],
                        ["|", "Binary OR: It copies a bit if it exists in either operand.", "(a | b) = 61 (means 0011 1101)"],
                        ["^", "Binary XOR: It copies the bit if it is set in one operand but not both.", "(a ^ b) = 49 (means 0011 0001)"],
                        ["~", "Binary Ones Complement: It is unary and has the effect of 'flipping' bits.", "(~a ) = -61 (means 1100 0011 in 2's complement form)"],
                        ["<<", "Binary Left Shift: The left operands value is moved left by the number of bits specified by the right operand.", "a << 2 = 240 (means 1111 0000)"],
                        [">>", "Binary Right Shift: The left operands value is moved right by the number of bits specified by the right operand.", "a >> 2 = 15 (means 0000 1111)"]
                    ]
                },
                {
                    type: "text",
                    heading: "Membership Operators",
                    body: "Python’s membership operators test for membership in a sequence, such as strings, lists, or tuples. There are two membership operators:"
                },
                {
                    type: "table",
                    headers: ["Operator", "Description", "Example"],
                    rows: [
                        ["in", "Evaluates to true if it finds a variable in the specified sequence and false otherwise.", "x in y, here in results in a 1 if x is a member of sequence y."],
                        ["not in", "Evaluates to true if it does not finds a variable in the specified sequence and false otherwise.", "x not in y, here not in results in a 1 if x is not a member of sequence y."]
                    ]
                },
                {
                    type: "text",
                    heading: "Identity Operators",
                    body: "In Python, identity operators are used to compare the memory locations (object identity) of two variables. Rather than checking if two variables contain the same data, identity operators check if both variables refer to the same object in memory.\n\nPython stores objects in memory and variables are simply references (or labels) pointing to these objects. Two variables can refer to the same object or to different objects—even if they hold the same value."
                },
                {
                    type: "text",
                    heading: "Why Use Identity Operators?",
                    body: "While comparison operators like == check for value equality, identity operators like is and is not check for object identity. This is especially important when dealing with:\n\n- Mutable data types (lists, dictionaries, sets)\n- Object-oriented programming (classes and instances)\n- Interned or cached values (like small integers or strings in Python)"
                },
                {
                    type: "table",
                    headers: ["Operator", "Description"],
                    rows: [
                        ["is", "Returns True if both variables refer to the same object in memory"],
                        ["is not", "Returns True if both variables refer to different objects in memory"]
                    ]
                },
                {
                    type: "text",
                    heading: "Python Operator Precedence",
                    body: "Operator precedence determines the order in which operations are evaluated in an expression. When an expression involves multiple operators, Python uses this hierarchy to decide which operations to perform first.\n\nIf two operators share the same precedence, associativity rules are applied (usually left-to-right, except for exponentiation which is right-to-left).\n\nBelow is the complete operator precedence list in Python, ordered from highest precedence (executed first) to lowest precedence (executed last)."
                },
                {
                    type: "table",
                    headers: ["Precedence", "Operator(s)", "Category / Description"],
                    rows: [
                        ["1", "**", "Exponentiation: raises a number to a power"],
                        ["2", "+x, -x, ~x", "Unary operations: positive, negative, and bitwise NOT"],
                        ["3", "*, /, //, %", "Multiplication, Division, Floor Division, Modulo"],
                        ["4", "+, -", "Addition and Subtraction"],
                        ["5", "<<, >>", "Bitwise Shift Operators"],
                        ["6", "&", "Bitwise AND"],
                        ["7", "^", "Bitwise XOR"],
                        ["8", "|", "Bitwise OR"],
                        ["9", "==, !=, >, <, >=", "Comparison Operators"],
                        ["10", "not", "Logical NOT"],
                        ["11", "and", "Logical AND"],
                        ["12", "or", "Logical OR"],
                        ["13", "=", "Assignment Operators"]
                    ]
                },
                {
                    type: "text",
                    heading: "Explanation of Operator Categories",
                    body: "1. Exponentiation (**): Raises a number to a given power.\n2. Unary Operators (+, -, ~): Unary plus, minus, and bitwise NOT.\n3. Multiplicative Operators (*, /, //, %): Multiplication, Division, Floor Division, Modulo.\n4. Additive Operators (+, -): Standard addition and subtraction.\n5. Bitwise Shift (<<, >>): Moves bits to the left or right.\n6. Bitwise AND (&): Performs AND on each pair of bits."
                },
                {
                    type: "table",
                    heading: "Associativity Rules",
                    className: "associativity-table",
                    headers: ["Operator", "Associativity Direction"],
                    rows: [
                        ["<span class='badge-green'>**</span>", "Right to Left"],
                        ["All others", "Left to Right"]
                    ]
                }
            ]
        },
        "4": {
            title: "Control Statements",
            sections: [
                {
                    type: "text",
                    heading: "Control Statements in Python (Expanded Version)",
                    body: "Control statements in Python are constructs that allow developers to make decisions, repeat actions, or jump out of loops. These are essential for writing dynamic and interactive programs. In Python, control flow determines the order in which statements are executed. By default, statements are executed sequentially from top to bottom. However, using control statements, we can alter this natural flow.\n\nPython supports three broad categories of control statements:\n1. Decision-Making Statements\n2. Looping Statements\n3. Jump Statements\n\nThese mechanisms empower the program to behave intelligently, depending on various conditions at runtime."
                },
                {
                    type: "text",
                    heading: "Decision Making Statements (Expanded)",
                    body: "Decision making statements in Python are used to execute certain blocks of code based on specific conditions. These conditions evaluate to either True or False. Python provides flexible and readable syntax for implementing conditional logic."
                },
                {
                    type: "text",
                    heading: "a) if Statement",
                    body: "The simplest decision-making statement. It executes a block of code if the condition evaluates to True.\n\nExplanation:\nIf the condition is true, the block inside the if is executed.\nIf it’s false, nothing happens."
                },
                {
                    type: "code",
                    language: "python",
                    code: `age = 20
if age >= 18:
    print("You are eligible to vote.")`
                },
                {
                    type: "text",
                    heading: "b) if...else Statement",
                    body: "Allows the program to choose between two blocks of code depending on the condition."
                },
                {
                    type: "code",
                    language: "python",
                    code: `age = 16
if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")`
                },
                {
                    type: "text",
                    heading: "c) if...elif...else Ladder",
                    body: "Used when multiple conditions need to be checked. The first true condition's block is executed."
                },
                {
                    type: "code",
                    language: "python",
                    code: `score = 85
if score >= 90:
    print("Grade A")
elif score >= 75:
    print("Grade B")
elif score >= 60:
    print("Grade C")
else:
    print("Fail")`
                },
                {
                    type: "text",
                    heading: "d) Nested if Statements",
                    body: "Sometimes decisions need to be made within other decisions. Nested if statements allow this hierarchical evaluation.\n\nNote:\nEach inner if is only evaluated if its outer condition is satisfied.\nProper indentation is critical for readability and correctness."
                },
                {
                    type: "code",
                    language: "python",
                    code: `username = "admin"
password = "admin123"
if username == "admin":
    if password == "admin123":
        print("Login successful")
    else:
        print("Incorrect password")
else:
    print("Unknown user")`
                },
                {
                    type: "text",
                    heading: "e) Dictionary as a Replacement for switch Statement",
                    body: "Python does not have a native switch statement like some other languages (e.g., C++, Java). However, you can simulate a similar behavior using a dictionary.\n\nKey Points:\nDictionary keys must be immutable types (int, float, bool, str, or tuple).\nUse .get() to provide a default value to avoid KeyError.\nThis approach only works for exact matches, not ranges."
                },
                {
                    type: "code",
                    language: "python",
                    code: `def menu(option):
    return {
        1: "Start",
        2: "Settings",
        3: "Exit"
    }.get(option, "Invalid choice")

print(menu(1))`
                },
                {
                    type: "text",
                    heading: "Looping Statements (Expanded)",
                    body: "Looping statements are used when a block of code needs to be executed repeatedly under a certain condition. Python offers two main types of loops: while and for, along with nested and controlled versions using conditions or jump statements."
                },
                {
                    type: "text",
                    heading: "a) while Loop",
                    body: "The while loop keeps executing the block of code as long as the condition is true.\n\nExplanation:\nInitialization: i = 1\nCondition check: i <= 5\nExecution of loop body and incrementing value until the condition becomes False."
                },
                {
                    type: "code",
                    language: "python",
                    code: `i = 1
while i <= 5:
    print(i)
    i += 1`
                },
                {
                    type: "text",
                    heading: "b) for Loop with range()",
                    body: "The for loop in Python iterates over a sequence of values. When combined with range(), it becomes a powerful tool to iterate over numerical ranges."
                },
                {
                    type: "code",
                    language: "python",
                    code: `for i in range(1, 6):
    print(i)`
                },
                {
                    type: "text",
                    heading: "c) for Loop with Collections",
                    body: "This form is also known as a for-each loop. It’s used to iterate directly over elements of a collection like a list, tuple, string, or dictionary."
                },
                {
                    type: "code",
                    language: "python",
                    code: `colors = ["red", "blue", "green"]
for color in colors:
    print(color)`
                },
                {
                    type: "text",
                    heading: "d) Nested Loops",
                    body: "A loop inside another loop is called a nested loop. Commonly used in matrix processing or pattern generation.\n\nExplanation:\nOuter loop runs 3 times.\nFor each iteration of the outer loop, the inner loop runs 2 times."
                },
                {
                    type: "code",
                    language: "python",
                    code: `for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")`
                },
                {
                    type: "text",
                    heading: "Jump Statements (Expanded)",
                    body: "Jump statements alter the flow of control unconditionally."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "a) break Statement",
                    code: `for i in range(10):
    if i == 5:
        break
    print(i)`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "b) continue Statement",
                    code: `for i in range(5):
    if i == 2:
        continue
    print(i)`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "c) pass Statement",
                    code: `if True:
    pass  # Placeholder for future implementation`
                },
                {
                    type: "text",
                    heading: "Practice Programs – In-Depth Explanation and Python Implementation",
                    body: "1. ✅ User Login System: Username & Password Verification\nProblem Statement: Write a program to accept the username and password from the user and check if they match the stored credentials. Provide meaningful responses based on the following test cases."
                },
                {
                    type: "code",
                    language: "python",
                    code: `stored_username = 'techlearn'
stored_password = 'tls@2014'

username = input("Enter your username: ").strip()
password = input("Enter your password: ").strip()

if username == "" or password == "":
    print("Enter the username/password.")
elif username == stored_username and password == stored_password:
    print("Hello! Techlearn")
else:
    print("Invalid Username/Password")`
                },
                {
                    type: "text",
                    heading: "2. 🔐 Password Change System with Validation",
                    body: "Objective: Design a secure password change system that:\n- Validates old password\n- Accepts new password and reconfirms it\n- Changes password only if all conditions are met"
                },
                {
                    type: "code",
                    language: "python",
                    code: `actual_password = "tls@2014"

old_password = input("Enter old password: ").strip()

if old_password != actual_password:
    print("Wrong Password")
else:
    new_password = input("Enter new password: ").strip()
    confirm_password = input("Re-enter new password: ").strip()
    if new_password != confirm_password:
        print("New Passwords do not match")
    else:
        actual_password = new_password
        print("Password updated successfully!")`
                },
                {
                    type: "text",
                    heading: "3. 🏦 Bank Account Debit Simulation",
                    body: "Problem: Create a Python program that simulates debit operations from a customer’s bank account, applying multiple validation rules."
                },
                {
                    type: "code",
                    language: "python",
                    code: `account_no = 12345
balance = 12000

debit_amount = int(input("Enter amount to withdraw: "))

if debit_amount > 20000:
    print("Daily limit exceeded")
elif debit_amount % 100 != 0:
    print("Enter only multiple’s of 100’s")
elif debit_amount > balance:
    print("Insufficient Balance")
else:
    balance -= debit_amount
    print(f"Transaction successful. New balance: ₹{balance}")`
                },
                {
                    type: "text",
                    heading: "4. 🔐 Strong Password Validator",
                    body: "Goal: Validate if a password is strong using the following criteria:\n- Minimum length: 9 characters\n- At least one lowercase letter\n- At least one uppercase letter\n- At least one digit\n- At least one special character\n- Must not match the old password\n- Must not contain spaces"
                },
                {
                    type: "code",
                    language: "python",
                    code: `import string

old_password = "tls@2014"

new_password = input("Enter new password: ")

if len(new_password) < 9:
    print("Password too short. Minimum 9 characters required.")
elif new_password == old_password:
    print("New password must be different from the old password.")
elif " " in new_password:
    print("Password must not contain spaces.")
elif not any(c.islower() for c in new_password):
    print("Password must include a lowercase letter.")
elif not any(c.isupper() for c in new_password):
    print("Password must include an uppercase letter.")
elif not any(c.isdigit() for c in new_password):
    print("Password must include a digit.")
elif not any(c in string.punctuation for c in new_password):
    print("Password must include a special character.")
else:
    print("Strong password!")`
                },
                {
                    type: "text",
                    heading: "5. 🍽 Swiggy/Zomato Offer Calculator",
                    body: "Task: Simulate the final bill for a Swiggy/Zomato user after applying:\n- Platform charges\n- Delivery fee\n- Discounts (based on total)"
                },
                {
                    type: "code",
                    language: "python",
                    code: `total = float(input("Enter order total: ₹"))

delivery_fee = 40
platform_charge = 0.05 * total

# Calculate discount
if total >= 500:
    discount = 0.20 * total
elif total >= 300:
    discount = 0.10 * total
else:
    discount = 0.0

final_amount = total + platform_charge + delivery_fee - discount

print(f"Subtotal: ₹{total}")
print(f"Platform charges: ₹{platform_charge:.2f}")
print(f"Delivery fee: ₹{delivery_fee}")
print(f"Discount applied: ₹{discount:.2f}")
print(f"Final amount to pay: ₹{final_amount:.2f}")`
                },
                {
                    type: "text",
                    heading: "Functions in Python – Deep Dive & Formal Explanation",
                    body: "A function is a reusable block of code that performs a specific task. Functions help in organizing code logically and reduce repetition by allowing tasks to be executed when called by name.\n\nPython supports two main types of functions:\n- Built-in Functions – Predefined in Python (e.g., print(), len(), sum(), etc.)\n- User-defined Functions – Functions created by the programmer using the def keyword.\n\nBenefits of Using Functions:\n- Modularity: Divides code into logical chunks\n- Reusability: Write once, use many times\n- Maintainability: Easy to debug and enhance\n- Scalability: Can be tested and modified independently"
                },
                {
                    type: "code",
                    heading: "Syntax of a Function",
                    language: "python",
                    code: `def function_name(parameters):
    """
    Optional documentation string (docstring)
    """
    # Block of statements
    return value`
                },
                {
                    type: "code",
                    heading: "Example: Simple Function Without Parameters",
                    language: "python",
                    code: `def greet():
    print("Hello, welcome to Python functions!")

greet()`
                },
                {
                    type: "code",
                    heading: "Example: Function With Parameters and Return Value",
                    language: "python",
                    code: `def add(a, b):
    return a + b

result = add(5, 3)
print("The sum is:", result)`
                },
                {
                    type: "text",
                    heading: "Types of Arguments in Functions",
                    body: "1. Positional Arguments\n2. Keyword Arguments\n3. Default Arguments\n4. Variable-Length Arguments (*args, **kwargs)"
                },
                {
                    type: "code",
                    language: "python",
                    code: `def sum_all(*args):
    print("Sum:", sum(args))

sum_all(2, 4, 6)

def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key} = {value}")

print_info(name="Bob", age=25)`
                },
                {
                    type: "text",
                    heading: "Function Returning Multiple Values",
                    body: "Python functions can return multiple values as a tuple."
                },
                {
                    type: "code",
                    language: "python",
                    code: `def operations(a, b):
    return a + b, a - b, a * b

add, sub, mul = operations(10, 5)

print(add, sub, mul)`
                },
                {
                    type: "text",
                    heading: "Function Scope – Local and Global Variables",
                    body: "Local Variables: Declared inside the function\nGlobal Variables: Declared outside and accessible throughout the program"
                },
                {
                    type: "code",
                    language: "python",
                    code: `x = 10 # Global

def show():
    x = 5 # Local
    print("Inside:", x)

show()
print("Outside:", x)`
                },
                {
                    type: "text",
                    heading: "Lambda Functions (Anonymous Functions)",
                    body: "Single-expression functions\nDefined using lambda keyword\nUseful for short operations like filtering or mapping"
                },
                {
                    type: "code",
                    language: "python",
                    code: `square = lambda x: x ** 2

print(square(4))`
                },
                {
                    type: "text",
                    heading: "Docstrings – Documenting Functions",
                    body: "Docstrings provide a convenient way of associating documentation with Python modules, functions, classes, and methods."
                },
                {
                    type: "code",
                    language: "python",
                    code: `def multiply(a, b):
    """Returns the product of two numbers."""
    return a * b

print(multiply.__doc__)`
                },
                {
                    type: "text",
                    heading: "Real-World Program Example: Student Marks",
                    body: "Problem: Write a program to calculate a student's total and average marks using a function."
                },
                {
                    type: "code",
                    language: "python",
                    code: `def compute_marks(marks):
    total = sum(marks)
    average = total / len(marks)
    return total, average

student_marks = [85, 78, 92, 88, 76]

total, average = compute_marks(student_marks)

print("Total:", total)
print("Average:", average)`
                },
                {
                    type: "text",
                    heading: "Additional Practice Programs (Functions, Password, etc.)",
                    body: "Below are alternative implementations or additional practice sets as requested."
                },
                {
                    type: "code",
                    heading: "3) Banking Account Debit Program",
                    language: "python",
                    code: `acno = 12345
balance = 12000
daily_limit = 20000

debit_amount = int(input("Enter amount to debit: "))

if debit_amount > daily_limit:
    print("Daily limit exceeded")
elif debit_amount % 100 != 0:
    print("Enter only multiple’s of 100’s")
elif debit_amount > balance:
    print("Insufficient Balance")
else:
    balance -= debit_amount
    print(f"Amount debited successfully. Remaining balance: {balance}")`
                },
                {
                    type: "code",
                    heading: "4) Password Validation Program",
                    language: "python",
                    code: `import re

old_password = input("Enter your old password: ")
new_password = input("Enter your new password: ")

def is_strong_password(pwd, old_pwd):
    if len(pwd) <= 8:
        return False, "Password length must be more than 8"
    if ' ' in pwd:
        return False, "Password cannot contain spaces"
    if pwd == old_pwd:
        return False, "New password can't be same as old password"
    if not re.search(r"[A-Z]", pwd):
        return False, "Password must contain at least one uppercase letter"
    if not re.search(r"[a-z]", pwd):
        return False, "Password must contain at least one lowercase letter"
    if not re.search(r"[0-9]", pwd):
        return False, "Password must contain at least one digit"
    if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", pwd):
        return False, "Password must contain at least one special character"
    return True, "Strong Password"

valid, message = is_strong_password(new_password, old_password)

if valid:
    print("Password changed successfully. Your password is Strong.")
else:
    print(f"Weak Password: {message}")`
                },
                {
                    type: "code",
                    heading: "5) Swiggy/Zomato Offer Bill Calculation",
                    language: "python",
                    code: `# Sample program for bill calculation with offers and charges

bill_amount = float(input("Enter the total purchased bill amount: "))

# Example charges:
delivery_charge = 40 # fixed
tax_rate = 0.05 # 5% tax
discount = 0

# Offer: if bill > 500, 10% discount
if bill_amount > 500:
    discount = 0.10 * bill_amount

# Calculate tax on the amount after discount
tax = (bill_amount - discount) * tax_rate

final_amount = bill_amount - discount + tax + delivery_charge

print(f"Bill Amount: ₹{bill_amount:.2f}")
print(f"Discount: ₹{discount:.2f}")
print(f"Tax: ₹{tax:.2f}")
print(f"Delivery Charge: ₹{delivery_charge:.2f}")
print(f"Final Payable Bill: ₹{final_amount:.2f}")`
                }
            ]
        },
        "5": {
            title: "Data Types and Methods",
            sections: [
                {
                    type: "text",
                    heading: "Data Types and Methods",
                    body: "Python provides several built-in data types, grouped into the following major categories:\n\n- Numeric Types\n- Sequence Types\n- Mapping Types\n- Set Types\n- Boolean Type\n- Binary Types\n- None Type\n\nEach category is discussed in detail below."
                },
                {
                    type: "text",
                    heading: "Numeric Types",
                    body: "Python supports three primary numeric types:\n\n**a. int (Integer)**\nRepresents whole numbers (positive, negative, or zero) without a fractional component.\nArbitrary precision; can handle very large integers.\n\n**b. float (Floating-Point)**\nRepresents real numbers with a decimal point.\nPrecision may be limited due to binary representation.\n\n**c. complex (Complex Numbers)**\nRepresents complex numbers in the form a + bj.\na is the real part, b is the imaginary part."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Examples: Numeric Types",
                    code: `# Integer
x = 100
print(type(x))  # <class 'int'>

# Attributes:
x = 5
print(x.numerator)    # 5
print(x.denominator)  # 1

# Float
y = 7.25
print(type(y))  # <class 'float'>

# Complex
z = 2 + 3j
print(z.real)  # 2.0
print(z.imag)  # 3.0`
                },
                {
                    type: "text",
                    heading: "Sequence Types",
                    body: "These represent ordered collections of items. The three main sequence types are:"
                },
                {
                    type: "text",
                    heading: "a. str (String)",
                    body: "Represents a sequence of Unicode characters.\nImmutable (cannot be changed after creation)."
                },
                {
                    type: "code",
                    language: "python",
                    code: `s = "Hello, World!"
print(s[0])  # 'H'
print(len(s))  # 13

# Common methods:
print(s.lower())
print(s.upper())
print(s.replace('World', 'Python'))
print(s.find('World'))
print(s.split(','))`
                },
                {
                    type: "text",
                    heading: "b. list",
                    body: "Represents an ordered, mutable collection. Can contain elements of different types."
                },
                {
                    type: "code",
                    language: "python",
                    code: `lst = [1, 2, 3, "Python"]
lst.append(4)
lst[0] = 100
print(lst)`
                },
                {
                    type: "text",
                    heading: "c. tuple",
                    body: "Represents an ordered, immutable collection. Useful when data should not change."
                },
                {
                    type: "code",
                    language: "python",
                    code: `t = (1, 2, 3)
print(t[1])  # 2`
                },
                {
                    type: "text",
                    heading: "Mapping Type: dict (Dictionary)",
                    body: "Represents a collection of key-value pairs.\nUnordered (in versions before 3.7) but insertion-ordered (Python 3.7+).\nKeys must be hashable; values can be of any type."
                },
                {
                    type: "code",
                    language: "python",
                    code: `d = {'name': 'Alice', 'age': 25}
print(d['name'])  # 'Alice'

# Common methods:
print(d.keys())
print(d.values())
print(d.items())
print(d.get('age'))
print(d.update({'city': 'Hyderabad'}))
print(d.pop('age'))`
                },
                {
                    type: "text",
                    heading: "Set Types",
                    body: "Used for collections of unique, unordered items."
                },
                {
                    type: "text",
                    heading: "a. set",
                    body: "Mutable and unordered. No duplicate elements allowed. Useful for membership tests and eliminating duplicates."
                },
                {
                    type: "code",
                    language: "python",
                    code: `s = {1, 2, 3, 3}
print(s)  # {1, 2, 3}

# Operations:
s.add(4)
s.remove(2)
print(s.union({5, 6}))
print(s.intersection({1, 3, 5}))
print(s.difference({3}))`
                },
                {
                    type: "text",
                    heading: "b. frozenset",
                    body: "Immutable version of a set. Supports set operations but cannot be changed after creation."
                },
                {
                    type: "code",
                    language: "python",
                    code: `fs = frozenset([1, 2, 3])
print(fs)`
                },
                {
                    type: "text",
                    heading: "Boolean Type: bool",
                    body: "Represents truth values: True and False.\nInternally, True is equivalent to 1 and False to 0.\nCommonly used in conditions and logical operations."
                },
                {
                    type: "code",
                    language: "python",
                    code: `x = True
y = False
print(type(x))  # <class 'bool'>

# Logical operations:
print(x and y)
print(x or y)
print(not x)`
                },
                {
                    type: "text",
                    heading: "Binary Types",
                    body: "Used for working with raw binary data.\n\n**a. bytes**\nImmutable sequence of bytes.\n\n**b. bytearray**\nMutable version of bytes.\n\n**c. memoryview**\nProvides memory-efficient view of binary data."
                },
                {
                    type: "code",
                    language: "python",
                    code: `# bytes
b = b'hello'
print(b)

# bytearray
ba = bytearray([65, 66, 67])
ba[0] = 68  # Changes to 68, which is 'D'
print(ba)`
                },
                {
                    type: "text",
                    heading: "None Type: NoneType",
                    body: "Represents the absence of a value or a null value.\nThere is only one instance: None.\nCommonly used as a default function return value when nothing is returned explicitly."
                },
                {
                    type: "code",
                    language: "python",
                    code: `x = None
print(type(x))  # <class 'NoneType'>`
                },
                {
                    type: "text",
                    heading: "Type Conversion (Type Casting)",
                    body: "Type conversion refers to converting one data type into another. Python provides constructor functions to perform this explicitly for numeric types.\n\n**Constructors for Numeric Type Conversion:**\n- `int()` – Converts a number or numeric string to an integer, truncating any decimal part.\n- `float()` – Converts an integer or a numeric string to a floating-point number.\n- `complex()` – Converts an integer or float into a complex number."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Examples: Type Conversion",
                    code: `# Example 1: float -> int
a = 5.6
b = int(a)
print(b)
# Output: 5 (truncates decimal)

# Example 2: int -> float
a = 5
b = float(a)
print(b)
# Output: 5.0

# Example 3: int -> complex
a = 5
b = complex(a)
print(b)
# Output: (5+0j)

# Example 4: float -> complex
a = 5.6
b = complex(a)
print(b)
# Output: (5.6+0j)`
                },
                {
                    type: "text",
                    heading: "String (str) - Deep Dive",
                    body: "A sequence in Python is an ordered collection of elements. A string is one such sequence type that consists of Unicode characters.\n\n**Definition:**\nA string in Python is a sequence of characters enclosed in single quotes (' '), double quotes (\" \"), or triple quotes (''' ''' or \"\"\" \"\"\")."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Creating Strings",
                    code: `# Empty Strings
s1 = ""
s2 = str()

# Non-empty Strings
s3 = 'techlearn'

# Multiline Strings
para = """This is the first line,
This is second line,
This is third line."""
print(para)`
                },
                {
                    type: "text",
                    heading: "Properties of Strings",
                    body: "**Strings are immutable**\nOnce a string is created, it cannot be modified. Any operation that modifies a string returns a new string instead.\n\n**Strings are index-based**\nCharacters in a string can be accessed using index numbers, starting from 0 for the first character."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Indexing",
                    code: `s1 = 'TECHLEARN'

# Positive Indexing
print('First character:', s1[0]) # T
print('Fifth character:', s1[4]) # L

# Negative Indexing
print('Last character:', s1[-1]) # N
print('Third last character:', s1[-3]) # A`
                },
                {
                    type: "table",
                    heading: "Character Index Mapping",
                    headers: ["Character", "T", "E", "C", "H", "L", "E", "A", "R", "N"],
                    rows: [
                        ["Positive", "0", "1", "2", "3", "4", "5", "6", "7", "8"],
                        ["Negative", "-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1"]
                    ]
                },
                {
                    type: "text",
                    heading: "7) Slice Operator [:] with Strings",
                    body: "The slice operator is used to extract a portion (substring) of a string. The syntax is `string[start : end : step]`."
                },
                {
                    type: "code",
                    language: "python",
                    code: `s1 = 'TECHLEARN'

# Basic Slice (with 2 values)
s2 = s1[0:4]
print(s2) # Output: TECH
# Default start value is 0, so s1[:4] is equivalent to s1[0:4]

# Slicing from the end
s2 = s1[-5:] # Extracts the last 5 characters
print(s2) # Output: LEARN

# Slice with Step (3 values)
s3 = s1[0:6:2]
print(s3) # Output: TCL
# Starts at index 0, goes up to 5, skipping every second character.`
                },
                {
                    type: "text",
                    heading: "8) Concatenation Operator +",
                    body: "The + operator joins two or more strings into one."
                },
                {
                    type: "code",
                    language: "python",
                    code: `s1 = 'TECH'
s2 = 'LEARN'
s3 = s1 + s2
print(s3) # Output: TECHLEARN`
                },
                {
                    type: "text",
                    heading: "9) Repetition Operator *",
                    body: "The * operator repeats a string a specified number of times."
                },
                {
                    type: "code",
                    language: "python",
                    code: `s1 = 'TECH'
s2 = s1 * 3
print(s2) # Output: TECHTECHTECH`
                },
                {
                    type: "text",
                    heading: "10) F-Strings (Formatted String Literals)",
                    body: "Introduced in Python 3.6, f-strings provide a concise way to embed expressions inside string literals using `{}`."
                },
                {
                    type: "code",
                    language: "python",
                    code: `name = 'TechLearn'
mobile = 9676663136
s1 = f"Name is: {name} and Mobile is: {mobile}"
print(s1)`
                },
                {
                    type: "text",
                    heading: "11) Escape Character",
                    body: "The backslash `\\` is used to insert characters that are otherwise illegal in strings.\n\nCommon Sequences:\n- `\\\"` – Double quote\n- `\\\'` – Single quote\n- `\\\\` – Backslash\n- `\\n` – New line\n- `\\t` – Tab"
                },
                {
                    type: "code",
                    language: "python",
                    code: `s1 = 'This is \"TECHLEARN\" Solutions.'
print(s1)`
                },
                {
                    type: "text",
                    heading: "12) len() Function",
                    body: "Returns the number of characters in a string (including spaces and special characters)."
                },
                {
                    type: "code",
                    language: "python",
                    code: `s1 = 'TECHLEARN SOLUTIONS'
print(len(s1))
# Output: 19`
                },
                {
                    type: "table",
                    heading: "String Operator Summary",
                    headers: ["Feature", "Operator/Function", "Description"],
                    rows: [
                        ["Slice", "[:]", "Extracts substring from a string"],
                        ["Concatenation", "+", "Combines strings"],
                        ["Repetition", "*", "Repeats a string n times"],
                        ["Formatted String", "f\"\"", "Inserts variables into a string"],
                        ["Escape Character", "\\", "Inserts special characters"],
                        ["Length", "len()", "Returns number of characters"]
                    ]
                },
                {
                    type: "text",
                    heading: "String Methods",
                    body: "Key string methods include `capitalize()`, `count()`, `find()`, `split()`, `index()`, `upper()`, `lower()`, `islower()`, `isupper()`, and `isnumeric()`."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "String Methods Examples",
                    code: `# 1. capitalize()
s = 'apple'
print(s.capitalize()) # Output: Apple

# 2. count()
s = 'This is the first sentence. And this is the second sentence.'
print(s.count('the')) # Output: 2

# 3. find()
s = 'THIS IS INDIA'
print(s.find('INDIA')) # Output: 8
print(s.find('HYDERABAD')) # Output: -1

# 4. split()
words = "One, Two, Three"
print(words.split(',')) # Output: ['One', ' Two', ' Three']

# Task: Separate and capitalize
names = "vnr-cmr-uoh-mahindra-cbit"
name_list = names.split('-')
capitalized_names = [name.capitalize() for name in name_list]
print(capitalized_names)

# 5. index()
sentence = "This is India"
print(sentence.index("India")) # Output: 8

# 6. upper()
name = "Guido Van Rossum"
print(name.upper())

# 7. lower()
name = "APPLE"
print(name.lower())

# Check methods
print("Apple".islower()) # False
print("TECHLEARN".isupper()) # True
print("123".isnumeric()) # True`
                },
                {
                    type: "text",
                    heading: "Key Characteristics of Lists",
                    body: "- **Ordered**: Maintains the order of elements.\n- **Mutable**: Can be modified after creation.\n- **Allows Duplicates**: Multiple identical elements allowed.\n- **Heterogeneous Elements**: Can store different data types.\n- Defined Using Square Brackets `[ ]` or `list()` constructor."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "List Operations",
                    code: `# Creation
x = []
y = list()

# Allows Duplicates
xList = [1, 3, 7, 4, 5, 3]
print(xList)

# Length
print(len(xList))

# Accessing
print(xList[0]) # 10
print(xList[-1]) # 40 (last element)

# Slicing
xList = [10, 20, 30, 40, 50, 60]
print(xList[:3]) # [10, 20, 30]

# Concatenation
xList = [10, 20, 30]
yList = [40, 50, 60]
print(xList + yList)

# Repetition
print(xList * 2)`
                },
                {
                    type: "text",
                    heading: "List Comprehension",
                    body: "A concise way to generate lists using conditions and loops."
                },
                {
                    type: "code",
                    language: "python",
                    code: `# 1. Multiples of 5
xList = [5, 6, 2, 8, 9, 10, 45]
z = [x for x in xList if x % 5 == 0]
print(z) # [5, 10, 45]

# 2. Generate numbers 0-9
x = [y for y in range(10)]

# 3. Filter strings containing 'a'
xlist = ['apple', 'mango', 'kiwi', 'cherry', 'banana']
y = [x for x in xlist if 'a' in x]

# 4. Convert to uppercase
y = [x.upper() for x in xlist]

# 5. Replace specific item
y = [x if x != 'banana' else 'orange' for x in xlist]`
                },
                {
                    type: "table",
                    heading: "List Data Type Methods",
                    headers: ["Method", "Description"],
                    rows: [
                        ["append(x)", "Adds x to end of list"],
                        ["insert(i, x)", "Inserts x at index i"],
                        ["extend(list2)", "Appends all elements of list2"],
                        ["remove(x)", "Removes first occurrence of x"],
                        ["pop()", "Removes and returns last item"],
                        ["pop(i)", "Removes and returns item at index i"],
                        ["clear()", "Empties the list"],
                        ["sort()", "Sorts list in ascending order"],
                        ["reverse()", "Reverses order of items"],
                        ["index(x)", "Returns index of x"],
                        ["count(x)", "Counts number of times x appears"],
                        ["copy()", "Returns a new shallow copy"]
                    ]
                },
                {
                    type: "text",
                    heading: "Tuple Data Type",
                    body: "**Immutable**: Cannot be changed after creation.\n**Syntax**: `x = (1, 2, 3)` or `x = 1, 2, 3`\n**Singleton**: `x = (1,)` (note the comma)\n**Access**: Supports indexing and slicing.\n**Comprehension**: Returns a generator, not a tuple."
                },
                {
                    type: "code",
                    language: "python",
                    code: `# Tuple Comprehension Example
t = (10, 15, 20, 25)
z = (x for x in t if x <= 20)
for val in z:
    print(val, end=' ')
# Output: 10 15 20`
                },
                {
                    type: "table",
                    heading: "Comparison",
                    headers: ["Feature", "String", "List", "Tuple"],
                    rows: [
                        ["Mutability", "Immutable", "Mutable", "Immutable"],
                        ["Syntax", "\"text\"", "[1,2,3]", "(1,2,3)"],
                        ["Methods", "Many", "Many", "Very Few"],
                        ["Use Case", "Text handling", "Dynamic sequence", "Fixed sequence"]
                    ]
                },
                {
                    type: "text",
                    heading: "Set Data Type- Detailed",
                    body: "A set is a built-in data type that represents a collection of **unique, unordered** items.\n\n**Visual Properties:**\n- **Representation**: `{}` or `set()`\n- **Unique**: No duplicates\n- **Unordered**: Order not guaranteed\n- **No Indexing**: Cannot access via `[i]`\n- **Mutable**: Can add/remove items (but elements themselves must be immutable)"
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Set Examples",
                    code: `xSet = {1, 21, 33, 2, 40, 5}
# Duplicates automatically removed
xSet = {1, 2, 3, 2, 4, 5}
print(xSet) # {1, 2, 3, 4, 5}

# Creating empty set
set1 = set() # Correct
# set1 = {} # Wrong (Creates dict)`
                },
                {
                    type: "text",
                    heading: "Set Methods",
                    body: "1. `add()`: Add one item\n2. `update()`: Add multiple items\n3. `union()` or `|`: Combine sets\n4. `intersection()` or `&`: Common items\n5. `discard()`: Remove item (no error if missing)\n6. `pop()`: Remove random item\n7. `remove()`: Remove item (error if missing)\n8. `issuperset()`\n9. `issubset()`\n10. `difference()` or `-`\n11. `symmetric_difference()` or `^`\n12. `isdisjoint()`"
                },
                {
                    type: "code",
                    language: "python",
                    code: `# Set Operations
set1 = {71, 5, 13}
set2 = {5, 6, 7}

# Union
print(set1 | set2)

# Intersection
print(set1 & set2)

# Difference (in set1 but not set2)
print(set1 - set2)

# Specific update
delhi = {'Air India', 'Indigo','Go First', 'Vistara', 'Spicejet'}
mumbai = {'Air India', 'Akasa Air', 'Indigo', 'Go First'}
delhi.difference_update(mumbai) # Updates delhi in-place`
                },
                {
                    type: "text",
                    heading: "Dictionaries (dict)",
                    body: "A dictionary is like a real-life dictionary where each word (key) is associated with a meaning (value).\n\n**Features:**\n- **Key-Value Pairs**: `{ key: value }`\n- **Keys**: Must be immutable (int, float, str, tuple)\n- **Values**: Any type\n- **Ordered**: (Python 3.7+)\n- **Unique Keys**: Duplicates overwrite older ones"
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Dictionary Methods",
                    code: `city = {40: 'Hyderabad', 44: 'Chennai', 11: 'Delhi'}
print(city[40]) # Hyderabad

d = {'a': 1, 'b': 2}

# update()
d.update({'b': 20, 'c': 30})

# setdefault()
d.setdefault('d', 40)

# pop()
print(d.pop('b'))

# popitem()
d.popitem() # Removes last inserted

# copy()
d2 = d.copy()

# fromkeys()
new_dict = dict.fromkeys(['x', 'y'], 0)

# clear()
d.clear()

# get()
print(d.get('name', 'Not Found'))

# View objects
print(d.keys())
print(d.values())
print(d.items())`
                }
            ]
        },
        "6": {
            title: "Types of Loops",
            sections: [
                {
                    type: "text",
                    heading: "Control Statements: Loop Statements in Python",
                    body: "Types of Loops\n\n**Introduction to Looping**\nLoops in programming are control flow structures that enable the repeated execution of a block of code as long as a specified condition is true. This is particularly useful when a task must be repeated multiple times without rewriting the code for each repetition.\n\nA loop generally involves four primary components:\n1. **Initialization of a Counter**: A variable is initialized to act as the control or loop counter.\n2. **Test Expression (Condition Check)**: A boolean expression is evaluated. If true, the loop body is executed; otherwise, the loop terminates.\n3. **Loop Body (Statements)**: The core logic or instructions that need to be repeated.\n4. **Counter Update**: The loop counter is updated (incremented or decremented) to progress the loop toward its termination condition.\n\nThis structure ensures that loops do not run infinitely unless intended."
                },
                {
                    type: "text",
                    heading: "Types of Loops in Python",
                    body: "Python supports multiple types of loops, each suited for specific kinds of iteration:\n\n- `while` loop\n- `for` loop with `range()`\n- `for` loop with sequences/collections (also referred to as for-each loop)\n- `iter()` and generators – Advanced topics for custom and lazy evaluation loops"
                },
                {
                    type: "text",
                    heading: "while Loop",
                    body: "The while loop keeps executing the block of code as long as the condition is true."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Syntax",
                    code: `# initialization
while condition:
    # block of code
    # update`
                },
                {
                    type: "text",
                    heading: "Explanation",
                    body: "The loop begins with an initialization step.\nBefore each iteration, the condition is evaluated.\nIf the condition is true, the loop body executes.\nAfter execution, the counter is updated.\nThis process repeats until the condition becomes false."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example: Print numbers from 1 to 10",
                    code: `count = 1
while count <= 10:
    print(count, end=' ')
    count += 1
# Output: 1 2 3 4 5 6 7 8 9 10`
                },
                {
                    type: "text",
                    heading: "for Loop with range() Function",
                    body: "The `range()` function is a built-in method that generates a sequence of numbers. This is commonly used with a for loop to iterate a fixed number of times.\n\n**Forms of range():**"
                },
                {
                    type: "code",
                    language: "python",
                    heading: "a) Single Argument: range(stop)",
                    code: `# Starts from 0 by default. Ends before the stop value. Step/increment is +1 by default.
for i in range(5):
    print(i)
# Output: 0 1 2 3 4`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "b) Two Arguments: range(start, stop)",
                    code: `# Starts from the start value. Ends before the stop value. Step is still +1 by default.
for i in range(1, 6):
    print(i, end='\t')
# Output: 1 2 3 4 5`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "c) Three Arguments: range(start, stop, step)",
                    code: `# Explicitly defines the step size (positive or negative).
for i in range(1, 10, 2):
    print(i, end='  ')
# Output: 1 3 5 7 9`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Reversed Order",
                    code: `for i in range(10, 0, -1):
    print(i, end='  ')
# Output: 10 9 8 7 6 5 4 3 2 1

for i in range(10, -1, -1):
    print(i, end='  ')
# Output: 10 9 8 7 6 5 4 3 2 1 0`
                },
                {
                    type: "text",
                    heading: "for Loop with Sequences (For-Each Loop)",
                    body: "This form of the for loop is used to iterate over iterable objects, such as lists, strings, tuples, sets, or dictionaries. It retrieves each element from the collection, one at a time."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "General Syntax",
                    code: `for variable in sequence:
    # block of code`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Examples with Collections",
                    code: `# a) Iterating over a list
basket = ['orange', 'banana', 'apple', 'grapes']
for fruit in basket:
    print(fruit, end='  ')
# Output: orange banana apple grapes

# b) Iterating over a set
names_list = {"Geethika", "Naga Srivalli", "Shiva Ganesh", "Nanda Kishore"}
for name in names_list:
    print(name, end='   ')

# c) Sum of squares of numbers in a list
xlist = [1, 2, 3, 4, 5]
total = 0
for num in xlist:
    total += num * num
print('Sum of squares is:', total)

# d) Iterating over a string
name = 'TECHLEARN SOLUTIONS'
for letter in name:
    print(letter, end=' ')

# e) Iterating over a tuple
price_list = (100, 105, 156, 112, 130)
for price in price_list:
    print(price, end='  ')`
                },
                {
                    type: "text",
                    heading: "Iterating Over Dictionaries",
                    body: "A dictionary in Python is a collection of key-value pairs.\n`d = {65: 'A', 66: 'B', 67: 'C', 68: 'D'}`"
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Dictionary Iteration Examples",
                    code: `d = {65: 'A', 66: 'B', 67: 'C', 68: 'D'}

# a) Print keys
for key in d:
    print(key, end='  ')

# b) Print values
for key in d:
    print(d[key], end='  ')

# c) Print keys and values using direct access
for key in d:
    print(key, '-', d[key])

# d) Print keys and values using items()
# items() returns key-value pairs as tuples.
for key, value in d.items():
    print(key, '-', value)`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Application Example: State-Capital Pairs",
                    code: `states_list = {
    'Telangana': 'Hyderabad',
    'Tamilnadu': 'Chennai',
    'Karnataka': 'Bengaluru',
    'Kerala': 'Thiruvanthapuram'
}
for state, capital in states_list.items():
    print(state, '-', capital)`
                },
                {
                    type: "text",
                    heading: "For-Each with Nested Sequences (List of Lists)",
                    body: "When the data structure contains sub-sequences, like a list of lists or a list of tuples, you can unpack multiple elements directly in the loop header.\n\n**Example: Student Records**"
                },
                {
                    type: "code",
                    language: "python",
                    code: `std_list = [
    ['Pranay', 987687654, 'Hyderabad'],
    ['Kranthi', 87986655, 'Chennai'],
    ['Bharath', 78889765, 'Lucknow']
]
for s1, s2, s3 in std_list:
    print(s1, s2, s3)
# Output:
# Pranay 987687654 Hyderabad
# Kranthi 87986655 Chennai
# Bharath 78889765 Lucknow`
                },
                {
                    type: "text",
                    heading: "Conclusion",
                    body: "Loop statements form a critical part of any programming language, including Python. Understanding the different looping constructs such as:\n\n- `while` for conditional repetition,\n- `for-in` with `range()` for numeric sequences,\n- `for-each` style iteration for collections,\n- Dictionary-specific traversal,\n- Unpacking nested sequences,\n\nenables programmers to write efficient, readable, and structured code.\nThese loop structures form the basis for implementing algorithms, data processing, and automation of repetitive tasks in Python."
                }
            ]
        },
        "7": {
            title: "Functions",
            sections: [
                {
                    type: "text",
                    heading: "Functions - Introduction",
                    body: "A function in Python is a reusable block of organized, self-contained code that performs a specific task. Functions are designed to increase modularity, reduce redundancy, and improve code readability and maintainability. A function can optionally take input parameters, process them, and optionally return a result.\n\n**Benefits:**\n- **Reusability**: Define once, use multiple times.\n- **Modularity**: Divides the program into manageable pieces.\n- **Maintainability**: Changes in logic can be handled in one place.\n- **Testing**: Individual units can be tested independently."
                },
                {
                    type: "text",
                    heading: "Defining a Function",
                    body: "Functions are defined using the `def` keyword, followed by a unique name (identifier), parentheses which may include input parameters, and a colon."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Syntax & Example",
                    code: `def function_name(parameter1, parameter2, ...):
    # Code block
    return value # optional

# Example
def displayMessage():
    print("Hello! Welcome to TechLearn Solutions")
    
# Calling the function
displayMessage()`
                },
                {
                    type: "text",
                    heading: "Importing Functions",
                    body: "If the function is defined in a separate module or file (e.g., `test.py`), you must import the module before calling the function."
                },
                {
                    type: "code",
                    language: "python",
                    code: `import test
test.displayMessage()`
                },
                {
                    type: "text",
                    heading: "Functions with Parameters and Return Values",
                    body: "These functions accept data through arguments, process it, and return a result."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example 1: Addition",
                    code: `def add(n1, n2):
    return n1 + n2

result = add(5, 67)
print(result) # Output: 72
print(add(45, 30)) # Output: 75`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example 2: Area of a Circle",
                    code: `import math

def findCircleArea(radius):
    return math.pi * radius ** 2

circle_area = findCircleArea(5.9)
print('Area of circle is:', circle_area)
print('Area of circle is:', round(circle_area, 2))
# Output:
# Area of circle is: 109.3588402714607
# Area of circle is: 109.36`
                },
                {
                    type: "text",
                    heading: "Functions with Parameters and No Return Value",
                    body: "Such functions take inputs and execute a block of code but do not return any result explicitly."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example: Student Report Generation",
                    code: `def hasPassed(std_marks):
    for mark in std_marks:
        if mark < 8:
            return False
    return True

def generateStdReport(std_marks):
    total = sum(std_marks)
    print('Student marks are:')
    for sub in std_marks:
        print(sub, end=' ')
    print('Total:', total)
    result = hasPassed(std_marks)
    if result:
        print('Result: Passed')
    else:
        print('Result: Failed')

std1 = [12, 16, 17, 11, 18]
std2 = [19, 7, 17, 18, 16]

generateStdReport(std1)
generateStdReport(std2)`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Real-World Logic: Shopping List Manager",
                    code: `import time

shopping_list = set()

def addItem(name):
    shopping_list.add(name)
    print(name, 'added to the list')

def viewList():
    if len(shopping_list) == 0:
        print('Your list is empty')
    else:
        print('Your list has:')
        for product in shopping_list:
            print(product)
            time.sleep(1)

def removeItem(item):
    if item in shopping_list:
        shopping_list.remove(item)
        print(item, 'is removed from the list')
    else:
        print(item, 'not found in the list')

def clearList():
    shopping_list.clear()
    print('Shopping list is cleared')

def getItemsCount():
    print('Your shopping list has:', len(shopping_list), 'items')

# Test Usage
addItem('Milk')
addItem('Sugar')
addItem('Tea')
addItem('Milk') # Will not add again (set)
getItemsCount()
viewList()
removeItem('Milk')
viewList()
clearList()`
                },
                {
                    type: "text",
                    heading: "Types of Function Arguments",
                    body: "Python supports several types of function arguments:\n\n1. **Required (Positional) Arguments**\n2. **Keyword Arguments**\n3. **Default Arguments**\n4. **Variable-Length Arguments** (`*args`, `**kwargs`)\n5. **Keyword-Only Arguments**"
                },
                {
                    type: "text",
                    heading: "1. Required (Positional) Arguments",
                    body: "Must be provided in the exact number and order as specified."
                },
                {
                    type: "code",
                    language: "python",
                    code: `def register(name, mobile, email):
    print('Name :', name)
    print('Mobile:', mobile)
    print('Email :', email)

register('Kumar', 987678966, 'kumar@gmail.com')
# register('Kumar', 987678966) # Error: missing argument`
                },
                {
                    type: "text",
                    heading: "2. Keyword Arguments",
                    body: "Arguments passed by explicitly specifying the parameter name. Order doesn't matter."
                },
                {
                    type: "code",
                    language: "python",
                    code: `def getCustomerDetails(name, mobile, age):
    print('Name :', name)
    print('Mobile:', mobile)
    print('Age :', age)

getCustomerDetails(mobile=8976578887, name='Kumar', age=28)`
                },
                {
                    type: "text",
                    heading: "3. Default Arguments",
                    body: "Parameters can have default values. If not passed, default is used."
                },
                {
                    type: "code",
                    language: "python",
                    code: `def add(n1=0, n2=0):
    return n1 + n2

print(add()) # 0
print(add(5)) # 5
print(add(56, 4)) # 60`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Practical Example: Booking Tickets",
                    code: `import datetime

def bookTickets(movie, ticket_cost, date=datetime.date.today(), tickets_count=2):
    print("Movie :", movie)
    print("Date :", date.strftime('%d-%m-%Y'))
    print("Ticket Count:", tickets_count)
    print("Total Cost :", tickets_count * ticket_cost)

bookTickets("Manjummel Boys", 250)`
                },
                {
                    type: "text",
                    heading: "4. Variable-Length Arguments",
                    body: "**a) Arbitrary Positional Arguments (*args)**\nReceived as a tuple. Used for variable non-keyword arguments."
                },
                {
                    type: "code",
                    language: "python",
                    code: `def addStdNames(*batch):
    print("Names added are:")
    for std_name in batch:
        print(std_name)

addStdNames('Kiran', 'Yash', 'Ram')`
                },
                {
                    type: "text",
                    heading: "",
                    body: "**b) Arbitrary Keyword Arguments (**kwargs)**\nReceived as a dictionary. Used for variable keyword arguments."
                },
                {
                    type: "code",
                    language: "python",
                    code: `def addItems(**cart):
    print("Cart items are:")
    for item, qnt in cart.items():
        print(item, '=', qnt)

addItems(milkshakes=6, lottochocopie=6, bingo=3)`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Combined Example (*args & **kwargs)",
                    code: `def addBatchDetails(*std_ids, **stds):
    print('IDs:', end=' ')
    for std_id in std_ids:
        print(std_id, end=' ')
    print('\\nStudents:')
    for std_name, std_data in stds.items():
        print(std_name, '->', std_data)

addBatchDetails(
    101, 102, 103,
    Kiran=[9876545666, 'Hyderabad'],
    Suman=[89777779, 'Chennai']
)`
                },
                {
                    type: "text",
                    heading: "5. Keyword-Only Arguments",
                    body: "Declared after a `*`. Arguments following `*` must be passed as keywords."
                },
                {
                    type: "code",
                    language: "python",
                    code: `def findArea(*, len, bre):
    return len * bre

print(findArea(len=5, bre=6)) # 30
# print(findArea(5, 6)) # TypeError`
                },
                {
                    type: "table",
                    heading: "Argument Types Summary",
                    headers: ["Type", "Syntax", "Accepts", "Received As"],
                    rows: [
                        ["Positional", "func(a, b)", "Fixed position", "Vars"],
                        ["Keyword", "func(a=v)", "Named inputs", "Vars"],
                        ["Default", "func(a=0)", "Optional", "Vars"],
                        ["*args", "func(*args)", "Variable values", "Tuple"],
                        ["**kwargs", "func(**kwargs)", "Variable key-value", "Dict"],
                        ["Keyword-only", "func(*, a)", "Keyword only", "Vars"],
                        ["Positional-only", "func(a, /)", "Values only", "Vars"]
                    ]
                },
                {
                    type: "text",
                    heading: "Lambda Functions",
                    body: "Also called anonymous functions.\nSyntax: `lambda parameters: expression`"
                },
                {
                    type: "code",
                    language: "python",
                    code: `squareArea = lambda side: side * side
simpleInterest = lambda p, r, t: p * r * t / 100
checkEvenOrOdd = lambda num: "even" if num % 2 == 0 else "odd"

print(squareArea(12))
print(checkEvenOrOdd(24))`
                },
                {
                    type: "text",
                    heading: "Scope: Global vs Local",
                    body: "**Global Variables**: Declared outside any function. Accessible everywhere.\n**Local Variables**: Declared inside a function. Temporarily exist during execution."
                },
                {
                    type: "code",
                    language: "python",
                    code: `x = 10 # Global

def show():
    print("Value of x:", x)

def update():
    global x # Required to modify global var
    x += 5
    
def local_scope():
    y = 20 # Local
    print(y)

# print(y) # Error: y not defined`
                }
            ]
        },
        "8": {
            title: "Class and Constructor",
            sections: [
                {
                    type: "text",
                    heading: "Constructor - Definition",
                    body: "A constructor is a special method in Python classes. It is invoked automatically when an object of the class is instantiated. Its primary purpose is to initialize instance variables (also known as object-level attributes) with either default or user-provided values.\n\nIn Python, constructors are defined using the special method name:\n\n`def __init__(self):`\n\nThe constructor is a part of object instantiation. When a class is called to create an object, Python internally allocates memory for the new object and then calls the `__init__()` method to initialize the object’s attributes."
                },
                {
                    type: "text",
                    heading: "Key Characteristics of Constructors",
                    body: "- **Automatic Invocation**: The constructor is automatically called as soon as an object is created.\n- **Only One Call per Object**: It is invoked only once for each object, during its lifetime.\n- **Cannot Be Manually Invoked**: Programmers cannot directly invoke the constructor like other methods. It is managed by Python's object creation flow.\n- **Can Accept Parameters**: The constructor can be defined to accept user-defined parameters for setting up instance-specific values during object creation.\n- **Mandatory Use of self**: The first parameter of the constructor must always be `self`, which refers to the instance being created."
                },
                {
                    type: "text",
                    heading: "Types of Constructors",
                    body: "Python supports two types of constructors:\n1. **Default Constructor**\n2. **Parameterized Constructor**"
                },
                {
                    type: "text",
                    heading: "1. Default Constructor",
                    body: "A default constructor is one that takes only the `self` parameter and no additional arguments. It is used to initialize attributes with predefined default values."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example: Font Configuration",
                    code: `class Font:
    def __init__(self):
        self.size = 10 # Default font size
        self.face = 'Aerial' # Default font face
        self.style = 'Regular' # Default font style

    def viewFont(self):
        print('Font size:', self.size)
        print('Font face:', self.face)
        print('Font style:', self.style)

    def format(self, size=10, face='Aerial', style='Regular'):
        self.size = size
        self.face = face
        self.style = style
        print('Font Changed')

# Object creation using default constructor
f1 = Font()

# View default font settings
f1.viewFont()

# Modify some font attributes
f1.format(size=14, face='Verdana')

# View updated settings
f1.viewFont()`
                },
                {
                    type: "text",
                    heading: "2. Parameterized Constructor",
                    body: "A parameterized constructor is defined to accept one or more arguments in addition to `self`. This allows object attributes to be initialized with custom values during object creation."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example: ATM Card Issuance System",
                    code: `import random

class ATMCard:
    bank = 'ICICI' # Class variable
    card_no_series = 1234567812345678 # Static series

    def __init__(self, card_type, date_from, date_to):
        self.card_no = ATMCard.card_no_series # Assign value
        ATMCard.card_no_series += 1 # Increment series
        self.card_type = card_type
        self.date_from = date_from
        self.date_to = date_to
        r = random.Random()
        self.pin = r.randrange(1000, 9999) # Random PIN
        self.cvv = r.randrange(123, 987) # Random CVV

    def viewCard(self):
        print('Bank:', ATMCard.bank)
        print('Card No:', self.card_no)
        print('Card Type:', self.card_type)
        print('Valid From:', self.date_from, 'till', self.date_to)
        print('CVV:', self.cvv)

# Creating objects with user-specified values
card1 = ATMCard('VISA', '10-05-2024', '10-05-2034')
card1.viewCard()

card2 = ATMCard('MASTERCARD', '02-06-2024', '02-06-2034')
card2.viewCard()`
                },
                {
                    type: "text",
                    heading: "Destructor - Definition",
                    body: "A destructor is a special method in Python that is automatically called when an object is about to be destroyed. It is primarily used to perform cleanup tasks such as releasing memory, closing files, or resetting object values.\n\nDefined using the special method: `def __del__(self):`"
                },
                {
                    type: "text",
                    heading: "Key Characteristics of Destructors",
                    body: "- **Automatic Invocation**: Called when an object goes out of scope, is explicitly deleted (`del` keyword), or the program ends.\n- **Cannot Accept Arguments**: Only `self` is allowed.\n- **Called Only Once per Object**: Just once, at the end of the object's life.\n- **Used for Cleanup**: Resetting attributes, closing connections, logging termination."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example: Player Object Cleanup",
                    code: `class Player:
    def __init__(self, name):
        self.name = name
        print(self.name, "Player instance created")

    def __del__(self):
        print(self.name, "Player instance destructed")
        self.name = None # Reset the instance variable

    def viewName(self):
        print('Name:', self.name)

# Start of program
print('Program started...')

# Object creation
p1 = Player("Mani")
p2 = Player("Rohith")

# Access object methods
p1.viewName()
p2.viewName()

# Explicitly delete p1
del p1

# Continue with program
print('Program still running...')
print('Program ends')
# When program ends, p2 destructor is called automatically`
                },
                {
                    type: "table",
                    heading: "Default Constructor vs Destructor",
                    headers: ["Feature", "Constructor", "Destructor"],
                    rows: [
                        ["Method Name", "__init__(self, ...)", "__del__(self)"],
                        ["Purpose", "Initialize instance variables", "Clean up before destruction"],
                        ["Automatic Invocation", "Yes (on object creation)", "Yes (on object deletion)"],
                        ["Takes Parameters", "Yes (self + optional)", "No (only self)"],
                        ["Default Provided", "Yes, if not defined", "Yes, if not defined"],
                        ["Call Frequency", "Once per object", "Once per object"],
                        ["Can be Called Manually", "No", "No"]
                    ]
                }
            ]
        },
        "9": {
            title: "OOP's - Inheritance",
            sections: [
                {
                    type: "text",
                    heading: "OOP's - Inheritance",
                    body: "The four fundamental principles of Object-Oriented Programming (OOP) are:\n\n1.  **Inheritance**\n2.  **Polymorphism**\n3.  **Encapsulation**\n4.  **Abstraction**\n\n**Inheritance** is a core principle of OOP that allows one class (child) to acquire the properties and behaviors (methods and attributes) of another class (parent). It enables code reusability, extensibility, and the creation of hierarchical relationships."
                },
                {
                    type: "text",
                    heading: "Key Concepts",
                    body: "- **Parent (Super) Class**: The class from which properties are inherited.\n- **Child (Sub) Class**: The class that inherits.\n- **IS-A Relationship**: Inheritance implies an IS-A relationship (e.g., A Dog IS-A Animal).\n- **Constructor Call**: When a child object is created, the parent's constructor is implicitly called first."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Syntax of Inheritance",
                    code: `class Parent:
    # properties and methods

class Child(Parent):
    # inherits from Parent
    # can override or add new features`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example 1: Standard vs Scientific Calculator",
                    code: `import math

class StandardCalculator:
    def __init__(self):
        self.res = 0

    def viewRes(self):
        print('Result: ', round(self.res, 2))

    def add(self, n1, n2):
        self.res = n1 + n2

    def diff(self, n1, n2):
        self.res = n1 - n2
        self.viewRes()

    def div(self, n1, n2):
        self.res = n1 / n2
        self.viewRes()

    def mul(self, n1, n2):
        self.res = n1 * n2
        self.viewRes()

    def square(self, n1):
        self.res = n1 * n1
        self.viewRes()

class ScientificCalculator(StandardCalculator):
    def cos(self, n1):
        self.res = math.cos(n1)
        self.viewRes()

    def sin(self, n1):
        self.res = math.sin(n1)
        self.viewRes()

    def sqrt(self, n1):
        self.res = math.sqrt(n1)
        self.viewRes()

    def log(self, n1):
        self.res = math.log(n1)
        self.viewRes()`
                },
                {
                    type: "text",
                    heading: "Constructors in Inheritance",
                    body: "Constructors are not inherited. The child class must explicitly call the parent's constructor using `super()`."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example 2: Default Constructor in Parent",
                    code: `class Parent:
    def __init__(self):
        print('Parent is constructed')

class Child(Parent):
    def __init__(self):
        super().__init__()
        print('Child is constructed')`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example 3: Parameterized Constructor in Parent",
                    code: `class Parent:
    def __init__(self, x):
        self.x = x
        print('Parent is constructed with x =', x)

    def viewX(self):
        print('x =', self.x)

class Child(Parent):
    def __init__(self, n1):
        super().__init__(n1)
        print('Child is constructed with inherited value x =', self.x)`
                },
                {
                    type: "text",
                    heading: "Benefits of Inheritance",
                    body: "- **Reusability**: Inherit methods and properties from parent.\n- **Extensibility**: Add new methods and properties in child.\n- **Customization**: Override existing methods to provide new behavior."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example 4: Payment Methods Extension (Method Overriding)",
                    code: `class AmazonPayment:
    def debitCard(self):
        print('Payment using debit card')

    def creditCard(self):
        print('Payment using credit card')

    def netBanking(self):
        print('Payment with Netbanking')

class AmazonPayment2(AmazonPayment):
    def paytm(self):
        print('Payment with PAYTM')

    def UPI(self):
        print('Payment using UPI mode')

    def COD(self):
        print('Cash on Delivery')

    def amazonWallet(self):
        print('Payment by Amazon Wallet')`
                },
                {
                    type: "text",
                    heading: "Method Overriding",
                    body: "When a child class redefines a method already present in the parent, it is called **Method Overriding**. It allows the child class to implement parent methods with custom behavior. This demonstrates **Dynamic Polymorphism**."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example 5: Area of a Square",
                    code: `class Shape:
    def __init__(self, d1):
        self.d1 = d1
        self.area = 0

    def findArea(self):
        print('No logic')

    def dispDim(self):
        print('D1 =', self.d1)

    def dispArea(self):
        print('Area =', self.area)

class Square(Shape):
    def __init__(self, d1):
        super().__init__(d1)

    def findArea(self):
        self.area = self.d1 ** 2`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example 6: Area of a Rectangle (with Overridden dispDim)",
                    code: `class Shape:
    def __init__(self, d1):
        self.d1 = d1
        self.area = 0
        print('Shape is created')

    def dispDim(self):
        print('D1 =', self.d1)

    def dispArea(self):
        print('Area =', self.area)

class Rectangle(Shape):
    def __init__(self, d1, d2):
        super().__init__(d1)
        self.d2 = d2
        print('Rectangle is created')

    def dispDim(self):
        super().dispDim()
        print('D2 =', self.d2)

    def findArea(self):
        self.area = self.d1 * self.d2`
                },
                {
                    type: "text",
                    heading: "Example 7: Multilevel Inheritance with Cuboid",
                    body: "In this example, we demonstrate multilevel inheritance, where the class Shape is inherited by Rectangle, which is in turn inherited by Cuboid. The Cuboid class adds new behavior (volume) to the inherited functionality."
                },
                {
                    type: "code",
                    language: "python",
                    code: `class Shape:
    def __init__(self, d1):
        self.d1 = d1
        self.area = 0
        print('Shape is created')

    def dispDim(self):
        print('D1 =', self.d1)

    def dispArea(self):
        print("Area =", self.area)

class Rectangle(Shape):
    def __init__(self, d1, d2):
        super().__init__(d1)
        self.d2 = d2
        print('Rectangle is created')

    def dispDim(self):
        super().dispDim()
        print('D2 =', self.d2)

    def findArea(self):
        self.area = self.d1 * self.d2

class Cuboid(Rectangle):
    def __init__(self, d1, d2, d3):
        super().__init__(d1, d2)
        self.d3 = d3
        self.volume = 0
        print('Cube is created')

    def findArea(self):
        self.area = 2 * (self.d1*self.d2 + self.d2*self.d3 + self.d3*self.d1)

    def findVolume(self):
        self.volume = self.d1 * self.d2 * self.d3

    def dispVolume(self):
        print('Volume =', self.volume)

    def dispDim(self):
        super().dispDim()
        print('D3 =', self.d3)

c1 = Cuboid(5, 4, 3)
c1.dispDim()
c1.findArea()
c1.findVolume()
c1.dispArea()
c1.dispVolume()`
                },
                {
                    type: "text",
                    heading: "Types of Inheritance",
                    body: "1.  **Single Inheritance**: A child class inherits from a single parent class.\n2.  **Multiple Inheritance**: A child class inherits from more than one parent class.\n3.  **Multilevel Inheritance**: A class inherits from a child class which itself is derived from another parent class.\n4.  **Hierarchical Inheritance**: More than one child class inherits from a single parent class.\n5.  **Hybrid Inheritance**: A combination of multiple inheritance types."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "1) Single Inheritance Example",
                    code: `class Editor:
    def open(self):
        self.text = ''

    def writeText(self, txt):
        self.text += txt
        print(self.text)

    def viewText(self):
        print(self.text)

class Paint(Editor):
    def drawLine(self):
        self.line = '------------------'
        print(self.line)

    def viewEditor(self):
        print(self.text)
        print(self.line)

p1 = Paint()
p1.open()
p1.writeText('hello welcome to techlearn')
p1.drawLine()`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "4) Hierarchical Inheritance Example (Banking)",
                    code: `class Account:
    def __init__(self, acno, name, mobile, balance):
        self.acc_type = ' '
        self.acno = acno
        self.name = name
        self.mobile = mobile
        self.balance = balance

    def viewAccountDetails(self):
        print('Ac No: ', self.acno)
        print('Name: ', self.name)
        print('Mobile: ', self.mobile)
        print('Account Type: ', self.acc_type)
        print('***********************')

    def debit(self, amt):
        if amt <= self.balance:
            self.balance -= amt
            print('Collect your cash')
        else:
            print('Insufficient funds')

    def credit(self, amt):
        if amt < 100000:
            self.balance += amt
            print(amt, " deposited")
        else:
            print('Amount Limit exceeded')

    def checkBalance(self):
        print('Available balance: ', self.balance)

class SavingsAccount(Account):
    def __init__(self, acno, name, mobile, balance):
        super().__init__(acno, name, mobile, balance)
        self.acc_type = 'Savings Account'
        self.interest = 0.06

    def addQtrlyInterest(self):
        self.balance += self.balance * self.interest + self.balance
        print('Qtrly Interest Added')

class LoanAccount(Account):
    def __init__(self, acno, name, mobile, balance):
        super().__init__(acno, name, mobile, balance)
        self.acc_type = 'Loan Account'

    def applyLoan(self, loan_amt, no_of_instlmnts):
        self.loan_amt = loan_amt
        self.no_of_instlmnts = no_of_instlmnts

    def viewLoan(self):
        print('Loan amount: ', self.loan_amt)
        print('Number of Instalments: ', self.no_of_instlmnts)

sa = SavingsAccount(1234, 'Kumar', 9876, 12000)
sa.viewAccountDetails()

la = LoanAccount(1234, 'Pranay', 898989, 10000)
la.viewAccountDetails()`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "5) Hybrid Inheritance Example (Diamond Problem)",
                    code: `class P:
    def __init__(self):
        self.a = 1
        print('P instance created')

class C1(P):
    def __init__(self):
        super().__init__()
        self.b = 2
        print('C1 instance created')

class C2(P):
    def __init__(self):
        super().__init__()
        self.c = 3
        print('C2 instance created')

class C3(C1, C2):
    def __init__(self):
        super().__init__()
        self.d = 4
        print('C3 instance created')

    def viewValues(self):
        print(self.a, self.b, self.c, self.d)

c = C3()
c.viewValues()`
                },
                {
                    type: "text",
                    heading: "Method Resolution Order (MRO)",
                    body: "The Hybrid Inheritance example demonstrates MRO (Method Resolution Order) in Python's multiple inheritance mechanism, ensuring no duplication or ambiguity when calling constructors."
                }
            ]
        },
        "10": {
            title: "OOP's - Polymorphism",
            sections: [
                {
                    type: "text",
                    heading: "OOP's - Polymorphism",
                    body: "**Polymorphism** allows objects of different classes to be treated as objects of a common superclass. It enables the same interface to represent different underlying data types and behaviors.\n\nTypes of Polymorphism:\n1.  **Static Polymorphism** (Compile-time)\n2.  **Dynamic Polymorphism** (Runtime)"
                },
                {
                    type: "text",
                    heading: "1) Static Polymorphism (Operator Overloading)",
                    body: "Static Polymorphism refers to behavior that is determined at compile-time. In Python, this is achieved through **Operator Overloading**.\n\n**Operator Overloading** means redefining the way operators work for user-defined types. Python uses special \"dunder\" methods (e.g., `__add__`, `__lt__`) to achieve this."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Operator Overloading Concept",
                    code: `# The same '+' operator behaves differently:

# a) Integers - arithmetic addition
print(5 + 10) # 15

# b) Strings - concatenation
print('tech' + 'learn') # techlearn

# c) Lists - merging
print([1, 2] + [3, 4]) # [1, 2, 3, 4]`
                },
                {
                    type: "table",
                    heading: "Common Operator Overloading Methods",
                    headers: ["Operator", "Method", "Operator", "Method"],
                    rows: [
                        ["+", "__add__(self, other)", "-", "__sub__(self, other)"],
                        ["*", "__mul__(self, other)", "/", "__truediv__(self, other)"],
                        ["<", "__lt__(self, other)", ">", "__gt__(self, other)"],
                        ["<=", "__le__(self, other)", ">=", "__ge__(self, other)"],
                        ["==", "__eq__(self, other)", "!=", "__ne__(self, other)"]
                    ]
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example 1: Overloading '+' for Custom Line Class",
                    code: `class Line:
    def __init__(self, length):
        self.length = length

    def __str__(self):
        return str(self.length)

    def __add__(self, other):
        # Create new Line with sum of lengths
        temp = Line(self.length + other.length)
        return temp

    def drawLine(self):
        for _ in range(self.length):
            print('-', end='')
        print()

x = Line(5)
y = Line(10)
z = x + y  # invokes __add__

print(x, y, z)  # Output: 5 10 15

x.drawLine()
y.drawLine()
z.drawLine()`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example 2: Overloading '<' for Rectangle Class",
                    code: `class Rectangle:
    def __init__(self, d1, d2):
        self.d1 = d1
        self.d2 = d2
        self.area = 0

    def findArea(self):
        self.area = self.d1 * self.d2

    def __lt__(self, other):
        return self.area < other.area

r1 = Rectangle(5, 4)
r2 = Rectangle(4, 6)

r1.findArea()
r2.findArea()

print("r1 area:", r1.area)  # 20
print("r2 area:", r2.area)  # 24

print(r1 < r2)  # True (20 < 24)
print(r2 < r1)  # False`
                },
                {
                    type: "text",
                    heading: "2) Dynamic Polymorphism (Method Overriding)",
                    body: "Dynamic Polymorphism is where method calls are resolved at runtime. This is commonly achieved through **Method Overriding** in an inheritance hierarchy.\n\n**Method Overriding**: When a subclass provides a specific implementation of a method that is already defined in its superclass. The overriding method must have the same name, parameters, and signature."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example: Dynamic Polymorphism with Animals",
                    code: `class Animal:
    def sound(self):
        print("Animal makes sound")

class Dog(Animal):
    def sound(self):
        print("Dog barks")

class Cat(Animal):
    def sound(self):
        print("Cat meows")

# Polymorphism in action
animals = [Dog(), Cat(), Animal()]

for a in animals:
    a.sound()  # Method called depends on object type at runtime`
                },
                {
                    type: "text",
                    heading: "Summary",
                    body: "- **Static Polymorphism**: Achieved using operator overloading (compile-time).\n- **Dynamic Polymorphism**: Achieved through method overriding (runtime).\n- **Benefits**: Enhances flexibility, code reuse, and scalability."
                }
            ]
        },
        "11": {
            title: "Multitasking",
            sections: [
                {
                    type: "text",
                    heading: "Multitasking",
                    body: "Multitasking refers to the ability of the CPU to execute multiple tasks or processes simultaneously.\n\n**Types of Multitasking:**\n1.  **Process-Based Multitasking**: Running multiple independent programs (processes) simultaneously (e.g., Browser + Editor).\n2.  **Thread-Based Multitasking (Multithreading)**: Running multiple threads (smallest units of execution) within a single process to execute tasks in parallel."
                },
                {
                    type: "text",
                    heading: "1. Using `_thread` Module",
                    body: "The `_thread` module provides a simple mechanism to run functions concurrently. It is a lower-level API."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example: _thread",
                    code: `import _thread
import time

def numThr(n1, n2):
    for i in range(n1, n2):
        print(i, end=' ')
        time.sleep(1)

def alphaThr(n1, n2):
    for i in range(n1, n2):
        print(chr(i), end=' ')
        time.sleep(1)

# Launch threads
_thread.start_new_thread(numThr, (65, 75))
_thread.start_new_thread(alphaThr, (65, 75))

while True:
    pass # Keep main thread alive`
                },
                {
                    type: "text",
                    heading: "2. Using `threading` Module",
                    body: "This is the preferred way to work with threads in Python. It provides a `Thread` class with extensive thread management features.\n\n**Thread Life Cycle**:\n- **Born**: Created.\n- **Runnable**: Started (`start()`).\n- **Running**: Executing (`run()`).\n- **Blocked**: Paused (I/O, Sleep).\n- **Dead**: Completed."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Creating Thread by Inheriting Thread Class",
                    code: `import threading
import time

class NumThr(threading.Thread):
    def __init__(self):
        super().__init__()

    def run(self):
        print('Thread started running')
        for i in range(5):
            print(i, end=' ')
            time.sleep(1)
        print('Thread stopped running')

t1 = NumThr()
t2 = NumThr()

t1.start()
t2.start()`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Creating Thread by Passing Function",
                    code: `import threading
import time

def numThr(n1, n2):
    for i in range(n1, n2):
        print(i, end=' ')
        time.sleep(1)

t1 = threading.Thread(target=numThr, args=(1, 10))

t1.start()`
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Sharing Resources Between Threads",
                    code: `import threading
import time

class Book:
    def __init__(self):
        self.content = 'This is python programming book'

    def read(self):
        for word in self.content.split():
            print(word)
            time.sleep(1)

class Student(threading.Thread):
    def __init__(self, name, book):
        super().__init__()
        self.name = name
        self.book = book

    def run(self):
        print(self.name + ' started reading')
        self.book.read()
        print(self.name + ' finished reading')

b = Book()
s1 = Student("Bharath", b)
s2 = Student("Raman", b)

s1.start()
s2.start()`
                },
                {
                    type: "text",
                    heading: "Synchronizing Threads Using Locks",
                    body: "When shared resources must be accessed one at a time, **Locks** ensure only one thread accesses the resource at a time, preventing race conditions."
                },
                {
                    type: "code",
                    language: "python",
                    heading: "Example: Synchronization with Lock",
                    code: `import threading
import time

lock = threading.Lock()

class Book:
    def __init__(self):
        self.content = 'This is python programming book'

    def read(self):
        print('Started reading the book')
        lock.acquire() # Lock Access
        print('Lock acquired')
        for word in self.content.split():
            print(word, end='  ')
            time.sleep(1)
        print('\\nLock released')
        lock.release() # Release Access

class Student(threading.Thread):
    def __init__(self, name, book):
        super().__init__()
        self.name = name
        self.book = book

    def run(self):
        print(self.name + ' started running')
        self.book.read()
        print(self.name + ' stopped running')

b = Book()
s1 = Student("Bharath", b)
s2 = Student("Raman", b)

s1.start()
s2.start()`
                },
                {
                    type: "text",
                    heading: "Summary",
                    body: "- **Multithreading** allows concurrent execution.\n- **Modules**: `_thread` (low-level) and `threading` (high-level, preferred).\n- **Synchronization**: `Lock` is used to manage access to shared resources safely."
                }
            ]
        }
    }
};

app.get('/api/course/:id', (req, res) => {
    res.json({
        id: COURSE_DATA.id,
        title: COURSE_DATA.title,
        topics: COURSE_DATA.topics
    });
});

app.get('/api/topic/:id', (req, res) => {
    const topicContent = COURSE_DATA.content[req.params.id];
    if (topicContent) {
        res.json(topicContent);
    } else {
        const topic = COURSE_DATA.topics.find(t => t.id === req.params.id);
        res.json({
            title: topic ? topic.title : "Topic",
            sections: [
                { type: "text", heading: "Coming Soon", body: "This content is under development." }
            ]
        });
    }
});

const path = require('path');
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
