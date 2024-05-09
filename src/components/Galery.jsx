import React from 'react';
import ItemImg from './ItemImg';


export default function Galery(){
    return(
        <div className="one-column content">
            <div className="inner-container" id='galeria'>
                <ItemImg src="gato1.jfif" label="gato"/>
                <ItemImg src="gato2.jfif" label="gato"/>
                <ItemImg src="gato3.jpeg" label="gato"/>
                <ItemImg src="gato4.jfif" label="gato"/>
                <ItemImg src="gato5.jfif" label="gato"/>
                <ItemImg src="gato6.jfif" label="gato"/>
                <ItemImg src="gato7.jfif" label="gato"/>
                <ItemImg src="gato8.jfif" label="gato"/>
                <ItemImg src="gato9.jfif" label="gato"/>
                <ItemImg src="gato10.jfif" label="gato"/>
                <ItemImg src="gato11.jfif" label="gato"/>
                <ItemImg src="gato12.jfif" label="gato"/>
            </div>
        </div>
    )
}