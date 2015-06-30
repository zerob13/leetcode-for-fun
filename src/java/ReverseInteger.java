
public class ReverseInteger {

	 public int reverse(int x) {
			boolean isN=x>=0?false:true;
			if(isN){
				x=-x;
			}
			StringBuffer a=new StringBuffer(String.valueOf(x));
			a=a.reverse();
			int ans=Integer.valueOf(a.toString());
			if(isN){
				ans=-ans;
			}
			return ans;
		}
	public static void main(String[] args) {

	}

}
