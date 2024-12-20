/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    traverse(root.left, root.right, 1);
    
    return root;
};

function traverse(firstNode, secondNode, depth) {
    if (!firstNode) return;
    
    if (depth % 2 === 1) {
        swap(firstNode, secondNode);
    }
    
    traverse(firstNode.left, secondNode.right, depth + 1);
    traverse(firstNode.right, secondNode.left, depth + 1);
}

function swap(firstNode, secondNode) {
    let temp = firstNode.val;
    firstNode.val = secondNode.val;
    secondNode.val = temp;
}