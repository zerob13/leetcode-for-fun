import java.util.LinkedList;


public class SimplifyPath {
	
    public String simplifyPath(String path) {
        String[] ans=path.split("/");
        LinkedList<String> op=new LinkedList<String>();
        for(int i=0;i<ans.length;i++){
        	if(ans[i].equals("")||ans[i].equals(".")){
        		continue;
        	}
        	if(ans[i].equals("..")){
        		if(op.size()!=0){
        			op.pollLast();
        		}
        		continue;
        	}
        	op.add("/"+ans[i]);
        }
        StringBuffer str=new StringBuffer();
        while(!op.isEmpty()){
        	str.append(op.pollFirst());
        }
        if(str.length()==0){
        	str.append("/");
        }
    	return str.toString();
    }
    
    

	public static void main(String[] args) {
		SimplifyPath test=new SimplifyPath();
		test.simplifyPath("/a/./b/../../c/");
	}

}
