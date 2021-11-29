import React from 'react';
import GBListItem from './GBListItem';

export default function({lists}) {
    return (
          <ul className="Guestbook__List">
              {lists.map((list) => <GBListItem
                                        title={list.title}
                                        description={list.description}
                                        /> ) }
          </ul>
    )
}