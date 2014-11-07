
public class IntegertoRoman {

	public String intToRoman(int num) {
		String[][] roman = {
				{ "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX" },
				{ "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" },
				{ "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM" },
				{ "", "M", "MM", "MMM" } };
		String ans = new String();

		for (int j = 0, i = 10000; j < 4; ++j, i /= 10) {
			int n = (num % i) / (i / 10);
			ans += roman[3 - j][n];
		}

		return ans;
	}

	public static void main(String[] args) {

	}

}
