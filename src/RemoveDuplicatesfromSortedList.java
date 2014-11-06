public class RemoveDuplicatesfromSortedList {

	public class ListNode {
		int val;
		ListNode next;

		ListNode(int x) {
			val = x;
			next = null;
		}
	}

	public ListNode deleteDuplicates(ListNode head) {
		if (head == null) {
			return head;
		}
		ListNode now = head;
		while (now.next != null) {
			if (now.next.val == now.val) {
				now.next = now.next.next;
			} else {
				now = now.next;
			}
		}
		return head;

	}

	public static void main(String[] args) {

	}

}
