class TreeNode {
    data;
    left = null;
    right = null;

    constructor(data) {
        this.data = data;
    }
}

class Tree {
    root;

    inOrderTraversal(node) {
        if(node!=null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    preOrderTraversal(node) {
        if(node!=null) {
            console.log(node.data);
            this.inOrder(node.left);
            this.inOrder(node.right);
        }
    }

    postOrderTraversal(node) {
        if(node!=null) {
            this.inOrder(node.left);
            this.inOrder(node.right);
            console.log(node.data);
        }
    }

    prettyPrintTree() {

    }

}


var tree = new Tree();

tree.root = new TreeNode(10);

tree.root.left = new TreeNode(4);
tree.root.right = new TreeNode(18);


tree.root.left.left = new TreeNode(1);
tree.root.left.right = new TreeNode(5);

tree.inOrderTraversal(tree.root);

