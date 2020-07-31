import React from 'react';
import Menu from '../../components/Menu';
import dadosInciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
    return (
        <div style={{ backgroud: "#141414" }}>
            <Menu/>
            <BannerMain
                videoTitle={dadosInciais.categorias[0].videos[0].titulo}
                url={dadosInciais.categorias[0].videos[0].url}
                videoDescription= {"o que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}/>

            <Carousel
                ignoreFirstVideo 
                category={dadosInciais.categorias[0]}
            />

            <Carousel
                category={dadosInciais.categorias[1]}
            />
             <Carousel
                category={dadosInciais.categorias[2]}
            />
             <Carousel
                category={dadosInciais.categorias[3]}
            />
             <Carousel
                category={dadosInciais.categorias[4]}
            />

            <Carousel
                category={dadosInciais.categorias[5]}
            />
            <Footer/>
        </div>
    )

}

export default Home;