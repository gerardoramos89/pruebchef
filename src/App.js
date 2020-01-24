import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paginacion from './paginacion.js';
import Card from './card.js';
import Pagina from './pagina.js';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        disabled: 'disabled',
        secondary: 'secondary',
        primary:  'primary',
        superheroes: [],
        likes: [],
        array: [],
        page: 1,
        isloading: true,
        checkcard: false,
        checkHeroe: 0
    };
  }

  componentDidMount() {

    if(localStorage.getItem("superheroes") === null){
    }else{
      var data = JSON.parse(localStorage.getItem("superheroes"));
      this.setState({ superheroes: data })
      this.setState({ isloading: false })
    }
    
    fetch('http://35.162.46.100/superheroes/')
    .then(res => res.json())
    .then((data) => {

      this.setState({ superheroes: data })
      localStorage.setItem("superheroes", JSON.stringify(data));

      console.log(this.state.superheroes)
      var max = Math.round(this.state.superheroes.length / 9);
      var paso;
      for (paso = 0; paso < max+1; paso++) {
        this.state.array.push(paso+1);
        console.log(this.state.array)
      };
      var paso2;
      for (paso2 = 0; paso2 < this.state.superheroes.length; paso2++) {
        this.state.likes.push(0);
      };

      if(localStorage.getItem("likes") === null){
        localStorage.setItem("likes", JSON.stringify(this.state.likes));
      }else{

      }

      this.setState({ isloading: false })

    })
    .catch(console.log)
  }

  paginateValue = (page) => {
    this.setState({ page: page });
    console.log(page); // access this value from parent component 
    console.log(this.state.superheroes.length);
  }

  paginatePrevValue = (page) => {
      this.setState({ page: page });
      console.log(page)  // access this value from parent component
  }
  paginateNxtValue = (page) => {
        this.setState({ page: page });
        console.log(page)  // access this value from parent component
      }
  
  handleSubmitlike=(key)=>{
    var likes = JSON.parse(localStorage.getItem("likes"));;
    likes[key] = 1;
    localStorage.setItem("likes", JSON.stringify(likes));
    this.setState({likes: likes});
    console.log(this.state.likes);
  }
  handleSubmitNotlike=(key)=>{
    var likes2 = JSON.parse(localStorage.getItem("likes"));;
    likes2[key] = 2;
    localStorage.setItem("likes", JSON.stringify(likes2));
    this.setState({likes: likes2});
    console.log(this.state.likes)
  }
  handleSubmitCheck=(key)=>{
    this.setState({checkHeroe: key});
    this.setState({checkcard: true});
  }
  regresar = () => {
      this.setState({checkcard: false});
  }

  render() {

    const styleb = {
      height: '10vh', /* Magic here */
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };


    const home = {
      color: 'white',
      padding: '10px',
      backgroundColor: '#e2124c', /* Color de ChefCompany */
      height: '10vh', /* Magic here */
      display: 'flex',
      justifyContent: 'left',
      textAlign: 'left'
    };

    const  paper = {
        textAlign: 'center',
        color: 'secondary',
      }
    const body = {
      //backgroundColor: '#e2124c'
    };

    return (
      <div className="App" style={body}>
            <CssBaseline />
            <div style={home}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
              <strong>Prueba Gerardo Ramos Vargas: SUPER HEROES</strong>
              </Grid>
            </Grid>
            {this.state.checkcard?<div onClick={this.regresar}><strong>Regresar</strong></div>:null}
            </div>
                 
                      {this.state.checkcard?
                           <div>
                            {!this.state.isloading?
                            <Card {...this.state} handleSubmitlike= {this.handleSubmitlike} handleSubmitNotlike= {this.handleSubmitNotlike}/>
                           :null}
                            </div>
                      :
                      <div>
                        {!this.state.isloading?
                      <Pagina {...this.state} handleSubmitCheck={this.handleSubmitCheck} handleSubmitlike= {this.handleSubmitlike} handleSubmitNotlike= {this.handleSubmitNotlike}/>
                      :
                      <div>
                      <LinearProgress />
                      <LinearProgress color="secondary" />
                      </div>
                      }
                      <Container maxWidth="sm" style={styleb}>
                        <br></br>
                      {!this.state.isloading ?
                      <Paginacion  {...this.state} paginateValue= {this.paginateValue} paginatePrevValue= {this.paginatePrevValue} paginateNxtValue= {this.paginateNxtValue}/>
                      :
                      <div>
                      <LinearProgress color="secondary" />
                      </div>
                      }
                      </Container>
                      </div>
                      }
              
           
            
      </div>
    );
  }
}

export default App;
