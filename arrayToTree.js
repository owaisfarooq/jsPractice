// const assert = require('./functionTesting');
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// function test() {
//     var array = [];
//     var expected = undefined;
//     assert.test(arrayToTree(array), expected);

//     array = [17, 0, -4, 3, 15];
//     expected = new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4));
//     assert.test(arrayToTree(array), expected);
// }

function arrayToBinaryTree(arr) {
    // Helper function to recursively build the binary tree
    function buildTree(index) {
        if (index < arr.length && arr[index] !== null) {
            const node = new TreeNode(arr[index]);
            node.left = buildTree(2 * index + 1);
            node.right = buildTree(2 * index + 2);
            return node;
        }
        return null;
    }

    // Start with the root node at index 0
    return buildTree(0);
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const root = arrayToBinaryTree(array);
console.log(root);
// Now 'root' contains the binary tree representation of the array.

// test()