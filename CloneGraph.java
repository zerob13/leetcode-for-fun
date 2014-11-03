import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

public class CloneGraph {
	class UndirectedGraphNode {
		int label;
		List<UndirectedGraphNode> neighbors;

		UndirectedGraphNode(int x) {
			label = x;
			neighbors = new ArrayList<UndirectedGraphNode>();
		}
	};

	public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {
		if (node == null) {
			return null;
		}
		UndirectedGraphNode new_root = new UndirectedGraphNode(node.label);
		new_root.neighbors = new ArrayList<UndirectedGraphNode>();
		for (int j = 0; j < node.neighbors.size(); j++) {
			new_root.neighbors.add(node.neighbors.get(j));
		}
		LinkedList<UndirectedGraphNode> queue = new LinkedList<UndirectedGraphNode>();
		HashMap<Integer, UndirectedGraphNode> hashmap = new HashMap<Integer, UndirectedGraphNode>();
		queue.addLast(new_root);
		hashmap.put(node.label, new_root);
		while (!queue.isEmpty()) {
			UndirectedGraphNode t_node = queue.pollFirst();
			List<UndirectedGraphNode> t_nei = t_node.neighbors;
			for (int i = 0; i < t_nei.size(); i++) {
				UndirectedGraphNode tt = t_nei.get(i);
				UndirectedGraphNode new_nei;
				if (hashmap.get(tt.label) != null) {
					new_nei = hashmap.get(tt.label);
				} else {
					new_nei = new UndirectedGraphNode(tt.label);
					new_nei.neighbors = new ArrayList<UndirectedGraphNode>();
					for (int j = 0; j < tt.neighbors.size(); j++) {
						new_nei.neighbors.add(tt.neighbors.get(j));
					}
				}
				t_node.neighbors.set(i, new_nei);
				if (hashmap.get(tt.label) == null) {
					queue.addLast(new_nei);
					hashmap.put(tt.label, new_nei);
				}
			}
		}
		return new_root;
	}

	public void test() {
		UndirectedGraphNode node = new UndirectedGraphNode(0);
		node.neighbors.add(node);
		node.neighbors.add(node);
		UndirectedGraphNode new_node = cloneGraph(node);
		System.out.println(new_node.label);
	}

	public static void main(String[] args) {
		CloneGraph a = new CloneGraph();
		a.test();

	}

}
