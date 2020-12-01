class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function insertionSortList(head: ListNode | null): ListNode | null {
    let fwdCurr: ListNode = head;
    let backCurr: ListNode = head;
    while(fwdCurr = fwdCurr.next) {
        if(fwdCurr.val < backCurr.val) {
            backCurr.next = fwdCurr.next;
            fwdCurr.next = backCurr;
            fwdCurr = backCurr;
        }
    }
    
    return head;
};

// 4->2->1->3
let input = new ListNode(4, 
    new ListNode(2,
        new ListNode(1, 
            new ListNode(3)))
    );
console.log(insertionSortList(input)) // 1->2->3->4

// Input: -1->5->3->4->0
input = new ListNode(-1, 
    new ListNode(5, 
        new ListNode(3, 
            new ListNode(4, 
                new ListNode(0)))))
console.log(insertionSortList(input)) // -1->0->3->4->5
