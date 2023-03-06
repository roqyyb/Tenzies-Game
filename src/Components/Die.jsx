
export default function Die(props){
    const value = props.value;
    const styles = {
        backgroundColor: props.isHeld? '#59E391': '#fff',
        borderColor: props.isHeld ? '#d1e359': '#2b283a'
    }

    switch (value) {

        case 1:
          return (
            <div onClick={props.holdDice} style={styles} className="die first-face">
                <span className="dot"></span>
            </div>
          )

        
        case 2:
          return(
            <div onClick={props.holdDice} style={styles} className="die second-face">
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
          )

          
        case 3:
           return(
            <div onClick={props.holdDice} style={styles} className="die third-face">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
           )

          
        case 4:
          return(
            <div onClick={props.holdDice} style={styles} className="die fourth-face">
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
            <div onClick={props.holdDice} style={styles} className="die fifth-face">
    
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
            <div onClick={props.holdDice} style={styles} className="die sixth-face">
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