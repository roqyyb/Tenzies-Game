
export default function Die(props){
    const value = props.value;

    switch (value) {

        case 1:
          return (
            <div className="die first-face">
                <span className="dot"></span>
            </div>
          )

        
        case 2:
          return(
            <div className="die second-face">
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
          )

          
        case 3:
           return(
            <div className="die third-face">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
           )

          
        case 4:
          return(
            <div className="die fourth-face">
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
          )

          
        case 5:
          return(
            <div className="die fifth-face">
    
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                
                <div className="column">
                    <span className="dot"></span>
                </div>
                
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
    
            </div>
          )

          
        case 6:
          return(
            <div className="die sixth-face">
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                        <span className="dot"></span>
                </div>
    
            </div>
          )
          
      }
}