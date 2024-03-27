import {Component} from 'react' 

import PriceCard from '../PriceCard'

import './index.css'

import {
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Legend,
    Tooltip,
    LineChart,
  } from "recharts"
  

class HomePage extends Component{
    state={GraphData:[],PriceDetails:[]}

    componentDidMount=()=>{
        this.getData()
        this.getPriceDetails()
    }

    getData=async()=>{
        const url='https://datausa.io/api/data?drilldowns=Nation&measures=Population'
        const options={
            method:"GET"
        }
        const response=await fetch(url,options) 
        const data=await response.json()
        const updatedData=data.data
        this.setState({GraphData:updatedData})
    }

    getPriceDetails=async()=>{
        const url='https://api.coindesk.com/v1/bpi/currentprice.json'
        const options={
            method:'GET'
        }
        const response=await fetch(url,options) 
        const data=await response.json()
       const  updatedData1=data.bpi.USD
       const  updatedData2=data.bpi.GBP
       const  updatedData3=data.bpi.EUR 
       const value=[updatedData1,updatedData2,updatedData3]
       console.log(value)
       this.setState({PriceDetails:value})
    }

    DataFormatter = (number) => {
        if (number > 100000) {
          return `${(number / 100000).toString()}M`
        }
        return number.toString()
      }

    render()
    {
        const{GraphData,PriceDetails}=this.state
        return (
            <div className='HomeContainer'>
                <LineChart width={1000} height={500} data={GraphData}
                    margin={{ top: 25, right: 30, left: 30, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Year"  domain={['dataMin', 'dataMax']}/>
                    <YAxis dataKey="Population" domain={['auto', 'auto']}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Year" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Population" stroke="#82ca9d" />
                </LineChart>
                <h1 className='PricesHeading'>Prices</h1>
                <ul className='UnorderedList'>
                    {PriceDetails.map((each=><PriceCard item={each} key={each.code}/>))}
                </ul>
            </div>
        )
    }
}
export default HomePage