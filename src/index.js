 //console.log('test start comint 2 ')

 //nn-002 importo los elemoetos de react
 import React, { Component } from 'react';
 import ReactDom from 'react-dom';

 class MyApp extends Component {
    render() {
        return ( 
          <div>
                <h1>react app</h1>
            </div>
         )
     }
 }
ReactDom.render(<MyApp/>, document.getElementById('my-app'))
