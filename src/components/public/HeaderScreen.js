import React from 'react';
import { images } from '../../helpers/getImages';

export const HeaderScreen = () => {
    return (
        <header>
            <div className="public__container">
                <section className="public__contenido-header">
                    <section className="public__textos-header">
                        <h1 className="public__title">Our creativity is your success</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia similique earum,
                            molestias quia inventore?</p>
                        <a href="https://www.google.com">Lear more</a>
                    </section>
                    <img src={images(`./soundwhite.svg`).default} alt=""/>
                </section>
            </div>
        </header>
    )
}
