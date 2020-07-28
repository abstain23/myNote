class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function createList(arr) {
    let head = new Node(arr[0])
    let temp = head
    for (let i = 1; i < arr.length; i++) {
        temp.next = new Node(arr[i])
        temp = temp.next
    }
    return head
}

function reverseList(list) {
    let arr = []
    let head = list
    let temp = head
    console.log(temp)
    while(temp) {
        arr.push(temp.value)
        temp = temp.next
    }
    console.log(arr)
    temp = head

    while(temp) {
        temp.value = arr.pop()
        temp = temp.next
    }

    return head
}