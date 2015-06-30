public class LinkedListCycle {
	class ListNode {
		int val;
		ListNode next;

		ListNode(int x) {
			val = x;
			next = null;
		}
	}

	public boolean hasCycle(ListNode head) {

		ListNode one = head;
		ListNode two = head;
		if (head == null || head.next == null) {
			return false;
		}
		while (two.next != null && two.next.next != null) {
			one = one.next;
			two = two.next.next;
			if (one.next == two.next) {
				return true;
			}
		}
		return false;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
