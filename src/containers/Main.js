import React from 'react';
import {connect} from 'react-redux'; 
import Main from '../components/main';

const mapStateToProps = ({paginaActual}) => ({
  paginaActual
});

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (pagina) => {
    dispatch({
      type: 'NAVIGATE_TO',
      pagina
    })
  } 
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
