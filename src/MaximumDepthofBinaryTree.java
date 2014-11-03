import java.util.ArrayList;
import java.util.LinkedList;

/**
 * 
 */

/**
 * @author zerob13
 *
 */
public class MaximumDepthofBinaryTree {
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

	public int maxDepth(TreeNode root) {
		int max = 0;
		LinkedList<MyNode> nodes = new LinkedList<MyNode>();
		ArrayList<String> lists = new ArrayList<String>();
		if (root == null) {
			return 0;
		}

		nodes.addLast(new MyNode(root, 1));
		while (nodes.size() != 0) {
			MyNode cur = nodes.pollFirst();
			if (cur.val == null) {
				continue;
			}
			if(cur.co>max){
				max=cur.co;
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

		return max;
	}

	public void test() {
		TreeNode ro = new TreeNode(0);
		System.out.println(maxDepth(ro));

	}

	public static void main(String[] args) {
		MaximumDepthofBinaryTree a = new MaximumDepthofBinaryTree();
		a.test();
	}
}
