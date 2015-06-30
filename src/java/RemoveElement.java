import java.util.ArrayList;

public class RemoveElement {
	public int removeElement(int[] A, int elem) {
		int n = A.length;
		ArrayList<Integer> ans = new ArrayList<Integer>();
		for (int i = 0; i < n; i++) {
			if (A[i] != elem) {
				ans.add(A[i]);
			}
		}
		for (int i = 0; i < ans.size(); i++) {
			A[i] = ans.get(i);
		}

		return ans.size();
	}

	void test() {
		int[] A = { 4,5 };
		System.out.println(removeElement(A, 4));
	}

	public static void main(String[] args) {
		RemoveElement aElement = new RemoveElement();
		aElement.test();
	}

}
