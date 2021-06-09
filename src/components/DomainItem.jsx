import React from 'react';
import FormQuestion from './FormQuestion';
import OpenQuestion from './OpenQuestion';

const DomainItem = ({ items }) => {
    if (items[0].open) {
        return (
            <div className="subfield">
                <OpenQuestion items={items} />
            </div>
        )
    }
    return (
        <div className="subfield">
            {items.map(item => (
                <FormQuestion question={item} key={item.id} />
            ))}
        </div>
    )
}

export default DomainItem;