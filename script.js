class NodeData{
    constructor(elem){
        this.element = elem;
        this.nextright = null;
        this.nextleft = null;
    }
}

class BinarySeachTree{
    constructor(){
        this.root = null;
    }

    addRecursive(current,elem){
        if(current == null){
            return new NodeData(elem)
        }
        if(elem < current.element){
            current.nextleft = this.addRecursive(current.nextleft,elem)
        }
        else if(elem > current.element){
            current.nextright = this.addRecursive(current.nextright,elem);
        }
        else{
            return current;
        }
        return current;
    }

    add(elem){
        this.root = this.addRecursive(this.root,elem);
    }

    inOrder(n,str){
        if(n != null){
            str = this.inOrder(n.nextleft,str);
            str = str + n.element+" ";
            // console.log(n.element);
            str = this.inOrder(n.nextright,str);
        }
        return str;
    }

    postOrder(n,str){
        if(n != null){
            str = this.postOrder(n.nextleft,str);
            str = this.postOrder(n.nextright,str);
            str = str + n.element+" ";
            // console.log(n.element);
        }
        return str;
    }

    preOrder(n,str){
        if(n != null){
            str = str + n.element + " ";
            // console.log(n.element);
            str = this.preOrder(n.nextleft,str);
            str = this.preOrder(n.nextright,str)
        }
        return str;
    }

    reset() {
        this.root = null;
    }
   
}


let bst = new BinarySeachTree();
let number = document.getElementById("num")
let r1 = document.getElementById("ShowData")
let r2 = document.getElementById("ShowData1")
let r3 = document.getElementById("ShowData2")
let r4 = document.getElementById("ShowData3")
console.log(number)
console.log(r1)
let str = "";




function inputData(){
    n = number.value
    bst.add(n)
    console.log(bst.root)
    r1.innerHTML = r1.innerHTML + n + " ";   
}

function inOrder(){
    console.log("inOrder : ",bst.inOrder(bst.root, str));
    sum1 = bst.inOrder(bst.root, str)
    r2.innerHTML = r2.innerHTML+"<br>" + sum1
}

function postOrder(){
    console.log("postOrder : ",bst.postOrder(bst.root, str));
    sum2 = bst.postOrder(bst.root, str)
    r3.innerHTML = r3.innerHTML+"<br>" + sum2
}

function preOrder(){
    console.log("preOrder : ",bst.preOrder(bst.root, str));
    sum3 = bst.preOrder(bst.root, str)
    r4.innerHTML = r4.innerHTML+"<br>" + sum3
}

function Reset(){
    bst.root = null;
    console.log(bst)
    n.value = ""
    r1.innerHTML = ""
    r2.innerHTML = ""
    r3.innerHTML = ""
    r4.innerHTML = ""
}

