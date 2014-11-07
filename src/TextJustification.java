import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class TextJustification {

	public List<String> fullJustify(String[] words, int L) {
		ArrayList<String> ans = new ArrayList<String>();
		int current;
		current = 0;
		while (current < words.length) {
			int total = words[current].length();
			int end = current;
			for (int i = current + 1; i < words.length && total <= L; i++) {
				if (total + words[i].length() + 1 <= L) {
					total += +words[i].length() + 1;
					end = i;
				} else {
					break;
				}
			}
			int len = 0;
			for (int i = current; i <= end; i++) {
				len += words[i].length();
			}
			int ken = L - len;
			int even;
			if (end > current) {
				even = ken / (end - current);
			} else {
				even = ken;
			}
			int[] spaces;
			if (end > current) {
				spaces = new int[end - current];
				Arrays.fill(spaces, even);
				int last = ken - even * (end - current);
				if (last > 0) {
					int co = 0;
					while (last != 0) {
						if (co >= spaces.length) {
							co = 0;
						}
						last--;
						spaces[co]++;
						co++;
					}
				}
			} else {
				spaces = new int[1];
				Arrays.fill(spaces, even);
			}

			StringBuffer temp = new StringBuffer();
			temp.append(words[current]);
			if (end > current) {
				for (int i = current + 1,w=0; i <= end; i++,w++) {

					if (end != words.length - 1) {
						for (int j = 0; j < spaces[w]; j++) {
							temp.append(" ");
						}
					} else {
						temp.append(" ");
					}
					temp.append(words[i]);
				}
				if (end == words.length-1) {
					for (int j = 0; j < ken - (end - current); j++) {
						temp.append(" ");
					}
				}
			} else {
				for (int j = 0; j < spaces[0]; j++) {
					temp.append(" ");
				}
			}

			ans.add(temp.toString());
			current = end + 1;
		}
		return ans;
	}

	void test() {
		String[] words = { "Here","is","an","example","of","text","justification." };
		List<String> a = fullJustify(words, 16);
		System.out.println(a);
	}

	public static void main(String[] args) {
		(new TextJustification()).test();
	}

}
