import React from 'react';
import FormQuestion from './FormQuestion';
import OpenQuestion from './OpenQuestion';

const DomainItem = ({ items, handleChange }) => {
    if (items[0].open) {
        return (
            <div className="subfield">
                <OpenQuestion items={items} handleChange={handleChange} />
            </div>
        )
    }
    return (
        <div className="subfield">
            {items.map(item => (
                <FormQuestion question={item} key={item.id} handleChange={handleChange} />
            ))}
        </div>
    )
}

export default DomainItem;