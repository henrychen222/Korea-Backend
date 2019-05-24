// import React from 'react';
//
//
// export default class DropDownExample extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             showMenu: false,
//         }
//         this.showMenu = this.showMenu.bind(this);
//     }
//
//     showMenu(event) {
//         event.preventDefault();
//
//         this.setState({
//             showMenu: true,
//         });
//     }
//
//     render() {
//         return (
//             <div className="DropDownExample">
//
//                 <button onClick={this.showMenu}>
//                     Show menu
//                 </button>
//                 {
//                     this.state.showMenu
//                         ? (
//                             <div className="menu">
//                                 <option value="volvo">Volvo</option>
//                                 <option value="saab">Saab</option>
//                                 <option value="mercedes">Mercedes</option>
//                                 <option value="audi">Audi</option>
//                             </div>
//                         )
//                         : (
//                             null
//                         )
//                 }
//             </div>
//         );
//     }
// }
