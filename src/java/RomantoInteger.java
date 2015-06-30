
/**
 * 
 */

/**
 * @author zerob13
 *
 */
public class RomantoInteger {

	int exChange(char a) {
		switch (a) {
		case 'i':
			return 1;
		case 'v':
			return 5;
		case 'x':
			return 10;
		case 'l':
			return 50;
		case 'c':
			return 100;
		case 'd':
			return 500;
		case 'm':
			return 1000;
		default:
			return 0;
		}
	}

	public int romanToInt(String s) {
		String ans = s.toLowerCase();
		if (s == null || s.equals("")) {
			return 0;
		}
		int re, pre;
		re = pre = exChange(ans.charAt(0));
		for (int i = 1; i < ans.length(); i++) {

			int na = exChange(ans.charAt(i));
			if (na <= pre) {
				re += na;
			} else {
				re = re - 2 * pre + na;
			}
			pre = na;

		}
		return re;

	}

	void test() {
		System.out.println(romanToInt("DCXXI"));
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		RomantoInteger aInteger = new RomantoInteger();
		aInteger.test();

	}

}
