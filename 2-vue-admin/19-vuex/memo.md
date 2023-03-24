## **Install/Register Pinia**

![Alt install pinia](pic/01.jpg)

![Alt register it](pic/02.jpg)

![Alt create file for store](pic/03.jpg)

## **Setting Pina Store and Fectching data into it**

![Alt write content of store and set data to it in Layout](pic/04.jpg)

- Even if the Layout page does not use the data in the pinia store, as the root page, it can still do the work of fetching data into the pinia store, so that the operation of loading data and retrieving data can be separated in different components.

## **Access data from Pina Store**

![Alt access data from store](pic/05.jpg)

- Data taken directly from pinia is not reactive, so be careful with this.
  - If I use getter, is it reactive?
