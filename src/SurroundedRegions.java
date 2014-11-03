import java.util.LinkedList;

/**
 * 
 */

/**
 * @author zerob13
 *
 */
public class SurroundedRegions {

	class MyNode {
		int x;
		int y;
	}

	int[][] dir = { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };

	void markit(char[][] board, MyNode start, boolean[][] hash, int x_max,
			int y_max) {
		LinkedList<MyNode> nodes = new LinkedList<MyNode>();
		LinkedList<MyNode> ans = new LinkedList<MyNode>();

		nodes.add(start);
		boolean isOk = true;
		while (!nodes.isEmpty()) {
			MyNode tNode = nodes.pollFirst();
			if (tNode.x == 0 || tNode.y == 0 || tNode.x == x_max - 1
					|| tNode.y == y_max - 1) {
				isOk = false;
				// break;
			}

			ans.add(tNode);
			for (int i = 0; i < 4; i++) {
				int next_x = tNode.x + dir[i][0];
				if (next_x < 0 || next_x >= x_max) {
					continue;
				}
				int next_y = tNode.y + dir[i][1];
				if (next_y < 0 || next_y >= y_max) {
					continue;
				}
				if (board[next_x][next_y] != 'O' || hash[next_x][next_y]) {
					continue;
				}
				MyNode aNode = new MyNode();
				aNode.x = next_x;
				aNode.y = next_y;
				hash[aNode.x][aNode.y] = true;
				nodes.add(aNode);
			}

		}
		if (isOk) {
			while (!ans.isEmpty()) {
				MyNode tNode = ans.pollFirst();
				board[tNode.x][tNode.y] = 'X';
			}
		}
	}

	public void solve(char[][] board) {
		int x_max = board.length;
		if (x_max == 0) {
			return;
		}
		int y_max = board[0].length;
		boolean[][] hash = new boolean[x_max][y_max];
		for (int i = 0; i < x_max; i++) {
			for (int j = 0; j < y_max; j++) {
				hash[i][j] = false;
			}
		}
		for (int i = 0; i < board.length; i++) {
			for (int j = 0; j < board[i].length; j++) {
				if (board[i][j] == 'O' && !hash[i][j]) {
					MyNode t = new MyNode();
					t.x = i;
					t.y = j;
					markit(board, t, hash, x_max, y_max);
				}
			}
		}

	}

	void test() {
		String[] inputStrings = { "XOOOOOOOOOOOOOOOOOOO",
				"OXOOOOXOOOOOOOOOOOXX", "OOOOOOOOXOOOOOOOOOOX",
				"OOXOOOOOOOOOOOOOOOXO", "OOOOOXOOOOXOOOOOXOOX",
				"XOOOXOOOOOXOXOXOXOXO", "OOOOXOOXOOOOOXOOXOOO",
				"XOOOXXXOXOOOOXXOXOOO", "OOOOOXXXXOOOOXOOXOOO",
				"XOOOOXOOOOOOXXOOXOOX", "OOOOOOOOOOXOOXOOOXOX",
				"OOOOXOXOOXXOOOOOXOOO", "XXOOOOOXOOOOOOOOOOOO",
				"OXOXOOOXOXOOOXOXOXOO", "OOXOOOOOOOXOOOOOXOXO",
				"XXOOOOOOOOXOXXOOOXOO", "OOXOOOOOOOXOOXOXOXOO",
				"OOOXOOOOOXXXOOXOOOXO", "OOOOOOOOOOOOOOOOOOOO",
				"XOOOOXOOOXXOOXOXOXOO" };
		char[][] board;
		board = new char[inputStrings.length][inputStrings[0].length()];
		for (int i = 0; i < inputStrings.length; i++) {
			for (int j = 0; j < inputStrings[i].length(); j++) {
				board[i][j] = inputStrings[i].charAt(j);
			}
		}

		// char[][] board = { { 'X', 'X', 'X', 'X' }, { 'X', 'O', 'O', 'X' },
		// { 'X', 'X', 'O', 'X' }, { 'X', 'O', 'X', 'X' } };
		// char[][] board = { { 'O', 'O', 'O' }, { 'O', 'O', 'O' },
		// { 'O', 'O', 'O' } };
		solve(board);
		for (int i = 0; i < board.length; i++) {
			for (int j = 0; j < board[i].length; j++) {
				System.out.print(board[i][j]);
			}
			System.out.print("\n");
		}
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		SurroundedRegions aRegions = new SurroundedRegions();
		aRegions.test();
	}

}
