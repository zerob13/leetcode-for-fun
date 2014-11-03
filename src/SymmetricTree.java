import java.util.ArrayList;
import java.util.LinkedList;

public class SymmetricTree {
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

	public boolean isSymmetric(TreeNode root) {
		LinkedList<MyNode> nodes = new LinkedList<MyNode>();
		ArrayList<MyNode> lists = new ArrayList<MyNode>();
		if (root == null) {
			return true;
		}

		nodes.addLast(new MyNode(root, 0));
		while (nodes.size() != 0) {
			MyNode cur = nodes.pollFirst();
			if (cur.val == null) {
				lists.add(cur);
				continue;
			}
			lists.add(cur);
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

		for (int i = 0; i < lists.size();) {
			int k = i;
			for (; k < lists.size()&&lists.get(k).co == lists.get(i).co ; k++) {
			}
			for (int w = k-1, m = i; m < w; m++, w--) {
				if (lists.get(w).val == null && lists.get(m).val == null) {
					continue;
				}
				if (lists.get(w).val == null && lists.get(m).val != null) {
					return false;
				}
				if (lists.get(m).val == null && lists.get(w).val != null) {
					return false;
				}
				if (lists.get(m).val.val != lists.get(w).val.val) {
					return false;
				}
			}
			i=k;
		}
		return true;

	}

	public void test() {
		TreeNode ro = new TreeNode(1);
		ro.left = new TreeNode(2);
		TreeNode l = new TreeNode(2);
		ro.right = l;
		// ro.left.left = new TreeNode(5);
		// ro.left.left.left = new TreeNode(6);
		ro.left.right = new TreeNode(3);
		ro.right.left = new TreeNode(3);
		// ro.right.right.right = new TreeNode(6);
		System.out.println(isSymmetric(ro));
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SymmetricTree a = new SymmetricTree();
		a.test();

	}

}
