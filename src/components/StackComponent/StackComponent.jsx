import "./StackComponent.scss";

function StackComponent() {

    // Nov 17, 2024, Stack: Asteroids collision (Medium)

    const asteroidCollision = function (asteroids) {
        let res = [];
    
    for ( let i = 0; i < asteroids.length; i++) {

        while(res.length > 0 && res[res.length - 1] > 0 && asteroids[i] < 0) {
            let top = res[res.length -1];
            
            if(top + asteroids[i] > 0) {
                asteroids[i] = 0;
                break;
            }
            if(top + asteroids[i] == 0) {
                res.pop();
                asteroids[i] = 0;
                break;
            }
            if(top + asteroids[i] < 0) {
                res.pop();
            }
        }
        
        if(asteroids[i] !== 0) {
            res.push(asteroids[i]);
        }

    }
    
    return res;
    };

    console.log(asteroidCollision([-2, 1, -2, -2]));
  return (
    
    <div>
      
    </div>
  )
}

export default StackComponent
