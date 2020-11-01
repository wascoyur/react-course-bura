import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

   buttons = [
              { name:'all', label: 'All', active:false },
              { name:'active', label: 'Active', active:false },
              { name:'done', label: 'Done', active:false }

  ]
  render(){
    const {filter, onChangeFilter } = this.props
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info':'btn-outline-secondary';
        return <button type="button"
                className={`btn ${clazz}`}
                key= { name }
                onClick = {() => onChangeFilter(name)}
                >{ label }</button>
    })

    return(
      <div className="btn-group">
        { buttons }
      </div>
    )
  }
}
