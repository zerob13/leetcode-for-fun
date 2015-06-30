public class ClimbingStairs {
	public int climbStairs(int n) {
		if (n == 0) {
			return 0;
		}
		if (n == 1) {
			return 1;
		}
		if (n == 2) {
			return 2;
		}
		if (n == 3) {
			return 2 + 1;
		}
		if (n > 3) {
			int n2 = 2, n1 = 3;
			for (int i = 4; i <= n; i++) {
				int ans = n2 + n1;
				n2 = n1;
				n1 = ans;
			}
			return n1;
		}
		return 0;
	}

	public static void main(String[] args) {

	}

}
