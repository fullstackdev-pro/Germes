import React from 'react';
import Header320px from './Header320px';
import Header480px from './Header480px';
import Header768px from './Header768px';
import Header1000px from './Header1000px';

function HeaderPage(props) {
    return (
        <section>
            <Header320px/>
            <Header480px/>
            <Header768px/>
            <Header1000px/>
        </section>
    );
}

export default HeaderPage;