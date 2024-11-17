import "./StackComponent.scss";

function StackComponent() {

    // Nov 17, 2024, Stack: Asteroids collision (Medium)

    const asteroidCollision = function (asteroids) {
        let res = [];
        let isEqual = false;
    
        for (let i = 0; i < asteroids.length; i++) {
            if (res.length === 0) {
                res.push(asteroids[i])
            } else {
                if (res[res.length - 1] > 0 && asteroids[i] > 0
                    || res[res.length - 1] < 0 && asteroids[i] < 0
                    || res[res.length - 1] < 0 && asteroids[i] > 0
                ) {
                    res.push(asteroids[i]);
                } else {
                    if ((res[res.length - 1] + asteroids[i]) < 0) {
                        res.pop();
                        for (let j = res.length - 1; j >= 0; j--) {
                            if (res[j] > 0 && asteroids[i] > 0
                                || res[j] < 0 && asteroids[i] < 0
                                || res[j] < 0 && asteroids[i] > 0
                            ) {
                                res.push(asteroids[i]);
                                break;
                            } else {
                                if ((res[j] + asteroids[i]) < 0) {
                                    res.pop();
                                } else if ((res[j] + asteroids[i]) === 0) {
                                    isEqual = true;
                                    res.pop();
                                    break;
                                } else {
                                    break;
                                }
    
                            }
    
    
                        }
    
                        if (res.length === 0) {
                            if (!isEqual) {
                                res.push(asteroids[i]);
                            }
                            isEqual = false;
                            continue;
                        }
    
    
                    }
    
                    else if ((res[res.length - 1] + asteroids[i]) === 0) {
                        res.pop();
    
                    }
                }
            };
    
    
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
