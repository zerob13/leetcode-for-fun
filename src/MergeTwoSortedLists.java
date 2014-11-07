public class MergeTwoSortedLists {
	public class ListNode {
		int val;
		ListNode next;

		ListNode(int x) {
			val = x;
			next = null;
		}
	}

	public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
		if (l1 == null) {
			return l2;
		}
		if (l2 == null) {
			return l1;
		}
		ListNode root = l1.val > l2.val ? l2 : l1;
		ListNode now = root;
		if (l1.val > l2.val) {
			l2 = l2.next;
		} else {
			l1 = l1.next;
		}
		while (l1 != null && l2 != null) {
			now.next = l1.val > l2.val ? l2 : l1;
			now = now.next;
			if (l1.val > l2.val) {
				l2 = l2.next;
			} else {
				l1 = l1.next;
			}
		}
		while (l1 != null) {
			now.next = l1;
			now=now.next;
			l1 = l1.next;
		}
		while (l2 != null) {
			now.next = l2;
			now=now.next;
			l2 = l2.next;
		}
		return root;

	}

	void test() {
		ListNode l1 = new ListNode(2);
		ListNode l2 = new ListNode(1);
		mergeTwoLists(l1, l2);
	}

	public static void main(String[] args) {
		MergeTwoSortedLists aLists = new MergeTwoSortedLists();
		aLists.test();

	}

}
