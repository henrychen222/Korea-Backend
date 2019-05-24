//
// import React from 'react';
//
// export class ParentZipForm extends React.Component{
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             zipcode: '',
//         };
//
//         this.onFormSubmit = this.onFormSubmit.bind(this);
//
//         this.submitZipCode = this.submitZipCode.bind(this);
//     }
//
//     onFormSubmit(zipcode) {
//         this.setState({ zipcode });
//     }
//
//     submitZipCode(e) {
//         e.preventDefault();
//
//         const { zipcode } = this.state;
//         const { onSubmit } = this.props;
//
//         onSubmit(zipcode);
//     }
//
//
//     render() {
//
//         return(
//             <ZipForm onSubmit={this.onFormSubmit} />
//             <form onSubmit={this.submitZipCode}>
//         );
//     }
//
//
// }
