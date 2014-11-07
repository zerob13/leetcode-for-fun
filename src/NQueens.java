import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class NQueens {

	void dfs(List<String[]> ans, int co, int N, char[][] mmap, boolean[] hs,
			boolean[] hl, boolean[] hr) {
		if (co == N) {
			String[] temp = new String[N];
			for (int i = 0; i < N; i++) {
				temp[i] = new String(mmap[i]);
			}
			ans.add(temp);
			return;
		}
		for (int i = 0; i < N; i++) {
			if (!hs[i] && !hl[i + co] && !hr[co - i + N]) {
				hs[i] = true;
				mmap[co][i] = 'Q';

				hl[i + co] = true;

				hr[co - i + N] = true;

				dfs(ans, co + 1, N, mmap, hs, hl, hr);

				hs[i] = false;

				mmap[co][i] = '.';

				hl[i + co] = false;

				hr[co - i + N] = false;
			}
		}
	}

	public List<String[]> solveNQueens(int n) {
		ArrayList<String[]> ans = new ArrayList<String[]>();
		char[][] mmap = new char[n][n];
		boolean[] hs = new boolean[n];
		boolean[] hl = new boolean[2 * n + 1];
		boolean[] hr = new boolean[2 * n + 1];
		for(int i=0;i<n;i++){
			mmap[i]=new char[n];
			Arrays.fill(mmap[i], '.');
		}
		
		Arrays.fill(hs, false);
		Arrays.fill(hl, false);
		Arrays.fill(hr, false);
		dfs(ans, 0, n, mmap, hs, hl, hr);
		return ans;

	}

	public void test() {
		List<String[]> ans = solveNQueens(8);
		for (String[] s : ans) {
			for (String ss : s) {
				System.out.println(ss);
			}
		}
	}

	public static void main(String[] args) {
		NQueens aNQueens = new NQueens();
		aNQueens.test();
	}

}
