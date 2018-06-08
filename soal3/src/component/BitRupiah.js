import React, { Component } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

class BitRupiah extends Component 
{
  state = 
  {
	input:null,
	repos:null,
	seriesName:null,
  }
    
  onSeriesInputChange = e =>{
                                this.setState({ seriesName:e.target.value});
                                axios.get(`https://blockchain.info/tobtc?currency=USD&value=${e.target.value}`)
                                .then((ambilData) => {  
                                console.log(ambilData);
                                this.setState({
                                                hasil: ambilData.data,
                                                })
                                
                                })
                            }
    
    render() 
    {

        var bagian = this.state.hasil / {seriesName}

        const{seriesName} = this.state;

        return (
                    <div>
                        <NavBar/>
                            <center>
                            <br/>
                            <h3>Konversi Bitcoin ke Rupiah </h3>
                                <h5>Kurs 1 USD = 14.000 IDR</h5>
                            
                            <br/>
                            <input value = {seriesName} type="number" onInput={this.onSeriesInputChange} style={{width:'400px'}}/>
                            <br/>
                            { this.state.seriesName ? <h4>Rp {seriesName} &nbsp; BTC {bagian}</h4> :
                            
                            <div>
                                <br/>
                                <h4>Silakan input nominal Bitcoin</h4>
                            </div>
                            }

                            </center>
                    </div>
                );
   	}
}
    

export default BitRupiah;
