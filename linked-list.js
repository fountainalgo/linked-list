"use strict";
//iSEmpty()
//size()
//prepend()
//append()
//contains()



class LinkedList{
	constructor(){
		this._head = null;
	}
	isEmpty(){
		return this._head === null
	}
	size(){
		let current = this._head;
		let count = 1;
		while(current.next!==null){
			count++;
			current = current.next;
		}
		return count;
	}
	//[10] => [15] => [17]
	prepend(elem){
		var newNode = {
			data:elem,
			next:this._head
		}
		this._head = newNode;
	}
	append(elem){
		var newNode = {
			data:elem,
			next:null
		}
		if(this.isEmpty()){
			this._head  = newNode;
			return;
		}
		let current = this._head;
		while(current.next!=null){
			current = current.next
		}
		current.next = newNode;

	}
	contains(elem){
		let current = this._head;
		while(current!=null){
			if(current.data == elem){
				return true;
			}
			current = current.next;
		}
		return false;
	}
	//[10] -> [15] -> [20] -> [30]
	//[10] -> [15] -> [20] -> [30]
	remove(elem){
		let current = this._head;
		if(!this.contains(elem)){
			throw "Element is not available."
		}
		if(current.data==elem){
			this._head = this._head.next;
		}
		while(current.next!=null){
			if(current.next.data == elem){
				current.next = current.next.next
			}
			current = current.next;
		}
		current = this._head;
	}
	print(){

		let current = this._head;
		let output = '[';
		while(current!=null){
			output += current.data;
			if(current.next!=null){
				output +=","	
			}
			current = current.next;
		}
		output += ']';
		return output;

	}
	
}
