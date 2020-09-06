import React, { Component } from 'react'


export default class CatInfo extends Component {
    render() {
        
        const { all } = this.props.name
        return (
            <div>
                {all.map(ele=>(
                    <div className="flex">
                        <p>{ele.name}</p>
                        <span>{ele.qty}</span>
                    </div>
                ))}
            </div>
        )
    }
}
