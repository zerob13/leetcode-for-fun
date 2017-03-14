/**
 * @param {number[][]} grid
 * @return {number}
 */
const dir=[
       [-1,0],
       [1,0],
       [0,1],
       [0,-1]
       ];
 function makeNode(val,x,y){
     return {
         x:x,
         y:y,
         val:val
     };
 }
 
function countEdge(x,y,grid){
      let height=grid.length;
   let width = grid[0].length;
    let co =0;
     for(let i =0;i<4;i++){
          let nx=x+dir[i][0];
       let ny=y+dir[i][1];
           if(nx>=0&&ny>=0&&nx<height&&ny<width&&grid[nx][ny]==0){
               co++;
           }
           if(nx<0||ny<0||nx>=height||ny>=width){
               co++;
           }
     }
     return co;
}
var islandPerimeter = function(grid) {
   let queue =[];
   let hash=[];
   queue.push(makeNode(grid[0][0],0,0));
   let height=grid.length;
   let width = grid[0].length;
   for(let i=0;i<height;i++){
       hash[i]=[];
       for(let j =0;j<width;j++){
           hash[i][j]=0;
       }
   }
  hash[0][0]=1;
   let lenCount = 0;
   while(queue.length>0){
     let it = queue.shift();
       if(it.val==1){
          lenCount+=countEdge(it.x,it.y,grid);
        }
      for(let i =0 ;i<4;i++){
          let nx=it.x+dir[i][0];
        let ny=it.y+dir[i][1];
          if(nx>=0&&ny>=0&&nx<height&&ny<width&&hash[nx][ny]==0){
            let nit= makeNode(grid[nx][ny],nx,ny);
              hash[nx][ny]=1;
              queue.push(nit);
          }
      }
   }
   return lenCount;
};

export default islandPerimeter;
