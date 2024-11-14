/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let temp = new ListNode();
    let answer = temp;
    let current = head.next;
    let sum = 0;
    
    while (current) {
        if (current.val !== 0) {
            sum = sum + current.val;
        } else {
            temp.next = new ListNode(sum);
            sum = 0;
            temp = temp.next;
        }
        current = current.next;
    }
    
    return answer.next;
};