## **Use Reactive instead of Ref for Form**

![Alt use reactive instead ref for form](pic/01.jpg)

- In fact, the property names used by the object in reactive should preferably be the same as those in the database, and we will see why later.

## **Get user data from pinia store**

![Alt get pinia store data](pic/02.jpg)

![Alt fix type error](pic/03.jpg)

- Typescipt will define the type based on the initial value given, so we don't need to define the type of each property in reactive, but just give the initial value.

## **Change state names**

![Alt change state names](pic/04.jpg)

- This is why it is better to have the same property names in reactive as in the database.

## **TEST**

![Alt test 1](pic/05.jpg)

![Alt test 2](pic/06.jpg)
