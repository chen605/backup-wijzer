import React from 'react';
import FormQuestion from './FormQuestion'

const DomainItem = ({ items }) => {

    return (
        <div className="subfield">
            {items.map(item => (
                <FormQuestion question={item} key={item.id} />
            ))}
        </div>
    )
}

export default DomainItem;