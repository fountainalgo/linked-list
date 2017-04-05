# linked-list
A linked list is a linear data structure where each element is a separate object. Each element (we will call it a node) of a list is comprising of two items - the data and a reference to the next node. The last node has a reference to null. The entry point into a linked list is called the head of the list.

####### How To use #############

const list = require('linked-list');

list.append()  //To append an item
list.isEmpty()  //To check whether list is empty or not
list.prepend()  //To prepend front element
list.size() //To get size of List.
list.print() //To get all the elements in list.
list.contains() //To check whether element present or not in List.
list.remove() //To remove an item from the list.
