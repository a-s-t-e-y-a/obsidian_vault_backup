---
creation_date: 2024-12-27
path: "1-RoughNotes/2024-12-27"
---
# Rough Note - 2024-12-27

## Ideas

```
comments are available in the three format in the java 
/*   */                         /// mutiple lines
//                              /// single line
/** */                          /// comments that is part of the java 
```

### [ Widening Conversion] 

``` 
int y = 3;
float x= y;
// called as widening conversion converting int type value into float type int is going to upgrade it self to convert into float
```
 
### [narrowing conversion ]

```
float x=3.4f;
int y = x;
// naroowing down the float to get into int 
```

### [ type casting ]

```
float x=3.4f;
int y = (int)x;
/// called as typecasting
```

```
float k =3.5;          // error 
float k = 3.5f;        // no error
```

### [ permitted conversion ]

Implicit (Widening) Conversions:

- byte → short

- byte → int

- byte → long

- byte → float

- byte → double

- short → int

- short → long

- short → float

- short → double

- int → long

- int → float

- int → double

- long → float

- long → double

- float → double

Explicit (Narrowing) Conversions:

- double → float

- double → long

- double → int

- float → int

- float → long

- long → int

- long → short

- long → byte

- int → short

- int → byte

- short → byte

#### 2. Object Type Conversions

Upcasting (Implicit):

- Dog → Animal (if Dog extends Animal)

- Cat → Animal (if Cat extends Animal)

Downcasting (Explicit):

- Animal → Dog (if the actual object is a Dog)

- Animal → Cat (if the actual object is a Cat)

#### 3. String Conversions

- int → String using String.valueOf(int)

- double → String using String.valueOf(double)

- String → int using Integer.parseInt(String)

- String → double using Double.parseDouble(String)
## Thoughts
- [ ] 