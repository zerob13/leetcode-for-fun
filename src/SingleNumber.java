import java.util.HashMap;

public class SingleNumber {

	public int singleNumber(int[] A) {
		HashMap<Integer, Integer> hashMap = new HashMap<Integer, Integer>();
		for (int i = 0; i < A.length; i++) {
			if (hashMap.containsKey(A[i])) {
				hashMap.put(A[i], 2);
			} else {
				hashMap.put(A[i], 1);
			}
		}
		for (int i = 0; i < A.length; i++) {
			if (hashMap.get(A[i]) == 1) {
				return A[i];
			}
		}
		return A[0];
	}

	public static void main(String[] args) {

	}

}
