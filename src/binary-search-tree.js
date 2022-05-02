const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.init = null;
  }

  root(){
   return this.init;
  }

  add(data) {
    this.init = addWithin(this.init, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else{
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.init, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else{
        return searchWithin(node.right, data);
      }
    }
  }

  find(data) {
    return searchWithin(this.init, data);

    function searchWithin(node, data) {
      if (!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else{
        return searchWithin(node.right, data);
      }
    }
  }

  remove(data) {
    this.init = removeNode(this.init, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;

      }
    }
  }

  min() {
    if (!this.init) {
      return null;
    }

    let node = this.init;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.init) {
      return null;
    }

    let node = this.init;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}


let tree = new BinarySearchTree;
console.log(tree.root());
tree.add(2);
tree.add(3);
tree.add(4);
console.log(tree.root());
console.log(tree.has(2));



module.exports = {
  BinarySearchTree
};