---
creation_date: 2024-12-05
path: "1-RoughNotes/2024-12-05"
---
# Rough Note - 2024-12-05

## abstract keyword

abstract keyword in the java means that this class can have some methods that can have implementation and some cant 

abstract is only used when we have to use that class for inheritance 

abstract can also be used with methods means that method can have only signature in that class they don't need to be implemented 

abstract methods can only be used inside the abstract class  if you define abstract method inside a normal class you'll get the error 

if you don't implement abstract method inside the subclass then you'll get the error
## constructor  or methods 

##### rules to define constructor
 - same  name like class name 
 - no return type { nor int ,void , string , char }
 - constructor can have modifier {private , protected ,public }

###### if constructor is private then how to use the constructor
- there are two methods singleton and factory methods
- and they have functionality like their own name factory means creating more than one and singleton means creating single one 
- singleton used in creating database connection

##### overloading methods 
 - methods within a class can have the same name if they have different parameter lists
 - Overloaded methods are differentiated by the number and the type of the arguments passed into the method. In the code sample, `draw(String s)` and `draw(int i)` are distinct and unique methods because they require different argument types.

## garbage collection 

- whenever references gets destroyed it is available for the garbage collection in java 
```
public class Main {
    public static void main(String[] args) {
        // Create object
        Student s1 = new Student("Rahul");
        
        // Object loses its reference (eligible for garbage collection)
        s1 = null;
        
        // Another example
        {
            Student s2 = new Student("Priya");
            // s2 will be eligible for garbage collection after this block
        }
        // s2 is out of scope here
    }
}
```
```
```


## protected vs private 

##### protected 
 -  accessible within the subclass and package
 - use for inheritance 

##### private 
 - Accessible only within the same class.
 - No, not accessible by other classes in the same package.
 - Used for encapsulation, hiding internal details.

## Returning a Class or Interface



## Important 
- [ ] creation of class is same as instantiating a class " When you create an object, you are creating an "instance" of a class, therefore "instantiating" a class"
- [ ] there can be many constructor in the one class but each constructor needs to be define with different arguments and the different type of arguments either of them will work """ but return type different didn't going to work 