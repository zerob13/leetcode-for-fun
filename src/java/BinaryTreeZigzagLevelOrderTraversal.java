import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class BinaryTreeZigzagLevelOrderTraversal {
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

	public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
		LinkedList<MyNode> nodes = new LinkedList<MyNode>();
		ArrayList<MyNode> lists = new ArrayList<MyNode>();
		List<List<Integer>> list = new ArrayList<List<Integer>>();
		if (root == null) {
			return list;
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
			int cur_co = lists.get(i).co;
			LinkedList<Integer> temp = new LinkedList<Integer>();
			int j = i;

			for (; j < lists.size(); j++) {
				if (lists.get(j).co != cur_co) {
					break;
				}
				if (lists.get(j).val != null) {
					if (lists.get(i).co % 2 == 0) {
						temp.add(lists.get(j).val.val);
					} else {
						temp.addFirst(lists.get(j).val.val);
					}
				}
			}

			if (temp.size() != 0) {
				list.add(temp);
			}
			if (j >= lists.size()) {
				break;
			}
			i = j;
		}
		return list;
	}

	public void test() {
		TreeNode ro = new TreeNode(1);
		// ro.left = new TreeNode(2);
		// TreeNode l = new TreeNode(2);
		// ro.right = l;
		// ro.left.left = new TreeNode(5);
		// ro.left.left.left = new TreeNode(6);
		// ro.left.right = new TreeNode(3);
		// ro.right.left = new TreeNode(3);
		// ro.right.right.right = new TreeNode(6);
		List<List<Integer>> list = zigzagLevelOrder(ro);
		System.out.println(list.size());

	}

	public static void main(String[] args) {
		BinaryTreeZigzagLevelOrderTraversal a = new BinaryTreeZigzagLevelOrderTraversal();
		a.test();
	}
}
