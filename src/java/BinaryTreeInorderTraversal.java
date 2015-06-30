import java.util.ArrayList;
import java.util.List;

public class BinaryTreeInorderTraversal {
	public class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;

		TreeNode(int x) {
			val = x;
		}
	}

	public List<Integer> inorderTraversal(TreeNode root) {

		ArrayList<Integer> ans = new ArrayList<Integer>();
		if (root == null) {
			return ans;
		}

		TreeNode now = root;
		TreeNode last = null;
		while (now != null) {
			if (now.left == null) {
				ans.add(now.val);
				now = now.right;
			} else {
				last = now.left;
				while (last.right != null && last.right != now) {
					last = last.right;
				}
				if (last.right == null) {
					last.right = now;
					now = now.left;

				} else {
					last.right = null;
					ans.add(now.val);
					now = now.right;
				}
			}
		}
		return ans;

	}

	void test() {
		TreeNode root = new TreeNode(1);
		root.right = new TreeNode(2);
		root.right.left = new TreeNode(3);
		List<Integer> ans = inorderTraversal(root);
		for (int i : ans) {
			System.out.println(i);
		}
	}

	public static void main(String[] args) {

		BinaryTreeInorderTraversal a = new BinaryTreeInorderTraversal();
		a.test();
	}

}
