import * as React from "react";
import { Page,  Button } from "tabler-react";
class cards extends React.Component {
    constructor() {
        super();

    }

    
    render() {
        const styleb = {
            //backgroundColor: '#e2124c', /* Color de ChefCompany */
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px'
          };
          
        return (
            <div>    
                <div>                  
                    <Button.List style={styleb}>
                        <Button
                      disabled={this.props.page === 0}
                      onClick={this.props.page > 1?() => this.props.paginatePrevValue(this.props.page - 1):null}
                            outline
                            color="primary"
                        >
                            Anterior
                      </Button>

                        {this.props.array.map((value, index) => {
                            return (
                                <Button 
                                    onClick={() => this.props.paginateValue(value)}
                                    color={
                                        this.props.page === value
                                            ? "primary"
                                            : "secondary"
                                    }
                                >
                                    {value}
                                </Button>
                            );
                        })}

                        <Button
                            onClick={this.props.page < this.props.array.length?() => this.props.paginateNxtValue(this.props.page + 1):null}
                            outline
                            color="secondary"
                        >
                            Siguiente
                      </Button>
                    </Button.List>
                </div>
            </div>

        )
    }
}

export default cards;