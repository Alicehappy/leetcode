import "./LinkedListComponent.scss";

function LinkedListComponent() {
  var reverseList = function (head) {
    let prev = null;
    if (head == null || head.next == null) {
      return head;
    }

    while (head !== null) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }

    return prev;
  };

  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  let head = new ListNode(1);
  head.next = new ListNode(2);
  head.next = new ListNode(3);
  head.next = new ListNode(4);
  head.next = new ListNode(5);

  console.log(reverseList(head));

  return <div></div>;
}

export default LinkedListComponent;
