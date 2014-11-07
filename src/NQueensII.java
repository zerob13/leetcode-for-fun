import java.util.Arrays;

public class NQueensII {

	int count;

	void dfs(int co, int N, boolean[] hs, boolean[] hl, boolean[] hr) {
		if (co == N) {
			count++;
			return;
		}
		for (int i = 0; i < N; i++) {
			if (!hs[i] && !hl[i + co] && !hr[co - i + N]) {
				hs[i] = true;
				hl[i + co] = true;
				hr[co - i + N] = true;
				dfs(co + 1, N, hs, hl, hr);
				hs[i] = false;
				hl[i + co] = false;
				hr[co - i + N] = false;
			}
		}
	}

	public int totalNQueens(int n) {
		boolean[] hs = new boolean[n];
		boolean[] hl = new boolean[2 * n + 1];
		boolean[] hr = new boolean[2 * n + 1];
		count = 0;
		Arrays.fill(hs, false);
		Arrays.fill(hl, false);
		Arrays.fill(hr, false);
		dfs(0, n, hs, hl, hr);
		return count;

	}

	public void test() {
		int ans = totalNQueens(8);
		System.out.println(ans);
	}

	public static void main(String[] args) {
		NQueensII aNQueens = new NQueensII();
		aNQueens.test();
	}
}
