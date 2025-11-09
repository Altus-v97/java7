import React from 'react';
import IconoNotif from ...IconoNot

function Panel ({ notificationMessage }) {
return( 
<div style={{ margin: '15px', padding: '15px, border: '1px solid black'}}>
<h2> Panel Component INT </h2>

<IconoNotif message={notificationMessage} />

<p> this component doesnt use message. </p>

)
</div>
);
}