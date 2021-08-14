import React from 'react';
import { images } from '../../../helpers/getImages';
import { AboutUs } from '../AboutUs';

export const BlogScreen = () => {
    return (
        <>
        <div className="public__blog-header">
            <div className="public__container">
                <section className="public__blog-contenido-header">
                    <section className="public__blog-textos-header">
                        <h1 className="title">Blog</h1>
                    </section>
                    <img src={images(`./blog.svg`).default} alt=""/>
                </section>
            </div>
        </div>
        <AboutUs/>
        </>
    )
}
