import java.util.ArrayList;
import java.util.List;

public class BinaryTreePreorderTraversal {
	public class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;

		TreeNode(int x) {
			val = x;
		}
	}

	void dfs(TreeNode now, List<Integer> ans) {
		ans.add(now.val);
		if (now.left != null) {
			dfs(now.left, ans);
		}
		if (now.right != null) {
			dfs(now.right, ans);
		}
	}

	public List<Integer> preorderTraversal(TreeNode root) {

		ArrayList<Integer> ans = new ArrayList<Integer>();
		if (root == null) {
			return ans;
		}
		dfs(root, ans);
		return ans;

	}

	void test() {
		TreeNode root = new TreeNode(1);
		root.right = new TreeNode(2);
		root.right.left = new TreeNode(3);
		List<Integer> ans = preorderTraversal(root);
		for (int i : ans) {
			System.out.println(i);
		}
	}

	public static void main(String[] args) {

		BinaryTreePreorderTraversal a = new BinaryTreePreorderTraversal();
		a.test();
	}

}
