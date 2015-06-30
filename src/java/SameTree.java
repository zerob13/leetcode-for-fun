import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

/**
 * 
 */

/**
 * @author zerob13
 *
 */
public class SameTree {
	public class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;

		TreeNode(int x) {
			val = x;
		}
	}

	class MyNode {
		public TreeNode val;
		public int co;

		public MyNode(TreeNode a, int c) {
			val = a;
			co = c;
		}
	}

	public boolean isSameTree(TreeNode p, TreeNode q) {
		if (p == null && q == null) {
			return true;
		}
		if (p == null && q != null) {
			return false;
		}
		if (q == null && p != null) {
			return false;
		}
		List<String> s_p = seriaTree(p);
		List<String> s_q = seriaTree(q);
		if (s_p.size() != s_q.size()) {
			return false;

		}
		for (int i = 0; i < s_p.size(); i++) {
			if (!s_p.get(i).equals(s_q.get(i))) {
				return false;
			}
		}
		return true;

	}

	List<String> seriaTree(TreeNode root) {
		LinkedList<MyNode> nodes = new LinkedList<MyNode>();
		ArrayList<String> lists = new ArrayList<String>();
		if (root == null) {
			return lists;
		}

		nodes.addLast(new MyNode(root, 0));
		while (nodes.size() != 0) {
			MyNode cur = nodes.pollFirst();
			if (cur.val == null) {
				lists.add("#");
				continue;
			}
			lists.add(String.valueOf(cur.val.val));
			if (cur.val.left == null && cur.val.right == null) {
				nodes.addLast(new MyNode(null, cur.co + 1));
				nodes.addLast(new MyNode(null, cur.co + 1));
				continue;
			}
			if (cur.val.left != null) {
				nodes.addLast(new MyNode(cur.val.left, cur.co + 1));
				if (cur.val.right == null) {
					nodes.addLast(new MyNode(null, cur.co + 1));
				}
			}
			if (cur.val.right != null) {
				if (cur.val.left == null) {
					nodes.addLast(new MyNode(null, cur.co + 1));
				}
				nodes.addLast(new MyNode(cur.val.right, cur.co + 1));
			}
		}

		return lists;
	}

	public void test() {
		TreeNode ro = new TreeNode(0);
		TreeNode rp = new TreeNode(0);
		System.out.print(isSameTree(ro, rp));
		// ro.left = new TreeNode(2);
		// TreeNode l = new TreeNode(2);
		// ro.right = l;
		// ro.left.left = new TreeNode(5);
		// ro.left.left.left = new TreeNode(6);
		// ro.left.right = new TreeNode(3);
		// ro.right.left = new TreeNode(3);
		// ro.right.right.right = new TreeNode(6);
		// List<List<Integer>> list = zigzagLevelOrder(ro);
		// System.out.println(list.size());

	}

	public static void main(String[] args) {
		SameTree a = new SameTree();
		a.test();
	}
}
