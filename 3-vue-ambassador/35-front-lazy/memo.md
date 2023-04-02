## **Goal: Lazy loading of frontend page**

![Alt goal](pic/01.jpg)

## **Limit presented products by slice method**

![Alt use slice to limit products presented](pic/02.jpg)

- So far, the 'Load More' button is not working, the page will always remain 1, so only 9 products can be displayed.

## **Dynamic change 'page' state with event payload**

> Simply reset the state page using the data carried by the emit event of Products.vue to enable the 'Load More' button.

![Alt use emit data to change page](pic/03.jpg)

## **Goal: Hide the 'Load More' button**

![Alt goal: hide the Load More](pic/04.jpg)

### _frontend page_

> We must calculate the last page ourselves.

![Alt frontend](pic/05.jpg)

### _backend page_

> The value of last page is provided in the result of the API response directly.

![Alt backend](pic/06.jpg)
