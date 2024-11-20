
function QueueComponent() {


    // Nov 20, 2024, Queue: Number of Recent Calls
    class RecentCounter {
        constructor() {
            this.requests = [];
        }
        
        ping(t) {
            this.requests.push(t);
            while(this.requests[0] < t-3000) {
                this.requests.shift();
            }
            return this.requests.length;
        }
    }

        
    let recentCounter = new RecentCounter();
    console.log(recentCounter.ping(1)); 
    console.log(recentCounter.ping(100));  
    console.log(recentCounter.ping(3001)); 
    console.log(recentCounter.ping(3002));  
    console.log(recentCounter.ping(3005));  
    console.log(recentCounter.ping(3006));  
    

    
  return (

    
    <div>
      
    </div>
  )
}

export default QueueComponent
