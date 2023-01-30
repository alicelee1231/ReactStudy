import React, { useState } from "react";

//class 식 component
// class ConfirmButton extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isConfirmed : false,
//         };
//     }

//     handleConfirm = () => {
//         this.setState((prevState) => ({
//             isConfirmed: !prevState.isConfirmed,
//         }));
//     }

//     render(){
//         return (
//             <button
//                 onClick={this.handleConfirm}
//                 disabled = {this.state.isConfirmed}
//             >
//                 {this.state.isConfirmed ? "확인됨" : "확인허가"}
//             </button>
//         )
//     }
// }

//함수식 component
function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled = {isConfirmed}>
            {isConfirmed ? "확인됨" : "확인허가"}
        </button>
    );
}

export default ConfirmButton;